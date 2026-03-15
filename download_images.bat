@echo off
mkdir "public\images\products" 2>nul

echo Downloading iPhone 15 Pro Max...
curl "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-natural-titanium-select?wid=512&hei=512&fmt=png-alpha" -o "public/images/products/iphone-15-pro-max.png"

echo Downloading Samsung S24 Ultra...
curl "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bztqins-539573356?$650_519_PNG$" -o "public/images/products/samsung-s24-ultra.png"

echo Downloading Vivo X100 Pro...
curl "https://www.vivo.com/in/content/products/x100pro/images/kv-mobile.png" -o "public/images/products/vivo-x100-pro.png"

echo Downloading OnePlus 12...
curl "https://image01.oneplus.net/ebp/202401/23/1-m00-51-0c-rbbgomevqzuaf8iqaaf6m5u0k4a821.png" -o "public/images/products/oneplus-12.png"

echo Downloading Redmi Note 13 Pro+...
curl "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1704372728.84759608.png" -o "public/images/products/redmi-note-13-pro-plus.png"

echo Downloading Oppo Reno 11 Pro...
curl "https://image.oppo.com/content/dam/oppo/common/mkt/v2-new-product-page/reno11-pro-5g/kv/Reno11-Pro-5G-KV-PC.webp" -o "public/images/products/oppo-reno-11-pro.webp"

echo Downloading Realme 12 Pro+...
curl "https://image01.realme.net/general/20240129/1706518368553.png" -o "public/images/products/realme-12-pro-plus.png"

echo Downloading Samsung A54...
curl "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a546elzdins/gallery/in-galaxy-a54-5g-sm-a546-sm-a546elzdins-535925348?$650_519_PNG$" -o "public/images/products/samsung-a54.png"

echo Downloading iPhone 13...
curl "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-starlight-select-2021?wid=470&hei=556&fmt=png-alpha" -o "public/images/products/iphone-13.png"

echo Done.
