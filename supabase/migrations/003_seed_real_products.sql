-- ===========================================
-- 003_seed_real_products.sql
-- Realistic product data for gadget comparison site
-- Partner Tag: lowpricesearc-22
-- ===========================================

-- Clear existing test products (keep categories)
DELETE FROM price_history;
DELETE FROM comparison_products;
DELETE FROM products;

-- =========================================
-- ワイヤレスイヤホン (wireless-earbuds)
-- =========================================
INSERT INTO products (asin, category_id, title, slug, brand, manufacturer,
  price_amount, price_currency, list_price_amount, price_updated_at,
  detail_page_url, affiliate_url,
  amazon_rating, amazon_review_count, availability,
  features, specs, is_featured, is_active, display_order)
VALUES
(
  'B0C9PRMPNK',
  (SELECT id FROM categories WHERE slug = 'wireless-earbuds'),
  'ソニー ワイヤレスノイズキャンセリングイヤホン WF-1000XM5',
  'sony-wf-1000xm5',
  'ソニー(SONY)',
  'ソニー(SONY)',
  33000, 'JPY', 41800,
  NOW(),
  'https://www.amazon.co.jp/dp/B0C9PRMPNK',
  'https://www.amazon.co.jp/dp/B0C9PRMPNK?tag=lowpricesearc-22',
  4.4, 2847, '在庫あり',
  ARRAY[
    '業界最高クラスのノイズキャンセリング性能',
    'LDAC対応 ハイレゾワイヤレス',
    '軽量設計（片耳約5.9g）',
    '最長24時間のバッテリー持続（ケース充電込み）',
    'IPX4防滴仕様',
    'マルチポイント接続対応'
  ],
  '{"ドライバー": "8.4mm", "ノイキャン": "統合プロセッサーV2", "コーデック": "LDAC/AAC/SBC", "バッテリー": "本体8時間+ケース16時間", "防水": "IPX4", "重量": "約5.9g(片耳)", "充電": "USB-C/Qi", "Bluetooth": "5.3"}'::jsonb,
  true, true, 1
),
(
  'B0D1XD1ZV3',
  (SELECT id FROM categories WHERE slug = 'wireless-earbuds'),
  'Apple AirPods Pro 2 (第2世代) USB-C MagSafe充電ケース',
  'apple-airpods-pro-2',
  'Apple',
  'Apple',
  35800, 'JPY', 39800,
  NOW(),
  'https://www.amazon.co.jp/dp/B0D1XD1ZV3',
  'https://www.amazon.co.jp/dp/B0D1XD1ZV3?tag=lowpricesearc-22',
  4.6, 4523, '在庫あり',
  ARRAY[
    'アクティブノイズキャンセリング（最大2倍の性能）',
    'アダプティブオーディオで環境に合わせた音質調整',
    'パーソナライズされた空間オーディオ',
    'USB-C充電対応',
    'IP54防塵・防水',
    '最大30時間のバッテリー持続（ケース充電込み）'
  ],
  '{"ドライバー": "カスタムAppleドライバー", "ノイキャン": "H2チップ", "コーデック": "AAC", "バッテリー": "本体6時間+ケース24時間", "防水": "IP54", "重量": "約5.3g(片耳)", "充電": "USB-C/MagSafe/Qi", "Bluetooth": "5.3"}'::jsonb,
  true, true, 2
),
(
  'B0CHY9BRF5',
  (SELECT id FROM categories WHERE slug = 'wireless-earbuds'),
  'Anker Soundcore Liberty 4 NC ワイヤレスイヤホン',
  'anker-soundcore-liberty-4-nc',
  'Anker',
  'Anker',
  8990, 'JPY', 12980,
  NOW(),
  'https://www.amazon.co.jp/dp/B0CHY9BRF5',
  'https://www.amazon.co.jp/dp/B0CHY9BRF5?tag=lowpricesearc-22',
  4.3, 3215, '在庫あり',
  ARRAY[
    'ウルトラノイズキャンセリング 2.0',
    '98.5%のノイズを低減',
    'ハイレゾ対応（LDAC）',
    '最大50時間のバッテリー持続',
    'IPX4防水',
    'マルチポイント接続対応'
  ],
  '{"ドライバー": "11mm", "ノイキャン": "ウルトラノイズキャンセリング2.0", "コーデック": "LDAC/AAC/SBC", "バッテリー": "本体10時間+ケース40時間", "防水": "IPX4", "重量": "約5.2g(片耳)", "充電": "USB-C", "Bluetooth": "5.3"}'::jsonb,
  false, true, 3
),

-- =========================================
-- モバイルバッテリー (mobile-battery)
-- =========================================
(
  'B0B2SF8VDY',
  (SELECT id FROM categories WHERE slug = 'mobile-battery'),
  'Anker PowerCore 10000 (10000mAh 大容量モバイルバッテリー)',
  'anker-powercore-10000',
  'Anker',
  'Anker',
  2990, 'JPY', 3590,
  NOW(),
  'https://www.amazon.co.jp/dp/B0B2SF8VDY',
  'https://www.amazon.co.jp/dp/B0B2SF8VDY?tag=lowpricesearc-22',
  4.4, 8921, '在庫あり',
  ARRAY[
    '10000mAhの大容量（iPhone約2.5回充電可能）',
    'Anker独自技術PowerIQ搭載',
    '薄型・軽量コンパクト設計',
    'USB-C入出力対応',
    '低電流モード搭載',
    'MultiProtect安全システム'
  ],
  '{"容量": "10000mAh", "出力": "USB-C 20W / USB-A 12W", "入力": "USB-C 18W", "サイズ": "約107×52×27mm", "重量": "約195g", "充電時間": "約3.5時間", "同時充電": "2台"}'::jsonb,
  true, true, 1
),
(
  'B0BNJ1N8V9',
  (SELECT id FROM categories WHERE slug = 'mobile-battery'),
  'Anker 733 Power Bank (GaNPrime) 10000mAh USB充電器+モバイルバッテリー',
  'anker-733-power-bank',
  'Anker',
  'Anker',
  12990, 'JPY', NULL,
  NOW(),
  'https://www.amazon.co.jp/dp/B0BNJ1N8V9',
  'https://www.amazon.co.jp/dp/B0BNJ1N8V9?tag=lowpricesearc-22',
  4.3, 1567, '在庫あり',
  ARRAY[
    '充電器とモバイルバッテリーの2in1',
    'GaNPrime採用で小型・高効率',
    '最大65W出力',
    '10000mAhバッテリー内蔵',
    'USB-C×2 + USB-A×1の3ポート',
    'コンセントに挿せば充電器として使用可能'
  ],
  '{"容量": "10000mAh", "出力": "最大65W (USB-C×2 + USB-A)", "入力": "AC 100-240V", "サイズ": "約111×63×31mm", "重量": "約320g", "技術": "GaN (窒化ガリウム)", "同時充電": "3台"}'::jsonb,
  false, true, 2
),
(
  'B0BX2L4JJN',
  (SELECT id FROM categories WHERE slug = 'mobile-battery'),
  'CIO SMARTCOBY Pro 30W 10000mAh モバイルバッテリー',
  'cio-smartcoby-pro-30w',
  'CIO',
  'CIO',
  4818, 'JPY', 5478,
  NOW(),
  'https://www.amazon.co.jp/dp/B0BX2L4JJN',
  'https://www.amazon.co.jp/dp/B0BX2L4JJN?tag=lowpricesearc-22',
  4.3, 2103, '在庫あり',
  ARRAY[
    '超コンパクト設計（カードサイズ）',
    '最大30W出力でiPhoneを急速充電',
    '10000mAh大容量',
    'USB-C×2ポート搭載',
    '残量表示LEDインジケーター',
    '日本メーカーの安心設計'
  ],
  '{"容量": "10000mAh", "出力": "USB-C 30W×2", "入力": "USB-C 20W", "サイズ": "約77×56×26mm", "重量": "約174g", "充電時間": "約2.5時間", "同時充電": "2台"}'::jsonb,
  true, true, 3
),

-- =========================================
-- スマートウォッチ (smartwatch)
-- =========================================
(
  'B0CHX2DJZT',
  (SELECT id FROM categories WHERE slug = 'smartwatch'),
  'Apple Watch SE 第2世代 (GPSモデル) 40mm',
  'apple-watch-se-2nd-gen',
  'Apple',
  'Apple',
  34800, 'JPY', 37800,
  NOW(),
  'https://www.amazon.co.jp/dp/B0CHX2DJZT',
  'https://www.amazon.co.jp/dp/B0CHX2DJZT?tag=lowpricesearc-22',
  4.5, 1892, '在庫あり',
  ARRAY[
    '心拍数モニター・睡眠トラッキング',
    '衝突事故検出・転倒検出',
    'Apple Fitnessとの連携',
    '50m耐水性能',
    'watchOS対応で豊富なアプリ',
    'iPhone連携でシームレスな通知'
  ],
  '{"ディスプレイ": "40mm Retinaディスプレイ", "チップ": "S8 SiP", "防水": "50m耐水", "バッテリー": "最大18時間", "センサー": "心拍/加速度/ジャイロ", "通信": "Bluetooth 5.3/Wi-Fi", "OS": "watchOS", "対応": "iPhone限定"}'::jsonb,
  true, true, 1
),
(
  'B0BHQ55MPX',
  (SELECT id FROM categories WHERE slug = 'smartwatch'),
  'Garmin Venu Sq 2 GPSスマートウォッチ',
  'garmin-venu-sq-2',
  'GARMIN',
  'ガーミン(GARMIN)',
  29800, 'JPY', 36800,
  NOW(),
  'https://www.amazon.co.jp/dp/B0BHQ55MPX',
  'https://www.amazon.co.jp/dp/B0BHQ55MPX?tag=lowpricesearc-22',
  4.3, 1245, '在庫あり',
  ARRAY[
    'AMOLEDディスプレイで見やすい画面',
    '25種類以上のスポーツアプリ内蔵',
    'Garmin Pay対応（Suica対応）',
    '最大11日間のバッテリー',
    '血中酸素トラッキング',
    'iPhone/Android両対応'
  ],
  '{"ディスプレイ": "1.41インチ AMOLED", "防水": "5 ATM", "バッテリー": "最大11日間", "センサー": "心拍/SpO2/加速度", "GPS": "GPS/GLONASS/Galileo", "対応": "iPhone/Android", "ストレージ": "4GB(音楽保存可)", "決済": "Garmin Pay (Suica)"}'::jsonb,
  false, true, 2
),
(
  'B0DFLJW3Y3',
  (SELECT id FROM categories WHERE slug = 'smartwatch'),
  'Xiaomi Smart Band 9 スマートバンド',
  'xiaomi-smart-band-9',
  'シャオミ(Xiaomi)',
  'シャオミ(Xiaomi)',
  4490, 'JPY', NULL,
  NOW(),
  'https://www.amazon.co.jp/dp/B0DFLJW3Y3',
  'https://www.amazon.co.jp/dp/B0DFLJW3Y3?tag=lowpricesearc-22',
  4.3, 5678, '在庫あり',
  ARRAY[
    '1.62インチ有機ELディスプレイ',
    '150種類以上のスポーツモード',
    '最大21日間のバッテリー',
    '5ATM防水',
    '心拍数・血中酸素・睡眠モニタリング',
    '圧倒的コスパ'
  ],
  '{"ディスプレイ": "1.62インチ AMOLED", "防水": "5 ATM", "バッテリー": "最大21日間", "センサー": "心拍/SpO2/加速度", "重量": "約15.8g(バンド除く)", "対応": "iPhone/Android", "充電": "マグネット式", "通信": "Bluetooth 5.4"}'::jsonb,
  true, true, 3
),

-- =========================================
-- USB充電器 (usb-charger)
-- =========================================
(
  'B0B97FJC6Z',
  (SELECT id FROM categories WHERE slug = 'usb-charger'),
  'Anker 737 Charger (GaNPrime 120W) USB-C急速充電器',
  'anker-737-charger-120w',
  'Anker',
  'Anker',
  8990, 'JPY', 12990,
  NOW(),
  'https://www.amazon.co.jp/dp/B0B97FJC6Z',
  'https://www.amazon.co.jp/dp/B0B97FJC6Z?tag=lowpricesearc-22',
  4.5, 2345, '在庫あり',
  ARRAY[
    '最大120W出力でノートPCも充電可能',
    'GaNPrime技術で小型化',
    'USB-C×2 + USB-A×1の3ポート',
    'PowerIQ 4.0で最適な電力配分',
    'ActiveShield 2.0安全機能',
    'MacBook Pro/iPad/iPhoneを同時充電'
  ],
  '{"最大出力": "120W", "ポート": "USB-C×2 + USB-A×1", "技術": "GaN (窒化ガリウム)", "サイズ": "約80×43×32mm", "重量": "約187g", "入力": "AC 100-240V", "プロトコル": "PD3.0/PPS/QC", "折りたたみプラグ": "あり"}'::jsonb,
  true, true, 1
),
(
  'B0BTSHHLR3',
  (SELECT id FROM categories WHERE slug = 'usb-charger'),
  'CIO NovaPort TRIO 65W 3ポート USB-C充電器',
  'cio-novaport-trio-65w',
  'CIO',
  'CIO',
  4818, 'JPY', 5918,
  NOW(),
  'https://www.amazon.co.jp/dp/B0BTSHHLR3',
  'https://www.amazon.co.jp/dp/B0BTSHHLR3?tag=lowpricesearc-22',
  4.4, 1890, '在庫あり',
  ARRAY[
    '世界最小級65W充電器',
    'NovaIntelligence自動出力振り分け',
    'USB-C×2 + USB-A×1',
    'GaN技術採用で超コンパクト',
    'PD3.0/PPS対応',
    '日本メーカーの安心品質'
  ],
  '{"最大出力": "65W", "ポート": "USB-C×2 + USB-A×1", "技術": "GaN (窒化ガリウム)", "サイズ": "約49×49×29mm", "重量": "約110g", "入力": "AC 100-240V", "プロトコル": "PD3.0/PPS", "折りたたみプラグ": "あり"}'::jsonb,
  true, true, 2
),
(
  'B09C15TN9S',
  (SELECT id FROM categories WHERE slug = 'usb-charger'),
  'Anker Nano II 65W USB-C急速充電器',
  'anker-nano-ii-65w',
  'Anker',
  'Anker',
  4490, 'JPY', 5990,
  NOW(),
  'https://www.amazon.co.jp/dp/B09C15TN9S',
  'https://www.amazon.co.jp/dp/B09C15TN9S?tag=lowpricesearc-22',
  4.5, 4567, '在庫あり',
  ARRAY[
    '65W出力でノートPC充電可能',
    'GaN II技術で超小型（約60%小型化）',
    'USB-C×1ポート',
    'PD対応でMacBook Air対応',
    'ActiveShield安全機能',
    '折りたたみプラグ'
  ],
  '{"最大出力": "65W", "ポート": "USB-C×1", "技術": "GaN II (窒化ガリウム)", "サイズ": "約44×42×36mm", "重量": "約112g", "入力": "AC 100-240V", "プロトコル": "PD3.0/PPS", "折りたたみプラグ": "あり"}'::jsonb,
  false, true, 3
),

-- =========================================
-- タブレット (tablet)
-- =========================================
(
  'B0BJLXMVMV',
  (SELECT id FROM categories WHERE slug = 'tablet'),
  'Apple iPad (第10世代) 10.9インチ Wi-Fi 64GB',
  'apple-ipad-10th-gen',
  'Apple',
  'Apple',
  58800, 'JPY', 68800,
  NOW(),
  'https://www.amazon.co.jp/dp/B0BJLXMVMV',
  'https://www.amazon.co.jp/dp/B0BJLXMVMV?tag=lowpricesearc-22',
  4.6, 3456, '在庫あり',
  ARRAY[
    '10.9インチLiquid Retinaディスプレイ',
    'A14 Bionicチップ搭載',
    'USB-C対応',
    '12MPフロントカメラ（センターフレーム対応）',
    'Touch ID対応',
    '最大10時間のバッテリー'
  ],
  '{"ディスプレイ": "10.9インチ Liquid Retina", "チップ": "A14 Bionic", "ストレージ": "64GB", "カメラ": "背面12MP/前面12MP", "バッテリー": "最大10時間", "通信": "Wi-Fi 6", "充電": "USB-C", "重量": "約477g"}'::jsonb,
  true, true, 1
),
(
  'B0BHSKZY3N',
  (SELECT id FROM categories WHERE slug = 'tablet'),
  'Amazon Fire HD 10 タブレット 10.1インチ 32GB',
  'amazon-fire-hd-10',
  'Amazon',
  'Amazon',
  19980, 'JPY', 22980,
  NOW(),
  'https://www.amazon.co.jp/dp/B0BHSKZY3N',
  'https://www.amazon.co.jp/dp/B0BHSKZY3N?tag=lowpricesearc-22',
  4.2, 6789, '在庫あり',
  ARRAY[
    '10.1インチ 1080pフルHDディスプレイ',
    'オクタコアプロセッサ・3GB RAM',
    '最大13時間のバッテリー',
    'Alexa搭載',
    'USB-C充電対応',
    '圧倒的コスパ（動画視聴に最適）'
  ],
  '{"ディスプレイ": "10.1インチ 1080p", "プロセッサ": "オクタコア 2.0GHz", "RAM": "3GB", "ストレージ": "32GB (microSD拡張可)", "バッテリー": "最大13時間", "充電": "USB-C (9W)", "重量": "約434g", "OS": "Fire OS"}'::jsonb,
  false, true, 2
),
(
  'B0C3HVD1YG',
  (SELECT id FROM categories WHERE slug = 'tablet'),
  'Xiaomi Pad 6 11インチ タブレット 128GB',
  'xiaomi-pad-6',
  'シャオミ(Xiaomi)',
  'シャオミ(Xiaomi)',
  42800, 'JPY', 49800,
  NOW(),
  'https://www.amazon.co.jp/dp/B0C3HVD1YG',
  'https://www.amazon.co.jp/dp/B0C3HVD1YG?tag=lowpricesearc-22',
  4.4, 2345, '在庫あり',
  ARRAY[
    '11インチ 2.8K解像度 144Hzディスプレイ',
    'Snapdragon 870プロセッサ',
    '8720mAh大容量バッテリー',
    '33W急速充電対応',
    'クアッドスピーカー（Dolby Atmos）',
    'スタイラスペン対応'
  ],
  '{"ディスプレイ": "11インチ 2.8K 144Hz", "プロセッサ": "Snapdragon 870", "RAM": "6GB", "ストレージ": "128GB", "バッテリー": "8720mAh", "充電": "USB-C (33W)", "重量": "約490g", "OS": "Android 13 (MIUI Pad 14)"}'::jsonb,
  false, true, 3
);

-- Add AI-generated summaries for featured products
UPDATE products SET
  ai_summary = 'ソニーのフラッグシップ完全ワイヤレスイヤホン。業界最高クラスのノイズキャンセリング性能と、LDAC対応の高音質再生が魅力。片耳約5.9gの軽量設計で長時間装着も快適。',
  ai_pros = ARRAY['業界トップクラスのノイキャン性能', 'LDAC対応の高音質', '軽量で快適な装着感', 'マルチポイント対応'],
  ai_cons = ARRAY['価格が高め', 'AAC以外のApple製品との相性', 'ケースがやや大きい'],
  ai_verdict = '音質とノイキャン性能を最優先するなら、現時点で最良の選択肢。特にAndroidユーザーにはLDAC対応が大きなメリット。',
  ai_content_generated_at = NOW()
WHERE slug = 'sony-wf-1000xm5';

UPDATE products SET
  ai_summary = 'Appleエコシステムとの完璧な連携が魅力のAirPods Pro第2世代。USB-C対応で利便性が向上し、アダプティブオーディオやパーソナライズされた空間オーディオなど独自機能が充実。',
  ai_pros = ARRAY['Apple製品との完璧な連携', 'アダプティブオーディオが便利', 'USB-C対応', 'IP54の優れた防塵防水性能'],
  ai_cons = ARRAY['Android端末では機能制限あり', 'コーデックはAACのみ', '価格が高い'],
  ai_verdict = 'iPhoneユーザーなら迷わずこれ。Apple製品間のシームレスな切り替えと空間オーディオは他では得られない体験。',
  ai_content_generated_at = NOW()
WHERE slug = 'apple-airpods-pro-2';

UPDATE products SET
  ai_summary = 'コスパ最強のノイキャンイヤホン。1万円以下で98.5%のノイズ低減とLDAC対応を実現。50時間の長寿命バッテリーも魅力的。',
  ai_pros = ARRAY['1万円以下の圧倒的コスパ', 'LDAC対応の高音質', '50時間の長寿命バッテリー', '優秀なノイキャン性能'],
  ai_cons = ARRAY['装着感は好みが分かれる', 'ソニーやAppleほどの音質ではない', 'ケースがやや安っぽい'],
  ai_verdict = 'コスパを重視するなら間違いなくベストバイ。1万円以下でこの性能は驚異的。',
  ai_content_generated_at = NOW()
WHERE slug = 'anker-soundcore-liberty-4-nc';

UPDATE products SET
  ai_summary = 'Ankerの定番モバイルバッテリー。10000mAhでiPhoneを約2.5回充電可能。軽量コンパクトで持ち運びやすく、USB-C対応で使い勝手も良い。',
  ai_pros = ARRAY['軽量コンパクト（約195g）', '信頼のAnkerブランド', 'USB-C入出力対応', '2台同時充電可能'],
  ai_cons = ARRAY['急速充電は20Wまで', 'パススルー充電非対応', 'ワイヤレス充電非対応'],
  ai_verdict = '初めてのモバイルバッテリーに最適。価格・容量・サイズのバランスが絶妙で、万人におすすめできる一台。',
  ai_content_generated_at = NOW()
WHERE slug = 'anker-powercore-10000';
