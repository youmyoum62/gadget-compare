# 商品リサーチチーム 起動プロンプト

## 使い方
以下のように指示してチームを起動してください：

```
商品リサーチチームを起動。
カテゴリ: [ワイヤレスイヤホン / モバイルバッテリー / スマートウォッチ / USB充電器 / タブレット]
追加件数: [3〜10件]
条件: [任意。例: 5000円以下、Anker製品のみ、2025年以降発売、など]
```

## チーム構成

3人のteammateを以下の順序で起動してください：

### Step 1: amazon-scout を起動
`.claude/team-prompts/amazon-scout.md` の指示に従い、指定カテゴリの商品候補をリサーチ。
既にサイトに掲載済みの商品（下記ASIN）は除外すること。

**掲載済みASIN:**
B0CBKQZXT7, B0CHXVBQHR, B0C1P1N98V, B019GNUT0C, B09XXQ25PF,
B0CHVZHLZ1, B0DGJ44G2T, B0BDJTWRMV, B0D8WQ94W5, B09W9MS685,
B0B2P6HD4L, B08X11GD52, B0BJMWMH9G, B0BL5M5C4K, B0C8V626MF

### Step 2: product-detail を起動
amazon-scoutの結果を受け取り、各商品の詳細データを取得。
`.claude/team-prompts/product-detail.md` の指示に従う。

### Step 3: sql-writer を起動
product-detailの結果を受け取り、Supabase用SQLを生成。
`.claude/team-prompts/sql-writer.md` の指示に従う。

## 完了後
1. 生成されたSQLファイルのパスをユーザーに伝える
2. 「Supabase SQL Editorで実行してください」と案内
3. 必要に応じて `git add && git commit && git push` でVercel再デプロイ
