import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

// Read .env.local manually
const envPath = path.resolve(__dirname, "../../.env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const env: Record<string, string> = {};
for (const line of envContent.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i === -1) continue;
    env[t.substring(0, i).trim()] = t.substring(i + 1).trim();
}

const supabase = createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLE_KEY
);

const CATEGORIES_TO_INSERT = [
    // Missing ones from 008 migration
    {
        name: 'ノイズキャンセリングヘッドホン',
        slug: 'noise-cancelling-headphones',
        description: '没入感のある音楽体験を実現するアクティブノイズキャンセリング搭載ヘッドホン。通勤・通学からテレワークまで幅広く活躍。',
        display_order: 6,
        is_active: true
    },
    {
        name: 'ワイヤレス充電器',
        slug: 'wireless-charger',
        description: 'ケーブル不要で置くだけ充電。Qi/Qi2/MagSafe対応のワイヤレス充電器を厳選比較。',
        display_order: 7,
        is_active: true
    },
    {
        name: 'ノートPC・ミニPC',
        slug: 'notebook-mini-pc',
        description: '持ち運びに便利なノートPCから省スペースなミニPCまで。用途別におすすめモデルを比較。',
        display_order: 8,
        is_active: true
    },
    {
        name: 'スマートホームデバイス',
        slug: 'smart-home-device',
        description: 'スマートスピーカー・スマートディスプレイ・スマートリモコンなど、暮らしを便利にするIoTデバイスを比較。',
        display_order: 9,
        is_active: true
    },
    // New ones from research report
    {
        name: 'ロボット掃除機',
        slug: 'robot-vacuum',
        description: 'ロボット掃除機の比較（吸引力・水拭き・自動収集）',
        display_order: 10,
        is_active: true
    },
    {
        name: 'ドライブレコーダー',
        slug: 'dash-cam',
        description: 'ドライブレコーダーの比較（前後カメラ・360度・駐車監視）',
        display_order: 11,
        is_active: true
    },
    {
        name: 'ポータブルスピーカー',
        slug: 'portable-speaker',
        description: 'Bluetooth対応ポータブルスピーカーの比較（防水・音質・バッテリー）',
        display_order: 12,
        is_active: true
    }
];

async function main() {
    console.log("🚀 Inserting categories...\n");

    const { data: existing } = await supabase.from("categories").select("slug");
    const existingSlugs = new Set(existing?.map((c: any) => c.slug) || []);

    let success = 0;
    let skipped = 0;

    for (const cat of CATEGORIES_TO_INSERT) {
        if (existingSlugs.has(cat.slug)) {
            console.log(`⏭️ [SKIP] ${cat.slug} — already exists`);
            skipped++;
            continue;
        }

        const { error } = await supabase.from("categories").insert(cat);
        if (error) {
            console.error(`❌ [FAIL] ${cat.slug}: ${error.message}`);
        } else {
            console.log(`✅ [OK] ${cat.slug}`);
            success++;
        }
    }

    console.log(`\nResults: ${success} created, ${skipped} skipped.`);
}

main().catch(console.error);
