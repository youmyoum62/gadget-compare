-- ===========================================
-- 009_products_nc_headphones.sql
-- カテゴリ: ノイズキャンセリングヘッドホン (13商品)
-- Date: 2026-02-12
-- ===========================================

-- 1. Sony WH-1000XM5
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
  'B0B7B6GNGB',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'ソニー WH-1000XM5 ワイヤレスノイズキャンセリングヘッドホン ブラック',
  'sony-wh-1000xm5',
  'Sony', 'ソニー',
  39000, 'JPY', 59400, NOW(),
  'https://www.amazon.co.jp/dp/B0B7B6GNGB',
  'https://www.amazon.co.jp/dp/B0B7B6GNGB?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL160_.jpg',
  4.5, 5200, '在庫あり',
  ARRAY['業界最高クラスのノイズキャンセリング', '30mm新開発ドライバーユニット', 'LDAC対応ハイレゾワイヤレス', '最大30時間バッテリー', 'マルチポイント接続対応', 'スピーク・トゥ・チャット機能'],
  '{"ドライバー": "30mm", "ノイキャン": "統合プロセッサーV1+8マイク", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大30時間", "重量": "約250g", "充電": "USB-C", "Bluetooth": "5.2", "折りたたみ": "不可（フラット収納）"}'::jsonb,
  true, true, 1,
  'ソニーのフラッグシップヘッドホン。8個のマイクと統合プロセッサーV1による業界最高クラスのノイキャンと、30mm新設計ドライバーによる高音質を両立。約250gの軽量設計も魅力。',
  ARRAY['業界最高クラスのノイキャン性能', 'LDAC対応の高音質', '250gの軽量設計', 'マルチポイント接続対応'],
  ARRAY['折りたたみ不可（フラット収納のみ）', '価格が高め', '側圧がやや弱く頭の動きでずれることがある'],
  'ノイキャンヘッドホンの王者。音質・静寂性・装着感すべてがトップクラスで、テレワークから通勤まであらゆるシーンで活躍する一台。',
  NOW()
);

-- 2. Apple AirPods Max (USB-C)
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
  'B0DK1M3WCL',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'Apple AirPods Max USB-C ワイヤレスノイズキャンセリングヘッドホン',
  'apple-airpods-max-usbc',
  'Apple', 'Apple',
  79800, 'JPY', 84800, NOW(),
  'https://www.amazon.co.jp/dp/B0DK1M3WCL',
  'https://www.amazon.co.jp/dp/B0DK1M3WCL?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/61Wnl6xJO8L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/61Wnl6xJO8L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/61Wnl6xJO8L._AC_SL160_.jpg',
  4.6, 1800, '在庫あり',
  ARRAY['H1チップによる高性能ANC', 'パーソナライズされた空間オーディオ', 'USB-C充電対応', 'Digital Crown操作', 'アルミニウム・ステンレス筐体', '最大20時間バッテリー'],
  '{"ドライバー": "40mm Apple設計", "ノイキャン": "H1チップ×2（計20コア）", "コーデック": "AAC", "バッテリー": "最大20時間", "重量": "約384.8g", "充電": "USB-C", "Bluetooth": "5.0", "素材": "アルミニウム+ステンレス"}'::jsonb,
  true, true, 2,
  'Appleのプレミアムヘッドホン。H1チップ2基による強力なANCと空間オーディオ、アルミ・ステンレス筐体の高級感が特徴。USB-Cに対応した最新モデル。',
  ARRAY['Appleエコシステムとの完璧な連携', '空間オーディオが圧倒的', 'プレミアムな質感と装着感', 'Digital Crownの操作性'],
  ARRAY['約8万円と非常に高価', '384.8gと重め', 'AACのみでLDAC非対応', '折りたたみ不可'],
  'Apple製品を複数使っているなら最高の体験。空間オーディオとシームレスな切り替えは唯一無二。ただし価格は覚悟が必要。',
  NOW()
);

-- 3. Sony WH-1000XM4
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
  'B08F25RYG5',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'ソニー WH-1000XM4 ワイヤレスノイズキャンセリングヘッドホン',
  'sony-wh-1000xm4',
  'Sony', 'ソニー',
  28000, 'JPY', 44000, NOW(),
  'https://www.amazon.co.jp/dp/B08F25RYG5',
  'https://www.amazon.co.jp/dp/B08F25RYG5?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51aYenNr+xL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51aYenNr+xL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51aYenNr+xL._AC_SL160_.jpg',
  4.5, 12000, '在庫あり',
  ARRAY['高音質ノイズキャンセリングプロセッサーQN1', 'LDAC/DSEE Extreme対応', '折りたたみ可能なコンパクト設計', '最大30時間バッテリー', 'マルチポイント接続', 'タッチセンサーコントロール'],
  '{"ドライバー": "40mm", "ノイキャン": "QN1プロセッサー", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大30時間", "重量": "約254g", "充電": "USB-C", "Bluetooth": "5.0", "折りたたみ": "可"}'::jsonb,
  false, true, 3,
  '前世代フラッグシップだが今も現役の実力機。XM5の登場で価格が下がりコスパ抜群。折りたたみ対応でXM5にない利点もある。',
  ARRAY['XM5より安くコスパ抜群', '折りたたみ可能', '30時間バッテリー', 'LDAC対応高音質'],
  ARRAY['XM5ほどのノイキャン性能ではない', 'デザインがやや古め', 'Bluetooth 5.0（5.2ではない）'],
  '3万円以下で本格的なノイキャンヘッドホンを求めるなら最有力候補。折りたたみ可能で持ち運びにも便利。',
  NOW()
);

-- 4. Bose QuietComfort Ultra Headphones
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
  'B0CCZ26B5V',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'Bose QuietComfort Ultra Headphones ワイヤレスノイズキャンセリング',
  'bose-qc-ultra-headphones',
  'Bose', 'Bose',
  48000, 'JPY', 56100, NOW(),
  'https://www.amazon.co.jp/dp/B0CCZ26B5V',
  'https://www.amazon.co.jp/dp/B0CCZ26B5V?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51lGe5btGLL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51lGe5btGLL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51lGe5btGLL._AC_SL160_.jpg',
  4.3, 3500, '在庫あり',
  ARRAY['Bose最上位のノイズキャンセリング', 'Bose Immersive Audio空間オーディオ', 'aptX Adaptive対応', 'CustomTuneイヤーフィット', '最大24時間バッテリー', 'マルチポイント接続'],
  '{"ドライバー": "35mmカスタム", "ノイキャン": "Bose最上位ANC", "コーデック": "aptX Adaptive/AAC/SBC", "バッテリー": "最大24時間", "重量": "約250g", "充電": "USB-C", "Bluetooth": "5.3", "折りたたみ": "可"}'::jsonb,
  true, true, 4,
  'Boseのフラッグシップ。Bose Immersive Audioによる空間オーディオ体験とCustomTuneによるパーソナライズされたノイキャンが特徴。aptX Adaptive対応で高音質。',
  ARRAY['Bose伝統の強力ノイキャン', '空間オーディオ対応', 'aptX Adaptive高音質コーデック', '快適な装着感'],
  ARRAY['価格が高い', 'バッテリーが24時間で競合より短い', 'アプリが不安定なことがある'],
  'ノイキャンの本家Boseが送る最上位モデル。静寂性と空間オーディオの没入感は圧巻。ソニーとの2強を争うハイエンド機。',
  NOW()
);

-- 5. Bose QuietComfort Headphones
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
  'B0CCZ1L489',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'Bose QuietComfort Headphones ワイヤレスノイズキャンセリング',
  'bose-quietcomfort-headphones',
  'Bose', 'Bose',
  35000, 'JPY', 46200, NOW(),
  'https://www.amazon.co.jp/dp/B0CCZ1L489',
  'https://www.amazon.co.jp/dp/B0CCZ1L489?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51kz+-GLKSL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51kz+-GLKSL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51kz+-GLKSL._AC_SL160_.jpg',
  4.4, 4200, '在庫あり',
  ARRAY['Bose伝統のノイズキャンセリング', 'Quiet/Awareモード切替', '最大24時間バッテリー', 'マルチポイント接続', '折りたたみ可能', '風切り音低減マイク'],
  '{"ドライバー": "35mm", "ノイキャン": "Bose ANC", "コーデック": "AAC/SBC", "バッテリー": "最大24時間", "重量": "約240g", "充電": "USB-C", "Bluetooth": "5.1", "折りたたみ": "可"}'::jsonb,
  false, true, 5,
  'Boseのスタンダードモデル。Ultraの空間オーディオやaptXは省略されているが、核心のノイキャン性能は健在。3.5万円でBoseの音が手に入るコスパモデル。',
  ARRAY['Boseのノイキャンが3.5万円で手に入る', '240gの軽量設計', '折りたたみ可能', '24時間バッテリー'],
  ARRAY['空間オーディオ非対応', 'aptX非対応（AAC/SBCのみ）', 'Ultra比で音質は劣る'],
  'Boseのノイキャンは欲しいが予算を抑えたい人に最適。通勤やテレワーク用途なら十分すぎる性能。',
  NOW()
);

-- 6. Anker Soundcore Space One
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
  'B0CGR4XL3V',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'Anker Soundcore Space One ワイヤレスノイズキャンセリングヘッドホン',
  'anker-soundcore-space-one',
  'Anker', 'Anker',
  9990, 'JPY', 12990, NOW(),
  'https://www.amazon.co.jp/dp/B0CGR4XL3V',
  'https://www.amazon.co.jp/dp/B0CGR4XL3V?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51EPdNFnTGL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51EPdNFnTGL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51EPdNFnTGL._AC_SL160_.jpg',
  4.3, 3800, '在庫あり',
  ARRAY['最大98%ノイズ低減のANC', 'LDAC対応ハイレゾワイヤレス', '最大55時間の長時間再生', '40mmドライバー搭載', 'マルチポイント接続', '5分充電で4時間再生の急速充電'],
  '{"ドライバー": "40mm ダイナミック", "ノイキャン": "ウルトラノイズキャンセリング", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大55時間（ANC OFF）", "重量": "約263g", "充電": "USB-C", "Bluetooth": "5.3", "折りたたみ": "可"}'::jsonb,
  true, true, 6,
  '1万円以下でLDAC対応ANCヘッドホンという驚異的なコスパ。55時間バッテリーや98%ノイズ低減など、価格を超えた性能を実現。',
  ARRAY['1万円以下の圧倒的コスパ', 'LDAC対応の高音質', '55時間の超長時間バッテリー', '折りたたみ可能でコンパクト'],
  ARRAY['ハイエンド機ほどの音質ではない', 'プラスチック感がある', '側圧がやや強め'],
  '1万円以下のANCヘッドホンではNo.1。初めてのノイキャンヘッドホンや、コスパ重視の方に最適。',
  NOW()
);

-- 7. Sennheiser MOMENTUM 4 Wireless
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
  'B0B6GHP7GH',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'ゼンハイザー MOMENTUM 4 Wireless ノイズキャンセリングヘッドホン',
  'sennheiser-momentum-4',
  'Sennheiser', 'ゼンハイザー',
  39800, 'JPY', 54780, NOW(),
  'https://www.amazon.co.jp/dp/B0B6GHP7GH',
  'https://www.amazon.co.jp/dp/B0B6GHP7GH?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51X3q-DDAEL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51X3q-DDAEL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51X3q-DDAEL._AC_SL160_.jpg',
  4.4, 1500, '在庫あり',
  ARRAY['ゼンハイザー伝統の42mmトランスデューサー', 'aptX Adaptive/LDAC対応', 'アダプティブノイズキャンセリング', '最大60時間バッテリー', 'Sound Personalizationカスタマイズ', '折りたたみ可能'],
  '{"ドライバー": "42mm", "ノイキャン": "アダプティブANC", "コーデック": "aptX Adaptive/LDAC/AAC/SBC", "バッテリー": "最大60時間", "重量": "約293g", "充電": "USB-C", "Bluetooth": "5.2", "折りたたみ": "可"}'::jsonb,
  false, true, 7,
  'ゼンハイザーのフラッグシップ。42mmトランスデューサーによる高解像度サウンドと60時間の超ロングバッテリーが特徴。音質重視派に支持されるモデル。',
  ARRAY['ゼンハイザーの高解像度サウンド', '60時間の驚異的バッテリー', 'aptX Adaptive+LDAC両対応', 'スタイリッシュなデザイン'],
  ARRAY['ノイキャンはソニー・Boseに一歩及ばない', '293gとやや重い', '価格が約4万円と高め'],
  '音質を最重視するならこれ。ゼンハイザーの音作りは別格で、60時間バッテリーは出張や長距離フライトに最適。',
  NOW()
);

-- 8. JBL TUNE 770NC
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
  'B0CTP7LKRG',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'JBL TUNE 770NC ワイヤレスノイズキャンセリングヘッドホン',
  'jbl-tune-770nc',
  'JBL', 'JBL',
  7900, 'JPY', 11000, NOW(),
  'https://www.amazon.co.jp/dp/B0CTP7LKRG',
  'https://www.amazon.co.jp/dp/B0CTP7LKRG?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51OW8GBPWZL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51OW8GBPWZL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51OW8GBPWZL._AC_SL160_.jpg',
  4.3, 2800, '在庫あり',
  ARRAY['JBL Pure Bassサウンド', 'アダプティブノイズキャンセリング', '最大44時間バッテリー', 'マルチポイント接続', 'JBLアプリでEQカスタマイズ', '軽量設計'],
  '{"ドライバー": "40mm", "ノイキャン": "アダプティブANC", "コーデック": "AAC/SBC", "バッテリー": "最大44時間（ANC ON）", "重量": "約226g", "充電": "USB-C", "Bluetooth": "5.3", "折りたたみ": "可"}'::jsonb,
  false, true, 8,
  '8000円以下で買えるJBLのANCヘッドホン。Pure Bassサウンドによる迫力ある低音と44時間バッテリーが魅力。軽量226gで通勤にも最適。',
  ARRAY['8000円以下の高コスパ', 'JBLらしい迫力の低音', '44時間の長時間バッテリー', '226gの軽量設計'],
  ARRAY['LDAC非対応', 'ノイキャン性能はハイエンドに及ばない', 'プラスチック質感'],
  '低価格でJBLの迫力サウンドとANCが楽しめるエントリーモデル。初めてのヘッドホンに最適。',
  NOW()
);

-- 9. Audio-Technica ATH-M50xBT2
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
  'B09BYZ1T4W',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'オーディオテクニカ ATH-M50xBT2 ワイヤレスヘッドホン LDAC対応',
  'audio-technica-ath-m50xbt2',
  'Audio-Technica', 'オーディオテクニカ',
  18500, 'JPY', 24200, NOW(),
  'https://www.amazon.co.jp/dp/B09BYZ1T4W',
  'https://www.amazon.co.jp/dp/B09BYZ1T4W?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51SrKjRDBKL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51SrKjRDBKL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51SrKjRDBKL._AC_SL160_.jpg',
  4.5, 2200, '在庫あり',
  ARRAY['スタジオモニター直系の高解像度サウンド', 'LDAC/AAC対応ハイレゾワイヤレス', '最大50時間バッテリー', '45mm大口径ドライバー', 'マルチポイント接続', '有線接続にも対応'],
  '{"ドライバー": "45mm CCAWボイスコイル", "ノイキャン": "非搭載", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大50時間", "重量": "約307g", "充電": "USB-C", "Bluetooth": "5.0", "折りたたみ": "可"}'::jsonb,
  false, true, 9,
  'プロ御用達M50xのワイヤレス版。ANCは搭載していないが、スタジオモニター直系のフラットで正確なサウンドが魅力。音楽制作者やオーディオ愛好家に。',
  ARRAY['スタジオモニター品質の正確なサウンド', 'LDAC対応の高音質', '50時間の超ロングバッテリー', '有線でも使える汎用性'],
  ARRAY['ANC非搭載', '307gとやや重い', '装着感がタイトで好みが分かれる'],
  'ANCよりも音質を最優先するなら最高の選択肢。DTMや音楽鑑賞にはプロ品質の原音忠実サウンドが活きる。',
  NOW()
);

-- 10. Edifier W820NB Plus
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
  'B0CBFHSY28',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'Edifier W820NB Plus ワイヤレスノイズキャンセリングヘッドホン LDAC対応',
  'edifier-w820nb-plus',
  'Edifier', 'Edifier',
  5980, 'JPY', 7980, NOW(),
  'https://www.amazon.co.jp/dp/B0CBFHSY28',
  'https://www.amazon.co.jp/dp/B0CBFHSY28?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51ZZ7CW+daL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51ZZ7CW+daL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51ZZ7CW+daL._AC_SL160_.jpg',
  4.2, 1900, '在庫あり',
  ARRAY['-43dBハイブリッドANC', 'LDAC対応ハイレゾワイヤレス', '最大49時間バッテリー', '40mmダイナミックドライバー', 'ゲーミングモード搭載', 'マルチポイント接続'],
  '{"ドライバー": "40mm ダイナミック", "ノイキャン": "-43dB ハイブリッドANC", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大49時間（ANC OFF）", "重量": "約228g", "充電": "USB-C", "Bluetooth": "5.2", "折りたたみ": "可"}'::jsonb,
  false, true, 10,
  '6000円以下でLDAC対応ANCヘッドホンを実現した超コスパモデル。-43dBのハイブリッドANCと49時間バッテリーで日常使いに十分な性能。',
  ARRAY['6000円以下の驚異的コスパ', 'LDAC対応', '49時間バッテリー', '228gの軽量設計'],
  ARRAY['ノイキャンは-43dBで控えめ', 'ビルドクオリティは価格相応', 'マイク音質がやや弱い'],
  '予算6000円で最大限の性能を求めるなら最有力。LDAC対応ANCヘッドホンとしては最安クラス。',
  NOW()
);

-- 11. Panasonic RP-HD610N
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
  'B0BXHBYV6X',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'パナソニック RP-HD610N ワイヤレスノイズキャンセリングヘッドホン ハイレゾ対応',
  'panasonic-rp-hd610n',
  'Panasonic', 'パナソニック',
  15000, 'JPY', 24800, NOW(),
  'https://www.amazon.co.jp/dp/B0BXHBYV6X',
  'https://www.amazon.co.jp/dp/B0BXHBYV6X?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41g+cDRGIpL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41g+cDRGIpL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41g+cDRGIpL._AC_SL160_.jpg',
  4.1, 800, '在庫あり',
  ARRAY['LDAC対応ハイレゾワイヤレス', 'デュアルハイブリッドANC', '40mmHDドライバー', '最大20時間バッテリー', '有線ハイレゾ再生対応', 'タッチ&トーク機能'],
  '{"ドライバー": "40mm HD", "ノイキャン": "デュアルハイブリッドANC", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大20時間（ANC ON）", "重量": "約265g", "充電": "USB-C", "Bluetooth": "5.2", "折りたたみ": "可"}'::jsonb,
  false, true, 11,
  'パナソニックのハイレゾ対応ANCヘッドホン。有線接続時にハイレゾ再生が可能で、LDAC対応のワイヤレスハイレゾにも対応。国産メーカーの安心感。',
  ARRAY['LDAC+有線ハイレゾ両対応', '1.5万円の手頃な価格', '国産メーカーの信頼性', 'デュアルハイブリッドANC'],
  ARRAY['バッテリーが20時間と短め', 'ブランド力でソニー・Boseに劣る', 'アプリの完成度が低い'],
  'ハイレゾを手頃な価格で楽しみたい人向け。有線ハイレゾ対応は音質にこだわる人に嬉しいポイント。',
  NOW()
);

-- 12. AKG K371-BT
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
  'B083LCZGRN',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'AKG K371-BT 密閉型 ワイヤレスヘッドホン Bluetooth 5.0',
  'akg-k371-bt',
  'AKG', 'AKG',
  12800, 'JPY', 17600, NOW(),
  'https://www.amazon.co.jp/dp/B083LCZGRN',
  'https://www.amazon.co.jp/dp/B083LCZGRN?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51pnc2JxZNL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51pnc2JxZNL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51pnc2JxZNL._AC_SL160_.jpg',
  4.3, 1100, '在庫あり',
  ARRAY['AKG伝統のスタジオサウンド', '50mmドライバー搭載', 'Harmanターゲットカーブ準拠', '最大40時間バッテリー', '有線/無線両対応', '折りたたみ可能'],
  '{"ドライバー": "50mm", "ノイキャン": "非搭載（密閉型パッシブ）", "コーデック": "AAC/SBC", "バッテリー": "最大40時間", "重量": "約278g", "充電": "USB-C", "Bluetooth": "5.0", "折りたたみ": "可"}'::jsonb,
  false, true, 12,
  'AKGのスタジオモニター系ワイヤレス。ANCは搭載していないが、密閉型の遮音性とHarmanカーブに忠実なフラットサウンドが魅力。',
  ARRAY['スタジオ品質のフラットサウンド', '50mm大口径ドライバー', '40時間バッテリー', '有線でも高音質'],
  ARRAY['ANC非搭載', 'Bluetooth 5.0でやや古い', 'コーデックがAAC/SBCのみ'],
  '音楽制作やミキシング用途ならATH-M50xBT2と並ぶ最有力候補。フラットな音質を求める人に。',
  NOW()
);

-- 13. Anker Soundcore Life Q35
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
  'B09BF25MKJ',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'Anker Soundcore Life Q35 ワイヤレスヘッドホン LDAC対応 ANC搭載',
  'anker-soundcore-life-q35',
  'Anker', 'Anker',
  8990, 'JPY', 10990, NOW(),
  'https://www.amazon.co.jp/dp/B09BF25MKJ',
  'https://www.amazon.co.jp/dp/B09BF25MKJ?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/61V7A2no9+L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/61V7A2no9+L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/61V7A2no9+L._AC_SL160_.jpg',
  4.4, 6500, '在庫あり',
  ARRAY['LDAC対応ハイレゾワイヤレス', 'ハイブリッドアクティブノイズキャンセリング', '最大40時間バッテリー', '40mmシルクダイヤフラムドライバー', 'マルチポイント接続', '3つのノイキャンモード'],
  '{"ドライバー": "40mm シルクダイヤフラム", "ノイキャン": "ハイブリッドANC（3モード）", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大40時間（ANC ON）", "重量": "約270g", "充電": "USB-C", "Bluetooth": "5.0", "折りたたみ": "可"}'::jsonb,
  false, true, 13,
  'Ankerのロングセラー中価格帯モデル。1万円以下でLDAC対応ANCを実現し、累計レビュー6500件超の実績。3つのノイキャンモードで環境に応じた調整が可能。',
  ARRAY['1万円以下でLDAC+ANC', 'レビュー6500件超の安心感', '40時間バッテリー', '3段階ノイキャン調整'],
  ARRAY['Space Oneの登場で型落ち感', '音質はハイエンドに及ばない', 'Bluetooth 5.0'],
  'Space Oneよりやや安く手に入ることも。Amazonセールで狙い目のコスパモデル。',
  NOW()
);
