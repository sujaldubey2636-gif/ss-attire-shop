/* ===================================================================
   SS ATTIRE SHOP — Immersive 3D Parallax & Clean 2D Shopping SPA
   =================================================================== */

// ==================== PRODUCT DATA ====================
const products = [
  // ---- WOMEN'S WEAR ----
  {
    id: 1, name: 'Chikankari Handloom Anarkali Kurta', brand: 'SS Heritage',
    price: 3499, oldPrice: 4299, category: 'women',
    image: 'img/prod-dress.png', badge: 'trending',
    rating: 4.8, reviews: 127,
    description: 'Beautifully handcrafted Chikankari Anarkali kurta in soft premium georgette fabric. Adorned with intricate shadow work embroidery from Lucknow artisans. Elegant drape, lightweight, and perfect for semi-formal gatherings.',
    details: 'Pure georgette fabric. Intricate hand-embroidery. Long sleeves. Round neck with front button details. Includes inner slip.',
    sku: 'SS-WMN-CHIK-001', weight: '0.65 kg', material: 'Georgette, Cotton Thread', origin: 'Handcrafted in Lucknow, India',
    warranty: '6 Months Stitching Warranty', availability: 'In Stock', care: 'Gentle hand wash or dry clean only. Iron on reverse.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Peach Gold',hex:'#FFDAB9'},{name:'Ivory White',hex:'#FFFFF0'},{name:'Mint Green',hex:'#98FF98'}],
    galleryImages: ['img/prod-dress.png','img/cat-women.png','img/prod-blouse.png','img/hero.png']
  },
  {
    id: 2, name: 'Banarasi Silk Festive Saree', brand: 'SS Heritage',
    price: 4999, oldPrice: 5999, category: 'women',
    image: 'img/cat-traditional.png', badge: 'new',
    rating: 4.9, reviews: 89,
    description: 'Woven with pure gold zari threads on soft Banarasi blend silk. Features beautiful floral motifs and a grand pallu. A timeless masterpiece that embodies traditional Indian royalty for weddings and festivals.',
    details: 'Banarasi Silk Blend. Zari borders and motifs. Length: 5.5 meters plus 0.8 meters unstitched blouse piece.',
    sku: 'SS-WMN-SARI-002', weight: '0.8 kg', material: 'Banarasi Silk Blend with Gold Zari', origin: 'Woven in Varanasi, India',
    warranty: '1 Year Fabric Warranty', availability: 'In Stock', care: 'Dry clean only. Store wrapped in clean muslin cloth.',
    sizes: ['One Size'], colors: [{name:'Royal Crimson',hex:'#DC143C'},{name:'Maroon Gold',hex:'#800020'},{name:'Mustard Gold',hex:'#FFDB58'}],
    galleryImages: ['img/cat-traditional.png','img/prod-kurta.png','img/cat-women.png','img/hero.png']
  },
  {
    id: 3, name: 'Bandhani Print Georgette Lehenga Set', brand: 'SS Luxe',
    price: 4499, oldPrice: 4999, category: 'women',
    image: 'img/prod-dress.png', badge: 'sale',
    rating: 4.7, reviews: 94,
    description: 'Vibrant Rajasthani Bandhani tie-and-dye printed lehenga choli set. Features a flared skirt with gold gota patti border, a matching blouse, and a lightweight dupatta. Designed to dance the night away during Garba and weddings.',
    details: 'Set includes flared lehenga skirt, semi-stitched blouse piece, and embellished dupatta. Gota patti borders.',
    sku: 'SS-WMN-LEH-003', weight: '1.2 kg', material: 'Georgette, Cotton Lining, Zari Border', origin: 'Made in Jaipur, India',
    warranty: '6 Months Quality Warranty', availability: 'In Stock', care: 'Dry clean recommended. Low steam iron only.',
    sizes: ['S','M','L','XL'], colors: [{name:'Marigold Orange',hex:'#FFA500'},{name:'Ruby Red',hex:'#9B111E'},{name:'Emerald Green',hex:'#2E8B57'}],
    galleryImages: ['img/prod-dress.png','img/cat-women.png','img/prod-blouse.png','img/hero.png']
  },
  {
    id: 4, name: 'Jaipuri Block Print Cotton Suit Set', brand: 'SS Essentials',
    price: 2999, oldPrice: 3499, category: 'women',
    image: 'img/prod-blouse.png', badge: 'trending',
    rating: 4.6, reviews: 112,
    description: '100% premium cotton suit set styled with hand-block prints using natural vegetable dyes. Includes a straight-fit kurta, matching trousers, and a soft mulmul dupatta. Comfortable for hot Indian summers.',
    details: 'Set of 3: Kurta, Pants, and Dupatta. 100% Cotton. Hand-block printed.',
    sku: 'SS-WMN-SUIT-004', weight: '0.45 kg', material: '100% Organic Cotton', origin: 'Jaipur, Rajasthan, India',
    warranty: '6 Months Print Warranty', availability: 'In Stock', care: 'Machine wash cold inside out with mild detergent. Line dry in shade.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Indigo Blue',hex:'#000080'},{name:'Madder Red',hex:'#E32636'},{name:'Turmeric Yellow',hex:'#D4AF37'}],
    galleryImages: ['img/prod-blouse.png','img/cat-women.png','img/prod-dress.png','img/hero.png']
  },
  {
    id: 5, name: 'Elegant Floral Organza Dupatta Set', brand: 'SS Luxe',
    price: 3999, oldPrice: null, category: 'women',
    image: 'img/cat-women.png', badge: 'new',
    rating: 4.8, reviews: 78,
    description: 'A beautiful straight suit in soft pastel hues, paired with an exquisite hand-painted floral organza dupatta with scalloped borders. Gives an ultra-modern, feminine aesthetic to your festive wardrobe.',
    details: 'Viscose silk straight kurta, comfortable pants, and a premium printed organza dupatta.',
    sku: 'SS-WMN-ORGN-005', weight: '0.5 kg', material: 'Viscose Silk Blend, Organza Dupatta', origin: 'Designed & Made in India',
    warranty: '6 Months Stitching Warranty', availability: 'In Stock', care: 'Dry clean or gentle hand wash. Do not wring organza dupatta.',
    sizes: ['XS','S','M','L','XL'], colors: [{name:'Blush Pink',hex:'#FFB6C1'},{name:'Powder Blue',hex:'#B0E0E6'},{name:'Lavender Rose',hex:'#E6E6FA'}],
    galleryImages: ['img/cat-women.png','img/prod-dress.png','img/prod-blouse.png','img/hero.png']
  },
  {
    id: 6, name: 'Phulkari Embroidered Festive Kurti', brand: 'SS Heritage',
    price: 1899, oldPrice: 2299, category: 'women',
    image: 'img/prod-blouse.png', badge: 'sale',
    rating: 4.5, reviews: 67,
    description: 'A vibrant short kurti featuring traditional Punjabi Phulkari geometric embroidery in colorful silk threads. Made from premium khadi cotton, perfect to pair with patialas, palazzos, or jeans.',
    details: 'Khadi cotton base. Full hand-embellished Phulkari embroidery on front. V-neck.',
    sku: 'SS-WMN-PHUL-006', weight: '0.3 kg', material: 'Khadi Cotton, Silk Threads', origin: 'Amritsar, Punjab, India',
    warranty: 'None', availability: 'Limited Stock', care: 'Gentle hand wash. Do not bleach. Iron on reverse side.',
    sizes: ['S','M','L','XL'], colors: [{name:'Sun Gold',hex:'#FFD700'},{name:'Royal Blue',hex:'#4169E1'},{name:'Magenta Pink',hex:'#FF00FF'}],
    galleryImages: ['img/prod-blouse.png','img/cat-women.png','img/prod-dress.png','img/hero.png']
  },
  {
    id: 7, name: 'Kanjeevaram Art Silk Bridal Saree', brand: 'SS Heritage',
    price: 4799, oldPrice: 5499, category: 'women',
    image: 'img/prod-women-saree.png', badge: 'new',
    rating: 4.9, reviews: 45,
    description: 'A grand Kanjeevaram style art silk saree woven with traditional temple borders and motifs. Perfect for weddings, receptions, and festivals. Elegant red and gold contrast blouse piece included.',
    details: 'Kanjeevaram Silk Blend. Temple zari borders. Length: 5.5 meters plus 0.8 meters unstitched blouse.',
    sku: 'SS-WMN-KANJ-007', weight: '0.75 kg', material: 'Art Silk with Gold Zari', origin: 'Kanchipuram style weave, India',
    warranty: '1 Year Quality Warranty', availability: 'In Stock', care: 'Dry clean only. Store wrapped in cotton cloth.',
    sizes: ['One Size'], colors: [{name:'Vermillion Red',hex:'#E34234'},{name:'Deep Crimson',hex:'#990000'}],
    galleryImages: ['img/prod-women-saree.png','img/cat-women.png','img/cat-traditional.png']
  },
  {
    id: 8, name: 'Ajrakh Hand-Block Print Indigo Kurta', brand: 'SS Essentials',
    price: 2199, oldPrice: 2699, category: 'women',
    image: 'img/prod-women-ajrakh.png', badge: 'trending',
    rating: 4.7, reviews: 52,
    description: 'An authentic Ajrakh hand-block printed straight kurta using natural indigo dye. Styled with traditional geometric tiles from Barmer artisans. Highly comfortable cotton and extremely stylish.',
    details: '100% Cotton. Straight fit. Side slits. Three-quarter sleeves. Natural dyes.',
    sku: 'SS-WMN-AJRK-008', weight: '0.35 kg', material: '100% Premium Cotton', origin: 'Barmer, Rajasthan, India',
    warranty: '6 Months Fabric Warranty', availability: 'In Stock', care: 'Wash separately in cold water. Natural dyes bleed slightly.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Indigo Blue',hex:'#0021A5'},{name:'Terracotta Red',hex:'#C24641'}],
    galleryImages: ['img/prod-women-ajrakh.png','img/cat-women.png','img/prod-blouse.png']
  },
  {
    id: 9, name: 'Chanderi Silk A-Line Kurta Set', brand: 'SS Luxe',
    price: 4299, oldPrice: null, category: 'women',
    image: 'img/prod-women-chanderi.png', badge: 'new',
    rating: 4.8, reviews: 38,
    description: 'A pastel peach Chanderi silk A-line kurta set with delicate hand embroidery around the neckline. Styled with a matching pajama and a sheer organza dupatta. Soft, sophisticated, and grand.',
    details: 'Includes: Kurta, Pajama, Organza Dupatta. Fully lined with cotton inner.',
    sku: 'SS-WMN-CHND-009', weight: '0.55 kg', material: 'Chanderi Silk, Cotton Lining, Organza', origin: 'Chanderi, Madhya Pradesh, India',
    warranty: '6 Months Stitching Warranty', availability: 'In Stock', care: 'Dry clean only. Low steam iron.',
    sizes: ['XS','S','M','L','XL'], colors: [{name:'Pastel Peach',hex:'#FFDAB9'},{name:'Soft Mint',hex:'#AAF0D1'}],
    galleryImages: ['img/prod-women-chanderi.png','img/cat-women.png','img/prod-dress.png']
  },
  {
    id: 10, name: 'Gujarati Rabari Embroidered Shrug Jacket', brand: 'SS Street',
    price: 2499, oldPrice: 2999, category: 'women',
    image: 'img/prod-women-shrug.png', badge: 'sale',
    rating: 4.6, reviews: 31,
    description: 'A vibrant Gujarati Rabari mirror-work embroidered shrug jacket. Hand-embellished by Kutch artisans with colorful threads and tiny mirrors. Perfect to wear over solid kurtas or contemporary crop tops.',
    details: 'Open front shrug. Full mirror embroidery. Tassels on side seams.',
    sku: 'SS-WMN-RABR-010', weight: '0.4 kg', material: 'Cotton Canvas, Mirrors, Silk Threads', origin: 'Kutch, Gujarat, India',
    warranty: 'None', availability: 'Limited Stock', care: 'Dry clean only. Handle mirrors with care.',
    sizes: ['Free Size'], colors: [{name:'Multicolor',hex:'#FFFFFF'}],
    galleryImages: ['img/prod-women-shrug.png','img/cat-women.png','img/prod-blouse.png']
  },

  // ---- KIDS' WEAR ----
  {
    id: 11, name: 'Boys Traditional Dhoti Kurta Set', brand: 'SS Heritage Kids',
    price: 1499, oldPrice: 1999, category: 'kids',
    image: 'img/prod-kids-dhoti.png', badge: 'trending',
    rating: 4.8, reviews: 201,
    description: 'A charming traditional dhoti kurta set for boys. Features a soft cotton kurta with gold piping and a pre-stitched, easy-to-wear elasticated dhoti pant. Gentle on children\'s skin and ideal for family pujas and festivals.',
    details: 'Includes: 1 Kurta, 1 Pre-stitched Dhoti. Elasticated waistband. Front buttons on kurta.',
    sku: 'SS-KDS-DHOT-007', weight: '0.25 kg', material: '100% Breathable Cotton', origin: 'Handcrafted in India',
    warranty: 'None', availability: 'In Stock', care: 'Machine wash cold. Warm iron inside out.',
    sizes: ['2-3 Y','4-5 Y','6-7 Y','8-9 Y','10-12 Y'], colors: [{name:'Saffron Gold',hex:'#FFA500'},{name:'Emerald Green',hex:'#2E8B57'},{name:'Traditional Red',hex:'#B22222'}],
    galleryImages: ['img/prod-kids-dhoti.png','img/cat-kids.png','img/prod-kids-nehru.png','img/prod-kids-chikankari.png']
  },
  {
    id: 12, name: 'Girls Zari Border Pattu Pavadai Set', brand: 'SS Heritage Kids',
    price: 1999, oldPrice: 2499, category: 'kids',
    image: 'img/prod-kids-pattu.png', badge: 'new',
    rating: 4.9, reviews: 54,
    description: 'Traditional South Indian Pattu Pavadai set for girls, woven in rich art silk with a golden zari border. Includes an embellished crop-style top (choli) and a pleated skirt. Light, soft, and comfortable for all-day festive celebrations.',
    details: '2-piece set: Blouse and Pavadai Skirt. Fully lined with soft cotton for kid comfort.',
    sku: 'SS-KDS-PATT-008', weight: '0.35 kg', material: 'Art Silk, Cotton Inner Lining, Zari Thread', origin: 'Kanchipuram, Tamil Nadu, India',
    warranty: 'None', availability: 'In Stock', care: 'Dry clean or gentle hand wash only. Store wrapped in paper.',
    sizes: ['2-3 Y','4-5 Y','6-7 Y','8-9 Y','10-12 Y'], colors: [{name:'Fuchsia & Mustard',hex:'#FF00FF'},{name:'Green & Red',hex:'#008000'},{name:'Blue & Orange',hex:'#0000FF'}],
    galleryImages: ['img/prod-kids-pattu.png','img/cat-kids.png','img/prod-kids-lehenga.png','img/prod-kids-frock.png']
  },
  {
    id: 13, name: 'Kids Bandhani Nehru Jacket Set', brand: 'SS Heritage Kids',
    price: 2299, oldPrice: null, category: 'kids',
    image: 'img/prod-kids-nehru.png', badge: 'trending',
    rating: 4.6, reviews: 42,
    description: 'A smart ethnic coordinates set for boys. Features a solid color cotton kurta, comfortable churidar pajama, and a printed silk Nehru jacket with Bandhani details and brass buttons.',
    details: '3-piece set: Kurta, Pyjama, and Nehru Jacket. Jacket features functional pockets.',
    sku: 'SS-KDS-NEHR-009', weight: '0.4 kg', material: 'Cotton Kurta/Pyjama, Art Silk Jacket', origin: 'Jaipur, Rajasthan, India',
    warranty: '6 Months Stitching Warranty', availability: 'In Stock', care: 'Dry clean recommended. Jacket dry clean only.',
    sizes: ['4-5 Y','6-7 Y','8-9 Y','10-12 Y'], colors: [{name:'Teal & Orange',hex:'#008080'},{name:'Yellow & Royal Blue',hex:'#FFD700'},{name:'Peach & Maroon',hex:'#FFDAB9'}],
    galleryImages: ['img/prod-kids-nehru.png','img/cat-kids.png','img/prod-kids-dhoti.png','img/prod-kids-chikankari.png']
  },
  {
    id: 14, name: 'Jaipuri Block Print Cotton Frock', brand: 'SS Essentials Kids',
    price: 999, oldPrice: 1299, category: 'kids',
    image: 'img/prod-kids-frock.png', badge: 'sale',
    rating: 4.7, reviews: 83,
    description: 'A cute and breathable summer dress for girls, hand-block printed in traditional Jaipuri bootis using organic dyes. Features a comfortable round neck, adjustable back-tie sash, and soft cotton lace trims.',
    details: '100% Cotton. Knee-length. Back zipper. Soft cotton inner lining.',
    sku: 'SS-KDS-FRK-010', weight: '0.15 kg', material: '100% Hand-Block Cotton', origin: 'Jaipur, India',
    warranty: 'None', availability: 'In Stock', care: 'Machine wash cold. Line dry in shade.',
    sizes: ['2-3 Y','4-5 Y','6-7 Y','8-9 Y'], colors: [{name:'Turquoise Blue',hex:'#40E0D0'},{name:'Coral Pink',hex:'#F08080'},{name:'Sunny Yellow',hex:'#FFFFE0'}],
    galleryImages: ['img/prod-kids-frock.png','img/cat-kids.png','img/prod-kids-pattu.png','img/prod-kids-lehenga.png']
  },
  {
    id: 15, name: 'Kids Chikankari Cotton Kurta Set', brand: 'SS Essentials Kids',
    price: 1299, oldPrice: 1499, category: 'kids',
    image: 'img/prod-kids-chikankari.png', badge: 'trending',
    rating: 4.7, reviews: 31,
    description: 'Chikankari-embroidered soft cotton kurta with matching pajama set. Features light shadow work around the neck, specially crafted for kids. Extremely soft and breathable for everyday comfort.',
    details: '2-piece set: Kurta and white pajama. Hand-embellished details.',
    sku: 'SS-KDS-CHIK-011', weight: '0.2 kg', material: '100% Soft Cotton', origin: 'Lucknow, Uttar Pradesh, India',
    warranty: 'None', availability: 'In Stock', care: 'Hand wash cold. Iron on reverse.',
    sizes: ['2-3 Y','4-5 Y','6-7 Y','8-9 Y','10-12 Y'], colors: [{name:'Sky Blue',hex:'#87CEEB'},{name:'Baby Pink',hex:'#FFB6C1'},{name:'Butter Yellow',hex:'#FFFDD0'}],
    galleryImages: ['img/prod-kids-chikankari.png','img/cat-kids.png','img/prod-kids-dhoti.png','img/prod-kids-nehru.png']
  },
  {
    id: 16, name: 'Festive Silk Lehenga for Girls', brand: 'SS Heritage Kids',
    price: 2799, oldPrice: 3299, category: 'kids',
    image: 'img/prod-kids-lehenga.png', badge: 'new',
    rating: 4.8, reviews: 29,
    description: 'A beautiful art silk lehenga set for young girls. Includes a floral brocade skirt, a matching blouse with gold beadwork on the sleeves, and a soft net dupatta. Elasticated skirt for a comfortable fit.',
    details: 'Set includes: Blouse, Lehenga skirt, Net dupatta. Elasticated waist.',
    sku: 'SS-KDS-LEH-012', weight: '0.5 kg', material: 'Art Silk, Polyester Brocade, Net', origin: 'Made in India',
    warranty: '6 Months Quality Warranty', availability: 'In Stock', care: 'Gentle hand wash or dry clean. Do not rub metallic print.',
    sizes: ['4-5 Y','6-7 Y','8-9 Y','10-12 Y'], colors: [{name:'Rani Pink',hex:'#C71585'},{name:'Golden Yellow',hex:'#FFD700'},{name:'Royal Navy',hex:'#000080'}],
    galleryImages: ['img/prod-kids-lehenga.png','img/cat-kids.png','img/prod-kids-pattu.png','img/prod-kids-frock.png']
  },
  {
    id: 17, name: 'Boys South Indian Veshti Kurta Set', brand: 'SS Heritage Kids',
    price: 1399, oldPrice: 1799, category: 'kids',
    image: 'img/prod-kids-veshti.png', badge: 'new',
    rating: 4.8, reviews: 18,
    description: 'Classic South Indian traditional look for boys. Woven in soft cream art silk kurta paired with a matching gold zari bordered pre-stitched veshti. Extremely easy to wear and comfortable.',
    details: '2-piece set: Kurta and pre-stitched gold zari border veshti (dhoti). Waist band elasticated.',
    sku: 'SS-KDS-VESH-017', weight: '0.28 kg', material: 'Art Silk Blend, Cotton Lining', origin: 'Tamil Nadu, India',
    warranty: 'None', availability: 'In Stock', care: 'Dry clean or gentle hand wash. Warm iron on silk setting.',
    sizes: ['2-3 Y','4-5 Y','6-7 Y','8-9 Y'], colors: [{name:'Cream & Gold',hex:'#FFFDD0'}],
    galleryImages: ['img/prod-kids-veshti.png','img/cat-kids.png','img/prod-kids-pattu.png']
  },
  {
    id: 18, name: 'Girls Bandhani Tiered Anarkali Dress', brand: 'SS Essentials Kids',
    price: 1899, oldPrice: 2299, category: 'kids',
    image: 'img/prod-kids-tiered.png', badge: 'trending',
    rating: 4.7, reviews: 22,
    description: 'A bright tiered cotton Anarkali gown dress for girls in authentic Bandhani print. Designed with cute tassels on the shoulder straps and a wide, beautiful flare. Perfect for garba, diwali, or casual festive wear.',
    details: 'Tiered cotton dress. Fully lined. Tassels on sleeves. Ankle length.',
    sku: 'SS-KDS-TIER-018', weight: '0.3 kg', material: '100% Soft Cotton', origin: 'Rajasthan, India',
    warranty: 'None', availability: 'In Stock', care: 'Hand wash cold separately. Do not soak.',
    sizes: ['4-5 Y','6-7 Y','8-9 Y','10-12 Y'], colors: [{name:'Bright Yellow',hex:'#FFD700'},{name:'Festive Fuchsia',hex:'#FF007F'}],
    galleryImages: ['img/prod-kids-tiered.png','img/cat-kids.png','img/prod-kids-frock.png']
  },
  {
    id: 19, name: 'Boys Cotton Linen Pathani Suit Set', brand: 'SS Essentials Kids',
    price: 1699, oldPrice: null, category: 'kids',
    image: 'img/prod-kids-pathani.png', badge: 'new',
    rating: 4.6, reviews: 14,
    description: 'A stylish and comfortable green Pathani suit set for boys. Made from premium cotton linen blend, featuring a classic collared shirt-style kurta and loose salwar pants.',
    details: '2-piece set: Pathani Kurta and Salwar pajama. Features roll-up sleeves and double chest pockets.',
    sku: 'SS-KDS-PATH-019', weight: '0.32 kg', material: 'Cotton-Linen Blend', origin: 'Crafted in India',
    warranty: '6 Months Quality Warranty', availability: 'In Stock', care: 'Machine wash warm with like colors. Iron on medium.',
    sizes: ['4-5 Y','6-7 Y','8-9 Y','10-12 Y'], colors: [{name:'Olive Green',hex:'#556B2F'},{name:'Steel Blue',hex:'#4682B4'}],
    galleryImages: ['img/prod-kids-pathani.png','img/cat-kids.png','img/prod-kids-dhoti.png']
  },
  {
    id: 20, name: 'Girls Angrakha Style Festive Frock', brand: 'SS Luxe Kids',
    price: 1299, oldPrice: 1599, category: 'kids',
    image: 'img/prod-kids-angrakha.png', badge: 'sale',
    rating: 4.9, reviews: 25,
    description: 'An elegant traditional Angrakha style pink cotton frock for young girls. Embellished with beautiful gota patti work borders and tie-up dori details on the side. Extremely skin-friendly cotton.',
    details: 'Angrakha tie-up pattern frock. Flare skirt with gota lace trims. Full cotton lining.',
    sku: 'SS-KDS-ANG-020', weight: '0.22 kg', material: '100% Premium Cotton', origin: 'Jaipur, India',
    warranty: 'None', availability: 'In Stock', care: 'Gentle hand wash inside out. Warm iron.',
    sizes: ['2-3 Y','4-5 Y','6-7 Y','8-9 Y'], colors: [{name:'Rose Pink',hex:'#FFC0CB'},{name:'Turquoise Blue',hex:'#40E0D0'}],
    galleryImages: ['img/prod-kids-angrakha.png','img/cat-kids.png','img/prod-kids-lehenga.png']
  },

  // ---- UNISEX ----
  {
    id: 21, name: 'Handloom Ikat Cotton Unisex Shirt', brand: 'SS Street',
    price: 1999, oldPrice: 2499, category: 'unisex',
    image: 'img/prod-shirt.png', badge: 'sale',
    rating: 4.6, reviews: 142,
    description: 'A stylish, structured unisex shirt woven by Pochampally artisans. Features double-pocket front utility details and a classic collar. The handloom Ikat pattern blends cultural heritage with street-smart styling.',
    details: '100% Handloom Cotton. Front button closure. Double utility chest pockets. Relaxed unisex fit.',
    sku: 'SS-UNI-IKAT-013', weight: '0.3 kg', material: '100% Handloom Ikat Cotton', origin: 'Pochampally, Telangana, India',
    warranty: 'None', availability: 'In Stock', care: 'Wash separately in cold water with mild liquid detergent. Line dry.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Charcoal Ikat',hex:'#2C3539'},{name:'Indigo Weave',hex:'#3F51B5'},{name:'Madder Orange',hex:'#FF7043'}],
    galleryImages: ['img/prod-shirt.png','img/cat-unisex.png','img/cat-men.png','img/hero.png']
  },
  {
    id: 22, name: 'Unisex Khadi Cotton Nehru Jacket', brand: 'SS Essentials',
    price: 2499, oldPrice: null, category: 'unisex',
    image: 'img/cat-men.png', badge: 'trending',
    rating: 4.8, reviews: 88,
    description: 'Hand-spun and hand-woven premium Khadi cotton Nehru jacket. Designed as a versatile unisex layer. Features three functional pockets and beautiful coconut shell buttons. Adds instant ethnic charm to shirts or kurtas.',
    details: '100% Handloom Khadi. Mandarin collar. Shell buttons. 3 external patch pockets.',
    sku: 'SS-UNI-KHAD-014', weight: '0.4 kg', material: '100% Handloom Khadi Cotton', origin: 'Khadi Village Industries, India',
    warranty: '1 Year Fabric Warranty', availability: 'In Stock', care: 'Dry clean recommended. Gentle hand wash and press with warm iron.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Natural Ivory',hex:'#FDF5E6'},{name:'Oatmeal Beige',hex:'#F5F5DC'},{name:'Mustard Gold',hex:'#E1AD01'}],
    galleryImages: ['img/cat-men.png','img/prod-kurta.png','img/cat-traditional.png','img/hero.png']
  },
  {
    id: 23, name: 'Artisan Indigo Block-Print Hoodie', brand: 'SS Street',
    price: 3299, oldPrice: 3999, category: 'unisex',
    image: 'img/prod-hoodie.png', badge: 'trending',
    rating: 4.7, reviews: 215,
    description: 'Where traditional block-printing meets modern streetwear. Made in heavy organic cotton loopback fabric, printed in authentic indigo Dabu blocks by Rajasthan artisans. Outfitted with double-lined hood and gold-tipped drawstrings.',
    details: '380GSM Organic Loopback Cotton. Authentic Dabu print. Double-lined hood. Ribbed trims.',
    sku: 'SS-UNI-DABU-015', weight: '0.58 kg', material: '100% Organic Cotton', origin: 'Crafted in Akola, Rajasthan, India',
    warranty: '6 Months Print Warranty', availability: 'In Stock', care: 'Wash separately inside out. Indigo dyes bleed slightly on first washes.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Indigo Blue',hex:'#002FA7'},{name:'Charcoal Dabu',hex:'#2F2F2F'},{name:'Rust Terracotta',hex:'#C04000'}],
    galleryImages: ['img/prod-hoodie.png','img/cat-unisex.png','img/cat-men.png','img/hero.png']
  },
  {
    id: 24, name: 'Handcrafted Jute Tote & Dupatta Set', brand: 'SS Accessories',
    price: 1799, oldPrice: 2299, category: 'unisex',
    image: 'img/prod-bag.png', badge: 'new',
    rating: 4.6, reviews: 37,
    description: 'A thoughtful unisex gift set featuring a high-quality quilted jute canvas tote bag with leather straps, paired with a matching natural dye block-printed cotton stole. Perfect for sustainable everyday styling.',
    details: 'Set includes: 1 Jute Tote (14x16 inches, zipper pocket) and 1 Cotton Stole (2 meters).',
    sku: 'SS-UNI-GIFT-016', weight: '0.5 kg', material: 'Premium Jute, Genuine Leather Straps, Cotton Mulmul', origin: 'Handcrafted in West Bengal, India',
    warranty: '6 Months Stitching Warranty', availability: 'In Stock', care: 'Wipe jute bag clean. Hand wash cotton stole separately.',
    sizes: ['One Size'], colors: [{name:'Natural Tan',hex:'#D2B48C'},{name:'Indigo Blue',hex:'#0F52BA'},{name:'Forest Green',hex:'#228B22'}],
    galleryImages: ['img/prod-bag.png','img/cat-accessories.png','img/prod-watch.png','img/hero.png']
  },
  {
    id: 25, name: 'Unisex Pure Pashmina Blend Stole', brand: 'SS Heritage',
    price: 4299, oldPrice: null, category: 'unisex',
    image: 'img/cat-unisex.png', badge: 'new',
    rating: 5.0, reviews: 49,
    description: 'Luxuriously soft stole woven with a blend of pure Kashmiri Pashmina wool and fine merino fibers. Features traditional Kashmiri checks and fine fringes. Extremely warm, featherlight, and ideal as a luxury unisex gift.',
    details: 'Woven blend of 50% Pashmina, 50% Merino. Dimensions: 70 x 200 cm. Fringed hems.',
    sku: 'SS-UNI-PASH-017', weight: '0.15 kg', material: 'Kashmiri Pashmina, Fine Merino Wool', origin: 'Handwoven in Srinagar, Kashmir, India',
    warranty: '1 Year Fabric Warranty', availability: 'Limited Stock', care: 'Dry clean only. Store in protective bag with cedar balls.',
    sizes: ['One Size'], colors: [{name:'Charcoal Black',hex:'#121212'},{name:'Camel Beige',hex:'#C19A6B'},{name:'Slate Grey',hex:'#708090'}],
    galleryImages: ['img/cat-unisex.png','img/prod-hoodie.png','img/cat-men.png','img/hero.png']
  },
  {
    id: 26, name: 'Handloom Indigo Unisex Short Kurta', brand: 'SS Street',
    price: 1699, oldPrice: 1999, category: 'unisex',
    image: 'img/prod-kurta.png', badge: 'sale',
    rating: 4.8, reviews: 73,
    description: 'A contemporary short kurta for men or women, hand-woven in premium handloom cotton and dyed using organic indigo vat processes. Features single chest utility pocket and comfortable side slits. Looks great with denim or pyjamas.',
    details: 'Handloom cotton. Front short placket. Single pocket. Regular unisex fit.',
    sku: 'SS-UNI-SKRT-018', weight: '0.22 kg', material: '100% Handloom Cotton, Indigo Dye', origin: 'Made in India',
    warranty: 'None', availability: 'In Stock', care: 'Wash separately. Mild detergent. Steam press.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: [{name:'Indigo Blue',hex:'#002FA7'},{name:'Oatmeal',hex:'#F5F5DC'},{name:'Charcoal Grey',hex:'#3A3A3A'}],
    galleryImages: ['img/prod-kurta.png','img/cat-traditional.png','img/cat-men.png','img/hero.png']
  },
  {
    id: 27, name: 'Hand-woven Khadi Unisex Bomber Jacket', brand: 'SS Street',
    price: 3499, oldPrice: 3999, category: 'unisex',
    image: 'img/prod-unisex-bomber.png', badge: 'new',
    rating: 4.8, reviews: 17,
    description: 'A modern, sustainable bomber jacket hand-spun in authentic Khadi cotton. Features ribbed collar and cuffs, sturdy front brass zippers, and clean minimalist lines. Fits both men and women seamlessly.',
    details: '100% Khadi Cotton. Brass zipper. Two side pockets. Ribbed cuffs and hem.',
    sku: 'SS-UNI-BOMB-027', weight: '0.45 kg', material: 'Handloom Khadi Cotton', origin: 'Made in Gujarat, India',
    warranty: '6 Months Fabric Warranty', availability: 'In Stock', care: 'Gentle hand wash inside out. Warm iron.',
    sizes: ['XS','S','M','L','XL','XXL'], colors: [{name:'Kora Beige',hex:'#F5F5DC'},{name:'Charcoal Grey',hex:'#333333'}],
    galleryImages: ['img/prod-unisex-bomber.png','img/cat-unisex.png','img/prod-hoodie.png']
  },
  {
    id: 28, name: 'Unisex Sambalpuri Ikat Cotton Scarf', brand: 'SS Essentials',
    price: 1199, oldPrice: 1499, category: 'unisex',
    image: 'img/prod-unisex-scarf.png', badge: 'trending',
    rating: 4.9, reviews: 23,
    description: 'A beautiful unisex muffler stole woven by Sambalpuri weavers. Showcases traditional red, black, and white shell patterns in thick premium handloom cotton. Highly durable and adds instant character to any outfit.',
    details: 'Sambalpuri handloom Ikat weave. Length: 1.8 meters. Fringed ends.',
    sku: 'SS-UNI-SAMB-028', weight: '0.18 kg', material: '100% Handloom Cotton', origin: 'Sambalpur, Odisha, India',
    warranty: 'None', availability: 'In Stock', care: 'Dry clean recommended. Hand wash in salt water separately.',
    sizes: ['One Size'], colors: [{name:'Traditional Black & Red',hex:'#000000'}],
    galleryImages: ['img/prod-unisex-scarf.png','img/cat-unisex.png','img/prod-shirt.png']
  },
  {
    id: 29, name: 'Unisex Kalamkari Cotton Short Kurta', brand: 'SS Street',
    price: 1899, oldPrice: null, category: 'unisex',
    image: 'img/prod-kurta.png', badge: 'new',
    rating: 4.7, reviews: 19,
    description: 'An earthy short kurta block-printed in traditional Kalamkari mythology patterns by Srikalahasti artisans. Features a mandarin collar, short button placket, and a relaxed unisex fit.',
    details: 'Kalamkari block print. Mandarin collar. Straight cut. Side slits.',
    sku: 'SS-UNI-KALM-029', weight: '0.24 kg', material: '100% Cotton, Vegetable Dyes', origin: 'Andhra Pradesh, India',
    warranty: 'None', availability: 'In Stock', care: 'Hand wash separately. Iron inside out.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Mustard Ochre',hex:'#DF73FF'},{name:'Earthy Terracotta',hex:'#D2691E'}],
    galleryImages: ['img/prod-kurta.png','img/cat-unisex.png','img/prod-shirt.png']
  },
  {
    id: 30, name: 'Unisex Indigo Dabu Canvas Backpack', brand: 'SS Accessories',
    price: 2799, oldPrice: 3299, category: 'unisex',
    image: 'img/prod-bag.png', badge: 'new',
    rating: 4.8, reviews: 15,
    description: 'A stylish and durable backpack crafted in thick organic cotton canvas, printed with authentic indigo Dabu mud-resist blocks. Features genuine leather accents and laptop compartment.',
    details: 'Organic canvas base. Padded laptop compartment (up to 15.6"). Antique brass hardware. Leather straps.',
    sku: 'SS-UNI-BPAK-030', weight: '0.62 kg', material: 'Organic Cotton Canvas, Leather, Cotton lining', origin: 'Rajasthan, India',
    warranty: '6 Months Zipper Warranty', availability: 'In Stock', care: 'Wipe with damp cloth. Do not machine wash.',
    sizes: ['One Size'], colors: [{name:'Indigo Dabu',hex:'#0F52BA'}],
    galleryImages: ['img/prod-bag.png','img/cat-accessories.png','img/cat-unisex.png']
  }
];

// Product reviews database (simulated — realistic per-product reviews)
const reviewDB = {
  1: [
    { author: 'Neha R.', rating: 5, date: '2025-06-10', verified: true, helpful: 14, title: 'Intricate Lucknowi craft!', text: 'The Chikankari handwork on this Anarkali is absolute perfection. Soft georgette fabric drapes beautifully. The inner slip matches perfectly.' },
    { author: 'Meera K.', rating: 4, date: '2025-05-18', verified: true, helpful: 8, title: 'Lovely color, very comfortable', text: 'Soft color, and it looks very elegant. Got it for a family puja and everyone loved it. Iron on reverse as recommended!' }
  ],
  2: [
    { author: 'Priyanka S.', rating: 5, date: '2025-06-15', verified: true, helpful: 22, title: 'Pure royal feel', text: 'The zari work on this Banarasi silk saree is breathtaking. Wore it to a wedding reception and got endless compliments. At under ₹5000, it\'s an incredible value.' }
  ],
  3: [
    { author: 'Anjali D.', rating: 5, date: '2025-06-08', verified: true, helpful: 19, title: 'Flared and festive!', text: 'Vibrant colors and a huge flare! Perfect for garba nights. The tie-dye pattern is very authentic.' }
  ],
  4: [
    { author: 'Sonal B.', rating: 4, date: '2025-06-01', verified: true, helpful: 12, title: 'Perfect for summers', text: 'Highly breathable cotton. The Jaipuri hand-block print details are very fine. Extremely satisfied.' }
  ],
  5: [
    { author: 'Kriti A.', rating: 5, date: '2025-06-20', verified: true, helpful: 7, title: 'Stunning organza dupatta', text: 'The painted dupatta with scalloped borders makes the outfit stand out. Very delicate and premium.' }
  ],
  6: [
    { author: 'Harpreet K.', rating: 5, date: '2025-05-22', verified: true, helpful: 15, title: 'True Punjabi heritage', text: 'Beautiful hand Phulkari work in vibrant silk threads. I wear it with both jeans and patialas. Stunning kurti.' }
  ],
  7: [
    { author: 'Pooja V.', rating: 5, date: '2025-06-21', verified: true, helpful: 16, title: 'Spectacular gold borders!', text: 'This Kanjeevaram saree is absolutely majestic. The art silk is soft and the zari border looks highly premium. Perfect for family weddings!' }
  ],
  8: [
    { author: 'Aarti P.', rating: 4, date: '2025-06-19', verified: true, helpful: 9, title: 'Stunning block prints', text: 'Love the geometric pattern and the natural indigo color. Drapes beautifully and is so comfortable for hot days.' }
  ],
  9: [
    { author: 'Shweta S.', rating: 5, date: '2025-06-18', verified: true, helpful: 11, title: 'Sophisticated festive set', text: 'The peach color is lovely and the Chanderi silk has a very rich sheen. Got many compliments during the housewarming ceremony.' }
  ],
  10: [
    { author: 'Divya M.', rating: 5, date: '2025-06-15', verified: true, helpful: 7, title: 'Beautiful mirror details!', text: 'Highly detailed threadwork and tiny mirrors. Wore it over a solid white kurti and it instantly elevated the look.' }
  ],
  11: [
    { author: 'Ramesh P.', rating: 5, date: '2025-06-05', verified: true, helpful: 31, title: 'Very easy to wear for kids', text: 'The pre-stitched dhoti is a lifesaver! My 5-year old ran around all day without it slipping or causing skin irritation. 10/10.' }
  ],
  12: [
    { author: 'Lakshmi N.', rating: 5, date: '2025-06-11', verified: true, helpful: 14, title: 'Absolutely adorable!', text: 'Traditional South Indian Pattu Pavadai. The art silk is soft and didn\'t scratch my daughter at all. Very bright, gorgeous colors.' }
  ],
  13: [
    { author: 'Amit K.', rating: 4, date: '2025-05-29', verified: true, helpful: 9, title: 'Very stylish set', text: 'The Nehru jacket with Bandhani print looks so smart on my son. Great fit and good fabric quality.' }
  ],
  14: [
    { author: 'Ritu M.', rating: 5, date: '2025-06-02', verified: true, helpful: 11, title: 'Lovely hand-block cotton frock', text: 'Super soft and breathable for summer. The block print is beautiful. Great value for under 1000 rupees!' }
  ],
  15: [
    { author: 'Karan G.', rating: 5, date: '2025-06-18', verified: true, helpful: 8, title: 'Softest cotton ever', text: 'Perfect for kid\'s skin. The Chikankari embroidery is subtle and doesn\'t pinch from the inside.' }
  ],
  16: [
    { author: 'Nisha S.', rating: 5, date: '2025-06-14', verified: true, helpful: 16, title: 'Stunning festive look', text: 'Flared skirt and pretty choli. My daughter felt like a princess at her cousin\'s birthday.' }
  ],
  17: [
    { author: 'Karthik S.', rating: 5, date: '2025-06-20', verified: true, helpful: 6, title: 'Authentic South Indian look', text: 'The veshti is pre-stitched which is super convenient for toddlers. Excellent quality silk fabric!' }
  ],
  18: [
    { author: 'Sunita D.', rating: 5, date: '2025-06-19', verified: true, helpful: 10, title: 'Vibrant yellow and huge flare', text: 'Beautiful Bandhani dress. My daughter wore it for Navratri and danced comfortably all night.' }
  ],
  19: [
    { author: 'Zaheer A.', rating: 4, date: '2025-06-17', verified: true, helpful: 8, title: 'Very stylish pathani', text: 'The linen blend looks neat and stays crisp. Green color is very pleasant. Highly recommend.' }
  ],
  20: [
    { author: 'Simran K.', rating: 5, date: '2025-06-16', verified: true, helpful: 12, title: 'Elegant gota border frock', text: 'Very traditional angrakha style. The cotton is soft and the pink color is lovely. Fits perfectly.' }
  ],
  21: [
    { author: 'Arjun P.', rating: 5, date: '2025-06-04', verified: true, helpful: 25, title: 'Beautiful handloom ikat', text: 'Great unisex fit. The ikat pattern is very unique. Sturdy and well-structured handloom cotton.' }
  ],
  22: [
    { author: 'Vikram S.', rating: 5, date: '2025-05-25', verified: true, helpful: 18, title: 'Classy and sustainable', text: 'Beautiful Khadi texture. It fits both me and my partner perfectly. Coconut buttons are a nice artisan detail.' }
  ],
  23: [
    { author: 'Rohan D.', rating: 4, date: '2025-06-12', verified: true, helpful: 14, title: 'Unique street fusion style', text: 'Heavy organic hoodie with Rajasthan block prints. Amazing blend of street style and Indian culture.' }
  ],
  24: [
    { author: 'Deepa T.', rating: 5, date: '2025-06-09', verified: true, helpful: 6, title: 'Wonderful gift set', text: 'Tote is spacious with strong leather handles. The matching mulmul stole is extremely soft. Highly recommend.' }
  ],
  25: [
    { author: 'Shabnam B.', rating: 5, date: '2025-06-16', verified: true, helpful: 10, title: 'Featherlight warmth', text: 'So soft and warm. Woven beautifully. Excellent unisex pashmina blend. Absolute luxury!' }
  ],
  26: [
    { author: 'Siddharth M.', rating: 4, date: '2025-06-07', verified: true, helpful: 12, title: 'Vibrant indigo dye', text: 'Great short kurta. Fits nicely and looks very casual-chic. Note: wash separately first as it bleeds slightly.' }
  ],
  27: [
    { author: 'Kabir G.', rating: 5, date: '2025-06-20', verified: true, helpful: 15, title: 'Incredible sustainable jacket', text: 'Fits beautifully. The Khadi texture gives a rugged, premium feel. Highly versatile styling option.' }
  ],
  28: [
    { author: 'Pragya T.', rating: 5, date: '2025-06-18', verified: true, helpful: 8, title: 'Beautiful Sambalpuri weave', text: 'The shell pattern is gorgeous. Fabric is premium and feels very comfortable around the neck.' }
  ],
  29: [
    { author: 'Nitin J.', rating: 4, date: '2025-06-16', verified: true, helpful: 11, title: 'Artistic short kurta', text: 'Very unique Kalamkari print. Natural colors look beautiful. Ideal everyday wear for summers.' }
  ],
  30: [
    { author: 'Sneha L.', rating: 5, date: '2025-06-14', verified: true, helpful: 14, title: 'Extremely durable and aesthetic', text: 'Very spacious with a secure laptop sleeve. The indigo Dabu print pattern looks very sophisticated.' }
  ]
};

// ==================== APPLICATION STATE ====================
let cart = [];
let wishlist = new Set();
let activePLPFilter = 'all';
let maxPriceFilter = 5000;
let plpSortOrder = 'default';
let plpSearchQuery = '';

// Active size and color for PDP
let selectedPDPSize = 'M';
let selectedPDPColor = 'Gold';
let pdpProductQty = 1;

// Promo Code state
let appliedPromo = '';
let discountAmount = 0;

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  // Load State from LocalStorage
  loadState();

  // Initialize Routing
  initRouter();

  // Initialize Global Components
  initNavbar();
  initSearchModal();
  initCartDrawer();
  initCountdown();
  initNewsletterForm();
  initBackToTop();
  initMarquee();
  initWishlistBtn();
});

// Load state from localStorage
function loadState() {
  const savedCart = localStorage.getItem('ss-cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCartCount();
    } catch (e) {
      cart = [];
    }
  }

  const savedWishlist = localStorage.getItem('ss-wishlist');
  if (savedWishlist) {
    try {
      wishlist = new Set(JSON.parse(savedWishlist));
    } catch (e) {
      wishlist = new Set();
    }
  }
}

// Save state to localStorage
function saveCart() {
  localStorage.setItem('ss-cart', JSON.stringify(cart));
  updateCartCount();
}

function saveWishlist() {
  localStorage.setItem('ss-wishlist', JSON.stringify(Array.from(wishlist)));
}

// ==================== CLIENT SIDE ROUTER ====================
function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

function handleRoute() {
  const rawHash = window.location.hash || '#/';
  let hash = rawHash.split('?')[0]; // Extract path before params
  const paramsString = rawHash.split('?')[1] || '';
  const urlParams = new URLSearchParams(paramsString);

  // Close nav menu on route change
  document.querySelector('.mobile-menu').classList.remove('open');
  document.querySelector('.hamburger').classList.remove('active');
  document.body.style.overflow = '';

  // Hide all views
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.remove('active');
  });

  // Activate view
  let activeViewId = 'view-home';
  
  if (hash === '#/' || hash === '' || hash === '#') {
    activeViewId = 'view-home';
    initHomeView();
  } else if (hash === '#/shop') {
    activeViewId = 'view-shop';
    
    // Parse query params
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
      activePLPFilter = categoryParam;
    }
    
    initShopView();
  } else if (hash.startsWith('#/product/')) {
    activeViewId = 'view-product';
    const prodId = parseInt(hash.replace('#/product/', ''));
    if (prodId && products.some(p => p.id === prodId)) {
      initProductView(prodId);
    } else {
      window.location.hash = '#/shop';
    }
  } else if (hash === '#/cart') {
    activeViewId = 'view-cart';
    initCartView();
  } else if (hash === '#/checkout') {
    activeViewId = 'view-checkout';
    initCheckoutView();
  } else {
    // Fallback
    window.location.hash = '#/';
  }

  const activeView = document.getElementById(activeViewId);
  if (activeView) {
    activeView.classList.add('active');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update navbar visual state
  updateNavbarVisuals(hash);
}

function updateNavbarVisuals(hash) {
  const navbar = document.querySelector('.navbar');
  
  // Clean active navigation links
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.classList.remove('active');
  });

  if (hash === '#/' || hash === '' || hash === '#') {
    navbar.classList.remove('nav-solid');
    updateNavbarScroll();
    
    // Set first link active (Collections scroll)
    document.querySelectorAll('.nav-home-link[data-scroll="categories"]').forEach(a => a.classList.add('active'));
  } else {
    navbar.classList.add('nav-solid');
    navbar.classList.add('scrolled');
    
    // Highlight shop link if on shop or product pages
    if (hash.startsWith('#/shop') || hash.startsWith('#/product')) {
      document.querySelectorAll('.nav-shop-link').forEach(a => a.classList.add('active'));
    }
  }
}

// ==================== NAVBAR SETUP ====================
function initNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Scroll transparency update
  window.addEventListener('scroll', updateNavbarScroll);
  
  // Home anchor scroll handlers
  document.querySelectorAll('.nav-home-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const scrollTarget = link.dataset.scroll;
      const currentHash = window.location.hash || '#/';
      
      if (currentHash === '#/' || currentHash === '' || currentHash === '#') {
        e.preventDefault();
        scrollToElement(scrollTarget);
      } else {
        // Let hashchange trigger home navigation first, then scroll
        localStorage.setItem('scroll-target', scrollTarget);
      }
    });
  });
}

function updateNavbarScroll() {
  const hash = window.location.hash || '#/';
  if (hash !== '#/' && hash !== '' && hash !== '#') return;

  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ==================== HOME VIEW ====================
function initHomeView() {
  // Render trending products preview on home page
  renderHomeProducts();

  // Start 3D Hero particles
  initHeroParticles();

  // Connect 3D interactions
  init3DHeroInteractions();

  // Scroll animations observer
  initScrollAnimations();

  // Trigger delayed scroll if navigating from another page
  const scrollTarget = localStorage.getItem('scroll-target');
  if (scrollTarget) {
    localStorage.removeItem('scroll-target');
    setTimeout(() => {
      scrollToElement(scrollTarget);
    }, 400);
  }
}

function renderHomeProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  // Filter 4 products to preview on homepage
  const homeProducts = products.filter(p => p.badge === 'trending' || p.badge === 'new').slice(0, 4);
  grid.innerHTML = homeProducts.map(product => createProductCardMarkup(product)).join('');
  attachProductCardEvents(grid);

  // Set home quick filter actions
  const filters = document.querySelectorAll('.product-filters .filter-btn');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      const filtered = filter === 'all' ? products.slice(0, 8) : products.filter(p => p.category === filter);
      
      grid.style.opacity = '0';
      setTimeout(() => {
        grid.innerHTML = filtered.map(p => createProductCardMarkup(p)).join('');
        grid.style.opacity = '1';
        attachProductCardEvents(grid);
      }, 200);
    });
  });
}

// ==================== 3D HERO PARALLAX LOGIC ====================
function init3DHeroInteractions() {
  const hero = document.getElementById('hero');
  const scene = document.querySelector('.hero-scene');
  if (!hero || !scene) return;

  // 1. Mouse Tilt Interaction (Desktop only)
  hero.addEventListener('mousemove', (e) => {
    if (window.innerWidth <= 1024) return; // Skip on mobile/tablets

    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalized coords (-1 to 1)
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;

    // Apply smooth 3D rotation variables
    scene.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
  });

  // Mouse leave reset
  hero.addEventListener('mouseleave', () => {
    if (window.innerWidth <= 1024) return;
    scene.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    scene.style.transform = 'rotateY(0deg) rotateX(0deg)';
    setTimeout(() => {
      scene.style.transition = 'transform 0.1s ease-out';
    }, 800);
  });

  // 2. Scroll Parallax and Flight Zoom
  window.addEventListener('scroll', handleHeroScrollParallax);
}

function handleHeroScrollParallax() {
  const hash = window.location.hash || '#/';
  if (hash !== '#/' && hash !== '' && hash !== '#') return;

  const scrollY = window.scrollY;
  const heroHeight = window.innerHeight;
  if (scrollY > heroHeight + 50) return; // Stop calc if scrolled past hero

  const progress = scrollY / heroHeight;

  // Grab Layers
  const bg = document.querySelector('.layer-bg');
  const backLeft = document.querySelector('.layer-back-left');
  const backRight = document.querySelector('.layer-back-right');
  const middle = document.querySelector('.layer-middle');
  const frontLeft = document.querySelector('.layer-front-left');
  const frontRight = document.querySelector('.layer-front-right');

  // Background shifts down slowly
  if (bg) {
    bg.style.transform = `translate3d(0, ${scrollY * 0.15}px, -600px) scale(2)`;
  }

  // Deep back layers shift outwards and zoom forward slightly
  if (backLeft) {
    backLeft.style.transform = `translate3d(${-progress * 180}px, ${-progress * 50}px, ${-300 + progress * 200}px) rotateY(18deg) rotateX(10deg)`;
    backLeft.style.opacity = 1 - progress * 1.2;
  }
  if (backRight) {
    backRight.style.transform = `translate3d(${progress * 180}px, ${progress * 50}px, ${-200 + progress * 150}px) rotateY(-18deg) rotateX(-8deg)`;
    backRight.style.opacity = 1 - progress * 1.2;
  }

  // Middle text fades and scrolls up
  if (middle) {
    middle.style.transform = `translate3d(0, ${scrollY * 0.35}px, 0)`;
    middle.style.opacity = 1 - progress * 1.8;
  }

  // Foreground layers zoom rapidly forward (coming close to camera) and disperse sideways
  if (frontLeft) {
    frontLeft.style.transform = `translate3d(${-progress * 380}px, ${progress * 100}px, ${150 + progress * 350}px) rotateY(-10deg) rotateX(15deg)`;
    frontLeft.style.opacity = 1 - progress * 1.5;
  }
  if (frontRight) {
    frontRight.style.transform = `translate3d(${progress * 380}px, ${-progress * 100}px, ${250 + progress * 400}px) rotateY(15deg) rotateX(10deg)`;
    frontRight.style.opacity = 1 - progress * 1.5;
  }
}

// 3D Particles Generator
function initHeroParticles() {
  const container = document.querySelector('.hero-particles-3d');
  if (!container || container.children.length > 0) return; // Skip if already filled

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle-3d';
    
    // Random space coordinates
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const z = -200 + Math.random() * 600; // 3D depth

    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.transform = `translateZ(${z}px)`;
    
    // Animation properties
    particle.style.animation = `float-particle ${10 + Math.random() * 15}s linear infinite`;
    particle.style.animationDelay = `-${Math.random() * 10}s`;
    particle.style.width = `${1 + Math.random() * 3}px`;
    particle.style.height = particle.style.width;
    particle.style.background = 'var(--gold)';
    particle.style.borderRadius = '50%';
    particle.style.position = 'absolute';
    particle.style.opacity = 0.2 + Math.random() * 0.4;
    particle.style.boxShadow = '0 0 10px var(--gold)';

    container.appendChild(particle);
  }
}

// CSS keyframe injector helper for custom animations
if (!document.getElementById('injected-hero-keyframes')) {
  const style = document.createElement('style');
  style.id = 'injected-hero-keyframes';
  style.innerHTML = `
    @keyframes float-particle {
      0% { transform: translate3d(0, 100px, 0) scale(0.5); opacity: 0; }
      10% { opacity: 0.6; }
      90% { opacity: 0.6; }
      100% { transform: translate3d(0, -100vh, 200px) scale(1.2); opacity: 0; }
    }
    .particle-3d {
      will-change: transform, opacity;
    }
  `;
  document.head.appendChild(style);
}

// ==================== PLP (PRODUCT LISTING VIEW) ====================
function initShopView() {
  const filterLinks = document.querySelectorAll('.shop-filter-link');
  const priceSlider = document.getElementById('price-range-slider');
  const priceValText = document.getElementById('price-max-val');
  const sortSelect = document.getElementById('sort-selector');
  const searchInput = document.getElementById('plp-search-input');
  const clearFiltersBtn = document.getElementById('btn-clear-filters');

  // Set initial filter state visual
  filterLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.category === activePLPFilter) {
      link.classList.add('active');
    }
  });

  // Price slider setup
  if (priceSlider) {
    priceSlider.value = maxPriceFilter;
    if (priceValText) priceValText.textContent = `Max: ₹${maxPriceFilter.toLocaleString()}`;
    
    priceSlider.removeEventListener('input', handlePriceSliderInput);
    priceSlider.addEventListener('input', handlePriceSliderInput);
  }

  // Sorting setup
  if (sortSelect) {
    sortSelect.value = plpSortOrder;
    sortSelect.removeEventListener('change', handleSortSelectorChange);
    sortSelect.addEventListener('change', handleSortSelectorChange);
  }

  // Search input setup
  if (searchInput) {
    searchInput.value = plpSearchQuery;
    searchInput.removeEventListener('input', handlePLPSearchInput);
    searchInput.addEventListener('input', handlePLPSearchInput);
  }

  // Category link click handlers
  filterLinks.forEach(link => {
    link.removeEventListener('click', handleCategoryLinkClick);
    link.addEventListener('click', handleCategoryLinkClick);
  });

  // Clear filters
  if (clearFiltersBtn) {
    clearFiltersBtn.removeEventListener('click', resetFilters);
    clearFiltersBtn.addEventListener('click', resetFilters);
  }

  // Perform render
  renderPLP();
}

function handlePriceSliderInput(e) {
  maxPriceFilter = parseInt(e.target.value);
  document.getElementById('price-max-val').textContent = `Max: ₹${maxPriceFilter.toLocaleString()}`;
  renderPLP();
}

function handleSortSelectorChange(e) {
  plpSortOrder = e.target.value;
  renderPLP();
}

function handlePLPSearchInput(e) {
  plpSearchQuery = e.target.value.toLowerCase().trim();
  renderPLP();
}

function handleCategoryLinkClick(e) {
  const link = e.currentTarget;
  document.querySelectorAll('.shop-filter-link').forEach(l => l.classList.remove('active'));
  link.classList.add('active');
  activePLPFilter = link.dataset.category;
  
  // Update URL hash without breaking history, but keep it clean
  const currentCategory = activePLPFilter === 'all' ? '' : `?category=${activePLPFilter}`;
  window.history.pushState(null, null, `#/shop${currentCategory}`);
  
  renderPLP();
}

function resetFilters() {
  activePLPFilter = 'all';
  maxPriceFilter = 50000;
  plpSortOrder = 'default';
  plpSearchQuery = '';

  // Reset visual inputs
  document.querySelectorAll('.shop-filter-link').forEach(l => l.classList.remove('active'));
  const allLink = document.querySelector('.shop-filter-link[data-category="all"]');
  if (allLink) allLink.classList.add('active');

  const priceSlider = document.getElementById('price-range-slider');
  if (priceSlider) priceSlider.value = 50000;
  
  const priceValText = document.getElementById('price-max-val');
  if (priceValText) priceValText.textContent = `Max: ₹50,000`;

  const sortSelect = document.getElementById('sort-selector');
  if (sortSelect) sortSelect.value = 'default';

  const searchInput = document.getElementById('plp-search-input');
  if (searchInput) searchInput.value = '';

  window.history.pushState(null, null, `#/shop`);
  renderPLP();
}

function renderPLP() {
  const grid = document.getElementById('plp-products-grid');
  const countEl = document.getElementById('plp-results-count');
  const clearBtn = document.getElementById('btn-clear-filters');
  if (!grid) return;

  // Filter products
  let filtered = products.filter(product => {
    // 1. Category Filter
    const matchCategory = activePLPFilter === 'all' || product.category === activePLPFilter;
    // 2. Price Filter
    const matchPrice = product.price <= maxPriceFilter;
    // 3. Search Filter
    const matchSearch = product.name.toLowerCase().includes(plpSearchQuery) || 
                        product.brand.toLowerCase().includes(plpSearchQuery) || 
                        product.category.toLowerCase().includes(plpSearchQuery);
    
    return matchCategory && matchPrice && matchSearch;
  });

  // Sort products
  if (plpSortOrder === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (plpSortOrder === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (plpSortOrder === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Show clear filter button if filters are customized
  const hasActiveFilters = activePLPFilter !== 'all' || maxPriceFilter !== 50000 || plpSearchQuery !== '' || plpSortOrder !== 'default';
  if (clearBtn) {
    clearBtn.style.display = hasActiveFilters ? 'inline-block' : 'none';
  }

  // Update Count
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} products`;
  }

  // Animate grid transitions
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(15px)';

  setTimeout(() => {
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0; color: var(--text-secondary);">
          <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 0.5rem;">No items found</h3>
          <p>Try broadening your filter criteria or clearing all selections.</p>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(product => createProductCardMarkup(product)).join('');
      attachProductCardEvents(grid);
    }
    
    requestAnimationFrame(() => {
      grid.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      grid.style.opacity = '1';
      grid.style.transform = 'translateY(0)';
    });
  }, 150);
}

// ==================== PRODUCT CARD MARKUP GENERATOR ====================
function createProductCardMarkup(product) {
  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
  const isWishlisted = wishlist.has(product.id);
  
  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        ${product.badge ? `<span class="product-badge badge-${product.badge}">${product.badge}</span>` : ''}
        <div class="product-actions">
          <button class="product-action-btn wishlist-btn-card ${isWishlisted ? 'wishlisted' : ''}" 
                  data-id="${product.id}" title="Add to Wishlist">
            ${isWishlisted ? '♥' : '♡'}
          </button>
        </div>
        <div class="product-quick-add">
          <button class="btn btn-primary add-to-cart-btn-card" data-id="${product.id}">
            Add to Cart
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price-row">
          <span class="product-price">₹${product.price.toLocaleString()}</span>
          ${product.oldPrice ? `<span class="product-price-old">₹${product.oldPrice.toLocaleString()}</span>` : ''}
        </div>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">(${product.reviews})</span>
        </div>
      </div>
    </div>
  `;
}

function attachProductCardEvents(container) {
  // Navigate to PDP on card body click
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Exclude clicks on cart and wishlist buttons
      if (e.target.closest('.add-to-cart-btn-card') || e.target.closest('.wishlist-btn-card')) return;
      const id = card.dataset.id;
      window.location.hash = `#/product/${id}`;
    });
  });

  // Quick Add to Cart
  container.querySelectorAll('.add-to-cart-btn-card').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      addToCart(id, 1, 'M', 'Gold');
    });
  });

  // Wishlist toggle
  container.querySelectorAll('.wishlist-btn-card').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      toggleWishlist(id, btn);
    });
  });
}

// ==================== PDP (PRODUCT DETAIL VIEW) ====================
function initProductView(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Update Breadcrumbs
  document.getElementById('pdp-breadcrumb-active').textContent = product.name;

  // Reset PDP Purchase selectors
  selectedPDPSize = product.sizes ? product.sizes[Math.min(1, product.sizes.length - 1)] : 'M';
  selectedPDPColor = product.colors ? product.colors[0].name : 'Gold';
  pdpProductQty = 1;

  // Render Page Content
  renderProductDetails(product);

  // Render Related Products
  renderRelatedProducts(product);
}

// Helper: compute star rating breakdown from reviewDB
function computeRatingBreakdown(reviews) {
  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach(r => { counts[r.rating] = (counts[r.rating] || 0) + 1; });
  return counts;
}

// Helper: format date nicely
function formatReviewDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function renderProductDetails(product) {
  const container = document.getElementById('pdp-content-wrapper');
  if (!container) return;

  const isWishlisted = wishlist.has(product.id);
  const reviews = reviewDB[product.id] || [];
  const ratingBreakdown = computeRatingBreakdown(reviews);
  const totalReviewCount = reviews.length;

  // Compute discount percentage
  const discountPct = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  // Use product-specific gallery images or fallback
  const galleryImages = product.galleryImages || [product.image, 'img/cat-unisex.png', 'img/hero.png'];
  
  // Product-specific sizes and colors
  const sizes = product.sizes || ['S','M','L','XL'];
  const colors = product.colors || [{name:'Gold Accent',hex:'#D4AF37'},{name:'Charcoal',hex:'#2C3539'},{name:'Obsidian',hex:'#0F1115'}];

  container.innerHTML = `
    <!-- ===== Gallery with 360° Viewer ===== -->
    <div class="pdp-gallery">
      <div class="pdp-thumbs">
        ${galleryImages.map((img, i) => `
          <div class="pdp-thumb ${i === 0 ? 'active' : ''}" data-img="${img}">
            <img src="${img}" alt="${product.name} - View ${i + 1}" />
          </div>
        `).join('')}
        <!-- 360° View Button -->
        <div class="pdp-thumb pdp-360-thumb" data-action="360" title="360° Interactive View">
          <div class="pdp-360-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              <path d="M12 3c4.97 0 9 4.03 9 9M12 3c-4.97 0-9 4.03-9 9"/>
              <path d="M3.6 9h16.8M3.6 15h16.8"/>
              <path d="M12 3c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9z"/>
            </svg>
            <span>360°</span>
          </div>
        </div>
      </div>
      <div class="pdp-main-img-wrapper">
        <div class="pdp-main-img" id="pdp-static-view">
          <img src="${product.image}" alt="${product.name}" id="pdp-large-image" />
          <div class="pdp-img-zoom-hint">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>
            Hover to zoom
          </div>
        </div>
        <!-- 360° Interactive View Container -->
        <div class="pdp-360-viewer" id="pdp-360-view" style="display:none;">
          <div class="pdp-360-canvas" id="pdp-360-canvas">
            <img src="${product.image}" alt="${product.name} 360° View" id="pdp-360-image" />
            <div class="pdp-360-overlay">
              <div class="pdp-360-ring"></div>
              <div class="pdp-360-instructions">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 4l-4 4 4 4"/><path d="M10 4l4 4-4 4"/></svg>
                Drag left & right to rotate
              </div>
              <div class="pdp-360-angle" id="pdp-360-angle">0°</div>
            </div>
          </div>
          <div class="pdp-360-controls">
            <button class="pdp-360-ctrl-btn" id="pdp-360-auto" title="Auto Rotate">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
            </button>
            <button class="pdp-360-ctrl-btn" id="pdp-360-reset" title="Reset View">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            </button>
            <button class="pdp-360-ctrl-btn active" id="pdp-360-close" title="Back to Gallery">
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- ===== Product Details ===== -->
    <div class="pdp-details">
      <div class="pdp-topline-meta">
        <span class="pdp-brand">${product.brand}</span>
        ${product.availability ? `<span class="pdp-availability ${product.availability.includes('Limited') ? 'limited' : 'in-stock'}">${product.availability}</span>` : ''}
      </div>
      <h1 class="pdp-title">${product.name}</h1>
      
      <!-- Rating Summary Row -->
      <div class="pdp-rating-row">
        <div class="pdp-rating-stars-big">
          ${renderStarsSVG(product.rating)}
          <span class="pdp-rating-number">${product.rating}</span>
        </div>
        <span class="pdp-rating-divider">|</span>
        <a href="#pdp-reviews-section" class="pdp-rating-link" id="pdp-scroll-to-reviews">${product.reviews} Reviews</a>
        <span class="pdp-rating-divider">|</span>
        <span class="pdp-sku">SKU: ${product.sku || 'N/A'}</span>
      </div>
      
      <!-- Price -->
      <div class="pdp-price-row">
        <span class="pdp-price-current">₹${product.price.toLocaleString()}</span>
        ${product.oldPrice ? `<span class="pdp-price-old">₹${product.oldPrice.toLocaleString()}</span>` : ''}
        ${discountPct > 0 ? `<span class="pdp-discount-badge">${discountPct}% OFF</span>` : ''}
        <div class="pdp-tax-info">Inclusive of all taxes. Free shipping on orders above ₹10,000.</div>
      </div>

      <p class="pdp-short-desc">${product.description}</p>
      
      <!-- Option: Size -->
      <div class="pdp-option-section">
        <div class="pdp-option-title">
          <span>Select Size</span>
          <span class="val-label" id="pdp-selected-size-label">${sizes[Math.min(1, sizes.length - 1)]}</span>
          <button class="pdp-size-guide-btn" id="pdp-size-guide-toggle">📏 Size Guide</button>
        </div>
        <div class="pdp-size-btn-group">
          ${sizes.map((s, i) => `<button class="pdp-size-btn ${i === Math.min(1, sizes.length - 1) ? 'active' : ''}">${s}</button>`).join('')}
        </div>
        <!-- Size Guide Popup -->
        <div class="pdp-size-guide" id="pdp-size-guide" style="display: none;">
          <div class="pdp-size-guide-header">
            <h4>Size Guide</h4>
            <button class="pdp-size-guide-close" id="pdp-size-guide-close">✕</button>
          </div>
          <table class="pdp-size-table">
            <thead><tr><th>Size</th><th>Chest (in)</th><th>Waist (in)</th><th>Length (in)</th></tr></thead>
            <tbody>
              <tr><td>S</td><td>36-38</td><td>30-32</td><td>27</td></tr>
              <tr><td>M</td><td>38-40</td><td>32-34</td><td>28</td></tr>
              <tr><td>L</td><td>40-42</td><td>34-36</td><td>29</td></tr>
              <tr><td>XL</td><td>42-44</td><td>36-38</td><td>30</td></tr>
              <tr><td>XXL</td><td>44-46</td><td>38-40</td><td>31</td></tr>
            </tbody>
          </table>
          <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">* Measurements are approximate. We recommend measuring a garment you already own for comparison.</p>
        </div>
      </div>
      
      <!-- Option: Color -->
      <div class="pdp-option-section">
        <div class="pdp-option-title">
          <span>Select Color</span>
          <span class="val-label" id="pdp-selected-color-label">${colors[0].name}</span>
        </div>
        <div class="pdp-color-swatches">
          ${colors.map((c, i) => `
            <div class="pdp-color-swatch ${i === 0 ? 'active' : ''}" data-color="${c.name}" title="${c.name}">
              <div class="pdp-color-swatch-inner" style="background:${c.hex}"></div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Purchase Action Rows -->
      <div class="pdp-purchase-row">
        <div class="pdp-qty-selector">
          <button id="pdp-qty-minus">−</button>
          <span id="pdp-qty-value">1</span>
          <button id="pdp-qty-plus">+</button>
        </div>
        
        <button class="btn btn-primary pdp-btn-add-cart" id="pdp-add-to-cart-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          Add To Shopping Bag
        </button>
        
        <button class="pdp-btn-wishlist ${isWishlisted ? 'wishlisted' : ''}" id="pdp-wishlist-toggle" title="Add to Wishlist">
          ${isWishlisted ? '♥' : '♡'}
        </button>
      </div>

      <!-- Trust Badges -->
      <div class="pdp-trust-badges">
        <div class="pdp-trust-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5"><rect x="1" y="3" width="22" height="18" rx="2"/><path d="M1 9h22"/></svg>
          <span>Secure Payment</span>
        </div>
        <div class="pdp-trust-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          <span>Free Returns</span>
        </div>
        <div class="pdp-trust-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>Authenticity Guaranteed</span>
        </div>
        <div class="pdp-trust-badge">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>
          <span>EMI Available</span>
        </div>
      </div>
      
      <!-- ===== Accordion: Product Specifications ===== -->
      <div class="pdp-accordion-group">
        <div class="pdp-accordion open">
          <button class="pdp-accordion-trigger">
            <span>📋 Product Specifications</span>
            <span class="pdp-accordion-icon">+</span>
          </button>
          <div class="pdp-accordion-content" style="max-height: 600px">
            <table class="pdp-specs-table">
              <tbody>
                <tr><td class="spec-label">Brand</td><td class="spec-value">${product.brand}</td></tr>
                <tr><td class="spec-label">SKU</td><td class="spec-value">${product.sku || 'N/A'}</td></tr>
                <tr><td class="spec-label">Material</td><td class="spec-value">${product.material || 'Premium'}</td></tr>
                <tr><td class="spec-label">Weight</td><td class="spec-value">${product.weight || 'N/A'}</td></tr>
                <tr><td class="spec-label">Country of Origin</td><td class="spec-value">${product.origin || 'India'}</td></tr>
                <tr><td class="spec-label">Warranty</td><td class="spec-value">${product.warranty || 'Standard Warranty'}</td></tr>
                <tr><td class="spec-label">Category</td><td class="spec-value" style="text-transform:capitalize">${product.category}</td></tr>
                <tr><td class="spec-label">Available Sizes</td><td class="spec-value">${sizes.join(', ')}</td></tr>
                <tr><td class="spec-label">Available Colors</td><td class="spec-value">${colors.map(c => c.name).join(', ')}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="pdp-accordion">
          <button class="pdp-accordion-trigger">
            <span>📝 Description & Features</span>
            <span class="pdp-accordion-icon">+</span>
          </button>
          <div class="pdp-accordion-content">
            <p>${product.description}</p>
            <ul class="pdp-features-list">
              ${product.details.split('. ').filter(d => d.trim()).map(d => `<li>${d.trim().replace(/\.$/, '')}</li>`).join('')}
            </ul>
          </div>
        </div>
        
        <div class="pdp-accordion">
          <button class="pdp-accordion-trigger">
            <span>🧵 Fabric & Care</span>
            <span class="pdp-accordion-icon">+</span>
          </button>
          <div class="pdp-accordion-content">
            <div class="pdp-care-grid">
              <div class="pdp-care-item">
                <strong>Material</strong>
                <p>${product.material || 'Premium Fabric'}</p>
              </div>
              <div class="pdp-care-item">
                <strong>Care Instructions</strong>
                <p>${product.care || 'Follow garment label instructions.'}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="pdp-accordion">
          <button class="pdp-accordion-trigger">
            <span>🚚 Shipping & Returns</span>
            <span class="pdp-accordion-icon">+</span>
          </button>
          <div class="pdp-accordion-content">
            <div class="pdp-shipping-grid">
              <div class="pdp-shipping-item">
                <strong>📦 Standard Delivery</strong>
                <p>3-5 business days. Free on orders above ₹10,000.</p>
              </div>
              <div class="pdp-shipping-item">
                <strong>⚡ Express Delivery</strong>
                <p>1-2 business days. ₹299 flat rate.</p>
              </div>
              <div class="pdp-shipping-item">
                <strong>↩️ Easy Returns</strong>
                <p>30-day hassle-free returns. Unworn, tags attached.</p>
              </div>
              <div class="pdp-shipping-item">
                <strong>🔄 Exchange Policy</strong>
                <p>Free size/color exchange within 15 days of delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== Ratings & Reviews Section ===== -->
      <div class="pdp-reviews-section" id="pdp-reviews-section">
        <div class="pdp-reviews-heading">
          <h2>Ratings & Reviews</h2>
          <span class="pdp-review-count-badge">${totalReviewCount} Reviews</span>
        </div>

        <!-- Rating Breakdown -->
        <div class="pdp-rating-breakdown">
          <div class="pdp-rating-summary-left">
            <div class="pdp-rating-big-number">${product.rating}</div>
            <div class="pdp-rating-big-stars">${renderStarsSVG(product.rating)}</div>
            <div class="pdp-rating-total">${product.reviews} Ratings</div>
          </div>
          <div class="pdp-rating-bars">
            ${[5,4,3,2,1].map(star => {
              const count = ratingBreakdown[star] || 0;
              const pct = totalReviewCount > 0 ? Math.round((count / totalReviewCount) * 100) : 0;
              return `
                <div class="pdp-rating-bar-row">
                  <span class="pdp-bar-label">${star} ★</span>
                  <div class="pdp-bar-track">
                    <div class="pdp-bar-fill pdp-bar-${star}" style="width: ${pct}%"></div>
                  </div>
                  <span class="pdp-bar-count">${count}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Review List -->
        <div class="pdp-reviews-list" id="pdp-reviews-list-wrapper">
          ${renderReviewListMarkup(reviews)}
        </div>

        <!-- Review Form -->
        <div class="pdp-review-form-box">
          <h4>✍️ Write a Review</h4>
          <form id="pdp-review-submit-form">
            <div class="form-group-row">
              <div class="form-group">
                <label>Your Name</label>
                <input type="text" id="review-author" class="pdp-form-input" required placeholder="Your name" />
              </div>
              <div class="form-group">
                <label>Rating</label>
                <select id="review-rating" class="pdp-form-select">
                  <option value="5">★★★★★ Excellent</option>
                  <option value="4">★★★★☆ Very Good</option>
                  <option value="3">★★★☆☆ Average</option>
                  <option value="2">★★☆☆☆ Below Average</option>
                  <option value="1">★☆☆☆☆ Poor</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label>Review Title</label>
              <input type="text" id="review-title" class="pdp-form-input" required placeholder="Summarize your experience" />
            </div>
            <div class="form-group" style="margin-bottom: 1.5rem">
              <label>Your Review</label>
              <textarea id="review-text" rows="4" class="pdp-form-textarea" required placeholder="Tell other shoppers about your experience with this product..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%">
              Submit Review
            </button>
          </form>
        </div>
      </div>

    </div>
  `;

  // ===== EVENT HANDLERS =====
  
  // Gallery thumbnail switching
  const thumbs = container.querySelectorAll('.pdp-thumb:not(.pdp-360-thumb)');
  const largeImg = document.getElementById('pdp-large-image');
  const staticView = document.getElementById('pdp-static-view');
  const view360 = document.getElementById('pdp-360-view');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      // Switch to static mode
      staticView.style.display = '';
      view360.style.display = 'none';
      container.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      largeImg.src = thumb.dataset.img || thumb.querySelector('img').src;
    });
  });

  // 360° View toggle
  const thumb360 = container.querySelector('.pdp-360-thumb');
  if (thumb360) {
    thumb360.addEventListener('click', () => {
      staticView.style.display = 'none';
      view360.style.display = 'flex';
      container.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
      thumb360.classList.add('active');
      init360Viewer(product);
    });
  }

  // 360° Close button
  const close360 = document.getElementById('pdp-360-close');
  if (close360) {
    close360.addEventListener('click', () => {
      staticView.style.display = '';
      view360.style.display = 'none';
      // Re-activate first thumb
      container.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
      const firstThumb = container.querySelector('.pdp-thumb:not(.pdp-360-thumb)');
      if (firstThumb) firstThumb.classList.add('active');
    });
  }

  // Zoom effect on main image
  const mainImgContainer = container.querySelector('.pdp-main-img');
  if (mainImgContainer) {
    mainImgContainer.addEventListener('mousemove', (e) => {
      const rect = mainImgContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      largeImg.style.transformOrigin = `${px}% ${py}%`;
      largeImg.style.transform = 'scale(1.6)';
    });
    mainImgContainer.addEventListener('mouseleave', () => {
      largeImg.style.transform = 'none';
    });
  }

  // Size Guide toggle
  const sizeGuideBtn = document.getElementById('pdp-size-guide-toggle');
  const sizeGuide = document.getElementById('pdp-size-guide');
  const sizeGuideClose = document.getElementById('pdp-size-guide-close');
  if (sizeGuideBtn && sizeGuide) {
    sizeGuideBtn.addEventListener('click', () => { sizeGuide.style.display = sizeGuide.style.display === 'none' ? 'block' : 'none'; });
    if (sizeGuideClose) sizeGuideClose.addEventListener('click', () => { sizeGuide.style.display = 'none'; });
  }

  // Scroll to reviews
  const scrollToReviews = document.getElementById('pdp-scroll-to-reviews');
  if (scrollToReviews) {
    scrollToReviews.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('pdp-reviews-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Size Selector buttons
  const sizeBtns = container.querySelectorAll('.pdp-size-btn');
  const sizeLabel = document.getElementById('pdp-selected-size-label');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPDPSize = btn.textContent;
      if (sizeLabel) sizeLabel.textContent = selectedPDPSize;
    });
  });

  // Color Swatch buttons
  const swatches = container.querySelectorAll('.pdp-color-swatch');
  const colorLabel = document.getElementById('pdp-selected-color-label');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      selectedPDPColor = swatch.dataset.color;
      if (colorLabel) colorLabel.textContent = swatch.title;
    });
  });

  // Quantity adjustments
  const qtyMinus = document.getElementById('pdp-qty-minus');
  const qtyPlus = document.getElementById('pdp-qty-plus');
  const qtyVal = document.getElementById('pdp-qty-value');

  if (qtyMinus) qtyMinus.addEventListener('click', () => {
    if (pdpProductQty > 1) {
      pdpProductQty--;
      qtyVal.textContent = pdpProductQty;
    }
  });

  if (qtyPlus) qtyPlus.addEventListener('click', () => {
    pdpProductQty++;
    qtyVal.textContent = pdpProductQty;
  });

  // Add to cart click
  const addToCartBtn = document.getElementById('pdp-add-to-cart-btn');
  if (addToCartBtn) addToCartBtn.addEventListener('click', () => {
    addToCart(product.id, pdpProductQty, selectedPDPSize, selectedPDPColor);
  });

  // Wishlist toggle click
  const wishlistBtn = document.getElementById('pdp-wishlist-toggle');
  if (wishlistBtn) wishlistBtn.addEventListener('click', () => {
    toggleWishlist(product.id, wishlistBtn);
  });

  // Accordions toggle
  const accordions = container.querySelectorAll('.pdp-accordion');
  accordions.forEach(acc => {
    const trigger = acc.querySelector('.pdp-accordion-trigger');
    const content = acc.querySelector('.pdp-accordion-content');
    
    trigger.addEventListener('click', () => {
      const isOpen = acc.classList.contains('open');
      
      // Close all
      accordions.forEach(a => {
        a.classList.remove('open');
        a.querySelector('.pdp-accordion-content').style.maxHeight = null;
      });

      if (!isOpen) {
        acc.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // Review helpfulness voting
  container.querySelectorAll('.pdp-helpful-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const countEl = btn.querySelector('.helpful-count');
      if (countEl && !btn.classList.contains('voted')) {
        countEl.textContent = parseInt(countEl.textContent) + 1;
        btn.classList.add('voted');
        btn.style.color = 'var(--accent-gold)';
      }
    });
  });

  // Review Form Submit handler
  const reviewForm = document.getElementById('pdp-review-submit-form');
  if (reviewForm) reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const authorVal = document.getElementById('review-author').value.trim();
    const ratingVal = parseInt(document.getElementById('review-rating').value);
    const titleVal = document.getElementById('review-title').value.trim();
    const textVal = document.getElementById('review-text').value.trim();

    if (!authorVal || !textVal || !titleVal) return;

    // Save review
    const newReview = { 
      author: authorVal, 
      rating: ratingVal, 
      title: titleVal, 
      text: textVal,
      date: new Date().toISOString().split('T')[0],
      verified: false,
      helpful: 0
    };
    reviewDB[product.id].unshift(newReview);

    // Re-render review list
    const wrapper = document.getElementById('pdp-reviews-list-wrapper');
    if (wrapper) wrapper.innerHTML = renderReviewListMarkup(reviewDB[product.id]);
    
    // Re-attach helpfulness buttons
    wrapper.querySelectorAll('.pdp-helpful-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const countEl = btn.querySelector('.helpful-count');
        if (countEl && !btn.classList.contains('voted')) {
          countEl.textContent = parseInt(countEl.textContent) + 1;
          btn.classList.add('voted');
          btn.style.color = 'var(--accent-gold)';
        }
      });
    });
    
    // Reset Form
    reviewForm.reset();
    showToast('✅ Review submitted successfully! Thank you for your feedback.');
  });
}

// ===== 360° Interactive Viewer Logic =====
function init360Viewer(product) {
  const canvas = document.getElementById('pdp-360-canvas');
  const image360 = document.getElementById('pdp-360-image');
  const angleDisplay = document.getElementById('pdp-360-angle');
  const autoBtn = document.getElementById('pdp-360-auto');
  const resetBtn = document.getElementById('pdp-360-reset');
  
  if (!canvas || !image360) return;
  
  let isDragging = false;
  let startX = 0;
  let currentRotation = 0;
  let autoRotateId = null;
  
  // Apply initial transform
  const updateTransform = () => {
    image360.style.transform = `rotateY(${currentRotation}deg) scale(1.05)`;
    if (angleDisplay) angleDisplay.textContent = `${Math.round(((currentRotation % 360) + 360) % 360)}°`;
  };
  
  // Mouse drag
  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    canvas.style.cursor = 'grabbing';
    if (autoRotateId) { cancelAnimationFrame(autoRotateId); autoRotateId = null; }
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    currentRotation += dx * 0.5;
    startX = e.clientX;
    updateTransform();
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
    canvas.style.cursor = 'grab';
  });
  
  // Touch support
  canvas.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    if (autoRotateId) { cancelAnimationFrame(autoRotateId); autoRotateId = null; }
  }, { passive: true });
  
  canvas.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    currentRotation += dx * 0.5;
    startX = e.touches[0].clientX;
    updateTransform();
  }, { passive: true });
  
  canvas.addEventListener('touchend', () => { isDragging = false; });
  
  // Auto-rotate
  if (autoBtn) autoBtn.addEventListener('click', () => {
    if (autoRotateId) {
      cancelAnimationFrame(autoRotateId);
      autoRotateId = null;
      autoBtn.classList.remove('active');
      return;
    }
    autoBtn.classList.add('active');
    const rotate = () => {
      currentRotation += 0.3;
      updateTransform();
      autoRotateId = requestAnimationFrame(rotate);
    };
    autoRotateId = requestAnimationFrame(rotate);
  });
  
  // Reset
  if (resetBtn) resetBtn.addEventListener('click', () => {
    if (autoRotateId) { cancelAnimationFrame(autoRotateId); autoRotateId = null; autoBtn?.classList.remove('active'); }
    currentRotation = 0;
    updateTransform();
  });
  
  updateTransform();
}

// ===== Star SVG Renderer =====
function renderStarsSVG(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += '<svg class="pdp-star filled" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="var(--accent-gold)" stroke="var(--accent-gold)" stroke-width="1"/></svg>';
    } else if (i === Math.ceil(rating) && rating % 1 >= 0.3) {
      html += '<svg class="pdp-star half" width="18" height="18" viewBox="0 0 24 24"><defs><linearGradient id="half-grad"><stop offset="50%" stop-color="var(--accent-gold)"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#half-grad)" stroke="var(--accent-gold)" stroke-width="1"/></svg>';
    } else {
      html += '<svg class="pdp-star empty" width="18" height="18" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" stroke="var(--text-muted)" stroke-width="1"/></svg>';
    }
  }
  return html;
}

function renderReviewListMarkup(reviews) {
  if (reviews.length === 0) {
    return `<div style="text-align:center; padding: 3rem 0; color: var(--text-muted);">
      <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No reviews yet</p>
      <p style="font-style: italic; font-size: 0.9rem;">Be the first to share your experience with this product.</p>
    </div>`;
  }

  return reviews.map(r => `
    <div class="pdp-review-card">
      <div class="pdp-review-header">
        <div class="pdp-review-avatar">${r.author.charAt(0).toUpperCase()}</div>
        <div class="pdp-review-author-info">
          <div class="pdp-review-author-line">
            <span class="pdp-review-author">${r.author}</span>
            ${r.verified ? '<span class="pdp-verified-badge">✓ Verified Purchase</span>' : ''}
          </div>
          <div class="pdp-review-date">${formatReviewDate(r.date)}</div>
        </div>
        <div class="pdp-review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      </div>
      ${r.title ? `<h5 class="pdp-review-title">${r.title}</h5>` : ''}
      <p class="pdp-review-text">${r.text}</p>
      <div class="pdp-review-footer">
        <button class="pdp-helpful-btn" title="Mark as helpful">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3H14z"/><path d="M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
          Helpful (<span class="helpful-count">${r.helpful || 0}</span>)
        </button>
      </div>
    </div>
  `).join('');
}

function renderRelatedProducts(product) {
  const grid = document.getElementById('pdp-related-grid');
  if (!grid) return;

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If there are not enough items in same category, pad with others
  if (related.length < 4) {
    const ids = new Set(related.map(r => r.id));
    ids.add(product.id);
    
    products.forEach(p => {
      if (related.length < 4 && !ids.has(p.id)) {
        related.push(p);
        ids.add(p.id);
      }
    });
  }

  grid.innerHTML = related.map(p => createProductCardMarkup(p)).join('');
  attachProductCardEvents(grid);
}

// ==================== CART VIEW (FULL PAGE) ====================
function initCartView() {
  renderCartPage();
}

function renderCartPage() {
  const itemsWrapper = document.getElementById('cart-page-items-wrapper');
  const summaryWrapper = document.getElementById('cart-page-summary-wrapper');
  if (!itemsWrapper || !summaryWrapper) return;

  if (cart.length === 0) {
    itemsWrapper.innerHTML = `
      <div style="text-align: center; padding: 4rem 0; color: var(--text-secondary);">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">🛒</div>
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 0.5rem;">Your cart is empty</h3>
        <p style="margin-bottom: 2rem;">Explore our luxurious products and fill your wardrobe.</p>
        <a href="#/shop" class="btn btn-primary">Start Shopping</a>
      </div>
    `;
    summaryWrapper.innerHTML = `
      <h3>Order Summary</h3>
      <p style="color: var(--text-muted); font-size:0.9rem;">Cart is empty. Add items to calculate pricing.</p>
    `;
    return;
  }

  // Render items list
  itemsWrapper.innerHTML = cart.map(item => `
    <div class="cart-page-item">
      <div class="cart-page-item-img">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-page-item-details">
        <div>
          <div class="cart-page-item-brand">${item.brand}</div>
          <h3 class="cart-page-item-title" onclick="window.location.hash='#/product/${item.id}'" style="cursor:pointer">${item.name}</h3>
          <div class="cart-page-item-meta">Size: ${item.size} | Color: ${item.color}</div>
        </div>
        
        <div class="cart-page-item-bottom">
          <div class="pdp-qty-selector" style="height: 38px;">
            <button onclick="updateCartPageQty(${item.id}, '${item.size}', '${item.color}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateCartPageQty(${item.id}, '${item.size}', '${item.color}', 1)">+</button>
          </div>
          
          <div style="display:flex; flex-direction:column; align-items:flex-end; gap:4px">
            <span class="cart-page-item-price">₹${(item.price * item.qty).toLocaleString()}</span>
            <span class="cart-page-item-remove" onclick="removeCartPageItem(${item.id}, '${item.size}', '${item.color}')">Remove</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Calculate pricing breakdown
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  // Promo calculation
  discountAmount = appliedPromo === 'LUXURY10' ? Math.round(subtotal * 0.1) : 0;
  
  // Shipping calculation (free over ₹3k)
  const shipping = subtotal > 3000 ? 0 : 149;
  const tax = Math.round((subtotal - discountAmount) * 0.18); // 18% included GST estimate
  const finalTotal = subtotal - discountAmount + shipping;

  summaryWrapper.innerHTML = `
    <h3>Order Summary</h3>
    
    <div class="summary-row">
      <span>Subtotal</span>
      <span>₹${subtotal.toLocaleString()}</span>
    </div>
    
    ${discountAmount > 0 ? `
    <div class="summary-row" style="color: var(--accent-green)">
      <span>Discount (LUXURY10)</span>
      <span>- ₹${discountAmount.toLocaleString()}</span>
    </div>
    ` : ''}

    <div class="summary-row">
      <span>Shipping & Delivery</span>
      <span>${shipping === 0 ? '<span style="color:var(--accent-green)">FREE</span>' : `₹${shipping}`}</span>
    </div>
    
    <div class="summary-row">
      <span>Estimated GST (18%)</span>
      <span>₹${tax.toLocaleString()}</span>
    </div>
    
    <!-- Promo Code Wrapper -->
    <div class="promo-wrapper">
      <input type="text" id="promo-input-field" class="promo-input" placeholder="Promo Code: LUXURY10" value="${appliedPromo}" />
      <button class="btn btn-outline promo-btn" onclick="applyPromoCode()">Apply</button>
    </div>
    
    <div class="summary-row total">
      <span>Total Price</span>
      <span>₹${finalTotal.toLocaleString()}</span>
    </div>
    
    <button class="btn btn-primary" onclick="window.location.hash='#/checkout';" style="width:100%; height:50px; margin-top: 1rem;">Proceed to Checkout</button>
    <a href="#/shop" style="display:block; text-align:center; font-size:0.8rem; margin-top:1.5rem; text-decoration:underline">Continue Shopping</a>
  `;
}

// Global scope helpers for full-page Cart View
window.updateCartPageQty = function(id, size, color, delta) {
  const item = cart.find(i => i.id === id && i.size === size && i.color === color);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeCartPageItem(id, size, color);
    return;
  }
  
  saveCart();
  renderCartPage();
};

window.removeCartPageItem = function(id, size, color) {
  cart = cart.filter(i => !(i.id === id && i.size === size && i.color === color));
  saveCart();
  renderCartPage();
};

window.applyPromoCode = function() {
  const input = document.getElementById('promo-input-field');
  const promo = input.value.trim().toUpperCase();

  if (promo === 'LUXURY10') {
    appliedPromo = 'LUXURY10';
    showToast('Promo code applied! 10% discount subtracted.');
  } else if (promo === '') {
    appliedPromo = '';
  } else {
    showToast('Invalid promo code. Try "LUXURY10"');
  }
  renderCartPage();
};

// ==================== CHECKOUT VIEW ====================
function initCheckoutView() {
  if (cart.length === 0) {
    window.location.hash = '#/shop';
    return;
  }

  // Show normal checkout layout, hide success page
  document.getElementById('checkout-main-flow').style.display = 'grid';
  document.getElementById('order-success-panel').style.display = 'none';

  // Render checkout summary
  renderCheckoutSummary();

  // Attach default values if needed
  togglePaymentFields('card');
}

function renderCheckoutSummary() {
  const wrapper = document.getElementById('checkout-summary-wrapper');
  if (!wrapper) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipping = subtotal > 3000 ? 0 : 149;
  const finalTotal = subtotal - discountAmount + shipping;

  wrapper.innerHTML = `
    <h3 style="font-family: var(--font-display); font-size:1.3rem; border-bottom: 1px solid var(--border); padding-bottom:0.5rem; margin-bottom: 1.5rem">Summary</h3>
    
    <div class="checkout-summary-items">
      ${cart.map(item => `
        <div class="checkout-summary-item">
          <div>
            <p style="font-weight:600; color:var(--text-primary); max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.name}</p>
            <p style="font-size:0.75rem; color:var(--text-secondary)">Qty: ${item.qty} | Size: ${item.size}</p>
          </div>
          <span style="font-weight:600">₹${(item.price * item.qty).toLocaleString()}</span>
        </div>
      `).join('')}
    </div>
    
    <div class="summary-row">
      <span>Subtotal</span>
      <span>₹${subtotal.toLocaleString()}</span>
    </div>
    
    ${discountAmount > 0 ? `
    <div class="summary-row" style="color:var(--accent-green)">
      <span>Discount</span>
      <span>- ₹${discountAmount.toLocaleString()}</span>
    </div>
    ` : ''}

    <div class="summary-row">
      <span>Shipping</span>
      <span>${shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
    </div>
    
    <div class="summary-row total" style="margin-top:1rem; padding-top:1rem">
      <span>Total</span>
      <span>₹${finalTotal.toLocaleString()}</span>
    </div>
  `;
}

// Toggle checkout payment form fields
window.togglePaymentFields = function(method) {
  // Hide all payment inputs
  document.getElementById('fields-card').style.display = 'none';
  document.getElementById('fields-upi').style.display = 'none';
  document.getElementById('fields-cod').style.display = 'none';

  // Remove required attribute from hidden fields to avoid block validation
  setFieldsRequired('fields-card', false);
  setFieldsRequired('fields-upi', false);

  // Show selected and add required attribute
  if (method === 'card') {
    document.getElementById('fields-card').style.display = 'block';
    setFieldsRequired('fields-card', true);
  } else if (method === 'upi') {
    document.getElementById('fields-upi').style.display = 'block';
    setFieldsRequired('fields-upi', true);
  } else if (method === 'cod') {
    document.getElementById('fields-cod').style.display = 'block';
  }
};

function setFieldsRequired(containerId, isRequired) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.querySelectorAll('input').forEach(input => {
    if (isRequired) {
      input.setAttribute('required', 'true');
    } else {
      input.removeAttribute('required');
    }
  });
}

// Handle Order Placement Form submission
window.processCheckout = function(e) {
  e.preventDefault();
  
  const submitBtn = document.querySelector('.btn-checkout-submit');
  const oldText = submitBtn.textContent;
  
  // Show loading
  submitBtn.setAttribute('disabled', 'true');
  submitBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="animation: rotate-slow 1s linear infinite; margin-right: 8px">
      <circle cx="12" cy="12" r="10" stroke-dasharray="30" stroke-dashoffset="0"></circle>
    </svg> Processing Order...
  `;
  
  setTimeout(() => {
    // Hide Form, Show Success Card
    document.getElementById('checkout-main-flow').style.display = 'none';
    
    const randomOrderId = 'SS-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('success-order-id').textContent = randomOrderId;
    
    document.getElementById('order-success-panel').style.display = 'block';

    // Clear Cart State
    cart = [];
    appliedPromo = '';
    discountAmount = 0;
    saveCart();
    
    // Clear Form inputs
    document.getElementById('checkout-form').reset();
    
    // Restore button
    submitBtn.removeAttribute('disabled');
    submitBtn.textContent = oldText;
    
    showToast('Secure transaction completed! Order placed.');
  }, 1800);
};


// ==================== CART SIDE DRAWER LOGIC ====================
function initCartDrawer() {
  const cartBtn = document.getElementById('cart-btn');
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartClose = document.querySelector('.cart-close');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
}

function openCart() {
  document.querySelector('.cart-overlay')?.classList.add('open');
  document.querySelector('.cart-drawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderDrawerCart();
}

function closeCart() {
  document.querySelector('.cart-overlay')?.classList.remove('open');
  document.querySelector('.cart-drawer')?.classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(productId, qty, size, color) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId && item.size === size && item.color === color);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      qty: qty
    });
  }

  saveCart();
  showToast(`${qty}x ${product.name} added to cart`);
  
  // Pulse animation on navbar cart icon
  const cartIconBtn = document.getElementById('cart-btn');
  if (cartIconBtn) {
    cartIconBtn.style.animation = 'none';
    cartIconBtn.offsetHeight; // Reflow
    cartIconBtn.style.animation = 'pulse-gold 0.6s ease';
  }
}

function updateCartCount() {
  const countEls = document.querySelectorAll('.cart-count');
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  
  countEls.forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function renderDrawerCart() {
  const cartItems = document.querySelector('.cart-items');
  const cartFooter = document.querySelector('.cart-footer');
  const itemCountEl = document.querySelector('.cart-item-count');
  
  if (!cartItems) return;

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (itemCountEl) itemCountEl.textContent = `(${totalItems} items)`;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty</p>
        <p style="font-size:0.8rem; margin-top:0.5rem; color: var(--text-muted);">Browse our collections to add items</p>
      </div>
    `;
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (cartFooter) cartFooter.style.display = 'block';

  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name" onclick="closeCart(); window.location.hash='#/product/${item.id}'" style="cursor:pointer">${item.name}</div>
        <div class="cart-item-variant">${item.brand} | Size: ${item.size}</div>
        <div class="cart-item-bottom">
          <div class="cart-qty">
            <button onclick="updateDrawerCartQty(${item.id}, '${item.size}', '${item.color}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateDrawerCartQty(${item.id}, '${item.size}', '${item.color}', 1)">+</button>
          </div>
          <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</span>
        </div>
        <div class="cart-item-remove" onclick="removeDrawerCartItem(${item.id}, '${item.size}', '${item.color}')">Remove</div>
      </div>
    </div>
  `).join('');

  // Update Drawer Totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipping = subtotal > 10000 ? 0 : 499;
  const total = subtotal + shipping;

  const subtotalEl = document.querySelector('.cart-subtotal .amount');
  const shippingEl = document.querySelector('.cart-shipping .amount');
  const totalEl = document.querySelector('.cart-total .amount');

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
  if (totalEl) totalEl.textContent = `₹${total.toLocaleString()}`;
}

// Drawer globals
window.updateDrawerCartQty = function(id, size, color, delta) {
  const item = cart.find(i => i.id === id && i.size === size && i.color === color);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeDrawerCartItem(id, size, color);
    return;
  }
  
  saveCart();
  renderDrawerCart();
};

window.removeDrawerCartItem = function(id, size, color) {
  cart = cart.filter(i => !(i.id === id && i.size === size && i.color === color));
  saveCart();
  renderDrawerCart();
};

// ==================== WISHLIST LOGIC ====================
function initWishlistBtn() {
  const btn = document.getElementById('wishlist-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      // Toggle PLP showing only wishlisted items, or navigate to shop page and filter
      if (wishlist.size === 0) {
        showToast('Your Wishlist is currently empty.');
        return;
      }
      
      // Let shop page handle rendering wishlist items
      window.location.hash = '#/shop';
      
      // Wait for PLP to initialize then render only wishlisted items
      setTimeout(() => {
        const grid = document.getElementById('plp-products-grid');
        const countEl = document.getElementById('plp-results-count');
        
        const wishlistedItems = products.filter(p => wishlist.has(p.id));
        
        if (grid) {
          grid.innerHTML = wishlistedItems.map(product => createProductCardMarkup(product)).join('');
          attachProductCardEvents(grid);
        }
        
        if (countEl) {
          countEl.textContent = `Showing ${wishlistedItems.length} wishlisted items`;
        }

        document.getElementById('plp-search-input').value = 'Wishlist';
        document.getElementById('btn-clear-filters').style.display = 'inline-block';
        showToast('Displaying wishlisted items');
      }, 100);
    });
  }
}

function toggleWishlist(productId, btn) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    saveWishlist();
    
    btn.classList.remove('wishlisted');
    btn.innerHTML = '♡';
    showToast(`Removed from wishlist`);
  } else {
    wishlist.add(productId);
    saveWishlist();
    
    btn.classList.add('wishlisted');
    btn.innerHTML = '♥';
    showToast(`${product.name} added to wishlist`);
  }
  
  // If we are currently on the PDP, make sure PDP button reflects the state
  const pdpWishBtn = document.getElementById('pdp-wishlist-toggle');
  if (pdpWishBtn && productId === parseInt(window.location.hash.replace('#/product/', ''))) {
    if (wishlist.has(productId)) {
      pdpWishBtn.classList.add('wishlisted');
      pdpWishBtn.innerHTML = '♥';
    } else {
      pdpWishBtn.classList.remove('wishlisted');
      pdpWishBtn.innerHTML = '♡';
    }
  }
}

// ==================== SEARCH MODAL LOGIC ====================
function initSearchModal() {
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchInput = document.getElementById('search-input');
  const closeBtn = document.querySelector('.search-close-btn');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      searchOverlay?.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInput?.focus(), 300);
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);
  if (searchOverlay) {
    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) closeSearch();
    });
  }

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeCart();
    }
  });

  // Live search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const results = document.querySelector('.search-results');
      
      if (query.length < 2) {
        results?.classList.remove('has-results');
        return;
      }

      const matches = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );

      if (matches.length > 0 && results) {
        results.classList.add('has-results');
        results.innerHTML = matches.slice(0, 6).map(p => `
          <div class="search-result-item" onclick="searchResultClick(${p.id})">
            <div class="search-result-img">
              <img src="${p.image}" alt="${p.name}" />
            </div>
            <div class="search-result-info">
              <h4>${p.name}</h4>
              <p>₹${p.price.toLocaleString()}</p>
            </div>
          </div>
        `).join('');
      } else if (results) {
        results.classList.add('has-results');
        results.innerHTML = `<div class="search-result-item"><div class="search-result-info"><h4>No results found</h4><p>Try a different search term</p></div></div>`;
      }
    });
  }
}

function closeSearch() {
  document.querySelector('.search-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  document.querySelector('.search-results')?.classList.remove('has-results');
}

window.searchResultClick = function(productId) {
  closeSearch();
  // Redirect directly to PDP
  window.location.hash = `#/product/${productId}`;
};

// ==================== SCROLL ANIMATIONS (Intersection Observer) ====================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ==================== MONSOON SALE COUNTDOWN ====================
function initCountdown() {
  const saleEnd = new Date();
  saleEnd.setDate(saleEnd.getDate() + 3);
  saleEnd.setHours(23, 59, 59, 0);

  function updateCountdown() {
    const now = new Date();
    const diff = saleEnd - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minsEl = document.getElementById('countdown-mins');
    const secsEl = document.getElementById('countdown-secs');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) {
      const oldVal = secsEl.textContent;
      const newVal = String(seconds).padStart(2, '0');
      if (oldVal !== newVal) {
        secsEl.style.animation = 'none';
        secsEl.offsetHeight; // reflow
        secsEl.style.animation = 'count-pulse 0.3s ease';
      }
      secsEl.textContent = newVal;
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ==================== NEWSLETTER SIGNUP ====================
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const email = input?.value.trim();

    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }

    showToast('Welcome to the SS Attire family! ✨');
    if (input) input.value = '';
  });
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==================== MARQUEE BANNER LOOP ====================
function initMarquee() {
  const track = document.querySelector('.marquee-track');
  if (!track) return;
  track.innerHTML += track.innerHTML; // duplicate for infinite wrap
}

// ==================== TOAST SYSTEM ====================
let toastTimer;
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  clearTimeout(toastTimer);
  toast.classList.remove('show');
  toast.innerHTML = `<span class="toast-icon">✦</span> ${message}`;

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}
