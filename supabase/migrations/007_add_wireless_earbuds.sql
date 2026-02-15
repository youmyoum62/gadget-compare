-- ===========================================
-- 007_add_wireless_earbuds.sql
-- Added by product research team on 2026-02-11
-- Category: ワイヤレスイヤホン (wireless-earbuds)
-- Products: 5 items
-- ===========================================

-- 1. EarFun Air Pro 4 (is_featured: true, display_order: 4)
INSERT INTO products (
  asin, category_id, title, slug, brand, manufacturer,
  price_amount, price_currency, list_price_amount, price_updated_at,
  detail_page_url, affiliate_url,
  image_url_large, image_url_medium, image_url_small,
  amazon_rating, amazon_review_count, availability,
  features, specs,
  is_featured, is_active, display_order,
  ai_summary, ai_pros, ai_cons, ai_verdict, ai_content_generated_at
) VALUES (
  'B0D4Z8KJXY',
  (SELECT id FROM categories WHERE slug = 'wireless-earbuds'),
  'EarFun Air Pro 4 ワイヤレスイヤホン Bluetooth 5.4 50dBアダプティブANC LDAC対応',
  'earfun-air-pro-4',
  'EarFun',
  'EarFun',
  9990, 'JPY', NULL,
  NOW(),
  'https://www.amazon.co.jp/dp/B0D4Z8KJXY',
  'https://www.amazon.co.jp/dp/B0D4Z8KJXY?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/61GwcoocYHL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/61GwcoocYHL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/61GwcoocYHL._AC_SL160_.jpg',
  4.4, 2100, '在庫あり',
  ARRAY['50dBアダプティブ式ハイブリッドANC', 'ハイレゾLDAC対応・aptX Lossless', 'Snapdragon Sound対応QCC3091チップ', '最大52時間再生（ケース込み）', '6マイクAI通話ノイズリダクション', 'Auracast対応・マルチポイント接続'],
  '{"Bluetooth": "5.4", "チップ": "QCC3091", "ANC": "50dB アダプティブ", "コーデック": "LDAC / aptX Lossless / AAC / SBC", "再生時間": "最大52時間（ケース込み）", "防水": "IPX5", "重量": "約6.1g（片耳）", "ドライバー": "10mm ダイナミック"}'::jsonb,
  true, true, 4,
  'VGP 2025金賞受賞のコスパ最強ワイヤレスイヤホン。Qualcomm QCC3091チップ搭載で、LDACやaptX Losslessなどハイレゾコーデックに対応。50dBの強力なANCと52時間の長時間再生を1万円以下で実現。',
  ARRAY['1万円以下で最強クラスのANC性能', 'LDAC・aptX Lossless対応で高音質', 'VGP金賞2年連続受賞の実績', '52時間の圧倒的バッテリー持ち'],
  ARRAY['低音がやや強め（EQ調整で対応可）', 'ケースがやや大きい', 'ワイヤレス充電非対応'],
  '1万円以下のワイヤレスイヤホンでは文句なしのNo.1。音質・ANC・機能性すべてが高水準で、コスパを求めるなら最初に検討すべき一台。',
  NOW()
);

-- 2. Anker Soundcore P31i (is_featured: true, display_order: 5)
INSERT INTO products (
  asin, category_id, title, slug, brand, manufacturer,
  price_amount, price_currency, list_price_amount, price_updated_at,
  detail_page_url, affiliate_url,
  image_url_large, image_url_medium, image_url_small,
  amazon_rating, amazon_review_count, availability,
  features, specs,
  is_featured, is_active, display_order,
  ai_summary, ai_pros, ai_cons, ai_verdict, ai_content_generated_at
) VALUES (
  'B0FNRS5WB2',
  (SELECT id FROM categories WHERE slug = 'wireless-earbuds'),
  'Anker Soundcore P31i 完全ワイヤレスイヤホン Bluetooth 6.1 ANC搭載',
  'anker-soundcore-p31i',
  'Anker',
  'Anker',
  5990, 'JPY', NULL,
  NOW(),
  'https://www.amazon.co.jp/dp/B0FNRS5WB2',
  'https://www.amazon.co.jp/dp/B0FNRS5WB2?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51nHT2kQ1bL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51nHT2kQ1bL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51nHT2kQ1bL._AC_SL160_.jpg',
  4.3, 520, '在庫あり',
  ARRAY['Bluetooth 6.1対応の最新接続規格', 'アクティブノイズキャンセリング搭載', '11mm大型ドライバー＋BassUp技術', '最大50時間再生（ケース込み）', 'IP55防塵防水・マルチポイント接続', '10分充電で3.5時間再生の急速充電'],
  '{"Bluetooth": "6.1", "ドライバー": "11mm ダイナミック", "ANC": "対応", "再生時間": "最大50時間（ケース込み）", "防水": "IP55", "重量": "約5g（片耳）", "充電": "USB-C", "対応コーデック": "AAC / SBC"}'::jsonb,
  true, true, 5,
  '2025年11月発売のAnker最新エントリーモデル。Bluetooth 6.1という最新規格に対応し、6000円以下でANC・マルチポイント・50時間再生を実現した驚異的コスパのワイヤレスイヤホン。',
  ARRAY['5,990円の驚異的な低価格', 'Bluetooth 6.1の最新接続規格', 'ANC搭載でこの価格帯では破格', '50時間再生の長時間バッテリー'],
  ARRAY['コーデックがAAC/SBCのみ（LDAC非対応）', '音質は価格相応でハイエンドには及ばない', 'タッチ操作の感度がやや敏感'],
  '6000円以下で買えるANC搭載イヤホンとして最強の選択肢。初めてのワイヤレスイヤホンや、サブ機としても最適。',
  NOW()
);

-- 3. Anker Soundcore P40i (is_featured: false, display_order: 6)
INSERT INTO products (
  asin, category_id, title, slug, brand, manufacturer,
  price_amount, price_currency, list_price_amount, price_updated_at,
  detail_page_url, affiliate_url,
  image_url_large, image_url_medium, image_url_small,
  amazon_rating, amazon_review_count, availability,
  features, specs,
  is_featured, is_active, display_order,
  ai_summary, ai_pros, ai_cons, ai_verdict, ai_content_generated_at
) VALUES (
  'B0CP4RQZ3L',
  (SELECT id FROM categories WHERE slug = 'wireless-earbuds'),
  'Anker Soundcore P40i 完全ワイヤレスイヤホン ウルトラノイズキャンセリング 2.0',
  'anker-soundcore-p40i',
  'Anker',
  'Anker',
  7990, 'JPY', NULL,
  NOW(),
  'https://www.amazon.co.jp/dp/B0CP4RQZ3L',
  'https://www.amazon.co.jp/dp/B0CP4RQZ3L?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/61iR7cSGeKL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/61iR7cSGeKL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/61iR7cSGeKL._AC_SL160_.jpg',
  4.3, 1338, '在庫あり',
  ARRAY['ウルトラノイズキャンセリング 2.0搭載', '最大60時間再生の超ロングバッテリー', 'ケースがスマホスタンドになる2-in-1設計', '10バンドEQ＋カスタムサウンド', 'IPX5防水・ワイヤレス充電対応', 'ゲームモード搭載（低遅延）'],
  '{"Bluetooth": "5.3", "ドライバー": "11mm コンポジット", "ANC": "ウルトラノイズキャンセリング 2.0", "再生時間": "最大60時間（ケース込み）", "防水": "IPX5", "充電": "USB-C / ワイヤレス", "対応コーデック": "AAC / SBC", "重量": "約6g（片耳）"}'::jsonb,
  false, true, 6,
  'Ankerの中価格帯モデル。ウルトラノイズキャンセリング2.0で環境に合わせた自動ANC調整が可能。60時間再生と充電ケースがスマホスタンドになるユニークな2-in-1設計が特徴。',
  ARRAY['60時間再生は同価格帯で最長クラス', 'ケース兼スマホスタンドの独自設計', 'ワイヤレス充電対応', '環境適応型のウルトラANC 2.0'],
  ARRAY['やや低音が強調されすぎる傾向', 'LDAC非対応', 'ケースが独特の形状で好みが分かれる'],
  '8000円以下で60時間再生・ウルトラANC・ワイヤレス充電を備えた高コスパモデル。スマホスタンド機能が日常使いで意外と便利。',
  NOW()
);

-- 4. Sony WF-C510 (is_featured: false, display_order: 7)
INSERT INTO products (
  asin, category_id, title, slug, brand, manufacturer,
  price_amount, price_currency, list_price_amount, price_updated_at,
  detail_page_url, affiliate_url,
  image_url_large, image_url_medium, image_url_small,
  amazon_rating, amazon_review_count, availability,
  features, specs,
  is_featured, is_active, display_order,
  ai_summary, ai_pros, ai_cons, ai_verdict, ai_content_generated_at
) VALUES (
  'B0DDKHF9XY',
  (SELECT id FROM categories WHERE slug = 'wireless-earbuds'),
  'ソニー WF-C510 完全ワイヤレスイヤホン 軽量小型4.6g マルチポイント対応',
  'sony-wf-c510',
  'Sony',
  'ソニー',
  8400, 'JPY', 9900,
  NOW(),
  'https://www.amazon.co.jp/dp/B0DDKHF9XY',
  'https://www.amazon.co.jp/dp/B0DDKHF9XY?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/414O+3mRuEL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/414O+3mRuEL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/414O+3mRuEL._AC_SL160_.jpg',
  4.2, 3579, '在庫あり',
  ARRAY['ソニー史上最小・最軽量4.6g', '外音取り込みモード搭載', 'マルチポイント接続（2台同時）', 'DSEE音質復元技術', 'IPX4防滴・最大22時間再生', '5分充電で60分再生のクイック充電'],
  '{"Bluetooth": "5.3", "ドライバー": "5mm", "重量": "約4.6g（片耳）", "再生時間": "最大22時間（ケース込み）", "防水": "IPX4", "充電": "USB-C", "対応コーデック": "AAC / SBC", "外音取り込み": "対応"}'::jsonb,
  false, true, 7,
  'ソニーのエントリーワイヤレスイヤホン。片耳わずか4.6gの超軽量設計で、長時間装着しても疲れにくい。DSEE技術による音質復元とマルチポイント接続を備えた、ソニーらしい高品質なエントリーモデル。',
  ARRAY['4.6gの超軽量で長時間装着が快適', 'ソニーのDSEE音質復元技術搭載', 'マルチポイント接続で2台同時接続', '4色展開でカラバリが豊富'],
  ARRAY['ANC（ノイズキャンセリング）非搭載', 'LDAC非対応', 'バッテリー持ちは22時間で平均的'],
  'ANCは不要だけどソニーの音質が欲しい人に最適。4.6gの軽さは他社にない武器で、通勤・通学用の軽快なイヤホンとしてベストな選択。',
  NOW()
);

-- 5. Apple AirPods 4 (is_featured: false, display_order: 8)
INSERT INTO products (
  asin, category_id, title, slug, brand, manufacturer,
  price_amount, price_currency, list_price_amount, price_updated_at,
  detail_page_url, affiliate_url,
  image_url_large, image_url_medium, image_url_small,
  amazon_rating, amazon_review_count, availability,
  features, specs,
  is_featured, is_active, display_order,
  ai_summary, ai_pros, ai_cons, ai_verdict, ai_content_generated_at
) VALUES (
  'B0DGJ63QY8',
  (SELECT id FROM categories WHERE slug = 'wireless-earbuds'),
  'Apple AirPods 4 ワイヤレスイヤホン Bluetooth 5.3 空間オーディオ H2チップ',
  'apple-airpods-4',
  'Apple',
  'Apple',
  21800, 'JPY', NULL,
  NOW(),
  'https://www.amazon.co.jp/dp/B0DGJ63QY8',
  'https://www.amazon.co.jp/dp/B0DGJ63QY8?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/61-LXWhiBDL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/61-LXWhiBDL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/61-LXWhiBDL._AC_SL160_.jpg',
  4.5, 1500, '在庫あり',
  ARRAY['H2チップ搭載で高品質オーディオ', 'パーソナライズされた空間オーディオ', 'IP54防塵防水性能', 'USB-C充電ケース・最大30時間再生', 'マルチポイント（Apple製品間シームレス切替）', '「声を分離」機能でクリアな通話'],
  '{"Bluetooth": "5.3", "チップ": "H2", "重量": "約4.3g（片耳）", "再生時間": "最大30時間（ケース込み）", "防水": "IP54", "充電": "USB-C", "対応コーデック": "AAC", "空間オーディオ": "対応"}'::jsonb,
  false, true, 8,
  'Apple第4世代AirPodsの標準モデル（ANC非搭載）。H2チップによる空間オーディオとIP54防塵防水を搭載。開放型デザインで耳への負担が少なく、iPhone・Mac・iPadとのシームレスな連携が魅力。',
  ARRAY['Apple製品との完璧な連携', '開放型で耳が痛くならない装着感', 'IP54で前世代より防塵防水が向上', '空間オーディオで没入感のある体験'],
  ARRAY['ANC非搭載（ANCモデルは別売）', 'Apple以外のデバイスでは機能制限あり', '価格が21,800円とやや高め'],
  'iPhoneユーザーで開放型イヤホンが好みなら最適解。カナル型が苦手な人にとって、AirPods 4は唯一無二の選択肢。',
  NOW()
);
