-- ===========================================
-- 010_products_wireless_charger.sql
-- カテゴリ: ワイヤレス充電器 (12商品)
-- Date: 2026-02-12
-- ===========================================

-- 1. Anker MagGo Qi2 ワイヤレス充電パッド
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
  'B0C9SNMMGC',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'Anker MagGo Qi2 ワイヤレス充電パッド 15W マグネット対応',
  'anker-maggo-qi2-pad',
  'Anker', 'Anker',
  3490, 'JPY', 3990, NOW(),
  'https://www.amazon.co.jp/dp/B0C9SNMMGC',
  'https://www.amazon.co.jp/dp/B0C9SNMMGC?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41NU8d9cLPL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41NU8d9cLPL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41NU8d9cLPL._AC_SL160_.jpg',
  4.4, 2500, '在庫あり',
  ARRAY['Qi2対応15W急速ワイヤレス充電', 'MagSafe互換マグネット吸着', 'iPhone/Android Qi2対応機種に対応', 'LEDインジケーター搭載', '異物検知安全機能', 'コンパクト薄型設計'],
  '{"出力": "最大15W (Qi2)", "対応規格": "Qi2 / MagSafe互換", "入力": "USB-C", "サイズ": "約60×60×5mm", "重量": "約55g", "ケーブル長": "1.5m", "安全機能": "異物検知 / 温度管理"}'::jsonb,
  true, true, 1,
  'Ankerの最新Qi2対応充電パッド。MagSafe互換のマグネット吸着で正確な位置合わせが可能。15Wの急速充電をコンパクトなサイズで実現。',
  ARRAY['Qi2対応で15W急速充電', 'マグネットで確実に吸着', '3,490円の手頃な価格', 'コンパクトで持ち運びやすい'],
  ARRAY['充電器本体のACアダプターは別売', 'Qi1対応機種は7.5Wに制限', 'ケーブルは着脱不可'],
  'Qi2対応のスタンダードモデル。iPhoneユーザーに最適で、マグネット吸着の安心感が魅力。',
  NOW()
);

-- 2. Apple MagSafe充電器
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
  'B09JRF6MHG',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'Apple MagSafe充電器 USB-C 1m ワイヤレス充電',
  'apple-magsafe-charger',
  'Apple', 'Apple',
  5580, 'JPY', 6280, NOW(),
  'https://www.amazon.co.jp/dp/B09JRF6MHG',
  'https://www.amazon.co.jp/dp/B09JRF6MHG?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51cpnzACK8L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51cpnzACK8L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51cpnzACK8L._AC_SL160_.jpg',
  4.6, 8000, '在庫あり',
  ARRAY['Apple純正MagSafe 15W充電', '完璧なマグネット吸着', 'iPhone/AirPods/Apple Watch対応', 'USB-Cケーブル一体型', 'アニメーション表示対応', 'Apple品質の安心感'],
  '{"出力": "最大15W (MagSafe)", "対応規格": "MagSafe", "入力": "USB-C", "ケーブル長": "1m", "重量": "約30g", "対応機種": "iPhone 12以降 / AirPods", "安全機能": "Apple認証"}'::jsonb,
  true, true, 2,
  'Apple純正のMagSafe充電器。iPhoneに磁力で吸着し、充電開始時のアニメーション表示など純正ならではの体験。15Wの最大出力で高速充電。',
  ARRAY['Apple純正の信頼性', 'MagSafe 15Wフルスピード', '充電アニメーションが楽しい', 'AirPodsにも対応'],
  ARRAY['ACアダプター別売り', 'iPhone専用でAndroid非対応', '他社Qi2製品より高い'],
  'iPhoneユーザーなら一つは持っておきたい純正品。充電速度と互換性で最も安心。',
  NOW()
);

-- 3. Anker MagGo 3-in-1 ワイヤレス充電ステーション
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
  'B0CF54KR4Z',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'Anker MagGo 3-in-1 ワイヤレス充電ステーション Qi2対応',
  'anker-maggo-3in1-station',
  'Anker', 'Anker',
  13990, 'JPY', 17990, NOW(),
  'https://www.amazon.co.jp/dp/B0CF54KR4Z',
  'https://www.amazon.co.jp/dp/B0CF54KR4Z?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51r7kQFWHzL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51r7kQFWHzL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51r7kQFWHzL._AC_SL160_.jpg',
  4.5, 1800, '在庫あり',
  ARRAY['iPhone+AirPods+Apple Watchを同時充電', 'Qi2対応15W急速充電', 'MagSafe互換マグネット', '折りたたみコンパクト設計', 'Apple Watch急速充電対応', 'ACアダプター付属'],
  '{"出力": "iPhone 15W + AirPods 5W + Apple Watch 5W", "対応規格": "Qi2 / MagSafe互換 / Apple Watch", "入力": "USB-C (ACアダプター付属)", "サイズ": "約89×59×22mm（折りたたみ時）", "重量": "約177g", "安全機能": "過充電保護 / 温度管理"}'::jsonb,
  true, true, 3,
  'iPhone・AirPods・Apple Watchを1台で同時充電できる3-in-1ステーション。折りたたみ式で旅行にも最適。ACアダプター付属で追加購入不要。',
  ARRAY['3デバイス同時充電', 'Qi2対応15W', '折りたたみでコンパクト', 'ACアダプター付属'],
  ARRAY['約14,000円とやや高い', 'Apple Watch以外のウォッチは非対応', 'スタンド角度が固定'],
  'Apple3点セットを使っている人のベストチョイス。旅行時の充電器はこれ1台で完結。',
  NOW()
);

-- 4. Belkin 3-in-1 MagSafe充電器
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
  'B09BFDLNHK',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'Belkin BOOST↑CHARGE PRO 3-in-1 MagSafe充電器 15W',
  'belkin-3in1-magsafe',
  'Belkin', 'Belkin',
  18800, 'JPY', 22880, NOW(),
  'https://www.amazon.co.jp/dp/B09BFDLNHK',
  'https://www.amazon.co.jp/dp/B09BFDLNHK?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41c42g9FyML._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41c42g9FyML._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41c42g9FyML._AC_SL160_.jpg',
  4.5, 2200, '在庫あり',
  ARRAY['Apple公式MFi認証3-in-1充電器', 'MagSafe 15W急速充電', 'Apple Watch急速充電対応', 'AirPods充電パッド搭載', 'スタイリッシュなスタンドデザイン', 'ACアダプター付属'],
  '{"出力": "iPhone 15W + AirPods 5W + Apple Watch", "対応規格": "MagSafe公式認証", "入力": "AC電源（アダプター付属）", "サイズ": "約133×133×139mm", "重量": "約725g", "素材": "ステンレススチール+クローム", "安全機能": "MFi認証"}'::jsonb,
  false, true, 4,
  'Belkinの高級3-in-1充電ステーション。Apple公式MFi認証で最高の互換性を保証。ステンレス素材のプレミアムなデザインがデスクに映える。',
  ARRAY['Apple公式MFi認証の安心感', 'プレミアムなデザイン', 'iPhone直立スタンド式', '3デバイス同時充電'],
  ARRAY['約19,000円と高価', '据え置き型で持ち運びには不向き', '725gと重い'],
  'デスク周りをスタイリッシュに整えたいAppleユーザーに。MFi認証の最高品質を求めるなら。',
  NOW()
);

-- 5. NANAMI Qi2 ワイヤレス充電スタンド
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
  'B0CQXLCMY5',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'NANAMI Qi2 ワイヤレス充電スタンド 15W マグネット式',
  'nanami-qi2-stand',
  'NANAMI', 'NANAMI',
  2980, 'JPY', 3980, NOW(),
  'https://www.amazon.co.jp/dp/B0CQXLCMY5',
  'https://www.amazon.co.jp/dp/B0CQXLCMY5?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41FKUzBPZXL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41FKUzBPZXL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41FKUzBPZXL._AC_SL160_.jpg',
  4.3, 3200, '在庫あり',
  ARRAY['Qi2対応15W急速充電', 'マグネット式スタンド型', '横置き・縦置き両対応', 'LEDインジケーター', '異物検知・温度管理', 'ケース装着のまま充電可能'],
  '{"出力": "最大15W (Qi2)", "対応規格": "Qi2 / MagSafe互換", "入力": "USB-C", "サイズ": "約73×68×110mm", "重量": "約120g", "角度": "縦置き・横置き対応", "安全機能": "異物検知 / 過充電保護"}'::jsonb,
  false, true, 5,
  '3000円以下で買えるQi2対応充電スタンド。動画視聴しながらの充電にも便利なスタンド型で、縦横両対応。コスパの高い人気モデル。',
  ARRAY['3000円以下の高コスパ', 'スタンド型で使いやすい', '縦置き・横置き両対応', 'レビュー3200件の人気'],
  ARRAY['ACアダプター別売', 'Apple Watch非対応', 'スタンドの角度調整は不可'],
  'コスパ重視のQi2充電スタンド。デスクに1台置いておくと便利。',
  NOW()
);

-- 6. Anker 313 Wireless Charger Pad
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
  'B07THHQMHM',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'Anker 313 Wireless Charger Pad Qi対応 5W/10W ワイヤレス充電器',
  'anker-313-wireless-pad',
  'Anker', 'Anker',
  1590, 'JPY', NULL, NOW(),
  'https://www.amazon.co.jp/dp/B07THHQMHM',
  'https://www.amazon.co.jp/dp/B07THHQMHM?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41epJCKPBYL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41epJCKPBYL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41epJCKPBYL._AC_SL160_.jpg',
  4.3, 15000, '在庫あり',
  ARRAY['Qi対応ワイヤレス充電パッド', 'iPhone 7.5W / Android 10W', '超コンパクト設計', 'LEDインジケーター', '異物検知安全機能', 'MultiProtect安全システム'],
  '{"出力": "最大10W (Android) / 7.5W (iPhone)", "対応規格": "Qi", "入力": "USB-C", "サイズ": "約67×67×12mm", "重量": "約67g", "安全機能": "異物検知 / 温度管理 / MultiProtect"}'::jsonb,
  false, true, 6,
  'Ankerの超定番ワイヤレス充電パッド。1,590円という低価格ながら安全機能も充実。Qi規格対応でiPhone・Android両方使える。',
  ARRAY['1,590円の最安クラス', 'レビュー15000件超の実績', 'コンパクトで場所を取らない', 'Ankerの安心品質'],
  ARRAY['Qi2非対応（iPhone最大7.5W）', 'マグネット非搭載', 'ACアダプター別売'],
  '最安でワイヤレス充電を試したい人に。枕元やオフィスに置くサブ充電器としても最適。',
  NOW()
);

-- 7. Anker MagGo Power Bank (Qi2)
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
  'B0C9DNYKMJ',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'Anker MagGo Power Bank 6600mAh Qi2対応 モバイルワイヤレス充電器',
  'anker-maggo-power-bank-qi2',
  'Anker', 'Anker',
  5990, 'JPY', 6990, NOW(),
  'https://www.amazon.co.jp/dp/B0C9DNYKMJ',
  'https://www.amazon.co.jp/dp/B0C9DNYKMJ?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41FLDHW9+0L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41FLDHW9+0L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41FLDHW9+0L._AC_SL160_.jpg',
  4.4, 3500, '在庫あり',
  ARRAY['Qi2対応15Wワイヤレス充電', 'マグネットでiPhoneに吸着', '6600mAhバッテリー内蔵', 'USB-C有線充電も可能', 'スタンド機能付き', 'パススルー充電対応'],
  '{"容量": "6600mAh", "ワイヤレス出力": "最大15W (Qi2)", "USB-C出力": "最大27W", "入力": "USB-C", "サイズ": "約107×66×13mm", "重量": "約186g", "スタンド": "折りたたみ式", "安全機能": "異物検知 / 温度管理"}'::jsonb,
  true, true, 7,
  'モバイルバッテリーとワイヤレス充電器を融合。マグネットでiPhoneに吸着しながらQi2 15W充電が可能。折りたたみスタンド付きで動画視聴にも便利。',
  ARRAY['Qi2ワイヤレス+USB-C有線の2WAY', 'マグネットで確実に吸着', 'スタンド機能付き', 'パススルー充電対応'],
  ARRAY['6600mAhでiPhone約1回分', 'ワイヤレスのみだと充電速度は遅め', 'Androidのワイヤレス充電は非対応の場合あり'],
  '外出先でiPhoneをワイヤレス充電したい人に。マグネット吸着+スタンドの利便性が高い。',
  NOW()
);

-- 8. ESR HaloLock 2-in-1 MagSafe充電スタンド
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
  'B0BPWCJJP3',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'ESR HaloLock 2-in-1 MagSafe対応 ワイヤレス充電スタンド CryoBoost冷却',
  'esr-halolock-2in1',
  'ESR', 'ESR',
  4980, 'JPY', 6280, NOW(),
  'https://www.amazon.co.jp/dp/B0BPWCJJP3',
  'https://www.amazon.co.jp/dp/B0BPWCJJP3?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41dxoWw2QKL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41dxoWw2QKL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41dxoWw2QKL._AC_SL160_.jpg',
  4.4, 1500, '在庫あり',
  ARRAY['CryoBoost冷却ファン搭載', 'iPhone+AirPods同時充電', 'MagSafe互換マグネット', '最大15W急速充電', 'スタンド型で動画視聴に便利', '冷却で充電速度低下を防止'],
  '{"出力": "iPhone 15W + AirPods 5W", "対応規格": "MagSafe互換 / Qi", "入力": "USB-C", "サイズ": "約100×100×145mm", "重量": "約210g", "冷却": "CryoBoost内蔵ファン", "安全機能": "温度管理 / 異物検知"}'::jsonb,
  false, true, 8,
  'ESR独自のCryoBoost冷却ファンを搭載した充電スタンド。充電中の発熱を抑えることで充電速度の低下を防止。iPhone+AirPodsの2台同時充電が可能。',
  ARRAY['冷却ファンで充電速度低下を防止', 'iPhone+AirPods同時充電', 'スタンド型で使いやすい', '5000円以下の手頃な価格'],
  ARRAY['ファンの動作音がある', 'Apple Watch非対応', 'ACアダプター別売'],
  '充電中の発熱が気になる人に最適。夏場や長時間充電時に冷却ファンが活躍。',
  NOW()
);

-- 9. Spigen ArcField MagSafe対応充電パッド
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
  'B09QHQGLBZ',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'Spigen ArcField MagSafe対応 ワイヤレス充電パッド 7.5W',
  'spigen-arcfield-magsafe',
  'Spigen', 'Spigen',
  2490, 'JPY', 2990, NOW(),
  'https://www.amazon.co.jp/dp/B09QHQGLBZ',
  'https://www.amazon.co.jp/dp/B09QHQGLBZ?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41dWJQaJR6L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41dWJQaJR6L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41dWJQaJR6L._AC_SL160_.jpg',
  4.3, 2000, '在庫あり',
  ARRAY['MagSafe互換マグネット吸着', 'iPhone最大7.5W充電', 'コンパクト薄型デザイン', '滑り止めリング付属', '1.5mロングケーブル', '各種安全保護機能'],
  '{"出力": "最大7.5W (iPhone)", "対応規格": "Qi / MagSafe互換", "入力": "USB-C", "ケーブル長": "1.5m", "重量": "約50g", "安全機能": "過電流保護 / 温度管理"}'::jsonb,
  false, true, 9,
  'Spigenのシンプルなマグネット式充電パッド。2,490円と手頃ながらMagSafe互換のマグネット吸着に対応。枕元やオフィスのサブ充電器に最適。',
  ARRAY['2,490円の低価格', 'MagSafe互換マグネット', 'コンパクトで軽量', 'Spigenの信頼性'],
  ARRAY['最大7.5Wで充電速度は遅め', 'Qi2非対応', 'Android機種によってはマグネット不可'],
  '安くMagSafe互換のマグネット充電を体験したい人に。サブ充電器として優秀。',
  NOW()
);

-- 10. Anker MagGo Wireless Charging Station (Foldable 3-in-1)
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
  'B0CF56WHV4',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'Anker MagGo Wireless Charging Station 3-in-1 折りたたみ Qi2',
  'anker-maggo-foldable-3in1',
  'Anker', 'Anker',
  10990, 'JPY', 13990, NOW(),
  'https://www.amazon.co.jp/dp/B0CF56WHV4',
  'https://www.amazon.co.jp/dp/B0CF56WHV4?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51H7+z7mBrL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51H7+z7mBrL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51H7+z7mBrL._AC_SL160_.jpg',
  4.4, 2200, '在庫あり',
  ARRAY['Qi2対応15W急速ワイヤレス充電', 'iPhone+AirPods+Apple Watch同時充電', '超コンパクト折りたたみ設計', 'Apple Watch高速充電対応', 'トラベルポーチ付属', 'ACアダプター付属'],
  '{"出力": "iPhone 15W + AirPods 5W + Apple Watch", "対応規格": "Qi2 / Apple Watch", "入力": "USB-C (ACアダプター付属)", "サイズ": "約64×64×23mm（折りたたみ時）", "重量": "約132g", "付属品": "トラベルポーチ / ACアダプター"}'::jsonb,
  false, true, 10,
  '旅行に最適な超コンパクト3-in-1充電ステーション。折りたたむとわずか64mmの手のひらサイズ。Qi2対応の15W充電とApple Watch充電を1台に凝縮。',
  ARRAY['132gの超コンパクト設計', '3デバイス同時充電', 'トラベルポーチ付属', 'ACアダプター付属'],
  ARRAY['約11,000円とやや高い', 'スタンド角度が限られる', '折りたたみヒンジの耐久性が不明'],
  '旅行や出張が多い人に最適。荷物を最小限にしたいAppleユーザーの強い味方。',
  NOW()
);

-- 11. PITAKA MagEZ Slider 2
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
  'B0CQXZ8PGK',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'PITAKA MagEZ Slider 2 4-in-1 ワイヤレス充電ステーション',
  'pitaka-magez-slider-2',
  'PITAKA', 'PITAKA',
  16900, 'JPY', 19900, NOW(),
  'https://www.amazon.co.jp/dp/B0CQXZ8PGK',
  'https://www.amazon.co.jp/dp/B0CQXZ8PGK?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41Xv6CyMWpL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41Xv6CyMWpL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41Xv6CyMWpL._AC_SL160_.jpg',
  4.3, 600, '在庫あり',
  ARRAY['4-in-1充電（iPhone+AirPods+Apple Watch+モバイルバッテリー）', 'モバイルバッテリー着脱式', 'Qi2対応15W充電', 'アラミド繊維素材の高級感', 'モジュラーデザイン', 'Apple Watch急速充電対応'],
  '{"出力": "iPhone 15W + AirPods 5W + Apple Watch + バッテリー充電", "対応規格": "Qi2 / Apple Watch", "入力": "USB-C", "サイズ": "約86×86×140mm", "重量": "約350g", "モバイルバッテリー": "4000mAh着脱式", "素材": "アラミド繊維"}'::jsonb,
  false, true, 11,
  'PITAKAの革新的な4-in-1充電ステーション。着脱式モバイルバッテリーを充電しながらiPhoneも充電でき、外出時はバッテリーを持ち出せるユニークな設計。',
  ARRAY['着脱式モバイルバッテリーが便利', '4デバイス同時充電', 'アラミド繊維の高級感', 'モジュラー拡張性'],
  ARRAY['約17,000円と高価', 'モバイルバッテリーが4000mAhと小容量', 'PITAKAケースとの相性が最良'],
  'デスク環境にこだわるAppleユーザーに。着脱式バッテリーの発想が秀逸。',
  NOW()
);

-- 12. エレコム Qi2 ワイヤレス充電器 車載用
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
  'B0DFYD5HYN',
  (SELECT id FROM categories WHERE slug = 'wireless-charger'),
  'エレコム Qi2 車載ワイヤレス充電器 15W マグネット式 エアコン吹出口取付',
  'elecom-qi2-car-charger',
  'ELECOM', 'エレコム',
  4280, 'JPY', 5480, NOW(),
  'https://www.amazon.co.jp/dp/B0DFYD5HYN',
  'https://www.amazon.co.jp/dp/B0DFYD5HYN?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41BFKGR8VHL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41BFKGR8VHL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41BFKGR8VHL._AC_SL160_.jpg',
  4.2, 800, '在庫あり',
  ARRAY['Qi2対応15W車載ワイヤレス充電', 'マグネットで片手で着脱', 'エアコン吹出口取付クリップ', '360度回転ボールジョイント', '安心の国産メーカー', 'カーナビ操作しながら充電'],
  '{"出力": "最大15W (Qi2)", "対応規格": "Qi2 / MagSafe互換", "入力": "USB-C（シガーソケットアダプター別売）", "取付方式": "エアコン吹出口クリップ", "重量": "約85g", "回転": "360度ボールジョイント", "安全機能": "過充電保護 / 温度管理"}'::jsonb,
  false, true, 12,
  '車内でのワイヤレス充電に特化したQi2対応モデル。マグネットで片手で簡単に着脱でき、カーナビ操作も快適。国産エレコムの安心品質。',
  ARRAY['車載用に最適化された設計', 'マグネットで片手着脱', '360度角度調整可能', '国産メーカーの安心感'],
  ARRAY['シガーソケットアダプター別売', 'エアコン吹出口の形状で合わない車も', 'MagSafe非対応iPhoneは使用不可'],
  '車でiPhoneを使う人の必需品。マグネット着脱の快適さは一度使うと戻れない。',
  NOW()
);
