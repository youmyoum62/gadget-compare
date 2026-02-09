-- ===========================================
-- 005_add_product_images.sql
-- Add real Amazon product image URLs
-- Image IDs fetched from Amazon.co.jp product pages
-- Sizes: _AC_SL500_ (large), _AC_SL300_ (medium), _AC_SL160_ (small)
-- ===========================================

-- Sony WF-1000XM5 (B0CBKQZXT7)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/41iw2zKsohL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/41iw2zKsohL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/41iw2zKsohL._AC_SL160_.jpg'
WHERE slug = 'sony-wf-1000xm5';

-- Apple AirPods Pro 2 (B0CHXVBQHR)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/51pifD5KawL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/51pifD5KawL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/51pifD5KawL._AC_SL160_.jpg'
WHERE slug = 'apple-airpods-pro-2';

-- Anker Soundcore Liberty 4 NC (B0C1P1N98V)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/818Yri9ThvL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/818Yri9ThvL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/818Yri9ThvL._AC_SL160_.jpg'
WHERE slug = 'anker-soundcore-liberty-4-nc';

-- Anker PowerCore 10000 (B019GNUT0C)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/51npXeK2FNL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/51npXeK2FNL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/51npXeK2FNL._AC_SL160_.jpg'
WHERE slug = 'anker-powercore-10000';

-- Anker 733 Power Bank (B09XXQ25PF)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/61wCSfVLG9L._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/61wCSfVLG9L._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/61wCSfVLG9L._AC_SL160_.jpg'
WHERE slug = 'anker-733-power-bank';

-- CIO SMARTCOBY Pro SLIM (B0CHVZHLZ1)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/81m13XJkzLL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/81m13XJkzLL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/81m13XJkzLL._AC_SL160_.jpg'
WHERE slug = 'cio-smartcoby-pro-30w';

-- Apple Watch SE 2nd Gen (B0DGJ44G2T)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/618BgyrrV1L._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/618BgyrrV1L._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/618BgyrrV1L._AC_SL160_.jpg'
WHERE slug = 'apple-watch-se-2nd-gen';

-- Garmin Venu Sq 2 (B0BDJTWRMV)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/61zh1o9o1mL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/61zh1o9o1mL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/61zh1o9o1mL._AC_SL160_.jpg'
WHERE slug = 'garmin-venu-sq-2';

-- Xiaomi Smart Band 9 (B0D8WQ94W5)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/51K8rY56sfL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/51K8rY56sfL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/51K8rY56sfL._AC_SL160_.jpg'
WHERE slug = 'xiaomi-smart-band-9';

-- Anker 737 Charger 120W (B09W9MS685)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/51nxTi44z9L._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/51nxTi44z9L._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/51nxTi44z9L._AC_SL160_.jpg'
WHERE slug = 'anker-737-charger-120w';

-- CIO NovaPort TRIO 65W (B0B2P6HD4L)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/61sLXPie-eL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/61sLXPie-eL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/61sLXPie-eL._AC_SL160_.jpg'
WHERE slug = 'cio-novaport-trio-65w';

-- Anker Nano II 65W (B08X11GD52)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/51p3xiAi7KL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/51p3xiAi7KL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/51p3xiAi7KL._AC_SL160_.jpg'
WHERE slug = 'anker-nano-ii-65w';

-- Apple iPad 10th Gen (B0BJMWMH9G)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/61ToKShnQvL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/61ToKShnQvL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/61ToKShnQvL._AC_SL160_.jpg'
WHERE slug = 'apple-ipad-10th-gen';

-- Amazon Fire HD 10 (B0BL5M5C4K)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/61nwWehfm0L._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/61nwWehfm0L._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/61nwWehfm0L._AC_SL160_.jpg'
WHERE slug = 'amazon-fire-hd-10';

-- Xiaomi Pad 6 (B0C8V626MF)
UPDATE products SET
  image_url_large  = 'https://m.media-amazon.com/images/I/611kmR2luPL._AC_SL500_.jpg',
  image_url_medium = 'https://m.media-amazon.com/images/I/611kmR2luPL._AC_SL300_.jpg',
  image_url_small  = 'https://m.media-amazon.com/images/I/611kmR2luPL._AC_SL160_.jpg'
WHERE slug = 'xiaomi-pad-6';
