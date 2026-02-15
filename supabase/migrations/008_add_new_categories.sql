-- ===========================================
-- 008_add_new_categories.sql
-- 新カテゴリ4種を追加
-- Date: 2026-02-12
-- ===========================================

INSERT INTO categories (name, slug, description, display_order, is_active)
VALUES
(
  'ノイズキャンセリングヘッドホン',
  'noise-cancelling-headphones',
  '没入感のある音楽体験を実現するアクティブノイズキャンセリング搭載ヘッドホン。通勤・通学からテレワークまで幅広く活躍。',
  6, true
),
(
  'ワイヤレス充電器',
  'wireless-charger',
  'ケーブル不要で置くだけ充電。Qi/Qi2/MagSafe対応のワイヤレス充電器を厳選比較。',
  7, true
),
(
  'ノートPC・ミニPC',
  'notebook-mini-pc',
  '持ち運びに便利なノートPCから省スペースなミニPCまで。用途別におすすめモデルを比較。',
  8, true
),
(
  'スマートホームデバイス',
  'smart-home-device',
  'スマートスピーカー・スマートディスプレイ・スマートリモコンなど、暮らしを便利にするIoTデバイスを比較。',
  9, true
);
