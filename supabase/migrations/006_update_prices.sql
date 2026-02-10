-- ===========================================
-- 006_update_prices.sql
-- Update prices to current Amazon.co.jp values
-- Date: 2026-02-10
-- ===========================================

-- Sony WF-1000XM5 (Amazon実売価格)
UPDATE products SET
  price_amount = 26500, list_price_amount = 41800, price_updated_at = NOW()
WHERE slug = 'sony-wf-1000xm5';

-- Apple AirPods Pro 2 USB-C
UPDATE products SET
  price_amount = 29000, list_price_amount = 39800, price_updated_at = NOW()
WHERE slug = 'apple-airpods-pro-2';

-- Anker Soundcore Liberty 4 NC
UPDATE products SET
  price_amount = 7990, list_price_amount = 12980, price_updated_at = NOW()
WHERE slug = 'anker-soundcore-liberty-4-nc';

-- Anker PowerCore 10000
UPDATE products SET
  price_amount = 2790, list_price_amount = NULL, price_updated_at = NOW()
WHERE slug = 'anker-powercore-10000';

-- Anker 733 Power Bank GaNPrime
UPDATE products SET
  price_amount = 13990, list_price_amount = NULL, price_updated_at = NOW()
WHERE slug = 'anker-733-power-bank';

-- CIO SMARTCOBY Pro SLIM 35W
UPDATE products SET
  price_amount = 3940, list_price_amount = 4818, price_updated_at = NOW()
WHERE slug = 'cio-smartcoby-pro-30w';

-- Apple Watch SE 2nd Gen 40mm (2024 model)
UPDATE products SET
  price_amount = 29800, list_price_amount = 34800, price_updated_at = NOW()
WHERE slug = 'apple-watch-se-2nd-gen';

-- Garmin Venu Sq 2 Music
UPDATE products SET
  price_amount = 29800, list_price_amount = 39800, price_updated_at = NOW()
WHERE slug = 'garmin-venu-sq-2';

-- Xiaomi Smart Band 9
UPDATE products SET
  price_amount = 3980, list_price_amount = 4990, price_updated_at = NOW()
WHERE slug = 'xiaomi-smart-band-9';

-- Anker 737 Charger 120W
UPDATE products SET
  price_amount = 12990, list_price_amount = NULL, price_updated_at = NOW()
WHERE slug = 'anker-737-charger-120w';

-- CIO NovaPort TRIO 65W
UPDATE products SET
  price_amount = 4380, list_price_amount = 4818, price_updated_at = NOW()
WHERE slug = 'cio-novaport-trio-65w';

-- Anker Nano II 65W
UPDATE products SET
  price_amount = 3990, list_price_amount = 4490, price_updated_at = NOW()
WHERE slug = 'anker-nano-ii-65w';

-- Apple iPad 10th Gen 64GB
UPDATE products SET
  price_amount = 49800, list_price_amount = 58800, price_updated_at = NOW()
WHERE slug = 'apple-ipad-10th-gen';

-- Amazon Fire HD 10 32GB
UPDATE products SET
  price_amount = 19980, list_price_amount = NULL, price_updated_at = NOW()
WHERE slug = 'amazon-fire-hd-10';

-- Xiaomi Pad 6 128GB
UPDATE products SET
  price_amount = 33980, list_price_amount = 49800, price_updated_at = NOW()
WHERE slug = 'xiaomi-pad-6';
