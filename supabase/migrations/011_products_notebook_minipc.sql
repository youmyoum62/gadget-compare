-- ===========================================
-- 011_products_notebook_minipc.sql
-- カテゴリ: ノートPC・ミニPC (13商品)
-- Date: 2026-02-12
-- ===========================================

-- 1. Apple MacBook Air M3 13インチ
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
  'B0CX22ZW1T',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Apple MacBook Air 13インチ M3チップ 8GB/256GB ミッドナイト',
  'macbook-air-m3-13',
  'Apple', 'Apple',
  148800, 'JPY', 164800, NOW(),
  'https://www.amazon.co.jp/dp/B0CX22ZW1T',
  'https://www.amazon.co.jp/dp/B0CX22ZW1T?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SL160_.jpg',
  4.7, 2500, '在庫あり',
  ARRAY['Apple M3チップ搭載', '13.6インチ Liquid Retinaディスプレイ', '最大18時間バッテリー', 'ファンレス静音設計', 'MagSafe充電対応', '1080p FaceTimeカメラ'],
  '{"CPU": "Apple M3 (8コアCPU/10コアGPU)", "メモリ": "8GB ユニファイドメモリ", "ストレージ": "256GB SSD", "ディスプレイ": "13.6インチ Liquid Retina (2560×1664)", "バッテリー": "最大18時間", "重量": "約1.24kg", "ポート": "MagSafe/USB-C×2/3.5mmジャック", "OS": "macOS"}'::jsonb,
  true, true, 1,
  'M3チップ搭載の最新MacBook Air。圧倒的な性能と18時間バッテリー、ファンレス静音設計を約1.24kgの軽量ボディに凝縮。クリエイティブワークからビジネスまで万能。',
  ARRAY['M3チップの高性能', '18時間の超ロングバッテリー', 'ファンレスで完全静音', '1.24kgの軽量設計'],
  ARRAY['メモリ8GBは将来的に不足する可能性', '256GB SSDは最小限', 'ポートがUSB-C×2のみ'],
  '最も多くの人におすすめできるノートPC。性能・バッテリー・携帯性のバランスが完璧。',
  NOW()
);

-- 2. Lenovo IdeaPad Slim 5 14
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
  'B0D5DWXVMQ',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Lenovo IdeaPad Slim 5 14型 Ryzen 7 7730U 16GB/512GB',
  'lenovo-ideapad-slim-5-14',
  'Lenovo', 'Lenovo',
  79800, 'JPY', 99800, NOW(),
  'https://www.amazon.co.jp/dp/B0D5DWXVMQ',
  'https://www.amazon.co.jp/dp/B0D5DWXVMQ?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51vz+OI2tFL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51vz+OI2tFL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51vz+OI2tFL._AC_SL160_.jpg',
  4.3, 1800, '在庫あり',
  ARRAY['Ryzen 7 7730U プロセッサー', '16GB LPDDR5メモリ', '512GB NVMe SSD', '14インチ WUXGA IPS 100% sRGB', '最大約13時間バッテリー', 'アルミニウムボディ'],
  '{"CPU": "AMD Ryzen 7 7730U (8コア/16スレッド)", "メモリ": "16GB LPDDR5", "ストレージ": "512GB NVMe SSD", "ディスプレイ": "14インチ WUXGA IPS (1920×1200)", "バッテリー": "最大約13時間", "重量": "約1.46kg", "ポート": "USB-C×1/USB-A×2/HDMI/SDカード", "OS": "Windows 11 Home"}'::jsonb,
  true, true, 2,
  '8万円以下でRyzen 7・16GB・512GBを実現した高コスパノートPC。14インチWUXGA IPSディスプレイとアルミボディの質感も価格以上。',
  ARRAY['8万円以下の驚異的コスパ', '16GB/512GBの十分なスペック', 'ポート類が豊富', 'アルミボディの高品質感'],
  ARRAY['GPU性能は控えめ', 'ディスプレイが非タッチ', '重量1.46kgはやや重め'],
  'コスパ最強の14インチノートPC。ビジネスや学生用途なら文句なしのスペック。',
  NOW()
);

-- 3. ASUS Zenbook 14 OLED
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
  'B0CTZMDPS5',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'ASUS Zenbook 14 OLED UX3405MA Core Ultra 5 16GB/512GB',
  'asus-zenbook-14-oled',
  'ASUS', 'ASUS',
  119800, 'JPY', 149800, NOW(),
  'https://www.amazon.co.jp/dp/B0CTZMDPS5',
  'https://www.amazon.co.jp/dp/B0CTZMDPS5?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51OEnlv5jbL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51OEnlv5jbL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51OEnlv5jbL._AC_SL160_.jpg',
  4.4, 800, '在庫あり',
  ARRAY['Intel Core Ultra 5 搭載（AI PC）', '14インチ 2.8K OLED 120Hz', '100% DCI-P3色域', 'NPU搭載でAI処理に対応', '最大約12時間バッテリー', '約1.2kgの超軽量設計'],
  '{"CPU": "Intel Core Ultra 5 125H", "メモリ": "16GB LPDDR5x", "ストレージ": "512GB PCIe 4.0 SSD", "ディスプレイ": "14インチ 2.8K OLED 120Hz (2880×1800)", "バッテリー": "最大約12時間", "重量": "約1.2kg", "ポート": "Thunderbolt 4×1/USB-C×1/USB-A×1/HDMI/microSD", "OS": "Windows 11 Home"}'::jsonb,
  false, true, 3,
  'Intel Core Ultra搭載のAI対応PC。2.8K OLEDディスプレイは色再現性が圧倒的で、クリエイターにも最適。約1.2kgの軽量設計で持ち運びも楽。',
  ARRAY['2.8K OLED 120Hzの美麗ディスプレイ', 'NPU搭載でAI処理対応', '約1.2kgの超軽量', 'Thunderbolt 4対応'],
  ARRAY['約12万円とやや高い', 'OLEDの焼き付きリスク', 'ファン音がやや気になる場面も'],
  'ディスプレイ品質を重視するクリエイターや映像好きに。OLEDの発色はIPS液晶とは別次元。',
  NOW()
);

-- 4. HP Pavilion Aero 13-bg
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
  'B0D82QJ3V5',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'HP Pavilion Aero 13-bg 13.3型 Ryzen 5 8640U 16GB/512GB',
  'hp-pavilion-aero-13',
  'HP', 'HP',
  89800, 'JPY', 109800, NOW(),
  'https://www.amazon.co.jp/dp/B0D82QJ3V5',
  'https://www.amazon.co.jp/dp/B0D82QJ3V5?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51yqJxYzDAL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51yqJxYzDAL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51yqJxYzDAL._AC_SL160_.jpg',
  4.4, 1200, '在庫あり',
  ARRAY['わずか約957gの超軽量ボディ', 'Ryzen 5 8640U（NPU搭載）', '13.3インチ WUXGA IPS 非光沢', '16GB/512GB構成', '最大約11.5時間バッテリー', 'マグネシウム合金ボディ'],
  '{"CPU": "AMD Ryzen 5 8640U (6コア/12スレッド)", "メモリ": "16GB LPDDR5x", "ストレージ": "512GB PCIe Gen4 SSD", "ディスプレイ": "13.3インチ WUXGA IPS (1920×1200)", "バッテリー": "最大約11.5時間", "重量": "約957g", "ポート": "USB-C×2/USB-A×1/HDMI", "OS": "Windows 11 Home"}'::jsonb,
  false, true, 4,
  '957gという驚異的な軽さのモバイルPC。マグネシウム合金ボディで軽さと堅牢性を両立。NPU搭載のRyzen 5で将来のAI機能にも対応。',
  ARRAY['957gの超軽量', 'NPU搭載でAI対応', '16GB/512GBの十分なスペック', 'マグネシウム合金の堅牢性'],
  ARRAY['ディスプレイが標準的なIPS', 'スピーカー音質は控えめ', 'Thunderbolt非対応'],
  '持ち運びを最重視するモバイルワーカーに。1kgを切る軽さは毎日のカバンの負担を大幅に軽減。',
  NOW()
);

-- 5. MINISFORUM UM890 Pro
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
  'B0CZ7ZXZHN',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'MINISFORUM UM890 Pro ミニPC Ryzen 9 8945HS 32GB/1TB',
  'minisforum-um890-pro',
  'MINISFORUM', 'MINISFORUM',
  82800, 'JPY', 99800, NOW(),
  'https://www.amazon.co.jp/dp/B0CZ7ZXZHN',
  'https://www.amazon.co.jp/dp/B0CZ7ZXZHN?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41ZhOhgH+EL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41ZhOhgH+EL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41ZhOhgH+EL._AC_SL160_.jpg',
  4.3, 500, '在庫あり',
  ARRAY['Ryzen 9 8945HS 高性能プロセッサー', '32GB DDR5メモリ', '1TB NVMe SSD', 'トリプルディスプレイ出力対応', 'Wi-Fi 6E / Bluetooth 5.3', 'USB4対応で高速接続'],
  '{"CPU": "AMD Ryzen 9 8945HS (8コア/16スレッド)", "メモリ": "32GB DDR5-5600", "ストレージ": "1TB NVMe PCIe 4.0 SSD", "映像出力": "HDMI 2.1×1 / USB4×2 (トリプルディスプレイ)", "サイズ": "約127×128×47mm", "重量": "約530g", "ポート": "USB4×2/USB-A×3/2.5G LAN", "OS": "Windows 11 Pro"}'::jsonb,
  true, true, 5,
  'Ryzen 9搭載の高性能ミニPC。手のひらサイズながらノートPC上位を超える処理性能。32GB/1TBの余裕あるスペックでメインPCとして使える。',
  ARRAY['Ryzen 9の圧倒的処理性能', '32GB/1TBの余裕あるスペック', '手のひらサイズのコンパクト設計', 'トリプルディスプレイ対応'],
  ARRAY['ディスプレイ・キーボードは別途必要', '高負荷時のファン音', 'グラフィック性能は内蔵GPU相当'],
  '高性能ミニPCの決定版。デスク周りをスッキリさせたい人や、サブPCとしても最適。',
  NOW()
);

-- 6. GMKtec N150 ミニPC
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
  'B0DG49ZBW1',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'GMKtec N150 ミニPC Intel N150 16GB/512GB Windows 11 Pro',
  'gmktec-n150',
  'GMKtec', 'GMKtec',
  21800, 'JPY', 25800, NOW(),
  'https://www.amazon.co.jp/dp/B0DG49ZBW1',
  'https://www.amazon.co.jp/dp/B0DG49ZBW1?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41V3Z5BQKGL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41V3Z5BQKGL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41V3Z5BQKGL._AC_SL160_.jpg',
  4.2, 2500, '在庫あり',
  ARRAY['2万円台の超コスパミニPC', 'Intel N150プロセッサー', '16GB DDR5メモリ', '512GB SSD', 'デュアルディスプレイ出力', 'ファンレス静音設計'],
  '{"CPU": "Intel N150 (4コア)", "メモリ": "16GB DDR5", "ストレージ": "512GB NVMe SSD", "映像出力": "HDMI×1 / DP×1", "サイズ": "約90×90×37mm", "重量": "約280g", "ポート": "USB 3.0×2/USB-C×1/LAN", "OS": "Windows 11 Pro"}'::jsonb,
  false, true, 6,
  '2万円台で手に入る超コスパミニPC。事務作業やブラウジング、動画視聴なら十分な性能。ファンレスで完全静音なのも魅力。',
  ARRAY['2万円台の圧倒的低価格', '16GB/512GBの十分なスペック', 'ファンレスで完全静音', 'Windows 11 Pro標準搭載'],
  ARRAY['CPU性能は控えめ（重い作業には不向き）', 'グラフィック性能は最低限', 'ブランドの知名度が低い'],
  'サブPC・リビングPC・事務用PCとして最適。この価格で16GB/512GBは驚異的。',
  NOW()
);

-- 7. Apple Mac mini M4
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
  'B0DLHBRL1P',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Apple Mac mini M4チップ 16GB/256GB デスクトップ',
  'apple-mac-mini-m4',
  'Apple', 'Apple',
  84800, 'JPY', 94800, NOW(),
  'https://www.amazon.co.jp/dp/B0DLHBRL1P',
  'https://www.amazon.co.jp/dp/B0DLHBRL1P?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/31QLOT8F1hL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/31QLOT8F1hL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/31QLOT8F1hL._AC_SL160_.jpg',
  4.7, 1500, '在庫あり',
  ARRAY['Apple M4チップ搭載', '16GBユニファイドメモリ（標準）', 'Thunderbolt 4 / USB-C対応', '最大3台のディスプレイ出力', 'コンパクト新デザイン', 'Wi-Fi 6E / Bluetooth 5.3'],
  '{"CPU": "Apple M4 (10コアCPU/10コアGPU)", "メモリ": "16GB ユニファイドメモリ", "ストレージ": "256GB SSD", "映像出力": "HDMI×1 / Thunderbolt 4×3 (最大3画面)", "サイズ": "約127×127×50mm", "重量": "約670g", "ポート": "Thunderbolt 4×3/USB-C×2/HDMI/Ethernet/3.5mm", "OS": "macOS"}'::jsonb,
  true, true, 7,
  'M4チップを搭載した新型Mac mini。コンパクトなボディにM4の高性能を凝縮し、16GBメモリを標準搭載。Thunderbolt 4×3ポートでプロ用途にも対応。',
  ARRAY['M4チップの高性能', '16GB標準搭載', 'Thunderbolt 4×3ポート', 'コンパクトな新デザイン'],
  ARRAY['256GB SSDは最小限', 'ディスプレイ・キーボード別売', 'メモリ増設不可'],
  'macOS環境を最もコスパ良く手に入れる方法。M4×16GBで8.5万円は驚異的。',
  NOW()
);

-- 8. Beelink SER6 Pro ミニPC
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
  'B0CPJKBT68',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Beelink SER6 Pro ミニPC Ryzen 7 7735HS 32GB/500GB',
  'beelink-ser6-pro',
  'Beelink', 'Beelink',
  56800, 'JPY', 69800, NOW(),
  'https://www.amazon.co.jp/dp/B0CPJKBT68',
  'https://www.amazon.co.jp/dp/B0CPJKBT68?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41UZj9VPL6L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41UZj9VPL6L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41UZj9VPL6L._AC_SL160_.jpg',
  4.3, 1200, '在庫あり',
  ARRAY['Ryzen 7 7735HS高性能CPU', '32GB DDR5メモリ', '500GB NVMe SSD', 'トリプル4K出力対応', 'Wi-Fi 6 / Bluetooth 5.2', 'メモリ・SSD換装可能'],
  '{"CPU": "AMD Ryzen 7 7735HS (8コア/16スレッド)", "メモリ": "32GB DDR5-4800 (換装可)", "ストレージ": "500GB NVMe SSD (換装可)", "映像出力": "HDMI×2 / USB-C (DP Alt)×1", "サイズ": "約126×113×42mm", "重量": "約455g", "ポート": "USB-C×1/USB-A×3/2.5G LAN", "OS": "Windows 11 Pro"}'::jsonb,
  false, true, 8,
  '5万円台でRyzen 7 + 32GBメモリの高性能ミニPC。メモリ・SSDの換装が可能で長く使える。トリプル4K出力でマルチディスプレイ環境にも対応。',
  ARRAY['5万円台でRyzen 7の高性能', '32GBメモリ搭載', 'メモリ・SSD換装可能', 'トリプル4K出力対応'],
  ARRAY['ファン音がやや気になる', '内蔵GPUのため重いゲームは不向き', 'デザインは控えめ'],
  'コスパ重視の高性能ミニPC。メイン機として十分使える性能を手のひらサイズで実現。',
  NOW()
);

-- 9. Lenovo ThinkPad X1 Carbon Gen 12
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
  'B0D1KZ9JWM',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Lenovo ThinkPad X1 Carbon Gen 12 14型 Core Ultra 5 16GB/512GB',
  'thinkpad-x1-carbon-gen12',
  'Lenovo', 'Lenovo',
  198000, 'JPY', 268000, NOW(),
  'https://www.amazon.co.jp/dp/B0D1KZ9JWM',
  'https://www.amazon.co.jp/dp/B0D1KZ9JWM?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51GbNk1r-mL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51GbNk1r-mL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51GbNk1r-mL._AC_SL160_.jpg',
  4.5, 600, '在庫あり',
  ARRAY['Intel Core Ultra 5搭載（AI PC）', '14インチ 2.8K OLED 120Hz', 'MIL-STD-810H準拠の堅牢性', 'TrackPoint搭載の名門キーボード', '最大約15時間バッテリー', '約1.08kgの超軽量'],
  '{"CPU": "Intel Core Ultra 5 125U", "メモリ": "16GB LPDDR5x", "ストレージ": "512GB PCIe Gen4 SSD", "ディスプレイ": "14インチ 2.8K OLED 120Hz", "バッテリー": "最大約15時間", "重量": "約1.08kg", "ポート": "Thunderbolt 4×2/USB-A×2/HDMI 2.1", "OS": "Windows 11 Pro"}'::jsonb,
  false, true, 9,
  'ビジネスノートの最高峰ThinkPad X1 Carbon。1.08kgの超軽量ボディにMIL規格の堅牢性、TrackPoint付き最高品質キーボードを搭載。ビジネスパーソンの相棒。',
  ARRAY['1.08kgの超軽量', 'ThinkPad品質のキーボード', 'MIL規格の堅牢性', '2.8K OLEDの美麗ディスプレイ'],
  ARRAY['約20万円と高価', 'GPU性能は控えめ', 'ゲームや動画編集には不向き'],
  'ビジネスPCの最高峰。キーボードの打鍵感と信頼性で選ぶならThinkPad一択。',
  NOW()
);

-- 10. ASUS Chromebook Plus CX34
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
  'B0CY5VKFB3',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'ASUS Chromebook Plus CX34 14型 Core i3-1315U 8GB/128GB',
  'asus-chromebook-plus-cx34',
  'ASUS', 'ASUS',
  49800, 'JPY', 59800, NOW(),
  'https://www.amazon.co.jp/dp/B0CY5VKFB3',
  'https://www.amazon.co.jp/dp/B0CY5VKFB3?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51J4J2Z7WSL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51J4J2Z7WSL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51J4J2Z7WSL._AC_SL160_.jpg',
  4.3, 400, '在庫あり',
  ARRAY['Google AI機能搭載のChromebook Plus', 'Core i3-1315Uプロセッサー', '14インチ FHD IPS', '高速起動・シンプル操作', 'Google One 100GB付属', 'セキュリティ自動更新'],
  '{"CPU": "Intel Core i3-1315U", "メモリ": "8GB LPDDR5", "ストレージ": "128GB UFS", "ディスプレイ": "14インチ FHD IPS (1920×1080)", "バッテリー": "最大約10時間", "重量": "約1.45kg", "ポート": "USB-C×2/USB-A×1/HDMI/microSD", "OS": "ChromeOS"}'::jsonb,
  false, true, 10,
  'Google AI機能を搭載したChromebook Plus。ブラウジングや文書作成が中心ならWindows PCより快適。高速起動とセキュリティ自動更新で手間いらず。',
  ARRAY['5万円以下の手頃な価格', '高速起動・シンプル操作', 'セキュリティ自動更新', 'Google AI機能搭載'],
  ARRAY['Windowsアプリは動作しない', 'ストレージ128GBと少なめ', 'オフライン作業に制限あり'],
  'ブラウジング・文書作成・動画視聴がメインなら最強のコスパPC。ChromeOSの手軽さは一度使うとクセになる。',
  NOW()
);

-- 11. DELL Inspiron 15 3530
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
  'B0CKRQHHJT',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Dell Inspiron 15 3530 15.6型 Core i5-1335U 16GB/512GB',
  'dell-inspiron-15-3530',
  'Dell', 'Dell',
  74800, 'JPY', 89800, NOW(),
  'https://www.amazon.co.jp/dp/B0CKRQHHJT',
  'https://www.amazon.co.jp/dp/B0CKRQHHJT?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41+4phfBLUL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41+4phfBLUL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41+4phfBLUL._AC_SL160_.jpg',
  4.2, 3000, '在庫あり',
  ARRAY['Core i5-1335Uプロセッサー', '15.6インチ FHD 非光沢ディスプレイ', '16GB DDR4メモリ', '512GB NVMe SSD', 'テンキー付きキーボード', 'Webカメラ内蔵'],
  '{"CPU": "Intel Core i5-1335U (10コア)", "メモリ": "16GB DDR4-3200", "ストレージ": "512GB NVMe SSD", "ディスプレイ": "15.6インチ FHD (1920×1080) 非光沢", "バッテリー": "最大約8時間", "重量": "約1.66kg", "ポート": "USB-C×1/USB-A×2/HDMI/SDカード", "OS": "Windows 11 Home"}'::jsonb,
  false, true, 11,
  '自宅用ノートPCの定番Dell Inspiron 15。15.6インチの大画面にテンキー付きで事務作業に最適。7万円台でCore i5・16GB・512GBを実現したスタンダードモデル。',
  ARRAY['7万円台の手頃な価格', '15.6インチ大画面', 'テンキー付きキーボード', '16GB/512GBの安心スペック'],
  ARRAY['1.66kgとやや重い', 'バッテリーが約8時間と短め', 'デザインは控えめ'],
  '自宅据え置き用の定番ノートPC。大画面とテンキーで作業効率アップ。',
  NOW()
);

-- 12. MINISFORUM Venus UM773 Lite
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
  'B0BVCC8GLD',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'MINISFORUM UM773 Lite ミニPC Ryzen 7 7735HS 16GB/512GB',
  'minisforum-um773-lite',
  'MINISFORUM', 'MINISFORUM',
  49800, 'JPY', 59800, NOW(),
  'https://www.amazon.co.jp/dp/B0BVCC8GLD',
  'https://www.amazon.co.jp/dp/B0BVCC8GLD?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41hU3YIVL0L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41hU3YIVL0L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41hU3YIVL0L._AC_SL160_.jpg',
  4.2, 1800, '在庫あり',
  ARRAY['Ryzen 7 7735HS高性能CPU', '16GB DDR5メモリ', '512GB NVMe SSD', 'デュアル4K出力', 'Wi-Fi 6 / Bluetooth 5.2', 'VESA対応でモニター裏に設置可能'],
  '{"CPU": "AMD Ryzen 7 7735HS (8コア/16スレッド)", "メモリ": "16GB DDR5 (換装可)", "ストレージ": "512GB NVMe SSD (換装可)", "映像出力": "HDMI×2", "サイズ": "約127×128×47mm", "重量": "約438g", "ポート": "USB-A×4/HDMI×2/2.5G LAN", "OS": "Windows 11 Pro"}'::jsonb,
  false, true, 12,
  '5万円以下でRyzen 7が手に入るコスパ最強ミニPC。VESA対応でモニター裏に隠せばデスクがスッキリ。メモリ・SSD換装可能で拡張性も確保。',
  ARRAY['5万円以下の破格のコスパ', 'Ryzen 7の高い処理性能', 'VESA対応でスッキリ設置', 'メモリ・SSD換装可能'],
  ARRAY['16GBは物足りない場合も', 'USB-C映像出力なし', '高負荷時のファン音'],
  '5万円以下のミニPCではベストバイ。事務作業からちょっとした動画編集まで対応できる万能機。',
  NOW()
);

-- 13. Acer Swift Go 14
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
  'B0CS1BZHWH',
  (SELECT id FROM categories WHERE slug = 'notebook-mini-pc'),
  'Acer Swift Go 14 14型 Core Ultra 7 155H 16GB/1TB OLED',
  'acer-swift-go-14',
  'Acer', 'Acer',
  139800, 'JPY', 169800, NOW(),
  'https://www.amazon.co.jp/dp/B0CS1BZHWH',
  'https://www.amazon.co.jp/dp/B0CS1BZHWH?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41PfSfFjJgL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41PfSfFjJgL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41PfSfFjJgL._AC_SL160_.jpg',
  4.4, 350, '在庫あり',
  ARRAY['Intel Core Ultra 7 155H搭載', '14インチ 2.8K OLED 90Hz', '16GB LPDDR5x / 1TB SSD', 'NPU搭載のAI PC', '最大約10時間バッテリー', '約1.3kgの軽量設計'],
  '{"CPU": "Intel Core Ultra 7 155H (16コア/22スレッド)", "メモリ": "16GB LPDDR5x", "ストレージ": "1TB PCIe Gen4 SSD", "ディスプレイ": "14インチ 2.8K OLED 90Hz (2880×1800)", "バッテリー": "最大約10時間", "重量": "約1.3kg", "ポート": "Thunderbolt 4×2/USB-A×2/HDMI 2.1/microSD", "OS": "Windows 11 Home"}'::jsonb,
  false, true, 13,
  'Core Ultra 7搭載の高性能モバイルPC。2.8K OLEDディスプレイと1TB SSDで14万円は高コスパ。クリエイティブワークやAI活用にも対応。',
  ARRAY['Core Ultra 7の高い処理性能', '2.8K OLED 90Hzの美麗ディスプレイ', '1TB SSDの大容量', 'Thunderbolt 4×2搭載'],
  ARRAY['約14万円とやや高い', 'バッテリーが約10時間で競合より短め', 'Acerブランドの好みが分かれる'],
  '高性能×OLEDを14万円で。MacBook Air M3と悩む人にとってのWindows版最有力候補。',
  NOW()
);
