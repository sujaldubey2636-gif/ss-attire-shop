/* ===================================================================
   SS ATTIRE SHOP — Immersive 3D Parallax & Clean 2D Shopping SPA
   =================================================================== */

// ==================== PRODUCT DATA ====================
const products = [
  // ---- MEN'S WEAR ----
  {
    id: 1, name: 'Royal Charcoal Three-Piece Suit', brand: 'SS Collection',
    price: 24999, oldPrice: 32999, category: 'men',
    image: 'img/prod-suit.png', badge: 'trending',
    rating: 4.8, reviews: 127,
    description: 'A masterpiece of contemporary tailoring. This three-piece suit is crafted from ultra-fine Merino wool blend, offering a structured silhouette and unparalleled elegance. Perfect for black-tie events, weddings, and premium business meets.',
    details: 'Includes jacket, waistcoat, and trousers. Slim fit. Peak lapel. Double-vented back. Functional pockets.',
    sku: 'SS-MEN-SUIT-001', weight: '2.8 kg', material: 'Merino Wool Blend (80% Wool, 20% Polyester)', origin: 'Made in Italy',
    warranty: '1 Year Manufacturing Warranty', availability: 'In Stock', care: 'Dry Clean Only. Store on wooden hanger.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Charcoal',hex:'#2C3539'},{name:'Midnight Navy',hex:'#1B1F3A'},{name:'Obsidian',hex:'#0F1115'}],
    galleryImages: ['img/prod-suit.png','img/cat-men.png','img/prod-shirt.png','img/hero.png']
  },
  {
    id: 2, name: 'Premium Egyptian Cotton Shirt', brand: 'SS Essentials',
    price: 4999, oldPrice: null, category: 'men',
    image: 'img/prod-shirt.png', badge: 'new',
    rating: 4.6, reviews: 89,
    description: 'Impeccably tailored from long-staple Egyptian cotton. This crisp formal shirt features a silky texture, extreme breathability, and natural luster. Designed to resist creasing for a polished look all day long.',
    details: '100% Egyptian Cotton. Spread collar. Mitered dual-button cuffs. French placket. Curved hem.',
    sku: 'SS-MEN-SHIRT-002', weight: '0.35 kg', material: '100% Egyptian Cotton (Thread Count 400)', origin: 'Woven in Egypt, Tailored in India',
    warranty: '6 Months Manufacturing Warranty', availability: 'In Stock', care: 'Machine wash cold. Tumble dry low. Iron on medium heat.',
    sizes: ['S','M','L','XL'], colors: [{name:'White Ivory',hex:'#FFFFF0'},{name:'Sky Blue',hex:'#87CEEB'},{name:'Gold Accent',hex:'#D4AF37'}],
    galleryImages: ['img/prod-shirt.png','img/cat-men.png','img/hero.png','img/prod-suit.png']
  },
  {
    id: 3, name: 'Tailored Navy Blazer', brand: 'SS Collection',
    price: 18999, oldPrice: 22999, category: 'men',
    image: 'img/cat-men.png', badge: 'sale',
    rating: 4.9, reviews: 203,
    description: 'The ultimate versatile wardrobe staple. Crafted with structured shoulders and a classic double-button closure. Effortlessly transitions from smart casual to semi-formal wear.',
    details: 'Wool-silk-linen blend. Peak lapel. Gold brass buttons. Patch pockets. Unlined for breathable drape.',
    sku: 'SS-MEN-BLZR-003', weight: '1.2 kg', material: 'Wool-Silk-Linen Blend (60/25/15)', origin: 'Made in Italy',
    warranty: '1 Year Manufacturing Warranty', availability: 'In Stock', care: 'Dry Clean recommended. Steam press only.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Navy Blue',hex:'#1B1F3A'},{name:'Charcoal',hex:'#2C3539'},{name:'Camel',hex:'#C19A6B'}],
    galleryImages: ['img/cat-men.png','img/prod-suit.png','img/prod-shirt.png','img/hero.png']
  },
  // ---- WOMEN'S WEAR ----
  {
    id: 4, name: 'Crimson Silk Cocktail Dress', brand: 'SS Luxe',
    price: 19999, oldPrice: 27999, category: 'women',
    image: 'img/prod-dress.png', badge: 'sale',
    rating: 4.9, reviews: 156,
    description: 'Radiate pure sophistication in this fluid silk-satin cocktail dress. Features an elegant cowl neck, adjustable crossover straps, and a dramatic thigh-high slit. Drapes beautifully to highlight your silhouette.',
    details: '100% Silk Satin. Cowl neckline. Concealed side zipper. Adjustable shoulder straps. Dry clean only.',
    sku: 'SS-WMN-DRSS-004', weight: '0.55 kg', material: '100% Pure Silk Satin', origin: 'Handcrafted in India',
    warranty: '6 Months Manufacturing Warranty', availability: 'In Stock', care: 'Dry Clean Only. Do not wring or bleach. Store flat.',
    sizes: ['XS','S','M','L','XL'], colors: [{name:'Crimson Red',hex:'#DC143C'},{name:'Midnight Black',hex:'#0F1115'},{name:'Champagne',hex:'#F7E7CE'}],
    galleryImages: ['img/prod-dress.png','img/cat-women.png','img/prod-blouse.png','img/hero.png']
  },
  {
    id: 5, name: 'Emerald Silk Drape Blouse', brand: 'SS Luxe',
    price: 7999, oldPrice: null, category: 'women',
    image: 'img/prod-blouse.png', badge: 'new',
    rating: 4.7, reviews: 94,
    description: 'Add a touch of jewel-toned opulence to your wardrobe. This draped blouse is crafted from heavy mulberry silk and features statement cuffs and a elegant neckline drape. Perfectly pairs with trousers or high-waisted skirts.',
    details: 'Heavy mulberry silk. Draped mock neck. Extended cuffs with gold buttons. Keyhole back closure.',
    sku: 'SS-WMN-BLS-005', weight: '0.28 kg', material: 'Heavy Mulberry Silk (22 Momme)', origin: 'Made in India',
    warranty: '6 Months Manufacturing Warranty', availability: 'In Stock', care: 'Dry Clean recommended. Iron on low heat with cloth.',
    sizes: ['XS','S','M','L'], colors: [{name:'Emerald',hex:'#2E8B57'},{name:'Ruby',hex:'#9B111E'},{name:'Sapphire',hex:'#0F52BA'}],
    galleryImages: ['img/prod-blouse.png','img/cat-women.png','img/prod-dress.png','img/hero.png']
  },
  {
    id: 6, name: 'Midnight Velvet Gown', brand: 'SS Couture',
    price: 34999, oldPrice: null, category: 'women',
    image: 'img/cat-women.png', badge: 'trending',
    rating: 5.0, reviews: 67,
    description: 'Command the room in this statuesque velvet gown. Crafted from plush, ultra-soft stretch velvet that contours the body. Styled with an off-the-shoulder neckline and a dramatic sweeping floor train.',
    details: 'Premium stretch velvet. Bardot neckline. Fully lined. Concealed back zipper. Floor-length with train.',
    sku: 'SS-WMN-GWN-006', weight: '1.1 kg', material: 'Premium Stretch Velvet (92% Polyester, 8% Spandex)', origin: 'Designed in Paris, Made in India',
    warranty: '1 Year Manufacturing Warranty', availability: 'Limited Stock — Only 8 Left', care: 'Dry Clean Only. Do not iron directly. Steam to remove wrinkles.',
    sizes: ['XS','S','M','L','XL'], colors: [{name:'Midnight Navy',hex:'#1B1F3A'},{name:'Plum',hex:'#4B0082'},{name:'Onyx Black',hex:'#0F1115'}],
    galleryImages: ['img/cat-women.png','img/prod-dress.png','img/prod-blouse.png','img/hero.png']
  },
  // ---- FOOTWEAR ----
  {
    id: 7, name: 'Noir & Gold Designer Sneakers', brand: 'SS Sport',
    price: 12999, oldPrice: 16999, category: 'footwear',
    image: 'img/prod-sneakers.png', badge: 'trending',
    rating: 4.8, reviews: 312,
    description: 'Streetwear meets luxury. These low-top sneakers feature panels of premium full-grain Italian leather and plush suede, detailed with striking metallic gold hardware. Comfort-engineered cupsole ensures all-day wear.',
    details: 'Italian calf leather and suede. 24K gold-plated accents. Breathable leather lining. Rubber cupsole.',
    sku: 'SS-FTW-SNK-007', weight: '0.9 kg (pair)', material: 'Italian Calf Leather & Suede', origin: 'Handcrafted in Italy',
    warranty: '1 Year Manufacturing Warranty', availability: 'In Stock', care: 'Wipe clean with dry cloth. Use leather conditioner monthly. Store with shoe trees.',
    sizes: ['UK 6','UK 7','UK 8','UK 9','UK 10','UK 11'], colors: [{name:'Noir & Gold',hex:'#0F1115'},{name:'All White',hex:'#F5F5F5'},{name:'Olive Gold',hex:'#556B2F'}],
    galleryImages: ['img/prod-sneakers.png','img/cat-footwear.png','img/prod-heels.png','img/hero.png']
  },
  {
    id: 8, name: 'Obsidian Stiletto Heels', brand: 'SS Luxe',
    price: 14999, oldPrice: null, category: 'footwear',
    image: 'img/prod-heels.png', badge: 'new',
    rating: 4.6, reviews: 78,
    description: 'Walk with unmatched confidence. These striking stilettos feature a sleek pointed toe, dynamic cut-out sides, and a high-shine metal heel. Handcrafted in Milan from premium patent leather.',
    details: 'Patent leather. 100mm heel height. Signature gold-inlaid leather sole. Cushioned insole.',
    sku: 'SS-FTW-HLS-008', weight: '0.7 kg (pair)', material: 'Patent Leather Upper, Leather Sole', origin: 'Handcrafted in Milan, Italy',
    warranty: '6 Months Manufacturing Warranty', availability: 'In Stock', care: 'Wipe clean with damp cloth. Polish with patent leather care cream. Store in dust bag.',
    sizes: ['UK 3','UK 4','UK 5','UK 6','UK 7','UK 8'], colors: [{name:'Obsidian Black',hex:'#0F1115'},{name:'Crimson',hex:'#DC143C'},{name:'Nude',hex:'#E8C39E'}],
    galleryImages: ['img/prod-heels.png','img/cat-footwear.png','img/prod-sneakers.png','img/hero.png']
  },
  // ---- ACCESSORIES ----
  {
    id: 9, name: 'Imperial Gold Chronograph', brand: 'SS Timepieces',
    price: 49999, oldPrice: 64999, category: 'accessories',
    image: 'img/prod-watch.png', badge: 'sale',
    rating: 4.9, reviews: 241,
    description: 'A testament to watchmaking excellence. This luxury chronograph features a solid stainless steel case plated in 18K gold, a rich obsidian dial with luminous hands, and a precision tachymeter bezel. Domed sapphire crystal provides scratch resistance.',
    details: '18K gold plated. Swiss quartz movement. 42mm case. Water resistant to 50m. Sapphire crystal glass.',
    sku: 'SS-ACC-WCH-009', weight: '0.18 kg', material: 'Stainless Steel, 18K Gold Plating, Sapphire Crystal', origin: 'Swiss Movement, Assembled in India',
    warranty: '2 Years International Warranty', availability: 'In Stock', care: 'Avoid exposure to chemicals. Wipe with microfiber cloth. Service every 3 years.',
    sizes: ['One Size'], colors: [{name:'Gold & Black',hex:'#D4AF37'},{name:'Silver & Blue',hex:'#C0C0C0'},{name:'Rose Gold',hex:'#B76E79'}],
    galleryImages: ['img/prod-watch.png','img/cat-accessories.png','img/prod-bag.png','img/hero.png']
  },
  {
    id: 10, name: 'Quilted Noir Leather Handbag', brand: 'SS Luxe',
    price: 22999, oldPrice: null, category: 'accessories',
    image: 'img/prod-bag.png', badge: 'new',
    rating: 4.7, reviews: 183,
    description: 'A classic design re-imagined for the modern lifestyle. Crafted from supple nappa leather quilted in an iconic diamond pattern. Outfitted with a gold chain strap that can be worn doubled or single as a crossbody.',
    details: 'Nappa calfskin leather. Gold tone hardware. Double-compartment interior. Internal zip pockets.',
    sku: 'SS-ACC-BAG-010', weight: '0.75 kg', material: 'Nappa Calfskin Leather', origin: 'Made in India',
    warranty: '1 Year Manufacturing Warranty', availability: 'In Stock', care: 'Wipe with leather wipe. Store stuffed with tissue in dust bag. Avoid prolonged sun exposure.',
    sizes: ['One Size'], colors: [{name:'Noir Black',hex:'#0F1115'},{name:'Cognac',hex:'#9A6324'},{name:'Cream',hex:'#FFFDD0'}],
    galleryImages: ['img/prod-bag.png','img/cat-accessories.png','img/prod-watch.png','img/hero.png']
  },
  // ---- TRADITIONAL WEAR ----
  {
    id: 11, name: 'Royal Ivory Embroidered Kurta', brand: 'SS Heritage',
    price: 8999, oldPrice: 11999, category: 'traditional',
    image: 'img/prod-kurta.png', badge: 'trending',
    rating: 4.8, reviews: 145,
    description: 'Honor heritage in style. This ivory kurta is crafted from premium raw silk, adorned with elaborate gold Zardozi embroidery around the band collar and placket. Designed for festivals, weddings, and royal gatherings.',
    details: 'Raw silk blend. Handcrafted Zardozi embroidery. Side slits. Two side pockets. Dry clean recommended.',
    sku: 'SS-TRD-KRT-011', weight: '0.6 kg', material: 'Raw Silk Blend (70% Silk, 30% Cotton)', origin: 'Handcrafted in Lucknow, India',
    warranty: '6 Months Manufacturing Warranty', availability: 'In Stock', care: 'Dry Clean Only. Do not wring. Iron inside out on low heat.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Ivory Gold',hex:'#FFFFF0'},{name:'Maroon',hex:'#800020'},{name:'Royal Blue',hex:'#002366'}],
    galleryImages: ['img/prod-kurta.png','img/cat-traditional.png','img/cat-men.png','img/hero.png']
  },
  {
    id: 12, name: 'Golden Thread Silk Sherwani', brand: 'SS Heritage',
    price: 39999, oldPrice: null, category: 'traditional',
    image: 'img/cat-traditional.png', badge: 'new',
    rating: 5.0, reviews: 56,
    description: 'The epitome of traditional luxury. This sherwani is woven with pure banarasi silk brocade, featuring gold zari motifs. Features structural tailoring for a commanding, regal presence.',
    details: 'Banarasi silk brocade. Hand-carved brass buttons. Fully lined. Vent back. Sold as set with churidar.',
    sku: 'SS-TRD-SHR-012', weight: '1.8 kg (set)', material: 'Pure Banarasi Silk Brocade with Zari', origin: 'Handwoven in Varanasi, India',
    warranty: '1 Year Manufacturing Warranty', availability: 'Limited Stock — Only 12 Left', care: 'Dry Clean Only. Store in breathable garment cover. Do not expose to moisture.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Gold Thread',hex:'#D4AF37'},{name:'Silver Weave',hex:'#C0C0C0'},{name:'Maroon Brocade',hex:'#800020'}],
    galleryImages: ['img/cat-traditional.png','img/prod-kurta.png','img/cat-men.png','img/hero.png']
  },
  // ---- UNISEX ----
  {
    id: 13, name: 'Shadow Black Premium Hoodie', brand: 'SS Street',
    price: 5999, oldPrice: 7999, category: 'unisex',
    image: 'img/prod-hoodie.png', badge: 'sale',
    rating: 4.5, reviews: 428,
    description: 'Elevated streetwear comfort. Knitted from heavyweight organic loopback cotton with a structured hood. Embellished with a minimalist, high-density embroidered gold logo on the chest.',
    details: '450GSM Organic Loopback Cotton. Gold metal tip drawstrings. Kangaroo pocket. Ribbed trims.',
    sku: 'SS-UNI-HDY-013', weight: '0.65 kg', material: '100% Organic Loopback Cotton (450GSM)', origin: 'Made in India',
    warranty: '6 Months Manufacturing Warranty', availability: 'In Stock', care: 'Machine wash cold inside out. Do not bleach. Tumble dry low. Do not iron directly on print.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Shadow Black',hex:'#0F1115'},{name:'Heather Grey',hex:'#9FA6B2'},{name:'Forest Green',hex:'#228B22'}],
    galleryImages: ['img/prod-hoodie.png','img/cat-unisex.png','img/cat-men.png','img/hero.png']
  },
  {
    id: 14, name: 'Urban Gold-Accent Bomber Jacket', brand: 'SS Street',
    price: 15999, oldPrice: null, category: 'unisex',
    image: 'img/cat-unisex.png', badge: 'trending',
    rating: 4.7, reviews: 167,
    description: 'A striking statement jacket. Features a water-resistant matte satin shell, satin lining, and luxury ribbed trims. Detailed with bold gold zipper hardware and an utility sleeve pocket.',
    details: 'Water-resistant nylon-satin. Gold double zip pull. Interior breast pocket. Ribbed collar, cuffs, and hem.',
    sku: 'SS-UNI-BMR-014', weight: '0.85 kg', material: 'Water-Resistant Nylon-Satin Shell, Satin Lining', origin: 'Designed in Milan, Made in India',
    warranty: '1 Year Manufacturing Warranty', availability: 'In Stock', care: 'Spot clean or dry clean. Do not machine wash. Hang dry.',
    sizes: ['S','M','L','XL','XXL'], colors: [{name:'Matte Black Gold',hex:'#0F1115'},{name:'Olive',hex:'#556B2F'},{name:'Burgundy',hex:'#800020'}],
    galleryImages: ['img/cat-unisex.png','img/prod-hoodie.png','img/cat-men.png','img/hero.png']
  }
];

// Product reviews database (simulated — realistic per-product reviews)
const reviewDB = {
  1: [
    { author: 'Rahul K.', rating: 5, date: '2025-06-10', verified: true, helpful: 34, title: 'Absolutely phenomenal suit', text: 'Wore this to my sister\'s wedding and received more compliments than the groom. The fit is impeccable — no alterations needed for my M size. The waistcoat is a beautiful touch. Fabric feels extremely premium.' },
    { author: 'Ananya R.', rating: 5, date: '2025-05-22', verified: true, helpful: 21, title: 'Perfect anniversary gift', text: 'Bought this for my husband. The charcoal color is elegant and the wool blend is super soft to the touch. Packaging was luxurious too — came in a beautiful SS Attire garment bag.' },
    { author: 'Devesh M.', rating: 4, date: '2025-04-15', verified: true, helpful: 12, title: 'Great quality, slightly long sleeves', text: 'Quality is top notch, but the jacket sleeves were a tad long for me. Got them adjusted easily. The three-piece together looks stunning. Would buy from SS Collection again.' },
    { author: 'Siddharth P.', rating: 5, date: '2025-03-28', verified: false, helpful: 8, title: 'Board meeting power suit', text: 'This suit commands respect. I\'ve gotten several inquiries about where I got it during business meetings. The double-vented back is a nice modern touch.' },
    { author: 'Meera J.', rating: 4, date: '2025-02-11', verified: true, helpful: 15, title: 'Gifted to my father — he loved it', text: 'Dad is extremely picky about formal wear but was genuinely impressed. The peak lapel styling is classic yet contemporary. Only minor gripe is the trousers could use a slightly slimmer cut around the calves.' }
  ],
  2: [
    { author: 'Priya S.', rating: 5, date: '2025-06-02', verified: true, helpful: 18, title: 'Best shirt I own', text: 'The Egyptian cotton is incredibly soft and breathable. Wore it to a full-day conference and it stayed crisp until evening. No creasing at all. The spread collar sits beautifully under a blazer.' },
    { author: 'Karan V.', rating: 4, date: '2025-05-18', verified: true, helpful: 9, title: 'Excellent quality for the price', text: 'At ₹5,000 this is a steal for genuine Egyptian cotton. The dual-button cuffs are a nice luxury detail. Runs slightly slim though — size up if you prefer a relaxed fit.' },
    { author: 'Nisha T.', rating: 5, date: '2025-04-30', verified: true, helpful: 22, title: 'Office wardrobe staple', text: 'Ordered 3 in different colors. The luster on this cotton is unreal. After 10+ washes, they still look brand new. Will definitely reorder when new colors drop.' },
    { author: 'Amit G.', rating: 4, date: '2025-03-15', verified: false, helpful: 5, title: 'Solid daily driver shirt', text: 'Good construction, nice placket. The curved hem tucks neatly. Wish there were more color options available — would love a lavender and a light pink.' }
  ],
  3: [
    { author: 'Vikram S.', rating: 5, date: '2025-06-08', verified: true, helpful: 27, title: 'Best blazer purchase ever', text: 'The wool-silk-linen blend is genius — incredibly lightweight yet structured. I can wear it in Indian summers without overheating. The gold brass buttons are a magnificent touch.' },
    { author: 'Ravi K.', rating: 5, date: '2025-05-25', verified: true, helpful: 19, title: 'Versatile piece for any occasion', text: 'Wore it with jeans for brunch, then with chinos for dinner — works perfectly both ways. The unlined construction drapes beautifully. This is what smart casual should look like.' },
    { author: 'Deepa M.', rating: 4, date: '2025-04-12', verified: true, helpful: 11, title: 'Lovely blazer with minor sizing note', text: 'Great blazer overall. The sale price made it even better. Just note that it runs slightly slim through the chest — I\'d recommend sizing up one if you\'re between sizes.' },
    { author: 'Arjun T.', rating: 5, date: '2025-03-20', verified: true, helpful: 16, title: 'Compliments everywhere', text: 'The navy color is rich and deep, not the faded navy you see on cheaper blazers. Patch pockets add a nice casual element. This has replaced my go-to dinner jacket.' }
  ],
  4: [
    { author: 'Neha R.', rating: 5, date: '2025-06-14', verified: true, helpful: 31, title: 'Dream dress — stop scrolling and buy', text: 'The silk satin flows like liquid gold (well, liquid crimson). The cowl neck is incredibly flattering. I wore this to a cocktail party and literally stopped conversations. The thigh slit is tasteful, not overdone.' },
    { author: 'Pooja N.', rating: 5, date: '2025-05-30', verified: true, helpful: 24, title: 'Worth every penny at sale price', text: 'At 28% off this was an absolute steal. The quality of the silk is unmistakable — heavy, smooth, and drapes exactly like the photos. I\'m 5\'7" and the length was perfect in size M.' },
    { author: 'Kavita S.', rating: 4, date: '2025-04-22', verified: true, helpful: 14, title: 'Beautiful but delicate', text: 'Stunning dress. The side zipper is well-concealed. Only giving 4 stars because pure silk does wrinkle easily during transport. Had to steam it before the event. But the look — 10/10.' },
    { author: 'Sonal M.', rating: 5, date: '2025-03-05', verified: false, helpful: 7, title: 'My engagement dinner dress', text: 'Chose the champagne color for my engagement dinner and it was magical. The adjustable straps are a thoughtful touch. Every guest asked about the dress. Thank you SS Luxe!' }
  ],
  5: [
    { author: 'Isha P.', rating: 5, date: '2025-06-01', verified: true, helpful: 16, title: 'Jewel-toned perfection', text: 'The emerald color is so rich and vibrant in person — even more beautiful than in photos. The heavy silk has a gorgeous weight and drape. The gold buttons on the cuffs are a stunning detail.' },
    { author: 'Divya R.', rating: 4, date: '2025-05-15', verified: true, helpful: 10, title: 'Lovely but runs slightly small', text: 'Beautiful blouse. The mulberry silk quality is evident. I usually wear M but found it a bit snug around the shoulders — L fits perfectly. The draped mock neck is very elegant.' },
    { author: 'Rekha D.', rating: 5, date: '2025-04-28', verified: true, helpful: 19, title: 'Perfect for formal events', text: 'I\'ve paired this with high-waisted trousers and pencil skirts. Works beautifully for both. The keyhole back closure is a nice subtle detail. The silk feels incredibly luxurious against the skin.' }
  ],
  6: [
    { author: 'Aishwarya M.', rating: 5, date: '2025-06-12', verified: true, helpful: 28, title: 'Show-stopping gown', text: 'I walked into the gala and people literally turned their heads. The stretch velvet hugs the body perfectly — no need for tailoring. The bardot neckline is classic and timeless. Worth every rupee.' },
    { author: 'Prerna K.', rating: 5, date: '2025-05-20', verified: true, helpful: 22, title: 'Felt like royalty', text: 'The floor-length train made me feel like I was walking a red carpet. The concealed zipper is well-engineered. The navy shade has a beautiful depth to it. My photographer was obsessed.' },
    { author: 'Tanya B.', rating: 5, date: '2025-04-08', verified: true, helpful: 15, title: 'My dream wedding reception outfit', text: 'Changed into this for my reception and the reaction was incredible. The velvet is unbelievably soft and doesn\'t look cheap or shiny. SS Couture has a customer for life.' }
  ],
  7: [
    { author: 'Rohit S.', rating: 5, date: '2025-06-16', verified: true, helpful: 45, title: 'Best sneakers I\'ve ever owned', text: 'The Italian leather is butter-soft right out of the box. No break-in period needed. The gold hardware is subtle and classy, not loud. The cupsole is incredibly comfortable for all-day walking.' },
    { author: 'Aakash P.', rating: 5, date: '2025-05-28', verified: true, helpful: 33, title: 'Luxury meets streetwear', text: 'These sneakers bridge the gap between formal and casual perfectly. I wear them with suits and with joggers. The suede panels contrast beautifully with the leather. After 3 months of heavy use, they still look mint.' },
    { author: 'Simran K.', rating: 4, date: '2025-04-18', verified: true, helpful: 17, title: 'Great quality, slightly narrow', text: 'Build quality is exceptional. The 24K gold-plated accents are a luxury touch. Only concern: they run narrow. I have wide feet and UK 10 was snug. Would recommend sizing up half a size for wider feet.' },
    { author: 'Varun M.', rating: 5, date: '2025-03-10', verified: true, helpful: 25, title: 'Investment piece', text: 'Yes, they\'re pricey for sneakers, but the quality justifies it entirely. The leather patinas beautifully over time. These are the kind of sneakers that get better with age.' }
  ],
  8: [
    { author: 'Meera T.', rating: 5, date: '2025-06-05', verified: true, helpful: 20, title: 'Stunning heels — Milan quality', text: 'You can feel the Italian craftsmanship. The patent leather catches light beautifully. The cushioned insole makes the 100mm height surprisingly comfortable. Wore them for 5 hours without pain.' },
    { author: 'Anita G.', rating: 4, date: '2025-05-12', verified: true, helpful: 13, title: 'Beautiful but high', text: 'Absolutely gorgeous stilettos. The gold-inlaid sole is a gorgeous hidden detail. The cut-out sides are very flattering. Just a heads up — 100mm is quite high. Not for the faint of heart!' },
    { author: 'Nandini R.', rating: 5, date: '2025-04-01', verified: true, helpful: 9, title: 'Perfect date night heels', text: 'These made my outfit. The pointed toe elongates the leg beautifully. The metal heel gives a modern edge. Came in a beautiful dust bag and box. SS Luxe packaging is always impressive.' }
  ],
  9: [
    { author: 'Arjun M.', rating: 5, date: '2025-06-18', verified: true, helpful: 52, title: 'Horological masterpiece', text: 'The attention to detail on this watch is extraordinary. The sapphire crystal is flawless, the obsidian dial catches light beautifully, and the 18K gold plating looks indistinguishable from solid gold. The Swiss movement keeps impeccable time.' },
    { author: 'Rajesh K.', rating: 5, date: '2025-05-25', verified: true, helpful: 38, title: 'Best value luxury timepiece', text: 'I\'ve owned watches 5x this price that don\'t feel this premium. The tachymeter bezel is functional and looks incredible. The weight of the watch on the wrist feels substantial. At ₹50k (especially on sale at ₹35k), this is unbeatable.' },
    { author: 'Vikram P.', rating: 4, date: '2025-04-10', verified: true, helpful: 21, title: 'Beautiful watch, just one note', text: 'Gorgeous timepiece. The luminous hands work well in low light. The only thing preventing 5 stars is the clasp — it\'s good but I would have preferred a butterfly deployment clasp at this price point. Otherwise, perfection.' },
    { author: 'Suresh N.', rating: 5, date: '2025-03-15', verified: false, helpful: 14, title: 'Birthday gift from wife — she nailed it', text: 'My wife surprised me with this and I haven\'t taken it off since. The 42mm case is the perfect size. Goes with everything from kurtas to business suits. This is a lifelong companion.' }
  ],
  10: [
    { author: 'Priya M.', rating: 5, date: '2025-06-08', verified: true, helpful: 26, title: 'My everyday luxury bag', text: 'The nappa leather is incredibly soft and the diamond quilting is immaculate. The gold chain strap is versatile — I double it for a shoulder bag or use it single as a crossbody. Interior organization is well thought out.' },
    { author: 'Kavitha S.', rating: 4, date: '2025-05-19', verified: true, helpful: 18, title: 'Beautiful bag, moderate capacity', text: 'Gorgeous craftsmanship and the noir color is pure elegance. It fits my essentials (phone, wallet, keys, lipstick) but not much more. Perfect for outings, not ideal for office days when you carry more.' },
    { author: 'Sneha R.', rating: 5, date: '2025-04-22', verified: true, helpful: 14, title: 'Worth the investment', text: 'I\'ve been using this bag daily for 2 months and it still looks brand new. The nappa leather actually gets more beautiful with use. The gold hardware has zero tarnishing. SS Luxe quality is real.' }
  ],
  11: [
    { author: 'Manish K.', rating: 5, date: '2025-06-20', verified: true, helpful: 29, title: 'Wedding-ready masterpiece', text: 'The Zardozi embroidery is museum-quality. Each stitch is precise and the gold thread catches light beautifully. The raw silk has a gorgeous texture. Wore it to my mehendi ceremony and it was the talk of the evening.' },
    { author: 'Ravi S.', rating: 5, date: '2025-05-15', verified: true, helpful: 22, title: 'Heritage craftsmanship at its finest', text: 'You can tell this kurta was made by artisans who take pride in their work. The band collar embroidery is intricate and dense. Very comfortable despite the rich embellishment. The side pockets are practical.' },
    { author: 'Deepak T.', rating: 4, date: '2025-04-05', verified: true, helpful: 11, title: 'Beautiful kurta, sizing note', text: 'Absolutely gorgeous piece. The ivory color is pure and bright. The embroidery hasn\'t snagged after one dry clean. Just note: runs slightly long on shorter frames (I\'m 5\'6"). Getting it shortened was easy though.' },
    { author: 'Arun M.', rating: 5, date: '2025-03-18', verified: true, helpful: 17, title: 'Diwali show-stealer', text: 'Bought for Diwali and received so many compliments. The raw silk catches light beautifully under festive lighting. Paired with gold mojaris, it was perfection. Will order the maroon version for the next wedding season.' }
  ],
  12: [
    { author: 'Rajat V.', rating: 5, date: '2025-06-15', verified: true, helpful: 35, title: 'Groom-worthy perfection', text: 'I was the groom and this sherwani made the entire wedding. The Banarasi silk brocade is genuinely handwoven — you can see the artisan\'s touch in every zari motif. The included churidar matched perfectly. My wedding photos are magazine-worthy.' },
    { author: 'Amit S.', rating: 5, date: '2025-05-28', verified: true, helpful: 28, title: 'Living heritage, wearable luxury', text: 'This is not just clothing — it\'s wearable art. The gold zari work against the silk is breathtaking. The brass buttons feel antique and sophisticated. Even the lining is silk. SS Heritage knows traditional wear.' },
    { author: 'Gaurav P.', rating: 5, date: '2025-04-20', verified: true, helpful: 19, title: 'Royal presence guaranteed', text: 'Put this on and you stand 2 inches taller (figuratively). The structural tailoring gives a commanding silhouette. The vent back allows comfortable movement. Worth every rupee of ₹40,000.' }
  ],
  13: [
    { author: 'Simran P.', rating: 5, date: '2025-06-18', verified: true, helpful: 42, title: 'Best hoodie I\'ve ever owned', text: 'The 450GSM cotton is insanely thick and structured. This isn\'t your typical flimsy hoodie — it has real weight and shape. The gold metal drawstring tips are a classy touch. The kangaroo pocket is generously sized.' },
    { author: 'Rohan K.', rating: 4, date: '2025-05-30', verified: true, helpful: 23, title: 'Great quality but runs large', text: 'The organic cotton feels premium and the embroidered logo is clean and subtle. However, it runs at least one size large. I\'m usually L and M fits perfectly. Check the size chart!' },
    { author: 'Nisha T.', rating: 5, date: '2025-04-15', verified: true, helpful: 31, title: 'Luxury streetwear done right', text: 'This is what happens when a luxury brand makes streetwear. Every detail is considered — from the ribbed trims to the structured hood that actually stays up. At ₹6K (₹8K retail), it\'s a steal on sale.' },
    { author: 'Varun D.', rating: 4, date: '2025-03-22', verified: false, helpful: 9, title: 'Solid daily hoodie', text: 'Comfortable and well-made. The shadow black color is a true deep black, not grey-black. Holds up well to machine washing (cold, inside out as recommended). Would love more color options.' }
  ],
  14: [
    { author: 'Karan M.', rating: 5, date: '2025-06-12', verified: true, helpful: 28, title: 'Statement jacket of the year', text: 'The matte satin finish is incredible — it looks expensive without being shiny. The gold zipper hardware is bold but tasteful. The sleeve pocket is actually useful. Every jacket in my wardrobe is jealous of this one.' },
    { author: 'Priyanka S.', rating: 5, date: '2025-05-25', verified: true, helpful: 20, title: 'Unisex and universally flattering', text: 'I bought this from the men\'s display and it fits my frame beautifully (size S). The water-resistant shell has already saved me in unexpected rain. The satin lining makes it easy to slide on over anything.' },
    { author: 'Aditya R.', rating: 4, date: '2025-04-18', verified: true, helpful: 13, title: 'Almost perfect bomber', text: 'Great quality, great design. The ribbed collar and cuffs are thick and don\'t stretch out. Only reason for 4 stars: the interior breast pocket could be deeper. Small phones fit, but larger ones don\'t feel secure.' },
    { author: 'Rhea N.', rating: 5, date: '2025-03-30', verified: true, helpful: 17, title: 'Transition season essential', text: 'Perfect weight for those in-between weather days. Not too heavy, not too light. The olive color with gold hardware is chef\'s kiss. SS Street really understands modern luxury streetwear.' }
  ]
};

// ==================== APPLICATION STATE ====================
let cart = [];
let wishlist = new Set();
let activePLPFilter = 'all';
let maxPriceFilter = 50000;
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
  
  // Shipping calculation (free over ₹10k)
  const shipping = subtotal > 10000 ? 0 : 499;
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
  const shipping = subtotal > 10000 ? 0 : 499;
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
