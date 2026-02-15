-- ===========================================
-- 012_products_smart_home.sql
-- カテゴリ: スマートホームデバイス (12商品)
-- Date: 2026-02-12
-- ===========================================

-- 1. Amazon Echo Show 5 第3世代
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
  'B09B2QTGFY',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'Amazon Echo Show 5 第3世代 スマートディスプレイ with Alexa',
  'amazon-echo-show-5-3rd',
  'Amazon', 'Amazon',
  8980, 'JPY', 9980, NOW(),
  'https://www.amazon.co.jp/dp/B09B2QTGFY',
  'https://www.amazon.co.jp/dp/B09B2QTGFY?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51P1RTnuNOL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51P1RTnuNOL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51P1RTnuNOL._AC_SL160_.jpg',
  4.3, 12000, '在庫あり',
  ARRAY['5.5インチスマートディスプレイ', 'Alexa搭載で音声操作', '2MPカメラでビデオ通話', 'スマートホームハブ機能', '音楽・動画ストリーミング', '天気・ニュース・タイマー表示'],
  '{"ディスプレイ": "5.5インチ タッチスクリーン", "スピーカー": "1.75インチフルレンジ", "カメラ": "2MP（カバー付き）", "通信": "Wi-Fi / Bluetooth 5.0", "サイズ": "約147×82×91mm", "重量": "約304g", "音声AI": "Alexa", "スマートホーム": "Zigbee/Matter/Thread対応"}'::jsonb,
  true, true, 1,
  'Amazonの定番スマートディスプレイ。キッチンや枕元に置いて、天気・ニュース・音楽を手軽に。ビデオ通話やスマートホーム操作もこれ1台で。',
  ARRAY['9000円以下の手頃な価格', 'ディスプレイ付きで情報が見やすい', 'Alexaスキルが豊富', 'スマートホームハブ機能搭載'],
  ARRAY['スピーカー音質は控えめ', 'ディスプレイが小さい', 'Amazonサービスへの誘導が多い'],
  'スマートホーム入門に最適。枕元の目覚まし時計としても優秀で、一度使うと手放せない。',
  NOW()
);

-- 2. Amazon Echo Dot 第5世代
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
  'B09ZX764ZL',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'Amazon Echo Dot 第5世代 スマートスピーカー with Alexa',
  'amazon-echo-dot-5th',
  'Amazon', 'Amazon',
  4480, 'JPY', 7480, NOW(),
  'https://www.amazon.co.jp/dp/B09ZX764ZL',
  'https://www.amazon.co.jp/dp/B09ZX764ZL?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51RxWR5rHZL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51RxWR5rHZL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51RxWR5rHZL._AC_SL160_.jpg',
  4.4, 25000, '在庫あり',
  ARRAY['Alexa搭載スマートスピーカー', '前世代比で低音50%向上', 'モーション検知・温度センサー内蔵', 'Eero Wi-Fiメッシュ対応', '音楽ストリーミング再生', 'タップ操作でアラーム停止'],
  '{"スピーカー": "1.73インチフルレンジ", "通信": "Wi-Fi / Bluetooth 5.0", "センサー": "モーション検知 / 温度センサー", "サイズ": "約100×100×89mm", "重量": "約304g", "音声AI": "Alexa", "スマートホーム": "Zigbee/Matter/Thread対応"}'::jsonb,
  true, true, 2,
  'Amazonで最も売れているスマートスピーカー。4,480円で音声AIアシスタント・音楽再生・スマートホーム操作が手に入る。温度センサー内蔵でエアコン自動制御も可能。',
  ARRAY['4,480円の超低価格', 'レビュー25000件の圧倒的人気', '温度センサー内蔵', 'Matterプロトコル対応'],
  ARRAY['画面がないので情報表示は不可', '音質はそこそこ', 'Amazonエコシステムへの依存'],
  'スマートホームの第一歩に。この価格で音声AIアシスタントが手に入るのは驚異的。',
  NOW()
);

-- 3. Google Nest Hub 第2世代
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
  'B09HQ27RXZ',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'Google Nest Hub 第2世代 7インチ スマートディスプレイ',
  'google-nest-hub-2nd',
  'Google', 'Google',
  9800, 'JPY', 11000, NOW(),
  'https://www.amazon.co.jp/dp/B09HQ27RXZ',
  'https://www.amazon.co.jp/dp/B09HQ27RXZ?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41vkJjfIa5L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41vkJjfIa5L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41vkJjfIa5L._AC_SL160_.jpg',
  4.4, 5000, '在庫あり',
  ARRAY['7インチタッチスクリーン', 'Google アシスタント搭載', '睡眠モニタリング機能（Soliレーダー）', 'YouTube・Netflix再生対応', 'Googleフォト デジタルフォトフレーム', 'スマートホーム一元管理'],
  '{"ディスプレイ": "7インチ タッチスクリーン", "スピーカー": "43.5mmフルレンジ", "センサー": "Soliレーダー（睡眠モニタリング）", "通信": "Wi-Fi / Bluetooth 5.0", "サイズ": "約177.4×120.4×69.5mm", "重量": "約558g", "音声AI": "Google アシスタント", "スマートホーム": "Matter/Thread対応"}'::jsonb,
  true, true, 3,
  'GoogleアシスタントベースのスマートディスプレイはYouTubeやNetflixの再生も。Soliレーダーによる睡眠モニタリングは枕元に置くだけで睡眠分析が可能。',
  ARRAY['YouTube・Netflix対応', '睡眠モニタリング機能', 'Googleフォト連携でフォトフレームに', 'Google連携が優秀'],
  ARRAY['カメラ非搭載（ビデオ通話不可）', 'Amazon Prime Video非対応', 'Alexaスキルは使えない'],
  'Googleサービスをよく使う人に最適。YouTubeが見られるのはEcho Showにない利点。',
  NOW()
);

-- 4. SwitchBot ハブ2
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
  'B0BM8VS13R',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'SwitchBot ハブ2 スマートリモコン 温湿度計 Matter対応',
  'switchbot-hub-2',
  'SwitchBot', 'SwitchBot',
  8980, 'JPY', 9980, NOW(),
  'https://www.amazon.co.jp/dp/B0BM8VS13R',
  'https://www.amazon.co.jp/dp/B0BM8VS13R?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41g0rMZBuBL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41g0rMZBuBL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41g0rMZBuBL._AC_SL160_.jpg',
  4.2, 8000, '在庫あり',
  ARRAY['赤外線スマートリモコン機能', '温湿度・照度センサー内蔵', 'Matter/Thread対応', 'Alexa/Google/Siri対応', 'タッチボタン2つ搭載', 'エアコン・テレビ・照明をスマート化'],
  '{"通信": "Wi-Fi 2.4GHz / Bluetooth 5.0 / 赤外線", "センサー": "温度 / 湿度 / 照度", "対応": "Matter / Thread / Alexa / Google / Siri", "サイズ": "約80×70×23mm", "重量": "約63g", "電源": "USB-C（常時給電）", "ディスプレイ": "温湿度LED表示"}'::jsonb,
  true, true, 4,
  'スマートホームの中心になるハブデバイス。赤外線リモコンでエアコン・テレビ・照明をスマホ操作。温湿度センサーで自動制御も可能。Matter対応で将来性も安心。',
  ARRAY['既存の赤外線家電をスマート化', '温湿度センサーで自動制御', 'Matter対応で幅広い互換性', 'Alexa/Google/Siri全対応'],
  ARRAY['赤外線が届かない場所は操作不可', 'Wi-Fiは2.4GHzのみ', 'アプリのUIがやや複雑'],
  '既存の家電をスマート化するなら最優先で導入すべきデバイス。エアコン自動制御だけでも元が取れる。',
  NOW()
);

-- 5. Nature Remo mini 2
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
  'B09BLJQY7R',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'Nature Remo mini 2 スマートリモコン 赤外線 Alexa/Google対応',
  'nature-remo-mini-2',
  'Nature', 'Nature',
  5480, 'JPY', 6480, NOW(),
  'https://www.amazon.co.jp/dp/B09BLJQY7R',
  'https://www.amazon.co.jp/dp/B09BLJQY7R?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/31m1cCPGF9L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/31m1cCPGF9L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/31m1cCPGF9L._AC_SL160_.jpg',
  4.1, 6000, '在庫あり',
  ARRAY['赤外線スマートリモコン', '温度センサー内蔵', 'Alexa/Google アシスタント/Siri対応', '外出先からエアコン操作', 'オートメーション機能', '日本メーカーの安心サポート'],
  '{"通信": "Wi-Fi 2.4GHz / Bluetooth LE", "センサー": "温度センサー", "対応": "Alexa / Google / Siri（ショートカット）", "サイズ": "約58×58×16mm", "重量": "約23g", "電源": "USB Micro-B（常時給電）", "赤外線": "全方位"}'::jsonb,
  false, true, 5,
  '日本メーカーNatureのスマートリモコン。シンプルな機能に絞り5,480円で提供。外出先からエアコンをONにできる便利さは一度体験すると戻れない。',
  ARRAY['5,480円の手頃な価格', '日本メーカーの信頼性', 'シンプルで使いやすいアプリ', '超コンパクトで目立たない'],
  ARRAY['温度センサーのみ（湿度非対応）', 'Micro-B充電が古い', 'Matter非対応'],
  'シンプルにスマートリモコンが欲しい人に。アプリの使いやすさは日本メーカーならでは。',
  NOW()
);

-- 6. SwitchBot カーテン3
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
  'B0C6XVFHPF',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'SwitchBot カーテン3 自動開閉 スマートカーテン ソーラーパネル対応',
  'switchbot-curtain-3',
  'SwitchBot', 'SwitchBot',
  8980, 'JPY', 9980, NOW(),
  'https://www.amazon.co.jp/dp/B0C6XVFHPF',
  'https://www.amazon.co.jp/dp/B0C6XVFHPF?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/31sfh-RlTrL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/31sfh-RlTrL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/31sfh-RlTrL._AC_SL160_.jpg',
  4.0, 3500, '在庫あり',
  ARRAY['カーテンを自動開閉', '静音設計（前世代比50%静音化）', 'ソーラーパネル対応で充電不要', '光センサーで日の出に自動開閉', 'Alexa/Google/Siri対応', '工事不要で取り付け簡単'],
  '{"モーター": "QuietDrift静音モーター", "バッテリー": "内蔵リチウム（約8ヶ月持続）", "対応レール": "U型/I型/ポールタイプ", "耐荷重": "最大16kg", "サイズ": "約67×74×36mm", "重量": "約164g", "通信": "Bluetooth 5.0 / Wi-Fi（ハブ経由）", "対応": "Alexa / Google / Siri"}'::jsonb,
  false, true, 6,
  'カーテンの自動開閉を実現するスマートデバイス。朝日と共にカーテンが自動で開き、自然な目覚めを実現。ソーラーパネル（別売）で充電不要の運用も可能。',
  ARRAY['カーテン自動化で朝の目覚めが変わる', '静音設計で夜も安心', 'ソーラーパネルで充電不要', '工事不要で簡単取付'],
  ARRAY['約9,000円とやや高い（2台で両開き対応）', 'Wi-Fi接続にはハブが必要', '一部のレールには非対応'],
  '朝の目覚めを劇的に改善する隠れた名デバイス。ソーラーパネルと組み合わせれば完全メンテナンスフリー。',
  NOW()
);

-- 7. TP-Link Tapo L530E スマートLED電球
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
  'B09TP8LJYS',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'TP-Link Tapo L530E スマートLED電球 マルチカラー E26 Alexa対応',
  'tp-link-tapo-l530e',
  'TP-Link', 'TP-Link',
  1280, 'JPY', 1780, NOW(),
  'https://www.amazon.co.jp/dp/B09TP8LJYS',
  'https://www.amazon.co.jp/dp/B09TP8LJYS?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41y6jd1hnbL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41y6jd1hnbL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41y6jd1hnbL._AC_SL160_.jpg',
  4.2, 4500, '在庫あり',
  ARRAY['1600万色マルチカラー対応', 'E26口金でそのまま使える', 'Alexa/Google対応で音声操作', 'スケジュール・タイマー機能', 'おやすみモード対応', 'ハブ不要でWi-Fi直接接続'],
  '{"口金": "E26", "消費電力": "8.7W（60W相当）", "色温度": "2500K-6500K + RGB", "明るさ": "最大806ルーメン", "寿命": "約25000時間", "通信": "Wi-Fi 2.4GHz", "対応": "Alexa / Google アシスタント", "調光": "1-100%"}'::jsonb,
  false, true, 7,
  '1,280円で1600万色のスマートLED電球が手に入る驚異的コスパ。ハブ不要でWi-Fiに直接接続、電球を交換するだけでスマートライトに。',
  ARRAY['1,280円の驚異的低価格', 'ハブ不要で簡単導入', '1600万色で気分に合わせた演出', 'Alexa/Google音声操作対応'],
  ARRAY['Wi-Fiは2.4GHzのみ', 'Bluetooth非対応（初期設定もWi-Fi）', '色再現性はフィリップスHueに劣る'],
  'スマートホーム入門として最もハードルが低い製品。電球を交換するだけでスマート化完了。',
  NOW()
);

-- 8. SwitchBot ロック Pro
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
  'B0CJ1PHRPD',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'SwitchBot ロック Pro スマートロック 指紋認証パッド対応 工事不要',
  'switchbot-lock-pro',
  'SwitchBot', 'SwitchBot',
  15980, 'JPY', 17980, NOW(),
  'https://www.amazon.co.jp/dp/B0CJ1PHRPD',
  'https://www.amazon.co.jp/dp/B0CJ1PHRPD?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41Y-3ynr1AL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41Y-3ynr1AL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41Y-3ynr1AL._AC_SL160_.jpg',
  4.1, 2500, '在庫あり',
  ARRAY['工事不要で後付けスマートロック', 'オートロック機能', 'スマホ・Apple Watch・音声で解錠', 'バッテリー約9ヶ月持続', '指紋認証パッド（別売）対応', 'Alexa/Google/Siri対応'],
  '{"ロック方式": "サムターン回転式", "電源": "CR123A電池×2（約9ヶ月）", "通信": "Bluetooth 5.0 / Wi-Fi（ハブ経由）", "対応": "Alexa / Google / Siri / Apple Watch", "サイズ": "約120×59×83.9mm", "重量": "約450g", "解錠方法": "スマホ / 音声 / Apple Watch / NFC / 指紋（別売パッド）", "取付": "工事不要（3M粘着テープ）"}'::jsonb,
  false, true, 8,
  '賃貸でも使える工事不要のスマートロック。スマホや音声で玄関ドアを解錠でき、オートロック機能で鍵の閉め忘れも防止。指紋認証パッドと組み合わせれば鍵不要の生活に。',
  ARRAY['工事不要で賃貸OK', 'オートロックで閉め忘れ防止', 'Apple Watch対応', '指紋認証パッドで鍵不要に'],
  ARRAY['約16,000円とやや高い', '電池交換が必要（約9ヶ月）', 'Wi-Fi接続にはハブが必要'],
  '鍵の持ち歩きから解放される快適さは一度味わうと戻れない。スマートホームの中でも満足度が高いデバイス。',
  NOW()
);

-- 9. Amazon Echo Pop
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
  'B09ZXJSW35',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'Amazon Echo Pop コンパクトスマートスピーカー with Alexa',
  'amazon-echo-pop',
  'Amazon', 'Amazon',
  2480, 'JPY', 5980, NOW(),
  'https://www.amazon.co.jp/dp/B09ZXJSW35',
  'https://www.amazon.co.jp/dp/B09ZXJSW35?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/51m2VD7WxML._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/51m2VD7WxML._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/51m2VD7WxML._AC_SL160_.jpg',
  4.3, 8000, '在庫あり',
  ARRAY['2,480円の最安Alexaスピーカー', 'コンパクト半球デザイン', 'Alexa搭載で音声操作', '音楽ストリーミング再生', 'スマートホーム操作', 'Matter対応'],
  '{"スピーカー": "1.95インチフルレンジ", "通信": "Wi-Fi / Bluetooth 5.0", "サイズ": "約99×83×91mm", "重量": "約196g", "音声AI": "Alexa", "スマートホーム": "Matter対応", "電源": "AC電源（15W）"}'::jsonb,
  false, true, 9,
  '2,480円で手に入る最安Alexaスピーカー。各部屋にAlexaを配置したい人に最適なエントリーモデル。音質は控えめだがスマートホーム操作には十分。',
  ARRAY['2,480円の最安価格', 'コンパクトで場所を取らない', 'Matter対応', '可愛いデザイン'],
  ARRAY['音質はEcho Dotに劣る', 'モーション検知・温度センサー非搭載', 'スピーカーが小さい'],
  '各部屋にAlexa端末を置きたい人のためのコスパモデル。2台3台とまとめ買いに最適。',
  NOW()
);

-- 10. Philips Hue スターターセット E26
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
  'B09MYLJMXS',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'Philips Hue スターターセット E26 フルカラー 電球2個+ブリッジ',
  'philips-hue-starter-set',
  'Philips Hue', 'Signify',
  16800, 'JPY', 19800, NOW(),
  'https://www.amazon.co.jp/dp/B09MYLJMXS',
  'https://www.amazon.co.jp/dp/B09MYLJMXS?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41TWHB2Q5QL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41TWHB2Q5QL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41TWHB2Q5QL._AC_SL160_.jpg',
  4.4, 2200, '在庫あり',
  ARRAY['フルカラー1600万色LED電球×2', 'Hueブリッジ付きスターターセット', 'Alexa/Google/Siri対応', 'Zigbee接続で安定・低遅延', 'シーン・ルーティン設定', 'Matter対応で将来性も安心'],
  '{"電球": "E26 フルカラー×2個", "ブリッジ": "Hue Bridge（Zigbee/Ethernet）", "消費電力": "各9W（60W相当）", "色温度": "2000K-6500K + RGB", "明るさ": "各806ルーメン", "寿命": "約25000時間", "通信": "Zigbee / Matter", "対応": "Alexa / Google / Siri / HomeKit"}'::jsonb,
  false, true, 10,
  'スマートライトの王道Philips Hue。ブリッジ付きスターターセットで、Zigbee接続による安定した操作と豊富な連携が魅力。HomeKit完全対応でAppleユーザーにも最適。',
  ARRAY['スマートライトの最高峰ブランド', 'Zigbeeで安定・低遅延', 'HomeKit完全対応', '豊富なシーン・自動化機能'],
  ARRAY['約17,000円と高価', 'ブリッジが必要', '電球追加も割高'],
  'スマートライトに本格的に取り組みたい人に。安定性と拡張性ではHueが圧倒的。',
  NOW()
);

-- 11. SwitchBot 温湿度計プラス
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
  'B09PB8BX2N',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'SwitchBot 温湿度計プラス スマート温湿度計 アラート通知 データ記録',
  'switchbot-thermo-hygrometer-plus',
  'SwitchBot', 'SwitchBot',
  2480, 'JPY', 2980, NOW(),
  'https://www.amazon.co.jp/dp/B09PB8BX2N',
  'https://www.amazon.co.jp/dp/B09PB8BX2N?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/41y5RTXAg7L._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/41y5RTXAg7L._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/41y5RTXAg7L._AC_SL160_.jpg',
  4.3, 5000, '在庫あり',
  ARRAY['3インチ大画面で温湿度表示', 'スマホで外出先からモニタリング', 'アラート通知（高温・低温・高湿度）', '68日間のデータ記録・エクスポート', 'SwitchBotハブ連携で自動化', 'スイス製センサー搭載'],
  '{"センサー": "スイス製 Sensirion", "測定範囲": "温度-20〜65℃ / 湿度0-99%", "精度": "温度±0.2℃ / 湿度±2%", "ディスプレイ": "3インチ LCD", "電源": "単4電池×2（約1年）", "通信": "Bluetooth 5.0 / Wi-Fi（ハブ経由）", "サイズ": "約79×65×22mm", "重量": "約64g"}'::jsonb,
  false, true, 11,
  '2,480円のスマート温湿度計。スイス製高精度センサーでお部屋の温湿度を正確にモニタリング。SwitchBotハブと連携すればエアコン自動制御の条件にも使える。',
  ARRAY['2,480円の低価格', 'スイス製高精度センサー', '外出先からモニタリング可能', 'ハブ連携でエアコン自動制御'],
  ARRAY['Wi-Fiにはハブが必要', 'ディスプレイが白黒', '電池駆動のため交換が必要'],
  'スマートホーム自動化の「目」として活躍。ハブ2と組み合わせてエアコン自動制御に使うのが最適解。',
  NOW()
);

-- 12. TP-Link Tapo P105 スマートプラグ
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
  'B0979HJNSC',
  (SELECT id FROM categories WHERE slug = 'smart-home-device'),
  'TP-Link Tapo P105 スマートプラグ Wi-Fi Alexa/Google対応 2個セット',
  'tp-link-tapo-p105',
  'TP-Link', 'TP-Link',
  1780, 'JPY', 2380, NOW(),
  'https://www.amazon.co.jp/dp/B0979HJNSC',
  'https://www.amazon.co.jp/dp/B0979HJNSC?tag=lowpricesearc-22',
  'https://m.media-amazon.com/images/I/31oZJuLNFdL._AC_SL500_.jpg',
  'https://m.media-amazon.com/images/I/31oZJuLNFdL._AC_SL300_.jpg',
  'https://m.media-amazon.com/images/I/31oZJuLNFdL._AC_SL160_.jpg',
  4.2, 7000, '在庫あり',
  ARRAY['コンセントに挿すだけでスマート化', 'スマホ・音声で電源ON/OFF', 'スケジュール・タイマー設定', 'Alexa/Google対応', 'ハブ不要でWi-Fi直接接続', 'おでかけモード（ランダム点灯）'],
  '{"定格": "100V 50/60Hz 最大1500W", "通信": "Wi-Fi 2.4GHz", "サイズ": "約60×38mm（1個）", "対応": "Alexa / Google アシスタント", "設定": "スケジュール / タイマー / おでかけモード", "セット内容": "2個入り", "安全規格": "PSE認証"}'::jsonb,
  false, true, 12,
  '1,780円（2個セット）で家電をスマート化できる最安デバイス。間接照明やサーキュレーターなどコンセント式家電をスマホ・音声で操作可能に。スケジュール設定で自動ON/OFFも。',
  ARRAY['2個で1,780円の最安クラス', 'コンセントに挿すだけで導入完了', 'ハブ不要', 'スケジュール・タイマー対応'],
  ARRAY['消費電力モニタリング非対応', 'Wi-Fiは2.4GHzのみ', 'Matter非対応'],
  'スマートホーム最安の入口。間接照明のON/OFFを自動化するだけで生活が変わる。',
  NOW()
);
