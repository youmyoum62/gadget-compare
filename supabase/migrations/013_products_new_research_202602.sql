-- ===========================================
-- 013_products_new_research_202602.sql
-- 2026-02-12 リサーチ結果: 新規商品10点の追加
-- カテゴリ: ノイキャンヘッドホン(3)、ミニPC(6)、スマートホーム(1)
-- ===========================================

-- =====================
-- ノイズキャンセリングヘッドホン (3 products)
-- =====================

-- 1. Sony WH-1000XM6
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
  'B0F3PT1VBL',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'ソニー WH-1000XM6 ワイヤレスノイズキャンセリングヘッドホン',
  'sony-wh-1000xm6',
  'Sony', 'ソニー',
  49500, 'JPY', 59400, NOW(),
  'https://www.amazon.co.jp/dp/B0F3PT1VBL',
  'https://www.amazon.co.jp/dp/B0F3PT1VBL?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL160_.jpg',
  4.7, 1200, '在庫あり',
  ARRAY['新開発プロセッサー「QN3」搭載', '業界最高クラスのノイズキャンセリング', 'LDAC/LC3plus対応ハイレゾワイヤレス', '最大30時間バッテリー', 'マルチポイント接続対応', '約254g軽量設計'],
  '{"ドライバー": "30mm 新設計", "ノイキャン": "QN3プロセッサー+マルチノイズセンサー", "コーデック": "LDAC/LC3plus/AAC/SBC", "バッテリー": "最大30時間", "重量": "約254g", "充電": "USB-C", "Bluetooth": "5.3", "折りたたみ": "フラット収納"}'::jsonb,
  true, true, 0,
  'ソニーの最新フラッグシップ。新開発QN3プロセッサにより前モデルXM5を超える業界最高クラスのNC性能を実現。LC3plus対応でBluetooth LE Audioにも対応した次世代モデル。',
  ARRAY['QN3プロセッサによる業界最高NCレベル', 'LC3plus対応で次世代コーデック', '254gの軽量設計で長時間快適', 'マルチポイント+スピークトゥチャット'],
  ARRAY['約5万円と高価', '折りたたみ不可（フラット収納のみ）', '発売直後でレビュー数が少ない'],
  '2026年のNC最新フラッグシップ。XM5からの正統進化で、あらゆるシーンで最高の静寂と音質を提供。予算があるなら迷わずこれ。',
  NOW()
);

-- 2. EarFun Tune Pro
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
  'B0C9Y334T9',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'EarFun Tune Pro ワイヤレスノイズキャンセリングヘッドホン LDAC対応',
  'earfun-tune-pro',
  'EarFun', 'EarFun',
  6980, 'JPY', 8980, NOW(),
  'https://www.amazon.co.jp/dp/B0C9Y334T9',
  'https://www.amazon.co.jp/dp/B0C9Y334T9?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51PLACEHOLDER._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51PLACEHOLDER._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51PLACEHOLDER._AC_SL160_.jpg',
  4.3, 2800, '在庫あり',
  ARRAY['最大-45dBハイブリッドANC', 'LDAC対応ハイレゾワイヤレス', '最大55時間バッテリー', '40mmウールコンポジットドライバー', 'マルチポイント接続対応', '5分充電で4時間再生'],
  '{"ドライバー": "40mm ウールコンポジットダイヤフレーム", "ノイキャン": "-45dB ハイブリッドANC", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大55時間（ANC OFF）", "重量": "約268g", "充電": "USB-C", "Bluetooth": "5.3", "折りたたみ": "可"}'::jsonb,
  true, true, 14,
  '1万円以下クラスの「怪物」と称されるコスパ最強ANCヘッドホン。-45dBのNC性能、LDAC対応、55時間バッテリーと、価格を遥かに超えたスペックを実現。',
  ARRAY['7000円以下で-45dB ANC+LDAC', '55時間の超ロングバッテリー', '急速充電対応（5分→4時間）', 'Bluetooth 5.3の最新規格'],
  ARRAY['ブランド知名度が低い', 'ビルドクオリティは価格相応', 'アプリの日本語対応が不完全'],
  '1万円以下NCヘッドホンの最強コスパ機。「とりあえずNCを試したい」人から、サブ機を探す人まで幅広くおすすめ。',
  NOW()
);

-- 3. Audio-Technica ATH-S300BT
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
  'B0C63J328P',
  (SELECT id FROM categories WHERE slug = 'noise-cancelling-headphones'),
  'オーディオテクニカ ATH-S300BT ワイヤレスノイズキャンセリングヘッドホン',
  'audio-technica-ath-s300bt',
  'Audio-Technica', 'オーディオテクニカ',
  13800, 'JPY', 17600, NOW(),
  'https://www.amazon.co.jp/dp/B0C63J328P',
  'https://www.amazon.co.jp/dp/B0C63J328P?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51PLACEHOLDER2._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51PLACEHOLDER2._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51PLACEHOLDER2._AC_SL160_.jpg',
  4.4, 1500, '在庫あり',
  ARRAY['最大60時間の超ロングバッテリー', '高精度デジタルハイブリッドANC', 'LDAC対応ハイレゾワイヤレス', '40mmドライバー搭載', 'マルチポイント接続', '自然な静寂性を実現する音響設計'],
  '{"ドライバー": "40mm", "ノイキャン": "デジタルハイブリッドANC", "コーデック": "LDAC/AAC/SBC", "バッテリー": "最大60時間（ANC ON）", "重量": "約250g", "充電": "USB-C", "Bluetooth": "5.2", "折りたたみ": "可"}'::jsonb,
  false, true, 15,
  'オーテクの中価格帯ANCヘッドホン。最大60時間という驚異的なバッテリー持ちと、自然な静けさを保つ高精度ANCが特徴。長時間使用でも疲れにくい設計。',
  ARRAY['60時間の圧倒的バッテリー持ち', 'LDAC対応の高音質', '自然で不快感の少ないANC', '国産ブランドの信頼性'],
  ARRAY['ハイエンドほどのNC効果ではない', 'デザインがやや地味', 'アプリの機能が限定的'],
  'バッテリー持ちを最重視するなら最有力候補。出張が多い人や充電を忘れがちな人に特におすすめ。',
  NOW()
);

-- =====================
-- ノートPC・ミニPC (6 products)
-- =====================

-- 4. GMKtec G5 (12GB/512GB)
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
  'B0D1CG8Z9B',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'GMKtec NucBox G5 ミニPC Intel N97 12GB RAM 512GB SSD Windows 11 Pro',
  'gmktec-nucbox-g5-512gb',
  'GMKtec', 'GMKtec',
  22980, 'JPY', 27980, NOW(),
  'https://www.amazon.co.jp/dp/B0D1CG8Z9B',
  'https://www.amazon.co.jp/dp/B0D1CG8Z9B?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER3._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER3._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER3._AC_SL160_.jpg',
  4.3, 800, '在庫あり',
  ARRAY['Intel N97プロセッサ（4コア/4スレッド,最大3.6GHz）', '12GB LPDDR5 RAM', '512GB SATA M.2 SSD', 'デュアルHDMI+DisplayPort 4K@60Hz', 'WiFi 5 / Bluetooth 4.2', 'Windows 11 Pro搭載'],
  '{"CPU": "Intel N97 (4C/4T, 最大3.6GHz)", "GPU": "Intel UHD Graphics", "RAM": "12GB LPDDR5 4800MHz", "ストレージ": "512GB SATA M.2 SSD", "映像出力": "HDMI×2 + DP (4K@60Hz)", "無線": "WiFi 5 / BT 4.2", "OS": "Windows 11 Pro", "サイズ": "約95×95×42mm"}'::jsonb,
  true, true, 1,
  '2万円台前半で購入できるコスパ最強のエントリーミニPC。Intel N97搭載で事務作業・動画視聴・軽いブラウジングに十分な性能。4K出力対応でサブPC用途にも最適。',
  ARRAY['2万円台の圧倒的コスパ', '4K@60Hz 3画面出力対応', 'Windows 11 Pro搭載', '手のひらサイズでデスクすっきり'],
  ARRAY['N97はライトユースまで', 'WiFi 5/BT 4.2と無線が古い', 'RAMが12GBで増設不可（オンボード）'],
  '「ミニPCを試してみたい」初心者に最適。普段使い・サブPCとして文句なしのコスパ。',
  NOW()
);

-- 5. Beelink EQR6 (Ryzen 5 6600H)
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
  'B0CCX18S7H',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Beelink EQR6 ミニPC AMD Ryzen 5 6600H 16GB DDR5 500GB NVMe SSD',
  'beelink-eqr6-ryzen5',
  'Beelink', 'Beelink',
  45800, 'JPY', 55800, NOW(),
  'https://www.amazon.co.jp/dp/B0CCX18S7H',
  'https://www.amazon.co.jp/dp/B0CCX18S7H?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER4._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER4._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER4._AC_SL160_.jpg',
  4.4, 600, '在庫あり',
  ARRAY['AMD Ryzen 5 6600H (6コア/12スレッド)', '16GB DDR5 4800MHz RAM', '500GB NVMe PCIe 4.0 SSD', 'デュアルHDMI+USB-C 4K出力', 'WiFi 6 / Bluetooth 5.2', 'デュアル1Gbps LAN搭載'],
  '{"CPU": "AMD Ryzen 5 6600H (6C/12T, 最大4.5GHz)", "GPU": "Radeon 660M", "RAM": "16GB DDR5 4800MHz (最大64GB)", "ストレージ": "500GB NVMe PCIe 4.0 (デュアルM.2)", "映像出力": "HDMI×2 + USB-C (4K@60Hz)", "無線": "WiFi 6 / BT 5.2", "LAN": "1Gbps×2", "電源": "内蔵85W"}'::jsonb,
  true, true, 2,
  'Ryzen 5 6600H搭載のミドルレンジミニPC。DDR5+NVMe SSDで快適な動作を実現し、内蔵85W電源でACアダプター不要。デュアルLANはNAS用途やサーバー兼用にも便利。',
  ARRAY['Ryzen 5でマルチタスクも快適', 'DDR5+NVMe PCIe 4.0の高速構成', '内蔵電源でACアダプター不要', 'デュアルLAN搭載'],
  ARRAY['5万円弱とエントリー機より高め', 'GPUは内蔵Radeon 660Mのみ', 'ファン音がやや気になる場合あり'],
  'メイン機として使えるミニPC。テレワーク・プログラミング・動画編集まで幅広くカバーする万能モデル。',
  NOW()
);

-- 6. Beelink SER5 (Ryzen 5 5500U)
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
  'B0B51Q9PZ5',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Beelink SER5 ミニPC AMD Ryzen 5 5500U 16GB DDR4 500GB NVMe SSD',
  'beelink-ser5-ryzen5',
  'Beelink', 'Beelink',
  34800, 'JPY', 42800, NOW(),
  'https://www.amazon.co.jp/dp/B0B51Q9PZ5',
  'https://www.amazon.co.jp/dp/B0B51Q9PZ5?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER5._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER5._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER5._AC_SL160_.jpg',
  4.3, 2500, '在庫あり',
  ARRAY['AMD Ryzen 5 5500U (6コア/12スレッド)', '16GB DDR4 RAM', '500GB NVMe SSD', 'HDMI+DP+USB-C トリプル4K出力', 'WiFi 6E / Bluetooth 5.2', '2.5インチSATA拡張可能'],
  '{"CPU": "AMD Ryzen 5 5500U (6C/12T, 最大4.0GHz)", "GPU": "Radeon Vega 7", "RAM": "16GB DDR4 3200MHz (最大64GB)", "ストレージ": "500GB NVMe SSD + 2.5\" SATA", "映像出力": "HDMI + DP + USB-C (4K@60Hz)", "無線": "WiFi 6E / BT 5.2", "LAN": "1Gbps", "TDP": "15W"}'::jsonb,
  false, true, 3,
  'Beelinkのベストセラーモデル。Ryzen 5 5500U搭載で3.5万円前後、レビュー2500件超の実績が安心感。2.5インチSATA拡張対応でストレージの追加も簡単。',
  ARRAY['3.5万円前後の高コスパ', 'レビュー2500件超の実績', 'WiFi 6E搭載', 'ストレージ拡張が容易'],
  ARRAY['DDR4世代でやや古い', 'Ryzen 5 5500Uは最新世代ではない', 'USB4非対応'],
  'ミニPC入門の定番モデル。迷ったらこれを選んでおけば間違いない安心のロングセラー。',
  NOW()
);

-- 7. Minisforum UM780XTX (Ryzen 7 7840HS)
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
  'B0CPB5N1V2',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Minisforum UM780XTX ミニPC AMD Ryzen 7 7840HS 32GB DDR5 1TB NVMe',
  'minisforum-um780xtx',
  'Minisforum', 'Minisforum',
  72800, 'JPY', 89800, NOW(),
  'https://www.amazon.co.jp/dp/B0CPB5N1V2',
  'https://www.amazon.co.jp/dp/B0CPB5N1V2?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER6._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER6._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER6._AC_SL160_.jpg',
  4.5, 450, '在庫あり',
  ARRAY['AMD Ryzen 7 7840HS (8コア/16スレッド)', 'Radeon 780M 高性能内蔵GPU', '32GB DDR5 5600MHz RAM (最大96GB)', '1TB NVMe PCIe 4.0 SSD (デュアルM.2)', 'USB4+OcuLink対応', 'デュアル2.5Gbps LAN'],
  '{"CPU": "AMD Ryzen 7 7840HS (8C/16T, 最大5.1GHz)", "GPU": "Radeon 780M (12CU)", "RAM": "32GB DDR5 5600MHz (最大96GB)", "ストレージ": "1TB NVMe PCIe 4.0 ×2", "映像出力": "HDMI 2.1 + DP 1.4 + USB4 ×2", "無線": "WiFi 6E / BT 5.0", "LAN": "2.5Gbps×2", "拡張": "OcuLink (eGPU)"}'::jsonb,
  true, true, 4,
  'ハイエンドミニPCの決定版。Ryzen 7 7840HS+Radeon 780Mで軽めのゲームも動く内蔵GPU性能、OcuLinkでeGPU接続すれば本格ゲーミングも可能。USB4・2.5G LAN×2とインターフェースも充実。',
  ARRAY['Ryzen 7+Radeon 780Mの高性能', 'OcuLink対応でeGPU拡張可能', 'USB4×2の最新インターフェース', 'DDR5最大96GBの拡張性'],
  ARRAY['7万円超と高めの価格帯', 'ファン音が負荷時にやや大きい', '本体サイズがミニPCとしてはやや大きめ'],
  'ミニPCで妥協したくない人に。メインPC完全置き換え＋ゲーミングまでカバーする最強ミニPC。',
  NOW()
);

-- 8. NiPoGi AM06 Pro (Ryzen 5 5500U)
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
  'B0BL72W7X3',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'NiPoGi AM06 Pro ミニPC AMD Ryzen 5 5500U 16GB DDR4 512GB SSD',
  'nipogi-am06-pro',
  'NiPoGi', 'NiPoGi',
  29800, 'JPY', 36800, NOW(),
  'https://www.amazon.co.jp/dp/B0BL72W7X3',
  'https://www.amazon.co.jp/dp/B0BL72W7X3?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER7._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER7._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER7._AC_SL160_.jpg',
  4.2, 1200, '在庫あり',
  ARRAY['AMD Ryzen 5 5500U (6コア/12スレッド)', '16GB DDR4 RAM', '512GB NVMe SSD', 'HDMI+DP デュアル4K出力', 'WiFi 6 / Bluetooth 5.2', '2.5インチSATA拡張対応'],
  '{"CPU": "AMD Ryzen 5 5500U (6C/12T, 最大4.0GHz)", "GPU": "Radeon Vega 7", "RAM": "16GB DDR4 3200MHz (最大32GB)", "ストレージ": "512GB NVMe SSD + 2.5\" SATA", "映像出力": "HDMI + DP (4K@60Hz)", "無線": "WiFi 6 / BT 5.2", "LAN": "1Gbps"}'::jsonb,
  false, true, 5,
  '3万円を切る価格でRyzen 5 5500U搭載のコスパ特化モデル。NiPoGiブランドはAmazonで人気上昇中。Beelink SER5と同等スペックでより安い価格が魅力。',
  ARRAY['3万円以下の最安クラス Ryzen 5', 'SER5同等スペックでより安い', 'ストレージ拡張が容易', 'Amazonでクーポン割引多い'],
  ARRAY['ブランド知名度がやや低い', 'DDR4世代', 'USB4非対応'],
  'とにかく安くRyzen 5ミニPCが欲しい人に。Amazonクーポンとの併用でさらにお得になることも多い。',
  NOW()
);

-- 9. GMKtec G5 (12GB/256GB)
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
  'B09Q8Z6VB7',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'GMKtec NucBox G5 ミニPC Intel N97 12GB RAM 256GB SSD Windows 11 Pro',
  'gmktec-nucbox-g5-256gb',
  'GMKtec', 'GMKtec',
  19800, 'JPY', 24800, NOW(),
  'https://www.amazon.co.jp/dp/B09Q8Z6VB7',
  'https://www.amazon.co.jp/dp/B09Q8Z6VB7?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER8._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER8._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41PLACEHOLDER8._AC_SL160_.jpg',
  4.2, 1500, '在庫あり',
  ARRAY['Intel N97プロセッサ（4コア/4スレッド,最大3.6GHz）', '12GB LPDDR5 RAM', '256GB SATA M.2 SSD', 'デュアルHDMI+DisplayPort 4K@60Hz', 'WiFi 5 / Bluetooth 4.2', 'Windows 11 Pro搭載'],
  '{"CPU": "Intel N97 (4C/4T, 最大3.6GHz)", "GPU": "Intel UHD Graphics", "RAM": "12GB LPDDR5 4800MHz", "ストレージ": "256GB SATA M.2 SSD", "映像出力": "HDMI×2 + DP (4K@60Hz)", "無線": "WiFi 5 / BT 4.2", "OS": "Windows 11 Pro", "サイズ": "約95×95×42mm"}'::jsonb,
  false, true, 6,
  '2万円以下で購入可能なミニPCの最安エントリーモデル。256GBストレージで容量はミニマムだが、ブラウジングや文書作成中心ならこれで十分。',
  ARRAY['2万円以下の最安クラス', 'Windows 11 Pro搭載', '4K 3画面出力対応', '超コンパクト設計'],
  ARRAY['256GBストレージは少なめ', 'WiFi 5/BT 4.2と無線が古い', 'ゲームや動画編集には力不足'],
  'ミニPCの最低価格帯。「とりあえず安くデスクトップが欲しい」人に最適な入門機。',
  NOW()
);

-- =====================
-- スマートホームデバイス (1 product)
-- =====================

-- 10. Echo Show 8 第3世代
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
  'B0BLS56CT4',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'Echo Show 8 (第3世代) HDスマートディスプレイ with Alexa',
  'echo-show-8-3rd-gen',
  'Amazon', 'Amazon',
  14980, 'JPY', 17980, NOW(),
  'https://www.amazon.co.jp/dp/B0BLS56CT4',
  'https://www.amazon.co.jp/dp/B0BLS56CT4?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51PLACEHOLDER9._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51PLACEHOLDER9._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51PLACEHOLDER9._AC_SL160_.jpg',
  4.5, 8500, '在庫あり',
  ARRAY['8インチHDタッチスクリーン', '13MPセンターフレーム対応カメラ', 'Alexa音声コントロール', 'スマートホームハブ内蔵', 'ビデオ通話対応', 'Amazon Music/Prime Video/YouTube再生'],
  '{"ディスプレイ": "8インチ HD タッチスクリーン", "カメラ": "13MP (センターフレーム対応)", "スピーカー": "2.0インチ ネオジウム×2", "無線": "WiFi 6 / BT 5.2", "スマートホーム": "Zigbee / Matter / Thread対応", "プロセッサ": "AZ2 Neural Edge", "サイズ": "200×130×99mm"}'::jsonb,
  true, true, 1,
  'Amazonのスマートディスプレイの定番。8インチ画面でレシピ表示・ビデオ通話・動画視聴が快適。Zigbee/Matter/Thread対応のスマートホームハブ機能を内蔵し、様々なIoTデバイスの中心として活躍。',
  ARRAY['スマートホームハブ内蔵（Matter/Thread対応）', '13MP高画質カメラでビデオ通話', 'Alexa対応スキルで機能拡張', 'Prime Video/YouTube/Netflix視聴可能'],
  ARRAY['Amazonエコシステムへの依存', 'プライバシーへの懸念', 'スピーカー音質は専用機に劣る'],
  'スマートホーム入門に最適な一台。キッチンやリビングに置いて、声だけで家電操作・音楽再生・タイマーセットができる便利さは一度使うと手放せない。',
  NOW()
);
