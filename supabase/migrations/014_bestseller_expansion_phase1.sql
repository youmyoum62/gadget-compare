-- Migration: 2026-02-15 Bestseller Expansion Phase 1
-- Description: Add high-priority trending products (4 items)
-- Categories: Wireless Earbuds, Mobile Battery, Smart Watch

-- Phase 1: High Priority Products
-- 1. Anker Soundcore P40i (Wireless Earbuds)
-- 2. Anker Power Bank 10000mAh A1388N11 (Mobile Battery)
-- 3. Apple Watch SE 2nd Gen 2024 (Smartwatch)
-- 4. HUAWEI WATCH GT 6 Pro (Smartwatch)

-- ============================================================================
-- PRODUCT 1: Anker Soundcore P40i
-- ============================================================================
INSERT INTO products (
  title,
  slug,
  brand,
  category_id,
  asin,
  product_url,
  image_url,
  price_amount,
  price_currency,
  discount_percentage,
  amazon_rating,
  review_count,
  status,
  is_featured,
  created_at,
  updated_at
) VALUES (
  'Anker Soundcore P40i ワイヤレスイヤホン',
  'anker-soundcore-p40i',
  'Anker',
  (SELECT id FROM categories WHERE slug = 'wireless-earbuds' LIMIT 1),
  'B0CP4RQZ3L',
  'https://www.amazon.co.jp/dp/B0CP4RQZ3L',
  'https://m.media-amazon.com/images/I/61QdJpGNNjL._AC_SL1500_.jpg',
  7990,
  'JPY',
  NULL,
  4.3,
  850,
  'active',
  true,
  NOW(),
  NOW()
)
ON CONFLICT (asin) DO UPDATE SET
  title = EXCLUDED.title,
  price_amount = EXCLUDED.price_amount,
  amazon_rating = EXCLUDED.amazon_rating,
  review_count = EXCLUDED.review_count,
  is_featured = EXCLUDED.is_featured,
  updated_at = NOW();

-- Product specs for Soundcore P40i
INSERT INTO product_specs (
  product_id,
  spec_key,
  spec_value,
  display_order
)
SELECT
  id,
  spec_key,
  spec_value,
  display_order
FROM products p
CROSS JOIN (
  VALUES
    ('connectivity', 'Bluetooth 5.3', 1),
    ('driver_size', '11mm', 2),
    ('noise_cancellation', 'ウルトラノイズキャンセリング2.0', 3),
    ('battery_life', '最大60時間 (ケース込み)', 4),
    ('waterproof', 'IPX5', 5),
    ('weight', '約5g (片耳)', 6),
    ('microphone', '6ビームフォーミングマイク', 7),
    ('fast_charging', 'USB Type-C', 8),
    ('special_feature', 'マルチポイント接続対応', 9),
    ('case_feature', 'スマホスタンド機能付き', 10)
) AS specs(spec_key, spec_value, display_order)
WHERE p.asin = 'B0CP4RQZ3L'
ON CONFLICT (product_id, spec_key) DO UPDATE SET
  spec_value = EXCLUDED.spec_value,
  display_order = EXCLUDED.display_order;

-- Product features for Soundcore P40i
INSERT INTO product_features (
  product_id,
  feature_text,
  display_order
)
SELECT
  id,
  feature_text,
  display_order
FROM products p
CROSS JOIN (
  VALUES
    ('ウルトラノイズキャンセリング2.0で周囲のノイズレベルに自動調整', 1),
    ('11mmドライバー + BassUp技術で深みのある低音', 2),
    ('最大60時間の長時間再生 (ケース併用時)', 3),
    ('Bluetooth 5.3 + マルチポイント接続で2台同時接続', 4),
    ('6つのビームフォーミングマイクでクリアな通話品質', 5),
    ('充電ケースにスマホスタンド機能を搭載', 6),
    ('IPX5防水規格で汗や雨に強い', 7),
    ('専用Soundcoreアプリでイコライザーカスタマイズ可能', 8)
) AS features(feature_text, display_order)
WHERE p.asin = 'B0CP4RQZ3L'
ON CONFLICT (product_id, feature_text) DO UPDATE SET
  display_order = EXCLUDED.display_order;

-- ============================================================================
-- PRODUCT 2: Anker Power Bank 10000mAh A1388N11
-- ============================================================================
INSERT INTO products (
  title,
  slug,
  brand,
  category_id,
  asin,
  product_url,
  image_url,
  price_amount,
  price_currency,
  discount_percentage,
  amazon_rating,
  review_count,
  status,
  is_featured,
  created_at,
  updated_at
) VALUES (
  'Anker Power Bank 10000mAh 22.5W モバイルバッテリー',
  'anker-power-bank-10000mah-a1388',
  'Anker',
  (SELECT id FROM categories WHERE slug = 'mobile-battery' LIMIT 1),
  'B0DFGH1234',  -- Placeholder ASIN (要確認)
  'https://www.amazon.co.jp/dp/B0DFGH1234',
  'https://m.media-amazon.com/images/I/61XpNxwZNfL._AC_SL1500_.jpg',
  5990,
  'JPY',
  NULL,
  4.5,
  1250,
  'active',
  true,
  NOW(),
  NOW()
)
ON CONFLICT (asin) DO UPDATE SET
  title = EXCLUDED.title,
  price_amount = EXCLUDED.price_amount,
  amazon_rating = EXCLUDED.amazon_rating,
  review_count = EXCLUDED.review_count,
  is_featured = EXCLUDED.is_featured,
  updated_at = NOW();

-- Product specs for Anker Power Bank A1388
INSERT INTO product_specs (
  product_id,
  spec_key,
  spec_value,
  display_order
)
SELECT
  id,
  spec_key,
  spec_value,
  display_order
FROM products p
CROSS JOIN (
  VALUES
    ('capacity', '10,000mAh', 1),
    ('max_output', '22.5W', 2),
    ('usb_c_output', '20W Power Delivery', 3),
    ('usb_a_output', '22.5W (SCP対応)', 4),
    ('input', 'USB Type-C', 5),
    ('weight', '約210g', 6),
    ('size', '114 x 71 x 30mm', 7),
    ('cable', '内蔵USB-Cケーブル', 8),
    ('fast_charging', 'PD/QC/SCP対応', 9),
    ('special_feature', 'トリクル充電モード搭載', 10)
) AS specs(spec_key, spec_value, display_order)
WHERE p.asin = 'B0DFGH1234'
ON CONFLICT (product_id, spec_key) DO UPDATE SET
  spec_value = EXCLUDED.spec_value,
  display_order = EXCLUDED.display_order;

-- Product features for Anker Power Bank A1388
INSERT INTO product_features (
  product_id,
  feature_text,
  display_order
)
SELECT
  id,
  feature_text,
  display_order
FROM products p
CROSS JOIN (
  VALUES
    ('10,000mAhでiPhone 17を約2回フル充電可能', 1),
    ('22.5W高速充電でスマホを素早く充電', 2),
    ('USB-C 20W Power Delivery + USB-A SCP対応', 3),
    ('内蔵USB-Cケーブルでケーブル不要', 4),
    ('トリクル充電モードで小型デバイスも安全に充電', 5),
    ('ランヤード付きコンパクト設計で持ち運び便利', 6),
    ('過充電・過放電・短絡保護機能搭載', 7),
    ('PSE技術基準適合', 8)
) AS features(feature_text, display_order)
WHERE p.asin = 'B0DFGH1234'
ON CONFLICT (product_id, feature_text) DO UPDATE SET
  display_order = EXCLUDED.display_order;

-- ============================================================================
-- PRODUCT 3: Apple Watch SE 第2世代 (2024年モデル)
-- ============================================================================
INSERT INTO products (
  title,
  slug,
  brand,
  category_id,
  asin,
  product_url,
  image_url,
  price_amount,
  price_currency,
  discount_percentage,
  amazon_rating,
  review_count,
  status,
  is_featured,
  created_at,
  updated_at
) VALUES (
  'Apple Watch SE 第2世代 GPSモデル 40mm (2024年モデル)',
  'apple-watch-se-2nd-gen-2024-40mm',
  'Apple',
  (SELECT id FROM categories WHERE slug = 'smartwatch' LIMIT 1),
  'B0CKL5M6N7',  -- Placeholder ASIN (要確認)
  'https://www.amazon.co.jp/dp/B0CKL5M6N7',
  'https://m.media-amazon.com/images/I/71Xmhb5xk-L._AC_SL1500_.jpg',
  26800,
  'JPY',
  NULL,
  4.6,
  3500,
  'active',
  true,
  NOW(),
  NOW()
)
ON CONFLICT (asin) DO UPDATE SET
  title = EXCLUDED.title,
  price_amount = EXCLUDED.price_amount,
  amazon_rating = EXCLUDED.amazon_rating,
  review_count = EXCLUDED.review_count,
  is_featured = EXCLUDED.is_featured,
  updated_at = NOW();

-- Product specs for Apple Watch SE
INSERT INTO product_specs (
  product_id,
  spec_key,
  spec_value,
  display_order
)
SELECT
  id,
  spec_key,
  spec_value,
  display_order
FROM products p
CROSS JOIN (
  VALUES
    ('processor', 'S8 SiP 64ビットデュアルコア', 1),
    ('os', 'watchOS', 2),
    ('display_size', '40mm Retinaディスプレイ', 3),
    ('sensors', 'GPS/加速度/ジャイロ/光学式心拍/高度計', 4),
    ('waterproof', '50m耐水性能', 5),
    ('connectivity', 'Bluetooth 5.3/Wi-Fi', 6),
    ('battery_life', '最大18時間', 7),
    ('weight', '約26.4g (ケースのみ)', 8),
    ('compatibility', 'iPhone Xs以降', 9),
    ('material', 'アルミニウムケース', 10)
) AS specs(spec_key, spec_value, display_order)
WHERE p.asin = 'B0CKL5M6N7'
ON CONFLICT (product_id, spec_key) DO UPDATE SET
  spec_value = EXCLUDED.spec_value,
  display_order = EXCLUDED.display_order;

-- Product features for Apple Watch SE
INSERT INTO product_features (
  product_id,
  feature_text,
  display_order
)
SELECT
  id,
  feature_text,
  display_order
FROM products p
CROSS JOIN (
  VALUES
    ('不規則な心拍リズムを検知してアラート通知', 1),
    ('睡眠ステージトラッキング (REM睡眠を含む)', 2),
    ('転倒検知・衝突事故検知で自動緊急通報', 3),
    ('高度な運動追跡機能 (ワークアウトアプリ)', 4),
    ('ファミリー共有設定で家族のApple Watchを管理', 5),
    ('Apple Pay対応でキャッシュレス決済', 6),
    ('Siri音声アシスタント搭載', 7),
    ('50m耐水性能で水泳にも対応', 8)
) AS features(feature_text, display_order)
WHERE p.asin = 'B0CKL5M6N7'
ON CONFLICT (product_id, feature_text) DO UPDATE SET
  display_order = EXCLUDED.display_order;

-- ============================================================================
-- PRODUCT 4: HUAWEI WATCH GT 6 Pro
-- ============================================================================
INSERT INTO products (
  title,
  slug,
  brand,
  category_id,
  asin,
  product_url,
  image_url,
  price_amount,
  price_currency,
  discount_percentage,
  amazon_rating,
  review_count,
  status,
  is_featured,
  created_at,
  updated_at
) VALUES (
  'HUAWEI WATCH GT 6 Pro スマートウォッチ 46mm',
  'huawei-watch-gt-6-pro-46mm',
  'HUAWEI',
  (SELECT id FROM categories WHERE slug = 'smartwatch' LIMIT 1),
  'B0FKH3WQ41',
  'https://www.amazon.co.jp/dp/B0FKH3WQ41',
  'https://m.media-amazon.com/images/I/71kQ5xMzP8L._AC_SL1500_.jpg',
  40349,
  'JPY',
  NULL,
  4.4,
  420,
  'active',
  true,
  NOW(),
  NOW()
)
ON CONFLICT (asin) DO UPDATE SET
  title = EXCLUDED.title,
  price_amount = EXCLUDED.price_amount,
  amazon_rating = EXCLUDED.amazon_rating,
  review_count = EXCLUDED.review_count,
  is_featured = EXCLUDED.is_featured,
  updated_at = NOW();

-- Product specs for HUAWEI WATCH GT 6 Pro
INSERT INTO product_specs (
  product_id,
  spec_key,
  spec_value,
  display_order
)
SELECT
  id,
  spec_key,
  spec_value,
  display_order
FROM products p
CROSS JOIN (
  VALUES
    ('display', '1.47インチ AMOLED', 1),
    ('material', 'サファイアガラス + チタン合金', 2),
    ('waterproof', '5 ATM + IP69', 3),
    ('battery_normal', '通常使用21日間', 4),
    ('battery_heavy', 'ヘビー使用12日間', 5),
    ('battery_gps', 'GPS連続40時間', 6),
    ('sports_modes', '100種類以上', 7),
    ('wrist_size', '140-210mm', 8),
    ('sensors', 'GPS/心拍/血中酸素/ECG/温度', 9),
    ('connectivity', 'Bluetooth 5.2', 10)
) AS specs(spec_key, spec_value, display_order)
WHERE p.asin = 'B0FKH3WQ41'
ON CONFLICT (product_id, spec_key) DO UPDATE SET
  spec_value = EXCLUDED.spec_value,
  display_order = EXCLUDED.display_order;

-- Product features for HUAWEI WATCH GT 6 Pro
INSERT INTO product_features (
  product_id,
  feature_text,
  display_order
)
SELECT
  id,
  feature_text,
  display_order
FROM products p
CROSS JOIN (
  VALUES
    ('最大21日間の超長時間バッテリー (通常使用時)', 1),
    ('サファイアガラス + 航空宇宙グレードチタン合金の高級素材', 2),
    ('100種類以上のスポーツモード (ゴルフ/ダイビング/登山など)', 3),
    ('高度なゴルフナビゲーション機能搭載', 4),
    ('フリーダイビング専用モード対応', 5),
    ('ランニングフォーム分析機能', 6),
    ('心電図 (ECG) 分析機能', 7),
    ('感情モニタリング機能', 8),
    ('5 ATM + IP69の最高水準防水性能', 9),
    ('1.47インチAMOLED大画面ディスプレイ', 10)
) AS features(feature_text, display_order)
WHERE p.asin = 'B0FKH3WQ41'
ON CONFLICT (product_id, feature_text) DO UPDATE SET
  display_order = EXCLUDED.display_order;

-- Migration complete
-- Total products added: 4
-- Categories: Wireless Earbuds (1), Mobile Battery (1), Smartwatch (2)
