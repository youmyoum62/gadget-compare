-- ===========================================
-- 004_fix_asins.sql
-- Fix ASINs to real Amazon.co.jp product IDs
-- ===========================================

-- Sony WF-1000XM5
UPDATE products SET
  asin = 'B0CBKQZXT7',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0CBKQZXT7',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0CBKQZXT7?tag=lowpricesearc-22'
WHERE slug = 'sony-wf-1000xm5';

-- Apple AirPods Pro 2 (USB-C)
UPDATE products SET
  asin = 'B0CHXVBQHR',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0CHXVBQHR',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0CHXVBQHR?tag=lowpricesearc-22'
WHERE slug = 'apple-airpods-pro-2';

-- Anker Soundcore Liberty 4 NC (Black)
UPDATE products SET
  asin = 'B0C1P1N98V',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0C1P1N98V',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0C1P1N98V?tag=lowpricesearc-22'
WHERE slug = 'anker-soundcore-liberty-4-nc';

-- Anker PowerCore 10000
UPDATE products SET
  asin = 'B019GNUT0C',
  detail_page_url = 'https://www.amazon.co.jp/dp/B019GNUT0C',
  affiliate_url = 'https://www.amazon.co.jp/dp/B019GNUT0C?tag=lowpricesearc-22'
WHERE slug = 'anker-powercore-10000';

-- Anker 733 Power Bank (GaNPrime)
UPDATE products SET
  asin = 'B09XXQ25PF',
  detail_page_url = 'https://www.amazon.co.jp/dp/B09XXQ25PF',
  affiliate_url = 'https://www.amazon.co.jp/dp/B09XXQ25PF?tag=lowpricesearc-22'
WHERE slug = 'anker-733-power-bank';

-- CIO SMARTCOBY Pro SLIM 35W
UPDATE products SET
  asin = 'B0CHVZHLZ1',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0CHVZHLZ1',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0CHVZHLZ1?tag=lowpricesearc-22'
WHERE slug = 'cio-smartcoby-pro-30w';

-- Apple Watch SE 2nd Gen (GPS, 40mm, Starlight)
UPDATE products SET
  asin = 'B0DGJ44G2T',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0DGJ44G2T',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0DGJ44G2T?tag=lowpricesearc-22'
WHERE slug = 'apple-watch-se-2nd-gen';

-- Garmin Venu Sq 2 Music
UPDATE products SET
  asin = 'B0BDJTWRMV',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0BDJTWRMV',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0BDJTWRMV?tag=lowpricesearc-22'
WHERE slug = 'garmin-venu-sq-2';

-- Xiaomi Smart Band 9
UPDATE products SET
  asin = 'B0D8WQ94W5',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0D8WQ94W5',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0D8WQ94W5?tag=lowpricesearc-22'
WHERE slug = 'xiaomi-smart-band-9';

-- Anker 737 Charger (GaNPrime 120W)
UPDATE products SET
  asin = 'B09W9MS685',
  detail_page_url = 'https://www.amazon.co.jp/dp/B09W9MS685',
  affiliate_url = 'https://www.amazon.co.jp/dp/B09W9MS685?tag=lowpricesearc-22'
WHERE slug = 'anker-737-charger-120w';

-- CIO NovaPort TRIO 65W
UPDATE products SET
  asin = 'B0B2P6HD4L',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0B2P6HD4L',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0B2P6HD4L?tag=lowpricesearc-22'
WHERE slug = 'cio-novaport-trio-65w';

-- Anker Nano II 65W
UPDATE products SET
  asin = 'B08X11GD52',
  detail_page_url = 'https://www.amazon.co.jp/dp/B08X11GD52',
  affiliate_url = 'https://www.amazon.co.jp/dp/B08X11GD52?tag=lowpricesearc-22'
WHERE slug = 'anker-nano-ii-65w';

-- Apple iPad 10th Gen (64GB Silver)
UPDATE products SET
  asin = 'B0BJMWMH9G',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0BJMWMH9G',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0BJMWMH9G?tag=lowpricesearc-22'
WHERE slug = 'apple-ipad-10th-gen';

-- Amazon Fire HD 10 (32GB Black)
UPDATE products SET
  asin = 'B0BL5M5C4K',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0BL5M5C4K',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0BL5M5C4K?tag=lowpricesearc-22'
WHERE slug = 'amazon-fire-hd-10';

-- Xiaomi Pad 6 (6GB+128GB Gravity Gray)
UPDATE products SET
  asin = 'B0C8V626MF',
  detail_page_url = 'https://www.amazon.co.jp/dp/B0C8V626MF',
  affiliate_url = 'https://www.amazon.co.jp/dp/B0C8V626MF?tag=lowpricesearc-22'
WHERE slug = 'xiaomi-pad-6';
