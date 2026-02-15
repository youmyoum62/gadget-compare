---
name: gadget-research
description: ガジェット系の売れ筋商品とカテゴリをAmazon.co.jpで徹底的にリサーチし、DB投入用のASINリスト・SQLを出力する
---

# ガジェット売れ筋リサーチスキル

## 概要

このスキルは、Amazon.co.jp を対象に **ガジェット系の売れ筋商品・注目カテゴリ** を徹底的にリサーチし、
`gadget-compare` プロジェクトのDBに投入可能な形式でレポートを出力します。

## 前提条件

- `gadget-compare` プロジェクトのワークスペース（`f:\Affiliates\gadget-compare`）にアクセスできること
- `search_web` ツールが利用可能であること
- `read_url_content` ツールが利用可能であること

## 対象カテゴリ

以下のカテゴリを基本として調査する。追加カテゴリが見つかった場合は提案に含める。

### 既存カテゴリ（DBに登録済み）
| カテゴリ名 | slug | DB状態 |
|---|---|---|
| ワイヤレスイヤホン | wireless-earbuds | 登録済み |
| モバイルバッテリー | mobile-battery | 登録済み |
| スマートウォッチ | smartwatch | 登録済み |
| USB充電器 | usb-charger | 登録済み |
| タブレット | tablet | 登録済み |
| ノイズキャンセリングヘッドホン | nc-headphones | 登録済み |
| ワイヤレス充電器 | wireless-charger | 登録済み |
| ノートPC・ミニPC | notebook-minipc | 登録済み |
| スマートホームデバイス | smart-home | 登録済み |

### 追加候補カテゴリ（リサーチ時に検討すること）
- **ポータブルスピーカー** (portable-speaker) — Bluetooth対応、防水、アウトドア用途
- **電動歯ブラシ** (electric-toothbrush) — ガジェット×日用品、高単価・リピート需要
- **ゲーミングマウス・キーボード** (gaming-peripherals) — ゲーミング市場の拡大
- **ドライブレコーダー** (dash-cam) — 安定した需要、比較ニーズが高い
- **ロボット掃除機** (robot-vacuum) — スマートホーム連携、高単価

---

## 実行手順

### フェーズ1: Amazon売れ筋ランキングの調査

各カテゴリについて、以下の情報源からランキング・トレンドを調査する。

#### 1-1. Amazonベストセラーページの調査

`search_web` ツールで以下のクエリを実行する：

```
対象クエリ例（各カテゴリごとに実行）:
- "Amazon.co.jp ベストセラー ワイヤレスイヤホン 2026"
- "Amazon.co.jp 売れ筋ランキング ノイズキャンセリングヘッドホン"
- "Amazon.co.jp ベストセラー ワイヤレス充電器"
- "Amazon.co.jp 売れ筋 ノートPC ミニPC"
- "Amazon.co.jp 売れ筋 スマートホームデバイス"
```

#### 1-2. 関連キーワードの追加調査

各カテゴリで、以下の派生キーワードでも検索する：

```
- "[カテゴリ名] おすすめ 2026 Amazon"
- "[カテゴリ名] コスパ最強 Amazon"
- "[カテゴリ名] 人気ランキング"
```

#### 1-3. 情報の抽出

各検索結果から以下を抽出する：
- **商品名**
- **ASIN**（Amazon URLの `/dp/BXXXXXXXXX` 部分）
- **価格帯**（概算）
- **レビュー数・評価**
- **ブランド名**
- **主な特徴**（1〜3行）

> [!IMPORTANT]
> ASINの取得が最も重要。商品ページのURL（`amazon.co.jp/dp/B0XXXXXXXXX`）から抽出する。
> ASINが不明な場合は `search_web` で「[商品名] Amazon ASIN」と検索する。

### フェーズ2: カテゴリの評価と選定

#### 2-1. 既存DBとの照合

`f:\Affiliates\gadget-compare\supabase\migrations\` 内のSQLファイルを確認し、
すでに登録済みのカテゴリ・ASINを把握する。

重複ASINは新規リストから除外する。

#### 2-2. 新規カテゴリの提案

追加候補カテゴリについて、以下の基準で評価する：

| 評価基準 | 重み | 説明 |
|---|---|---|
| 検索ボリューム | ★★★ | Amazonでの検索需要の高さ |
| アフィリエイト単価 | ★★★ | 価格×料率で見込める収益 |
| 比較ニーズ | ★★☆ | ユーザーが比較記事を求める度合い |
| 競合の少なさ | ★☆☆ | 既存の比較サイトの密度 |
| 製品更新頻度 | ★☆☆ | 新製品が定期的に出るか |

### フェーズ3: 売れ筋商品のピックアップ

#### 3-1. 各カテゴリから5〜10個を選定

以下の基準で商品を選定する：

- **評価 4.0以上**（レビュー数100件以上が望ましい）
- **価格帯のバランス**（エントリー / ミドル / ハイエンドを混ぜる）
- **ブランドの多様性**（同一ブランドに偏らない）
- **現在販売中**であること

#### 3-2. 商品情報の整理

各商品について以下のフォーマットで情報を整理する：

```
商品名: [正式名称]
ASIN: B0XXXXXXXXX
ブランド: [ブランド名]
価格帯: ¥X,XXX〜¥XX,XXX
評価: ★X.X (XXX件)
主な特徴:
  - [特徴1]
  - [特徴2]
  - [特徴3]
推奨理由: [なぜこの商品を選んだか]
```

### フェーズ4: レポート出力

#### 4-1. リサーチレポートの作成

`resources/research-report-template.md` のテンプレートに従い、
リサーチ結果をMarkdownレポートとして出力する。

出力先: `f:\Affiliates\gadget-compare\docs\research\[YYYY-MM-DD]_gadget_research.md`

#### 4-2. ASIN投入リストの出力

`seed-products.ts` に直接投入可能な TypeScript 配列として出力する。

```typescript
// [カテゴリ名] - YYYY-MM-DD リサーチ結果
const NEW_PRODUCTS: Array<{ asin: string; categorySlug: string }> = [
  { asin: "B0XXXXXXXXX", categorySlug: "wireless-earbuds" },
  { asin: "B0YYYYYYYYY", categorySlug: "wireless-earbuds" },
  // ...
];
```

#### 4-3. 新規カテゴリのSQL出力

新しいカテゴリが提案された場合、`resources/category-seed-template.sql` を参考に
マイグレーションSQLを出力する。

```sql
-- 新規カテゴリ追加
INSERT INTO categories (name, slug, description, display_order, is_active)
VALUES
  ('カテゴリ名', 'slug', '説明文', 10, true)
ON CONFLICT (slug) DO NOTHING;
```

---

## 出力チェックリスト

スキル完了時に以下がすべて揃っていることを確認する：

- [ ] リサーチレポート（Markdown）が出力されている
- [ ] 各カテゴリに5〜10個のASINがリスト化されている
- [ ] ASINの重複チェックが完了している（既存DBと照合済み）
- [ ] 新規カテゴリがある場合、SQLが出力されている
- [ ] ASIN投入用のTypeScript配列が出力されている
- [ ] レポートにリサーチ日時が記載されている

## 注意事項

> [!WARNING]
> - ASINは必ずAmazon.co.jp（日本）のものを使用すること（B0で始まる10桁の英数字）
> - 販売終了品・在庫切れ品は除外すること
> - 価格情報はリサーチ時点の参考値であり、DB投入後にPA-APIで正確な値を取得すること

> [!TIP]
> - リサーチ頻度は月1〜2回が推奨
> - 季節イベント（Prime Day、ブラックフライデー、新生活シーズン等）前に実行すると効果的
> - 前回のリサーチレポートが `docs/research/` にあれば、差分を意識してリサーチすること
