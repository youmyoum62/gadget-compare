/**
 * Insert new researched products into Supabase.
 * Usage: powershell -ExecutionPolicy Bypass -Command "npx tsx src/scripts/insert-research-products.ts"
 */
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

// New products from 2026-02-12 research
interface NewProduct {
    asin: string;
    categorySlug: string;
    title: string;
    slug: string;
    brand: string;
    manufacturer: string;
    price_amount: number;
    list_price_amount: number;
    detail_page_url: string;
    affiliate_url: string;
    amazon_rating: number;
    amazon_review_count: number;
    availability: string;
    features: string[];
    specs: Record<string, string>;
    is_featured: boolean;
    display_order: number;
    ai_summary: string;
    ai_pros: string[];
    ai_cons: string[];
    ai_verdict: string;
}

const PRODUCTS: NewProduct[] = [
    // === ノイズキャンセリングヘッドホン ===
    {
        asin: "B0F3PT1VBL",
        categorySlug: "noise-cancelling-headphones",
        title: "ソニー WH-1000XM6 ワイヤレスノイズキャンセリングヘッドホン",
        slug: "sony-wh-1000xm6",
        brand: "Sony", manufacturer: "ソニー",
        price_amount: 49500, list_price_amount: 59400,
        detail_page_url: "https://www.amazon.co.jp/dp/B0F3PT1VBL",
        affiliate_url: "https://www.amazon.co.jp/dp/B0F3PT1VBL?tag=lowpricesearc-22",
        amazon_rating: 4.7, amazon_review_count: 1200, availability: "在庫あり",
        features: ["新開発プロセッサー「QN3」搭載", "業界最高クラスのノイズキャンセリング", "LDAC/LC3plus対応", "最大30時間バッテリー", "マルチポイント接続", "約254g軽量設計"],
        specs: { "ドライバー": "30mm新設計", "ノイキャン": "QN3プロセッサー", "コーデック": "LDAC/LC3plus/AAC/SBC", "バッテリー": "最大30時間", "重量": "約254g", "Bluetooth": "5.3" },
        is_featured: true, display_order: 0,
        ai_summary: "ソニーの最新フラッグシップ。新開発QN3プロセッサにより業界最高クラスのNC性能を実現。",
        ai_pros: ["QN3プロセッサによる最高NCレベル", "LC3plus対応で次世代コーデック", "254gの軽量設計", "マルチポイント対応"],
        ai_cons: ["約5万円と高価", "折りたたみ不可", "発売直後でレビュー数少なめ"],
        ai_verdict: "2026年のNCフラッグシップ。予算があるなら迷わずこれ。",
    },
    {
        asin: "B0C9Y334T9",
        categorySlug: "noise-cancelling-headphones",
        title: "EarFun Tune Pro ワイヤレスノイズキャンセリングヘッドホン LDAC対応",
        slug: "earfun-tune-pro",
        brand: "EarFun", manufacturer: "EarFun",
        price_amount: 6980, list_price_amount: 8980,
        detail_page_url: "https://www.amazon.co.jp/dp/B0C9Y334T9",
        affiliate_url: "https://www.amazon.co.jp/dp/B0C9Y334T9?tag=lowpricesearc-22",
        amazon_rating: 4.3, amazon_review_count: 2800, availability: "在庫あり",
        features: ["-45dBハイブリッドANC", "LDAC対応", "最大55時間バッテリー", "40mmドライバー", "マルチポイント対応", "5分充電で4時間再生"],
        specs: { "ドライバー": "40mm", "ノイキャン": "-45dB ハイブリッドANC", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大55時間", "重量": "約268g", "Bluetooth": "5.3" },
        is_featured: true, display_order: 14,
        ai_summary: "1万円以下の「怪物」コスパ最強ANCヘッドホン。",
        ai_pros: ["7000円以下で-45dB ANC+LDAC", "55時間バッテリー", "急速充電対応", "BT 5.3"],
        ai_cons: ["ブランド知名度が低い", "ビルドクオリティは価格相応", "アプリ日本語対応不完全"],
        ai_verdict: "1万円以下NCヘッドホンの最強コスパ機。",
    },
    {
        asin: "B0C63J328P",
        categorySlug: "noise-cancelling-headphones",
        title: "オーディオテクニカ ATH-S300BT ワイヤレスノイズキャンセリングヘッドホン",
        slug: "audio-technica-ath-s300bt",
        brand: "Audio-Technica", manufacturer: "オーディオテクニカ",
        price_amount: 13800, list_price_amount: 17600,
        detail_page_url: "https://www.amazon.co.jp/dp/B0C63J328P",
        affiliate_url: "https://www.amazon.co.jp/dp/B0C63J328P?tag=lowpricesearc-22",
        amazon_rating: 4.4, amazon_review_count: 1500, availability: "在庫あり",
        features: ["最大60時間ロングバッテリー", "高精度デジタルハイブリッドANC", "LDAC対応", "40mmドライバー", "マルチポイント対応", "自然な静寂感設計"],
        specs: { "ドライバー": "40mm", "ノイキャン": "デジタルハイブリッドANC", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大60時間", "重量": "約250g", "Bluetooth": "5.2" },
        is_featured: false, display_order: 15,
        ai_summary: "最大60時間バッテリーと高精度ANCが特徴のオーテク中価格帯モデル。",
        ai_pros: ["60時間の圧倒的バッテリー", "LDAC対応の高音質", "自然なANC", "国産ブランド信頼性"],
        ai_cons: ["ハイエンドほどのNC効果ではない", "デザインがやや地味", "アプリ機能限定的"],
        ai_verdict: "バッテリー持ち最重視なら最有力候補。出張が多い人に。",
    },
    // === ノートPC・ミニPC ===
    {
        asin: "B0D1CG8Z9B",
        categorySlug: "notebook-mini-pc",
        title: "GMKtec NucBox G5 ミニPC Intel N97 12GB/512GB Windows 11 Pro",
        slug: "gmktec-nucbox-g5-512gb",
        brand: "GMKtec", manufacturer: "GMKtec",
        price_amount: 22980, list_price_amount: 27980,
        detail_page_url: "https://www.amazon.co.jp/dp/B0D1CG8Z9B",
        affiliate_url: "https://www.amazon.co.jp/dp/B0D1CG8Z9B?tag=lowpricesearc-22",
        amazon_rating: 4.3, amazon_review_count: 800, availability: "在庫あり",
        features: ["Intel N97 (4C/4T)", "12GB LPDDR5", "512GB SSD", "4K@60Hz 3画面出力", "WiFi 5/BT 4.2", "Win 11 Pro"],
        specs: { "CPU": "Intel N97", "RAM": "12GB LPDDR5", "ストレージ": "512GB M.2 SSD", "映像出力": "HDMI×2+DP (4K)", "OS": "Windows 11 Pro" },
        is_featured: true, display_order: 1,
        ai_summary: "2万円台前半のコスパ最強エントリーミニPC。事務作業・動画視聴に十分。",
        ai_pros: ["2万円台の圧倒的コスパ", "4K 3画面出力対応", "Win 11 Pro搭載", "超コンパクト"],
        ai_cons: ["N97はライトユースまで", "WiFi 5と無線が古い", "RAM増設不可"],
        ai_verdict: "ミニPC入門に最適。普段使い・サブPCとして文句なし。",
    },
    {
        asin: "B0CCX18S7H",
        categorySlug: "notebook-mini-pc",
        title: "Beelink EQR6 ミニPC AMD Ryzen 5 6600H 16GB DDR5 500GB NVMe",
        slug: "beelink-eqr6-ryzen5",
        brand: "Beelink", manufacturer: "Beelink",
        price_amount: 45800, list_price_amount: 55800,
        detail_page_url: "https://www.amazon.co.jp/dp/B0CCX18S7H",
        affiliate_url: "https://www.amazon.co.jp/dp/B0CCX18S7H?tag=lowpricesearc-22",
        amazon_rating: 4.4, amazon_review_count: 600, availability: "在庫あり",
        features: ["Ryzen 5 6600H (6C/12T)", "16GB DDR5", "500GB NVMe PCIe 4.0", "デュアルHDMI+USB-C", "WiFi 6/BT 5.2", "デュアル1Gbps LAN"],
        specs: { "CPU": "Ryzen 5 6600H", "GPU": "Radeon 660M", "RAM": "16GB DDR5", "ストレージ": "500GB NVMe", "LAN": "1Gbps×2", "電源": "内蔵85W" },
        is_featured: true, display_order: 2,
        ai_summary: "Ryzen 5搭載のミドルレンジミニPC。DDR5+NVMe+内蔵電源で快適動作。",
        ai_pros: ["Ryzen 5でマルチタスク快適", "DDR5+NVMe高速構成", "内蔵電源", "デュアルLAN"],
        ai_cons: ["5万円弱とやや高め", "GPU内蔵のみ", "ファン音が気になる場合あり"],
        ai_verdict: "メイン機として使える万能ミニPC。",
    },
    {
        asin: "B0B51Q9PZ5",
        categorySlug: "notebook-mini-pc",
        title: "Beelink SER5 ミニPC AMD Ryzen 5 5500U 16GB DDR4 500GB NVMe",
        slug: "beelink-ser5-ryzen5",
        brand: "Beelink", manufacturer: "Beelink",
        price_amount: 34800, list_price_amount: 42800,
        detail_page_url: "https://www.amazon.co.jp/dp/B0B51Q9PZ5",
        affiliate_url: "https://www.amazon.co.jp/dp/B0B51Q9PZ5?tag=lowpricesearc-22",
        amazon_rating: 4.3, amazon_review_count: 2500, availability: "在庫あり",
        features: ["Ryzen 5 5500U (6C/12T)", "16GB DDR4", "500GB NVMe", "トリプル4K出力", "WiFi 6E/BT 5.2", "2.5インチSATA拡張"],
        specs: { "CPU": "Ryzen 5 5500U", "GPU": "Radeon Vega 7", "RAM": "16GB DDR4", "ストレージ": "500GB NVMe + 2.5\" SATA", "無線": "WiFi 6E/BT 5.2" },
        is_featured: false, display_order: 3,
        ai_summary: "Beelinkのベストセラー。レビュー2500件超の実績が安心感。",
        ai_pros: ["3.5万円前後の高コスパ", "レビュー2500件超", "WiFi 6E", "ストレージ拡張容易"],
        ai_cons: ["DDR4世代", "最新CPUではない", "USB4非対応"],
        ai_verdict: "ミニPC入門の定番。迷ったらこれ。",
    },
    {
        asin: "B0CPB5N1V2",
        categorySlug: "notebook-mini-pc",
        title: "Minisforum UM780XTX ミニPC AMD Ryzen 7 7840HS 32GB DDR5 1TB NVMe",
        slug: "minisforum-um780xtx",
        brand: "Minisforum", manufacturer: "Minisforum",
        price_amount: 72800, list_price_amount: 89800,
        detail_page_url: "https://www.amazon.co.jp/dp/B0CPB5N1V2",
        affiliate_url: "https://www.amazon.co.jp/dp/B0CPB5N1V2?tag=lowpricesearc-22",
        amazon_rating: 4.5, amazon_review_count: 450, availability: "在庫あり",
        features: ["Ryzen 7 7840HS (8C/16T)", "Radeon 780M GPU", "32GB DDR5", "1TB NVMe ×2", "USB4+OcuLink", "デュアル2.5Gbps LAN"],
        specs: { "CPU": "Ryzen 7 7840HS", "GPU": "Radeon 780M (12CU)", "RAM": "32GB DDR5 (最大96GB)", "ストレージ": "1TB NVMe ×2", "拡張": "OcuLink (eGPU)" },
        is_featured: true, display_order: 4,
        ai_summary: "ハイエンドミニPCの決定版。OcuLinkでeGPU接続も可能。",
        ai_pros: ["Ryzen 7+Radeon 780M高性能", "OcuLink eGPU対応", "USB4×2", "DDR5最大96GB"],
        ai_cons: ["7万円超", "ファン音が負荷時大きめ", "本体やや大きめ"],
        ai_verdict: "妥協しないメインPC+ゲーミング対応の最強ミニPC。",
    },
    {
        asin: "B0BL72W7X3",
        categorySlug: "notebook-mini-pc",
        title: "NiPoGi AM06 Pro ミニPC AMD Ryzen 5 5500U 16GB DDR4 512GB SSD",
        slug: "nipogi-am06-pro",
        brand: "NiPoGi", manufacturer: "NiPoGi",
        price_amount: 29800, list_price_amount: 36800,
        detail_page_url: "https://www.amazon.co.jp/dp/B0BL72W7X3",
        affiliate_url: "https://www.amazon.co.jp/dp/B0BL72W7X3?tag=lowpricesearc-22",
        amazon_rating: 4.2, amazon_review_count: 1200, availability: "在庫あり",
        features: ["Ryzen 5 5500U (6C/12T)", "16GB DDR4", "512GB NVMe", "デュアル4K出力", "WiFi 6/BT 5.2", "2.5インチSATA拡張"],
        specs: { "CPU": "Ryzen 5 5500U", "GPU": "Radeon Vega 7", "RAM": "16GB DDR4", "ストレージ": "512GB NVMe + 2.5\" SATA" },
        is_featured: false, display_order: 5,
        ai_summary: "3万円を切る価格のコスパ特化Ryzen 5モデル。",
        ai_pros: ["3万円以下の最安クラス", "SER5同等スペックで安い", "ストレージ拡張容易", "クーポン割引多い"],
        ai_cons: ["ブランド知名度低い", "DDR4世代", "USB4非対応"],
        ai_verdict: "とにかく安くRyzen 5ミニPCが欲しい人に。",
    },
    {
        asin: "B09Q8Z6VB7",
        categorySlug: "notebook-mini-pc",
        title: "GMKtec NucBox G5 ミニPC Intel N97 12GB/256GB Windows 11 Pro",
        slug: "gmktec-nucbox-g5-256gb",
        brand: "GMKtec", manufacturer: "GMKtec",
        price_amount: 19800, list_price_amount: 24800,
        detail_page_url: "https://www.amazon.co.jp/dp/B09Q8Z6VB7",
        affiliate_url: "https://www.amazon.co.jp/dp/B09Q8Z6VB7?tag=lowpricesearc-22",
        amazon_rating: 4.2, amazon_review_count: 1500, availability: "在庫あり",
        features: ["Intel N97 (4C/4T)", "12GB LPDDR5", "256GB SSD", "4K@60Hz 3画面出力", "WiFi 5/BT 4.2", "Win 11 Pro"],
        specs: { "CPU": "Intel N97", "RAM": "12GB LPDDR5", "ストレージ": "256GB M.2 SSD", "映像出力": "HDMI×2+DP (4K)", "OS": "Windows 11 Pro" },
        is_featured: false, display_order: 6,
        ai_summary: "2万円以下の最安エントリーミニPC。ブラウジング・文書作成中心ならこれ。",
        ai_pros: ["2万円以下の最安クラス", "Win 11 Pro搭載", "4K 3画面出力", "超コンパクト"],
        ai_cons: ["256GBストレージ少なめ", "WiFi 5と古い", "ゲーム・動画編集は力不足"],
        ai_verdict: "ミニPCの最低価格帯。「安くデスクトップが欲しい」人に。",
    },
    // === スマートホーム ===
    {
        asin: "B0BLS56CT4",
        categorySlug: "smart-home-device",
        title: "Echo Show 8 (第3世代) HDスマートディスプレイ with Alexa",
        slug: "echo-show-8-3rd-gen",
        brand: "Amazon", manufacturer: "Amazon",
        price_amount: 14980, list_price_amount: 17980,
        detail_page_url: "https://www.amazon.co.jp/dp/B0BLS56CT4",
        affiliate_url: "https://www.amazon.co.jp/dp/B0BLS56CT4?tag=lowpricesearc-22",
        amazon_rating: 4.5, amazon_review_count: 8500, availability: "在庫あり",
        features: ["8インチHDタッチスクリーン", "13MPカメラ", "Alexa音声コントロール", "スマートホームハブ内蔵", "ビデオ通話対応", "Prime Video/YouTube再生"],
        specs: { "ディスプレイ": "8インチHD", "カメラ": "13MP", "スマートホーム": "Zigbee/Matter/Thread対応", "無線": "WiFi 6/BT 5.2" },
        is_featured: true, display_order: 1,
        ai_summary: "Amazonのスマートディスプレイ定番。Matter/Thread対応のハブ機能を内蔵。",
        ai_pros: ["スマートホームハブ内蔵", "13MP高画質カメラ", "Alexaスキルで拡張", "動画視聴可能"],
        ai_cons: ["Amazonエコシステム依存", "プライバシー懸念", "スピーカー音質は専用機に劣る"],
        ai_verdict: "スマートホーム入門に最適な一台。声だけで家電操作する便利さは手放せない。",
    },
];

async function main() {
    console.log("🚀 Inserting research products into Supabase...\n");

    // Test connection
    const { count, error: testErr } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true });

    if (testErr) {
        console.error("❌ Connection failed:", testErr.message);
        process.exit(1);
    }
    console.log(`✅ Connected! Current product count: ${count}\n`);

    // Get category IDs
    const { data: categories, error: catErr } = await supabase
        .from("categories")
        .select("id, slug");

    if (catErr || !categories) {
        console.error("❌ Failed to fetch categories:", catErr?.message);
        process.exit(1);
    }

    const catMap = new Map(categories.map((c: any) => [c.slug, c.id]));
    console.log(`📂 Found ${catMap.size} categories\n`);

    let success = 0;
    let failed = 0;
    let skipped = 0;

    for (const p of PRODUCTS) {
        const categoryId = catMap.get(p.categorySlug);
        if (!categoryId) {
            console.log(`⚠️ [SKIP] ${p.title} — category '${p.categorySlug}' not found`);
            skipped++;
            continue;
        }

        // Check if already exists
        const { data: existing } = await supabase
            .from("products")
            .select("asin")
            .eq("asin", p.asin)
            .single();

        if (existing) {
            console.log(`⏭️ [SKIP] ${p.asin} — already exists`);
            skipped++;
            continue;
        }

        const { error } = await supabase.from("products").insert({
            asin: p.asin,
            category_id: categoryId,
            title: p.title,
            slug: p.slug,
            brand: p.brand,
            manufacturer: p.manufacturer,
            price_amount: p.price_amount,
            price_currency: "JPY",
            list_price_amount: p.list_price_amount,
            price_updated_at: new Date().toISOString(),
            detail_page_url: p.detail_page_url,
            affiliate_url: p.affiliate_url,
            image_url_large: `https://m.media-amazon.com/images/I/placeholder._AC_SL500_.jpg`,
            image_url_medium: `https://m.media-amazon.com/images/I/placeholder._AC_SL300_.jpg`,
            image_url_small: `https://m.media-amazon.com/images/I/placeholder._AC_SL160_.jpg`,
            amazon_rating: p.amazon_rating,
            amazon_review_count: p.amazon_review_count,
            availability: p.availability,
            features: p.features,
            specs: p.specs,
            is_featured: p.is_featured,
            is_active: true,
            display_order: p.display_order,
            ai_summary: p.ai_summary,
            ai_pros: p.ai_pros,
            ai_cons: p.ai_cons,
            ai_verdict: p.ai_verdict,
            ai_content_generated_at: new Date().toISOString(),
        });

        if (error) {
            console.log(`❌ [FAIL] ${p.asin} (${p.title}): ${error.message}`);
            failed++;
        } else {
            console.log(`✅ [OK] ${p.asin} — ${p.title}`);
            success++;
        }
    }

    // Final count
    const { count: finalCount } = await supabase
        .from("products")
        .select("*", { count: "exact", head: true });

    console.log(`\n========================================`);
    console.log(`✅ Success: ${success}`);
    console.log(`❌ Failed:  ${failed}`);
    console.log(`⏭️ Skipped: ${skipped}`);
    console.log(`📊 Product count: ${count} → ${finalCount}`);
    console.log(`========================================`);
}

main().catch(console.error);
