/* =========================================================
   CAKES & BREAD - CATALOG DATA
   Sourced from the official Cakes and Breads printed catalog.
   Edit PRODUCTS / CATEGORIES below to update the menu.
   ========================================================= */

const CATEGORIES = [
  { id: "normal", name: "Normal Cakes", icon: "fa-solid fa-cake-candles", tag: "Everyday favorites" },
  { id: "kids", name: "Kids Collection", icon: "fa-solid fa-shapes", tag: "Cartoon & theme cakes" },
  { id: "doll", name: "Doll Collection", icon: "fa-solid fa-crown", tag: "Princess & doll cakes" },
  { id: "bridal", name: "Bridal Collection", icon: "fa-solid fa-ring", tag: "Bride-to-be specials" },
  { id: "monogram", name: "Monogram Cakes", icon: "fa-solid fa-heart", tag: "Letter & number shaped" },
  { id: "premium", name: "Premium Collection", icon: "fa-solid fa-gem", tag: "Designer finishes" },
  { id: "babyshower", name: "Baby Shower", icon: "fa-solid fa-baby-carriage", tag: "Welcome the little one" },
  { id: "semifondant", name: "Semi Fondant", icon: "fa-solid fa-layer-group", tag: "Sculpted toppers" },
  { id: "fullfondant", name: "Full Fondant", icon: "fa-solid fa-palette", tag: "Fully sculpted art" },
  { id: "tier", name: "Tier Collection", icon: "fa-solid fa-building-columns", tag: "Multi-tier grand cakes" },
  { id: "custom", name: "Custom Orders", icon: "fa-solid fa-pen-ruler", tag: "Tell us your theme" },
];

/* Each product: id, name, desc, category, rating, badge(optional),
   icon (Font Awesome placeholder), basePrice, sizes[] */
const PRODUCTS = [

  /* ===================== NORMAL COLLECTION ===================== */
  { id: "n1", name: "Purple Blossom Birthday Cake", desc: "Soft vanilla sponge finished with lavender ruffles and a hand-piped birthday message.", category: "normal", rating: 4.6, badge: "Bestseller", icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n2", name: "Blue Floral Swirl Cake", desc: "Elegant white and blue whipped cream swirls, perfect for birthdays and anniversaries.", category: "normal", rating: 4.6, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n3", name: "Fresh Fruit Cake", desc: "Vanilla sponge loaded with seasonal fresh fruits, chocolate drizzle and colourful sprinkles.", category: "normal", rating: 4.7, badge: "Bestseller", icon: "fa-solid fa-cake-candles", basePrice: 500, sizes: [{ label: "500 g", price: 500 }, { label: "1 Kg", price: 950 }] },
  { id: "n4", name: "White Floral Wreath Cake", desc: "Dusty blue base wrapped in a delicate white flower wreath with a handwritten greeting.", category: "normal", rating: 4.5, icon: "fa-solid fa-cake-candles", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "n5", name: "Daisy Birthday Cake", desc: "Lilac buttercream base hand painted with cheerful daisies, a favourite for her birthday.", category: "normal", rating: 4.5, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n6", name: "Blue Ribbon Birthday Cake", desc: "Clean ivory buttercream finish with a bold blue ribbon message topper.", category: "normal", rating: 4.4, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n7", name: "Rose Garland Cake", desc: "Classic vanilla cake bordered with hand-piped pink roses and a fresh flower crown.", category: "normal", rating: 4.6, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n8", name: "Pink Rose Bouquet Cake", desc: "Soft pink ombre cake topped with a delicate bouquet of piped roses.", category: "normal", rating: 4.6, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n9", name: "Heart Shaped Rose Cake", desc: "Romantic heart shaped cake with a cascade of blush pink and coral roses.", category: "normal", rating: 4.7, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n10", name: "Chocolate Heart Rose Cake", desc: "Dark chocolate heart cake decorated with red roses and a satin ribbon.", category: "normal", rating: 4.7, icon: "fa-solid fa-cake-candles", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "n11", name: "Golden Ribbon Cake", desc: "Warm ivory sponge with delicate gold piping and a satin bow, elegant for any celebration.", category: "normal", rating: 4.5, icon: "fa-solid fa-cake-candles", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "n12", name: "Lilac Ribbon Birthday Cake", desc: "Soft lilac frosting finished with a black satin bow, simple and stylish.", category: "normal", rating: 4.4, icon: "fa-solid fa-cake-candles", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "n13", name: "Marble Drip Cake", desc: "Bold pink marble effect cake finished with a glossy chocolate drip.", category: "normal", rating: 4.6, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n14", name: "Strawberry Delight Cake", desc: "Fresh cream cake hand painted with juicy piped strawberries, light and fruity.", category: "normal", rating: 4.7, badge: "Popular", icon: "fa-solid fa-cake-candles", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "n15", name: "Pink Drip Rosette Cake", desc: "Pretty pink rosette cake finished with a rich chocolate drip and pearls.", category: "normal", rating: 4.6, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n16", name: "Pink Marble Drip Cake", desc: "Fuchsia and chocolate marble finish with a bold drip, made for the bold celebrant.", category: "normal", rating: 4.5, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n17", name: "Red Velvet Heart Cake", desc: "Classic red velvet in a heart shape with white ganache and a chocolate topper.", category: "normal", rating: 4.8, badge: "Bestseller", icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n18", name: "Personalised Photo Cake", desc: "Edible photo print cake, perfect for a truly personal birthday surprise.", category: "normal", rating: 4.7, badge: "Popular", icon: "fa-solid fa-image", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "n19", name: "Maa Special Red Velvet Cake", desc: "Red velvet cake with a heartfelt message, a tribute cake for mothers.", category: "normal", rating: 4.7, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n20", name: "Pink Drip Bouquet Cake", desc: "Rich pink ombre cake with a chocolate drip and delicate whipped cream flowers.", category: "normal", rating: 4.6, icon: "fa-solid fa-cake-candles", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "n21", name: "White Heart Rose Cake", desc: "Elegant heart shaped cake in soft green and pink roses, romantic and refined.", category: "normal", rating: 4.6, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n22", name: "Butterfly Pink Cake", desc: "Marbled pink cake fluttering with edible butterflies and delicate pearls.", category: "normal", rating: 4.6, icon: "fa-solid fa-cake-candles", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "n23", name: "Classic White Ruffle Cake", desc: "Timeless all-white ruffled cake with a fresh flower and cherry topper.", category: "normal", rating: 4.5, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n24", name: "Golden Drip Fruit Cake", desc: "Bright mango yellow cake with a golden drip and dried fruit garnish.", category: "normal", rating: 4.5, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n25", name: "Chocolate Truffle Cake", desc: "Rich layers of chocolate sponge with silky truffle cream and chocolate shavings.", category: "normal", rating: 4.8, badge: "Bestseller", icon: "fa-solid fa-cake-candles", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "n26", name: "Black Forest Cake", desc: "Whipped cream, cherries and chocolate sponge shavings, a timeless favourite.", category: "normal", rating: 4.7, badge: "Bestseller", icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },
  { id: "n27", name: "Blue Ombre Cherry Cake", desc: "Soft blue and white ombre cake topped with cherries and a floral accent.", category: "normal", rating: 4.5, icon: "fa-solid fa-cake-candles", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },

  /* ===================== KIDS COLLECTION ===================== */
  { id: "k1", name: "Lion King Cake", desc: "Bold lion face cake with a fluffy chocolate mane, roaring good fun for little ones.", category: "kids", rating: 4.7, badge: "Popular", icon: "fa-solid fa-shapes", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "k2", name: "Minion Theme Cake", desc: "Cheerful yellow minion cake, a birthday favourite for kids of all ages.", category: "kids", rating: 4.7, badge: "Popular", icon: "fa-solid fa-shapes", basePrice: 550, sizes: [{ label: "500 g", price: 550 }, { label: "1 Kg", price: 1050 }] },
  { id: "k3", name: "Spiderman Theme Cake", desc: "Web-slinging Spiderman design cake for the little superhero in your life.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 500, sizes: [{ label: "500 g", price: 500 }, { label: "1 Kg", price: 900 }] },
  { id: "k4", name: "Doraemon Theme Cake", desc: "Cute blue Doraemon design cake, a hit with younger birthday kids.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 500, sizes: [{ label: "500 g", price: 500 }, { label: "1 Kg", price: 950 }] },
  { id: "k5", name: "Hello Kitty Whiskers Cake", desc: "Adorable Hello Kitty face cake with pink bow and whisker detailing.", category: "kids", rating: 4.5, icon: "fa-solid fa-shapes", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 750 }] },
  { id: "k6", name: "Hello Kitty Rose Cake", desc: "Pastel Hello Kitty themed cake trimmed with pink roses.", category: "kids", rating: 4.5, icon: "fa-solid fa-shapes", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 750 }] },
  { id: "k7", name: "Teddy Bear Cake", desc: "Fluffy chocolate teddy bear face cake with soft blue eyes, a cuddly classic.", category: "kids", rating: 4.7, icon: "fa-solid fa-shapes", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "k8", name: "Frozen Elsa Theme Cake", desc: "Icy blue Elsa themed cake inspired by everyone's favourite snow queen.", category: "kids", rating: 4.7, badge: "Popular", icon: "fa-solid fa-shapes", basePrice: 500, sizes: [{ label: "500 g", price: 500 }, { label: "1 Kg", price: 950 }] },
  { id: "k9", name: "Racing Car Cake", desc: "Fun red racing car cake on a track base, perfect for car-loving kids.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 1000, sizes: [{ label: "1 Kg", price: 1000 }] },
  { id: "k10", name: "Minnie Mouse Theme Cake", desc: "Playful Minnie Mouse cake in signature red and black polka dots.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 800 }] },
  { id: "k11", name: "Toy Car Theme Cake", desc: "Bright toy car themed cake loaded with little vehicles for young car fans.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 800, sizes: [{ label: "500 g", price: 800 }, { label: "1 Kg", price: 1500 }] },
  { id: "k12", name: "Wheels on the Bus Cake", desc: "Colourful road themed cake with tiny cars, clouds and rainbow accents.", category: "kids", rating: 4.5, icon: "fa-solid fa-shapes", basePrice: 1300, sizes: [{ label: "500 g", price: 1300 }, { label: "1.5 Kg", price: 1700 }] },
  { id: "k13", name: "Rainbow Balloon Cake", desc: "Sunny rainbow and balloon design cake for a colourful birthday party.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "k14", name: "Stars & Balloons Cake", desc: "Chocolate cake dotted with stars and pastel balloons, festive and fun.", category: "kids", rating: 4.5, icon: "fa-solid fa-shapes", basePrice: 900, sizes: [{ label: "500 g", price: 900 }, { label: "1 Kg", price: 1600 }] },
  { id: "k15", name: "Pastel Confetti Cake", desc: "Soft white cake sprinkled with pastel confetti and a fresh floral cake board.", category: "kids", rating: 4.5, icon: "fa-solid fa-shapes", basePrice: 700, sizes: [{ label: "500 g", price: 700 }, { label: "1 Kg", price: 1300 }] },
  { id: "k16", name: "Makeup Vanity Cake", desc: "Trendy makeup vanity themed cake for the little beauty enthusiast.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 800, sizes: [{ label: "500 g", price: 800 }, { label: "1 Kg", price: 1400 }] },
  { id: "k17", name: "Pink Lipstick & Makeup Cake", desc: "Playful pink makeup themed cake with lipstick and compact detailing.", category: "kids", rating: 4.5, icon: "fa-solid fa-shapes", basePrice: 750, sizes: [{ label: "500 g", price: 750 }, { label: "1 Kg", price: 1500 }] },
  { id: "k18", name: "Chhota Bheem Theme Cake", desc: "Fun Chhota Bheem printed cake, popular with young cartoon fans.", category: "kids", rating: 4.5, icon: "fa-solid fa-shapes", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 800 }] },
  { id: "k19", name: "Chhota Bheem Squad Cake", desc: "Full character cast Chhota Bheem cake on a green grass finish, 1 Kg exclusive.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 1200, sizes: [{ label: "1 Kg", price: 1200 }] },
  { id: "k20", name: "Barbie Vanity Cake", desc: "Glam pink Barbie themed vanity cake with makeup and accessory details.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 1200, sizes: [{ label: "1 Kg", price: 1200 }] },
  { id: "k21", name: "Science Lab Theme Cake", desc: "Quirky green science lab themed cake for the curious young scientist.", category: "kids", rating: 4.5, icon: "fa-solid fa-shapes", basePrice: 750, sizes: [{ label: "500 g", price: 750 }, { label: "1 Kg", price: 1200 }] },
  { id: "k22", name: "Little Puppy Cake", desc: "Sweet red and white puppy themed cake perfect for a pet lover's party.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 800 }] },
  { id: "k23", name: "Superman Theme Cake", desc: "Bold Superman figure cake standing tall over a city skyline base.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 1200, sizes: [{ label: "1 Kg", price: 1200 }] },
  { id: "k24", name: "Storybook Theme Cake", desc: "Two-tier storybook style cake with a personalised name plaque, great for milestone birthdays.", category: "kids", rating: 4.7, icon: "fa-solid fa-shapes", basePrice: 2200, sizes: [{ label: "1.5 Kg", price: 2200 }] },
  { id: "k25", name: "Jungle Safari Theme Cake", desc: "Adventure themed cake with jungle animals for a wild birthday celebration.", category: "kids", rating: 4.6, icon: "fa-solid fa-shapes", basePrice: 1200, sizes: [{ label: "1 Kg", price: 1200 }] },

  /* ===================== DOLL COLLECTION ===================== */
  { id: "d1", name: "Pink Feather Doll Cake", desc: "Glamorous pink feathered gown doll cake, a showstopper for princess parties.", category: "doll", rating: 4.7, badge: "Popular", icon: "fa-solid fa-crown", basePrice: 550, sizes: [{ label: "500 g", price: 550 }, { label: "1 Kg", price: 900 }] },
  { id: "d2", name: "Pink Ruffle Gown Doll Cake", desc: "Layered pink ruffle gown doll cake fit for a fairytale birthday.", category: "doll", rating: 4.7, icon: "fa-solid fa-crown", basePrice: 950, sizes: [{ label: "1 Kg", price: 950 }, { label: "2 Kg", price: 1800 }] },
  { id: "d3", name: "Golden Yellow Gown Doll Cake", desc: "Bright yellow gown doll cake with delicate frosting details.", category: "doll", rating: 4.6, icon: "fa-solid fa-crown", basePrice: 950, sizes: [{ label: "1 Kg", price: 950 }, { label: "2 Kg", price: 1750 }] },
  { id: "d4", name: "Emerald Green Gown Doll Cake", desc: "Elegant emerald green ruffled gown doll cake with a graceful silhouette.", category: "doll", rating: 4.7, icon: "fa-solid fa-crown", basePrice: 1300, sizes: [{ label: "1.5 Kg", price: 1300 }, { label: "2 Kg", price: 1750 }] },
  { id: "d5", name: "Rose Gold Doll Cake", desc: "Two-tier rose pink gown doll cake with a shimmering fresh flower crown.", category: "doll", rating: 4.8, badge: "Bestseller", icon: "fa-solid fa-crown", basePrice: 1600, sizes: [{ label: "1.5 Kg", price: 1600 }, { label: "2 Kg", price: 2000 }] },
  { id: "d6", name: "Barbie Sparkle Doll Cake", desc: "Sparkling pink Barbie doll cake with a drip finish and gold topper.", category: "doll", rating: 4.6, icon: "fa-solid fa-crown", basePrice: 950, sizes: [{ label: "1 Kg", price: 950 }, { label: "2 Kg", price: 1700 }] },
  { id: "d7", name: "Mint Green Doll Cake", desc: "Fresh mint green ruffled gown doll cake with a soft pastel finish.", category: "doll", rating: 4.6, icon: "fa-solid fa-crown", basePrice: 900, sizes: [{ label: "1 Kg", price: 900 }, { label: "2 Kg", price: 1600 }] },
  { id: "d8", name: "Lime Green Gown Doll Cake", desc: "Vibrant lime green tiered gown doll cake with textured ruffles.", category: "doll", rating: 4.6, icon: "fa-solid fa-crown", basePrice: 1500, sizes: [{ label: "1.5 Kg", price: 1500 }, { label: "2 Kg", price: 1850 }] },
  { id: "d9", name: "Chocolate Brown Gown Doll Cake", desc: "Rich chocolate brown gown doll cake with intricate textured piping.", category: "doll", rating: 4.6, icon: "fa-solid fa-crown", basePrice: 900, sizes: [{ label: "1 Kg", price: 900 }, { label: "1.5 Kg", price: 1300 }] },
  { id: "d10", name: "Frozen Elsa Doll Cake", desc: "Icy blue Elsa gown doll cake inspired by the beloved snow queen.", category: "doll", rating: 4.7, badge: "Popular", icon: "fa-solid fa-crown", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "d11", name: "Frozen Squad Doll Cake", desc: "Full Frozen character themed cake with Anna, Olaf and Elsa on top.", category: "doll", rating: 4.6, icon: "fa-solid fa-crown", basePrice: 1300, sizes: [{ label: "1 Kg", price: 1300 }] },
  { id: "d12", name: "Purple Princess Doll Cake", desc: "Deep purple ruffled gown doll cake fit for royalty.", category: "doll", rating: 4.6, icon: "fa-solid fa-crown", basePrice: 950, sizes: [{ label: "1 Kg", price: 950 }, { label: "2 Kg", price: 1700 }] },
  { id: "d13", name: "Custom Name Doll Cake", desc: "Personalised doll cake with a fresh flower crown and custom name plaque.", category: "doll", rating: 4.8, badge: "Premium", icon: "fa-solid fa-crown", basePrice: 1500, sizes: [{ label: "1.5 Kg", price: 1500 }, { label: "2 Kg", price: 1800 }] },
  { id: "d14", name: "Royal Tiered Doll Cake", desc: "Grand three-tier doll cake for the ultimate princess birthday, our most premium doll design.", category: "doll", rating: 4.9, badge: "Premium", icon: "fa-solid fa-crown", basePrice: 3000, sizes: [{ label: "3.5 Kg", price: 3000 }] },
  { id: "d15", name: "Blush Floral Doll Cake", desc: "Delicate blush pink doll cake with cascading floral detail.", category: "doll", rating: 4.6, icon: "fa-solid fa-crown", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1000 }] },

  /* ===================== BRIDAL COLLECTION ===================== */
  { id: "b1", name: "Boho Bridal Monogram Cake", desc: "Chic ivory monogram cake with dried flowers and gold lettering for bridal showers.", category: "bridal", rating: 4.7, icon: "fa-solid fa-ring", basePrice: 1200, sizes: [{ label: "1 Kg", price: 1200 }] },
  { id: "b2", name: "Floral Bride Name Cake", desc: "Fresh floral cake with a hand-painted bride name topper, ideal for a bridal shower.", category: "bridal", rating: 4.7, icon: "fa-solid fa-ring", basePrice: 650, sizes: [{ label: "500 g", price: 650 }, { label: "1 Kg", price: 1000 }] },
  { id: "b3", name: "Rose & Calligraphy Bridal Cake", desc: "Marble cake topped with a rose and elegant calligraphy plaque.", category: "bridal", rating: 4.6, icon: "fa-solid fa-ring", basePrice: 550, sizes: [{ label: "500 g", price: 550 }, { label: "1 Kg", price: 1050 }] },
  { id: "b4", name: "Bride Silhouette Cake", desc: "Chic white cake with a bridal silhouette topper and floral accents.", category: "bridal", rating: 4.7, icon: "fa-solid fa-ring", basePrice: 1400, sizes: [{ label: "1 Kg", price: 1400 }] },
  { id: "b5", name: "Bridal Gown Doll Cake", desc: "Elegant white gown doll cake designed for bride-to-be celebrations.", category: "bridal", rating: 4.7, icon: "fa-solid fa-ring", basePrice: 1300, sizes: [{ label: "1 Kg", price: 1300 }] },
  { id: "b6", name: "Miss to Mrs Doll Cake", desc: "Fun 'Miss to Mrs' themed doll cake in a glamorous pink gown.", category: "bridal", rating: 4.7, icon: "fa-solid fa-ring", basePrice: 1000, sizes: [{ label: "1 Kg", price: 1000 }, { label: "1.5 Kg", price: 1400 }] },
  { id: "b7", name: "Bride to Be Heels Cake", desc: "Chic sage green cake topped with a bridal heels and veil design.", category: "bridal", rating: 4.6, icon: "fa-solid fa-ring", basePrice: 1500, sizes: [{ label: "1 Kg", price: 1500 }, { label: "1.5 Kg", price: 2000 }] },
  { id: "b8", name: "Bridal Gown Print Cake", desc: "White cake with a printed bridal gown design and celebration message.", category: "bridal", rating: 4.6, icon: "fa-solid fa-ring", basePrice: 650, sizes: [{ label: "500 g", price: 650 }, { label: "1 Kg", price: 1000 }] },
  { id: "b9", name: "Bridal Accessories Cake", desc: "Playful cake decorated with bridal accessories and pastel florals.", category: "bridal", rating: 4.6, icon: "fa-solid fa-ring", basePrice: 1600, sizes: [{ label: "1 Kg", price: 1600 }, { label: "1.5 Kg", price: 2000 }] },

  /* ===================== MONOGRAM COLLECTION ===================== */
  { id: "m1", name: "Floral Letter Monogram Cake", desc: "Hand-shaped letter cake covered in fresh piped flowers, choose your initial.", category: "monogram", rating: 4.7, icon: "fa-solid fa-heart", basePrice: 1300, sizes: [{ label: "1.5 Kg", price: 1300 }, { label: "2 Kg", price: 1700 }] },
  { id: "m2", name: "Strawberry Letter Monogram Cake", desc: "Letter shaped cake topped with fresh strawberries and whipped cream.", category: "monogram", rating: 4.7, icon: "fa-solid fa-heart", basePrice: 1500, sizes: [{ label: "1.5 Kg", price: 1500 }, { label: "2 Kg", price: 2200 }] },
  { id: "m3", name: "Golden Floral Letter Cake", desc: "Elegant gold-accented letter cake with a garden of piped flowers.", category: "monogram", rating: 4.7, icon: "fa-solid fa-heart", basePrice: 2000, sizes: [{ label: "2 Kg", price: 2000 }, { label: "2.5 Kg", price: 2400 }] },
  { id: "m4", name: "Number Monogram Cake", desc: "Bold number shaped cake with a checkerboard finish, great for milestone birthdays.", category: "monogram", rating: 4.6, icon: "fa-solid fa-heart", basePrice: 1500, sizes: [{ label: "1.5 Kg", price: 1500 }, { label: "2 Kg", price: 2000 }] },
  { id: "m5", name: "World Map Number Cake", desc: "Creative number cake styled with a travel and world map theme.", category: "monogram", rating: 4.6, icon: "fa-solid fa-heart", basePrice: 2000, sizes: [{ label: "2 Kg", price: 2000 }] },
  { id: "m6", name: "Pearl Letter Monogram Cake", desc: "Sophisticated letter cake finished with cream rosettes and edible pearls.", category: "monogram", rating: 4.7, icon: "fa-solid fa-heart", basePrice: 2000, sizes: [{ label: "2 Kg", price: 2000 }] },
  { id: "m7", name: "Pink Floral Letter Cake", desc: "Soft pink letter shaped cake covered in blush florals.", category: "monogram", rating: 4.6, icon: "fa-solid fa-heart", basePrice: 1300, sizes: [{ label: "1.5 Kg", price: 1300 }] },
  { id: "m8", name: "Rose Gold Letter Cake", desc: "Elegant rose gold rosette letter cake for a glamorous celebration.", category: "monogram", rating: 4.7, icon: "fa-solid fa-heart", basePrice: 1500, sizes: [{ label: "1.5 Kg", price: 1500 }] },
  { id: "m9", name: "Berry Heart Monogram Cake", desc: "Heart shaped cake dressed in deep red and burgundy florals with berries.", category: "monogram", rating: 4.7, icon: "fa-solid fa-heart", basePrice: 1200, sizes: [{ label: "1 Kg", price: 1200 }, { label: "1.5 Kg", price: 1600 }] },

  /* ===================== PREMIUM COLLECTION ===================== */
  { id: "pr1", name: "Ferrero Rocher Cake", desc: "Indulgent hazelnut cake generously topped with Ferrero Rocher chocolates.", category: "premium", rating: 4.8, badge: "Bestseller", icon: "fa-solid fa-gem", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "pr2", name: "KitKat Chocolate Overload Cake", desc: "Loaded chocolate cake wrapped in KitKat bars and topped with gems and gold ribbon.", category: "premium", rating: 4.8, badge: "Bestseller", icon: "fa-solid fa-gem", basePrice: 850, sizes: [{ label: "500 g", price: 850 }, { label: "1 Kg", price: 1600 }] },
  { id: "pr3", name: "Fresh Fruit Premium Cake", desc: "Premium fresh cream cake generously topped with seasonal fruit and chocolate art.", category: "premium", rating: 4.7, icon: "fa-solid fa-gem", basePrice: 700, sizes: [{ label: "500 g", price: 700 }, { label: "1 Kg", price: 1300 }] },
  { id: "pr4", name: "Golden Candle Elegance Cake", desc: "Sophisticated white cake finished with gold birthday candles.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 550, sizes: [{ label: "500 g", price: 550 }, { label: "1 Kg", price: 1000 }] },
  { id: "pr5", name: "Ombre Berry Drip Cake", desc: "Purple ombre cake with a berry compote drip and fresh blueberries.", category: "premium", rating: 4.7, icon: "fa-solid fa-gem", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1000 }] },
  { id: "pr6", name: "Pink Rose Tier Cake", desc: "Single tier cake finished with a spiralling pink rose topper.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 500, sizes: [{ label: "500 g", price: 500 }, { label: "1 Kg", price: 950 }] },
  { id: "pr7", name: "Red Floral Anniversary Cake", desc: "Rich red cake with a fresh gerbera daisy topper, made for anniversaries.", category: "premium", rating: 4.7, icon: "fa-solid fa-gem", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "pr8", name: "Chocolate Lattice Cake", desc: "Dramatic dark chocolate lattice pattern cake with a glossy finish.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 550, sizes: [{ label: "500 g", price: 550 }, { label: "1 Kg", price: 1000 }] },
  { id: "pr9", name: "Wedding Couple Silhouette Cake", desc: "Romantic silhouette couple topper cake with floral accents, perfect for engagements.", category: "premium", rating: 4.8, icon: "fa-solid fa-gem", basePrice: 700, sizes: [{ label: "500 g", price: 700 }, { label: "1 Kg", price: 1300 }] },
  { id: "pr10", name: "Rose Swirl Cream Cake", desc: "Delicate blush rose swirl cake made with silky whipped cream.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 1000, sizes: [{ label: "1 Kg", price: 1000 }] },
  { id: "pr11", name: "Dark Chocolate Rosette Cake", desc: "Deep chocolate rosette cake, rich and indulgent, finished with cocoa curls.", category: "premium", rating: 4.7, icon: "fa-solid fa-gem", basePrice: 650, sizes: [{ label: "500 g", price: 650 }, { label: "1 Kg", price: 1200 }] },
  { id: "pr12", name: "Golden Pearl Cake", desc: "Elegant cream cake finished with golden piping and edible pearls.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 500, sizes: [{ label: "500 g", price: 500 }, { label: "1 Kg", price: 1000 }] },
  { id: "pr13", name: "Red Velvet Petal Cake", desc: "Red velvet cream cake dressed with delicate red rose petals.", category: "premium", rating: 4.7, icon: "fa-solid fa-gem", basePrice: 500, sizes: [{ label: "500 g", price: 500 }, { label: "1 Kg", price: 950 }] },
  { id: "pr14", name: "Pistachio Praline Cake", desc: "Nutty pistachio praline cake, crunchy and rich in every bite.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 700, sizes: [{ label: "500 g", price: 700 }, { label: "1 Kg", price: 1350 }] },
  { id: "pr15", name: "Salted Caramel Crunch Cake", desc: "Silky salted caramel cake finished with crunchy caramel drip and biscuit crumble.", category: "premium", rating: 4.7, icon: "fa-solid fa-gem", basePrice: 650, sizes: [{ label: "500 g", price: 650 }, { label: "1 Kg", price: 1100 }] },
  { id: "pr16", name: "Rustic Rose Wreath Cake", desc: "Naked-style rustic cake wrapped in a wreath of fresh roses and greens.", category: "premium", rating: 4.7, icon: "fa-solid fa-gem", basePrice: 1300, sizes: [{ label: "500 g", price: 1300 }, { label: "1 Kg", price: 1800 }] },
  { id: "pr17", name: "Anniversary Milestone Cake", desc: "Celebration cake with a custom milestone topper, festive confetti finish.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 800 }] },
  { id: "pr18", name: "Citrus Marmalade Cake", desc: "Zesty citrus cake decorated with candied fruit and a bold red drip.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 1500, sizes: [{ label: "1 Kg", price: 1500 }] },
  { id: "pr19", name: "Gym Buddy Theme Cake", desc: "Fun black and yellow gym themed cake, perfect for the fitness enthusiast.", category: "premium", rating: 4.5, icon: "fa-solid fa-gem", basePrice: 1400, sizes: [{ label: "1 Kg", price: 1400 }] },
  { id: "pr20", name: "House Warming Theme Cake", desc: "Custom themed cake designed for house warming and milestone events.", category: "premium", rating: 4.5, icon: "fa-solid fa-gem", basePrice: 1700, sizes: [{ label: "1 Kg", price: 1700 }] },
  { id: "pr21", name: "Silhouette Proposal Cake", desc: "Romantic silhouette proposal scene cake for the perfect surprise.", category: "premium", rating: 4.7, icon: "fa-solid fa-gem", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "pr22", name: "Sunflower Delight Cake", desc: "Bright sunflower themed cake full of warm yellow and gold hues.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 1000, sizes: [{ label: "1 Kg", price: 1000 }] },
  { id: "pr23", name: "Traditional Wedding Motif Cake", desc: "Cake finished with traditional wedding figurine toppers and floral trim.", category: "premium", rating: 4.7, icon: "fa-solid fa-gem", basePrice: 900, sizes: [{ label: "1 Kg", price: 900 }] },
  { id: "pr24", name: "Silhouette Anniversary Cake", desc: "Elegant white cake with a silhouette couple topper for anniversaries.", category: "premium", rating: 4.6, icon: "fa-solid fa-gem", basePrice: 1200, sizes: [{ label: "1 Kg", price: 1200 }] },

  /* ===================== BABY SHOWER COLLECTION ===================== */
  { id: "bs1", name: "Pink & Blue Reveal Cake", desc: "Playful polka dot cake with pink and blue accents for a gender reveal.", category: "babyshower", rating: 4.7, badge: "Popular", icon: "fa-solid fa-baby-carriage", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "bs2", name: "Little Shoes Baby Shower Cake", desc: "Sweet cake decorated with tiny baby shoes and pastel bootie details.", category: "babyshower", rating: 4.7, icon: "fa-solid fa-baby-carriage", basePrice: 900, sizes: [{ label: "500 g", price: 900 }, { label: "1 Kg", price: 1500 }] },
  { id: "bs3", name: "Drip Baby Shower Cake", desc: "Pastel drip cake topped with baby accessories, a modern baby shower favourite.", category: "babyshower", rating: 4.7, icon: "fa-solid fa-baby-carriage", basePrice: 900, sizes: [{ label: "500 g", price: 900 }, { label: "1 Kg", price: 1500 }] },
  { id: "bs4", name: "We Can Beary Wait Cake", desc: "Cute teddy bear themed baby shower cake with a sweet welcome message.", category: "babyshower", rating: 4.6, icon: "fa-solid fa-baby-carriage", basePrice: 1500, sizes: [{ label: "1 Kg", price: 1500 }] },
  { id: "bs5", name: "Boy or Girl Baby Shower Cake", desc: "Two tone reveal cake styled for the classic boy-or-girl guessing game.", category: "babyshower", rating: 4.6, icon: "fa-solid fa-baby-carriage", basePrice: 1500, sizes: [{ label: "1 Kg", price: 1500 }] },
  { id: "bs6", name: "Baby Bow Shower Cake", desc: "Soft cream cake with a delicate bow and baby motifs.", category: "babyshower", rating: 4.6, icon: "fa-solid fa-baby-carriage", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1000 }] },
  { id: "bs7", name: "Balloon Bunny Baby Cake", desc: "Whimsical bunny and balloon themed baby shower cake in soft pastels.", category: "babyshower", rating: 4.6, icon: "fa-solid fa-baby-carriage", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "bs8", name: "Baby Feet Green Cake", desc: "Fresh mint green cake decorated with tiny baby feet prints.", category: "babyshower", rating: 4.5, icon: "fa-solid fa-baby-carriage", basePrice: 1500, sizes: [{ label: "1 Kg", price: 1500 }] },
  { id: "bs9", name: "Baby Bear Duo Cake", desc: "Sweet pastel cake with two baby bear cut-outs, great for twin reveals.", category: "babyshower", rating: 4.6, icon: "fa-solid fa-baby-carriage", basePrice: 500, sizes: [{ label: "500 g", price: 500 }, { label: "1 Kg", price: 900 }] },
  { id: "bs10", name: "Baby Carriage Cake", desc: "Adorable pastel baby carriage themed cake, perfect for the mom-to-be.", category: "babyshower", rating: 4.6, icon: "fa-solid fa-baby-carriage", basePrice: 1500, sizes: [{ label: "1.5 Kg", price: 2000 }] },
  { id: "bs11", name: "Little Flamingo Baby Cake", desc: "Cute flamingo topper cake in soft pink and lavender hues.", category: "babyshower", rating: 4.5, icon: "fa-solid fa-baby-carriage", basePrice: 1700, sizes: [{ label: "1 Kg", price: 1700 }] },
  { id: "bs12", name: "Welcome Home Baby Cake", desc: "Sweet welcome themed cake, ideal for a newborn homecoming celebration.", category: "babyshower", rating: 4.6, icon: "fa-solid fa-baby-carriage", basePrice: 500, sizes: [{ label: "500 g", price: 500 }, { label: "1 Kg", price: 950 }] },
  { id: "bs13", name: "It's a Baby Announcement Cake", desc: "Classic pastel announcement cake with a hand piped message.", category: "babyshower", rating: 4.5, icon: "fa-solid fa-baby-carriage", basePrice: 400, sizes: [{ label: "500 g", price: 400 }, { label: "1 Kg", price: 750 }] },

  /* ===================== SEMI FONDANT COLLECTION ===================== */
  { id: "sf1", name: "Ribbons & Hearts Semi Fondant Cake", desc: "Two-tier semi fondant cake styled with ribbons and pastel hearts.", category: "semifondant", rating: 4.7, icon: "fa-solid fa-layer-group", basePrice: 1400, sizes: [{ label: "1.5 Kg", price: 1400 }] },
  { id: "sf2", name: "Tropical Leaf Semi Fondant Cake", desc: "Fresh green tropical foliage sculpted cake with fondant leaves.", category: "semifondant", rating: 4.6, icon: "fa-solid fa-layer-group", basePrice: 1500, sizes: [{ label: "1 Kg", price: 1500 }] },
  { id: "sf3", name: "Road Trip Semi Fondant Cake", desc: "Fun road and car themed semi fondant cake with sculpted details.", category: "semifondant", rating: 4.6, icon: "fa-solid fa-layer-group", basePrice: 1700, sizes: [{ label: "1.5 Kg", price: 1700 }] },
  { id: "sf4", name: "Dino Land Semi Fondant Cake", desc: "Three-tier dinosaur adventure themed semi fondant cake for dino lovers.", category: "semifondant", rating: 4.8, badge: "Popular", icon: "fa-solid fa-layer-group", basePrice: 3500, sizes: [{ label: "3.5 Kg", price: 3500 }] },
  { id: "sf5", name: "Red Heart Rain Cake", desc: "Dramatic dark cake showered with red fondant hearts, romantic and bold.", category: "semifondant", rating: 4.7, icon: "fa-solid fa-layer-group", basePrice: 800, sizes: [{ label: "500 g", price: 800 }, { label: "1 Kg", price: 1400 }] },
  { id: "sf6", name: "Floral Bloom Semi Fondant Cake", desc: "White cake sculpted with roses and blossoms in soft pink and blue.", category: "semifondant", rating: 4.7, icon: "fa-solid fa-layer-group", basePrice: 800, sizes: [{ label: "500 g", price: 800 }, { label: "1 Kg", price: 1400 }] },
  { id: "sf7", name: "Minnie Mouse Semi Fondant Cake", desc: "Classic Minnie Mouse polka dot semi fondant cake with bow topper.", category: "semifondant", rating: 4.7, icon: "fa-solid fa-layer-group", basePrice: 1700, sizes: [{ label: "1 Kg", price: 1700 }] },
  { id: "sf8", name: "Golf Sports Semi Fondant Cake", desc: "Sporty green golf themed semi fondant cake for the enthusiast.", category: "semifondant", rating: 4.5, icon: "fa-solid fa-layer-group", basePrice: 1200, sizes: [{ label: "1 Kg", price: 1200 }] },
  { id: "sf9", name: "Rose Bouquet Semi Fondant Cake", desc: "Ivory cake finished with a full bouquet of sculpted fondant roses.", category: "semifondant", rating: 4.7, icon: "fa-solid fa-layer-group", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "sf10", name: "Cricket Champion Cake", desc: "Sports themed semi fondant cake celebrating the cricket champion.", category: "semifondant", rating: 4.6, icon: "fa-solid fa-layer-group", basePrice: 1600, sizes: [{ label: "1 Kg", price: 1600 }] },
  { id: "sf11", name: "Rainbow Cloud Semi Fondant Cake", desc: "Dreamy sky blue cake with sculpted rainbow and cloud toppers.", category: "semifondant", rating: 4.6, icon: "fa-solid fa-layer-group", basePrice: 1300, sizes: [{ label: "1 Kg", price: 1300 }] },
  { id: "sf12", name: "Baby Doll Semi Fondant Cake", desc: "Soft sculpted baby doll figure on a pastel semi fondant cake.", category: "semifondant", rating: 4.6, icon: "fa-solid fa-layer-group", basePrice: 600, sizes: [{ label: "500 g", price: 600 }, { label: "1 Kg", price: 1100 }] },
  { id: "sf13", name: "Pikachu Semi Fondant Cake", desc: "Cheerful Pikachu themed cake, a favourite for Pokémon fans.", category: "semifondant", rating: 4.7, badge: "Popular", icon: "fa-solid fa-layer-group", basePrice: 450, sizes: [{ label: "500 g", price: 450 }, { label: "1 Kg", price: 850 }] },
  { id: "sf14", name: "Peach Ombre Semi Fondant Cake", desc: "Warm peach ombre semi fondant cake with a smooth sculpted finish.", category: "semifondant", rating: 4.5, icon: "fa-solid fa-layer-group", basePrice: 1600, sizes: [{ label: "1.5 Kg", price: 1600 }] },

  /* ===================== FULL FONDANT COLLECTION ===================== */
  { id: "ff1", name: "Beauty To Beast Fondant Cake", desc: "Fully sculpted fondant art cake with a fashion and beauty theme.", category: "fullfondant", rating: 4.8, badge: "Premium", icon: "fa-solid fa-palette", basePrice: 1800, sizes: [{ label: "1 Kg", price: 1800 }] },
  { id: "ff2", name: "Minnie Mouse Full Fondant Cake", desc: "Fully sculpted 3D Minnie Mouse fondant cake, a showstopper centrepiece.", category: "fullfondant", rating: 4.9, badge: "Premium", icon: "fa-solid fa-palette", basePrice: 2500, sizes: [{ label: "1.5 Kg", price: 2500 }] },
  { id: "ff3", name: "Unicorn Rainbow Fondant Cake", desc: "Magical fully sculpted unicorn cake with rainbow mane, sold in sticker or fondant finish.", category: "fullfondant", rating: 4.9, badge: "Bestseller", icon: "fa-solid fa-palette", basePrice: 2000, sizes: [{ label: "2 Kg (Sticker)", price: 2000 }, { label: "2 Kg (Fondant)", price: 3200 }] },
  { id: "ff4", name: "Makeup Vanity Full Fondant Cake", desc: "Fully sculpted glam makeup vanity themed cake with 3D details.", category: "fullfondant", rating: 4.8, icon: "fa-solid fa-palette", basePrice: 3600, sizes: [{ label: "2 Kg", price: 3600 }] },
  { id: "ff5", name: "Baby Shark Full Fondant Cake", desc: "Fun ocean themed Baby Shark fully sculpted fondant cake.", category: "fullfondant", rating: 4.7, icon: "fa-solid fa-palette", basePrice: 2200, sizes: [{ label: "1.5 Kg", price: 2200 }] },
  { id: "ff6", name: "Mickey Mouse Full Fondant Cake", desc: "Classic 3D Mickey Mouse sculpted fondant cake with signature ears.", category: "fullfondant", rating: 4.8, badge: "Popular", icon: "fa-solid fa-palette", basePrice: 5000, sizes: [{ label: "3 Kg", price: 5000 }] },
  { id: "ff7", name: "Teddy Gift Box Fondant Cake", desc: "Fully sculpted teddy bear and gift box fondant cake in navy and gold.", category: "fullfondant", rating: 4.7, icon: "fa-solid fa-palette", basePrice: 1800, sizes: [{ label: "1 Kg", price: 1800 }] },
  { id: "ff8", name: "Watermelon Fruit Fondant Cake", desc: "Playful stacked fruit themed fondant cake with smiling watermelon and pineapple tiers.", category: "fullfondant", rating: 4.7, icon: "fa-solid fa-palette", basePrice: 3600, sizes: [{ label: "2 Kg", price: 3600 }] },
  { id: "ff9", name: "Rainbow Pets Fondant Cake", desc: "Colourful fully sculpted cake with a rainbow and pet theme.", category: "fullfondant", rating: 4.7, icon: "fa-solid fa-palette", basePrice: 2200, sizes: [{ label: "1.5 Kg", price: 2200 }] },

  /* ===================== TIER COLLECTION ===================== */
  { id: "t1", name: "Marigold Two Tier Cake", desc: "Two tier cake in soft blue with marigold accents, festive and grand.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1100, sizes: [{ label: "1 Kg", price: 1100 }, { label: "2 Kg", price: 1500 }] },
  { id: "t2", name: "Rose Gold Two Tier Cake", desc: "Elegant rose adorned two tier cake, ideal for grand birthday celebrations.", category: "tier", rating: 4.8, icon: "fa-solid fa-building-columns", basePrice: 2200, sizes: [{ label: "2 Kg", price: 2200 }, { label: "3 Kg", price: 2800 }] },
  { id: "t3", name: "Lavender Ombre Tier Cake", desc: "Dreamy three tier lavender ombre cake with pearl detailing.", category: "tier", rating: 4.8, badge: "Premium", icon: "fa-solid fa-building-columns", basePrice: 2700, sizes: [{ label: "3 Kg", price: 2700 }] },
  { id: "t4", name: "White Floral Four Tier Cake", desc: "Grand four tier white cake with cascading fresh flowers, a wedding favourite.", category: "tier", rating: 4.9, badge: "Premium", icon: "fa-solid fa-building-columns", basePrice: 4000, sizes: [{ label: "4 Kg", price: 4000 }] },
  { id: "t5", name: "Chocolate Drip Tier Cake", desc: "Bold multi-tier chocolate cake with a dramatic drip finish.", category: "tier", rating: 4.8, icon: "fa-solid fa-building-columns", basePrice: 2400, sizes: [{ label: "3 Kg", price: 2400 }, { label: "4 Kg", price: 3000 }] },
  { id: "t6", name: "Pink Ombre Ruffle Tier Cake", desc: "Romantic pink ombre ruffled tier cake, soft and dreamy.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 2800, sizes: [{ label: "3.5 Kg", price: 2800 }] },
  { id: "t7", name: "Rose Garden Three Tier Cake", desc: "Three tier white cake wrapped in a garden of fresh roses.", category: "tier", rating: 4.8, icon: "fa-solid fa-building-columns", basePrice: 2600, sizes: [{ label: "3 Kg", price: 2600 }] },
  { id: "t8", name: "Butterfly Garden Tier Cake", desc: "Textured tier cake fluttering with pastel butterflies and greenery.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 3000, sizes: [{ label: "3.5 Kg", price: 3000 }] },
  { id: "t9", name: "Safari Cub Tier Cake", desc: "Adorable two tier safari themed cake with lion cub topper.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1900, sizes: [{ label: "1.5 Kg", price: 1900 }, { label: "2.5 Kg", price: 2500 }] },
  { id: "t10", name: "Golden Cascade Tier Cake", desc: "Grand golden floral cascade tier cake for a luxurious celebration.", category: "tier", rating: 4.8, icon: "fa-solid fa-building-columns", basePrice: 3000, sizes: [{ label: "3 Kg", price: 3000 }] },
  { id: "t11", name: "Pastel Ombre Grand Tier Cake", desc: "Soft pastel ombre grand cake, perfect centrepiece for a wedding reception.", category: "tier", rating: 4.9, badge: "Premium", icon: "fa-solid fa-building-columns", basePrice: 8000, sizes: [{ label: "10 Kg", price: 8000 }] },
  { id: "t12", name: "Blush Rose Two Tier Cake", desc: "Delicate blush pink two tier cake with soft rose detailing.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1500, sizes: [{ label: "1.5 Kg", price: 1500 }] },
  { id: "t13", name: "Football Fever Tier Cake", desc: "Fun football themed two tier cake for the sports enthusiast.", category: "tier", rating: 4.6, icon: "fa-solid fa-building-columns", basePrice: 1500, sizes: [{ label: "1.5 Kg", price: 1500 }] },
  { id: "t14", name: "Garden Rose Tier Cake", desc: "Multi tier cake wrapped in vibrant garden roses and greenery.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1700, sizes: [{ label: "1.5 Kg", price: 1700 }, { label: "3 Kg", price: 2500 }] },
  { id: "t15", name: "Sunflower Field Tier Cake", desc: "Bright sunflower field themed cake with a golden two tier finish.", category: "tier", rating: 4.6, icon: "fa-solid fa-building-columns", basePrice: 3000, sizes: [{ label: "3 Kg", price: 3000 }] },
  { id: "t16", name: "Marble Rose Two Tier Cake", desc: "Elegant marble finish two tier cake with rose gold accents.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1700, sizes: [{ label: "1.5 Kg", price: 1700 }, { label: "3 Kg", price: 3000 }] },
  { id: "t17", name: "Textured White Rose Tier Cake", desc: "Grand textured white tier cake trimmed with cream roses.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1700, sizes: [{ label: "1.5 Kg", price: 1700 }] },
  { id: "t18", name: "Blossom Cascade Tier Cake", desc: "Soft floral cascade tier cake with delicate hand piped blossoms.", category: "tier", rating: 4.8, icon: "fa-solid fa-building-columns", basePrice: 1900, sizes: [{ label: "1.5 Kg", price: 1900 }] },
  { id: "t19", name: "Milestone Number Tier Cake", desc: "Grand milestone birthday tier cake with a large fondant number topper.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1600, sizes: [{ label: "1.5 Kg", price: 1600 }, { label: "3 Kg", price: 2500 }] },
  { id: "t20", name: "Race Track Two Tier Cake", desc: "Fun racing car themed two tier cake, complete with mini cars.", category: "tier", rating: 4.6, icon: "fa-solid fa-building-columns", basePrice: 1700, sizes: [{ label: "1.5 Kg", price: 1700 }, { label: "3 Kg", price: 3000 }] },
  { id: "t21", name: "Fresh Flower Anniversary Tier Cake", desc: "Elegant fresh flower two tier cake designed for anniversaries.", category: "tier", rating: 4.8, icon: "fa-solid fa-building-columns", basePrice: 1800, sizes: [{ label: "1.5 Kg", price: 1800 }] },
  { id: "t22", name: "Princess Tiara Tier Cake", desc: "Three tier princess cake topped with pink roses and a tiara.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1900, sizes: [{ label: "2.5 Kg", price: 1900 }] },
  { id: "t23", name: "Crown Jewel Two Tier Cake", desc: "Regal two tier cake finished with a crown topper and jewel-tone florals.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1500, sizes: [{ label: "1 Kg", price: 1500 }] },
  { id: "t24", name: "Golden 34 Milestone Cake", desc: "Celebration tier cake with festive drip and a custom age topper.", category: "tier", rating: 4.6, icon: "fa-solid fa-building-columns", basePrice: 1500, sizes: [{ label: "1.5 Kg", price: 1500 }] },
  { id: "t25", name: "Regal Pink Two Tier Cake", desc: "Statement pink two tier cake with pearl trim and a name plaque.", category: "tier", rating: 4.7, icon: "fa-solid fa-building-columns", basePrice: 1500, sizes: [{ label: "1 Kg", price: 1500 }] },

  /* ===================== CUSTOM ORDERS ===================== */
  { id: "c1", name: "Custom Birthday Cake", desc: "Tell us the theme, name and colours, we design it just for your celebration.", category: "custom", rating: 4.9, badge: "Popular", icon: "fa-solid fa-pen-ruler", basePrice: 899, sizes: [{ label: "1 Kg", price: 899 }, { label: "2 Kg", price: 1699 }, { label: "3 Kg", price: 2499 }] },
  { id: "c2", name: "Custom Wedding Cake", desc: "Multi-tier custom designed cake for weddings and grand celebrations, priced on consultation.", category: "custom", rating: 5.0, badge: "Premium", icon: "fa-solid fa-pen-ruler", basePrice: 3999, sizes: [{ label: "3 Kg", price: 3999 }, { label: "5 Kg", price: 5999 }] },
  { id: "c3", name: "Custom Theme Cake (Any Design)", desc: "Send us a reference photo or describe your dream cake, our bakers will bring it to life.", category: "custom", rating: 4.9, badge: "Popular", icon: "fa-solid fa-pen-ruler", basePrice: 1000, sizes: [{ label: "1 Kg", price: 1000 }, { label: "2 Kg", price: 1900 }] },
];

/* Add-ons available at checkout */
const ADD_ONS = [
  { id: "candles", name: "Birthday Candles", price: 0 },
  { id: "card", name: "Greeting Card", price: 49 },
  { id: "chocolates", name: "Assorted Chocolates Box", price: 199 },
];

const DELIVERY_FEE = 49;
const FREE_DELIVERY_ABOVE = 999;

/* WhatsApp numbers (as printed on the official catalog) */
const WHATSAPP_NUMBERS = {
  primary: "919774020103",
  secondary: "917005433305",
};

/* Store & social links (verified from the official Google Maps listing) */
const STORE_NAME = "Cakes and Breads";
const STORE_ADDRESS = "RMS Chowmuhani, Opposite Santosh Market, Agartala, Tripura 799001";
const STORE_LAT = 23.8318628;
const STORE_LNG = 91.2777672;
const MAP_LINK = "https://maps.app.goo.gl/P3m28TcQF2G9oJum8";
const MAP_DIRECTIONS_LINK = "https://www.google.com/maps/dir/?api=1&destination=" + STORE_LAT + "," + STORE_LNG;
const GOOGLE_REVIEW_LINK = "https://www.google.com/maps?cid=13348212175379474887&hl=en";
const INSTAGRAM_LINK = "https://www.instagram.com/cakesandbread.agt?igsi=aW93ZG1heWIwcjF5";
const FACEBOOK_LINK = "https://www.facebook.com/cakesandbread01/";

/* Highlights shown on the home screen "Why customers love us" strip.
   General positive service highlights, not attributed quotes. */
const HIGHLIGHTS = [
  { icon: "fa-solid fa-star", text: "Beautifully decorated, fresh-baked cakes" },
  { icon: "fa-solid fa-truck-fast", text: "Reliable on-time delivery in Agartala" },
  { icon: "fa-solid fa-palette", text: "Custom theme cakes made to your vision" },
  { icon: "fa-solid fa-tags", text: "Honest pricing, great everyday value" },
];

/* Special offers / promo banners shown on the home screen */
const OFFERS = [
  { id: "off1", icon: "fa-solid fa-truck-fast", title: "Free Delivery", sub: "Automatically applied on all orders above ₹999", tag: "Auto-applied" },
  { id: "off2", icon: "fa-solid fa-gift", title: "Custom Cake Special", sub: "Free candles & greeting card on custom orders", tag: "Custom Orders" },
  { id: "off3", icon: "fa-solid fa-cake-candles", title: "Birthday Week Treat", sub: "Order 2 days ahead for a priority baking slot", tag: "Plan Ahead" },
];
