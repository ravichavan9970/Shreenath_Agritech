export const siteData = {
  contact: {
    logo: "/images/logo.jpg",
    phone: "+91 9604983818",
    phoneDisplay: "+91 96049 83818",
    whatsapp: "919604983818",
    whatsappLink: "https://wa.me/919604983818",
    email: "shrinathagritech2024@gmail.com",
    address: {
      mr: "श्रीनाथ ॲग्रीटेक, सटाणा-कळवण रोड, मल्हारवाडी, मुंजवाड, ता. सटाणा, जि. नाशिक, महाराष्ट्र - ४२३३०१",
      en: "Shrinath Agritech, Satana-Kalwan Road, Malharwadi, Munjwad Tq, Satana, Dist. Nashik, Maharashtra - 423301"
    },
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Shrinath+Agritech,+Satana-Kalwan+Road,+Malharwadi,+Munjwad,+Satana,+Maharashtra+423301",
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=Shrinath+Agritech,+Satana-Kalwan+Road,+Malharwadi,+Munjwad,+Satana,+Maharashtra+423301",
    googleMapsEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=74.1500%2C20.5750%2C74.2250%2C20.6150&layer=mapnik&marker=20.5984%2C74.1811",
    workingHours: {
      mr: "सोमवार ते रविवार: सकाळी ९:०० ते संध्याकाळी ६:००",
      en: "Monday to Sunday: 9:00 AM to 6:00 PM"
    }
  },

  varieties: [
    {
      id: "watermelon",
      name: { mr: "टरबूज व खरबूज रोपे", en: "Watermelon & Muskmelon Seedlings" },
      category: "fruits",
      badge: { mr: "सर्वाधिक मागणी", en: "Bestseller" },
      leadTime: { mr: "१४-१८ दिवस", en: "14-18 Days" },
      popularBrands: ["सागर किंग (Sagar King)", "मॅक्स (Max)", "मेलोडी (Melody)", "काहो (Kaho)", "बॉबी खरबूज (Bobby Muskmelon)", "कुंदन (Kundan)"],
      description: {
        mr: "उच्च उगवण क्षमता व जोमदार मुळांचे नेटवर्क असलेली टरबूज व खरबूज रोपे. शेतात लागवडीनंतर लगेच सेट होतात व भरघोस फळधारणा देतात.",
        en: "Vigorous root system, uniform growth, and high disease resistance for premium quality fruit yield and sugar content."
      },
      image: "/images/watermelon-seedlings-1.jpg",
      gallery: [
        "/images/watermelon-seedlings-1.jpg",
        "/images/watermelon-seedlings-2.jpg",
        "/images/watermelon-seedlings-3.jpg"
      ],
      features: {
        mr: ["९९% अंकुरण खात्री", "जोमदार व पांढरी मुळे", "व्हायरस व उबळ प्रतिकारक", "थेट शेतात त्वरित सेट होणे"],
        en: ["99% Germination Guarantee", "Dense White Root Structure", "Virus & Wilt Resilient", "Zero Shock Fast Establishment"]
      },
      defaultSpacing: "6 x 1.5 ft",
      plantsPerAcre: 4800
    },
    {
      id: "papaya-taiwan-786",
      name: { mr: "पपई तैवान ७८६ (रेड लेडी)", en: "Papaya Taiwan 786 (Red Lady)" },
      category: "fruits",
      badge: { mr: "सुपर हिट वाण", en: "High Return" },
      leadTime: { mr: "३५-४५ दिवस", en: "35-45 Days" },
      popularBrands: ["तैवान ७८६ (Taiwan 786)", "रेड लेडी ओरिजिनल", "आईसबॉक्स"],
      description: {
        mr: "खात्रीशीर तैवान ७८६ पपई रोपे. दर्जेदार पॉलीबॅगमध्ये वाढवलेली, सशक्त खोड आणि रोगमुक्त मुळे. प्रति झाड ५० ते ८० किलो उत्पादनाची क्षमता.",
        en: "Premium genuine Taiwan 786 Red Lady papaya saplings raised in nutrient-rich polybags with sturdy stems and superior fruit-bearing capacity."
      },
      image: "/images/papaya-taiwan-786-1.jpg",
      gallery: [
        "/images/papaya-taiwan-786-1.jpg",
        "/images/papaya-taiwan-786-2.jpg",
        "/images/papaya-taiwan-786-3.jpg"
      ],
      features: {
        mr: ["१००% खरी तैवान ७८६ जात", "रिंगस्पॉट व्हायरस सहनशील", "जाड खोड व उत्तम उंची", "लागवडीनंतर लवकर फुले व फळे"],
        en: ["100% Genuine Taiwan 786 Strain", "Ringspot Virus Resilient", "Thick Trunk & Optimal Height", "Early Flowering & Heavy Yield"]
      },
      defaultSpacing: "8 x 8 ft",
      plantsPerAcre: 1000
    },
    {
      id: "tomato-hybrids",
      name: { mr: "टोमॅटो हायब्रीड रोपे", en: "Tomato Hybrid Seedlings" },
      category: "vegetables",
      badge: { mr: "शेतकऱ्यांची पहिली पसंती", en: "Farmer Favorite" },
      leadTime: { mr: "२५-२८ दिवस", en: "25-28 Days" },
      popularBrands: ["योगी (Yogi)", "आर्यमान (Aryaman)", "१०८ (108)", "विरांग (Virang)", "यूएस १०५७ (US 1057)", "साहू (Sahu)", "सिंजेंटा ६२४२ (Syngenta 6242)", "अभिनव"],
      description: {
        mr: "टोमॅटोच्या सर्व नामांकित कंपन्यांची खात्रीशीर रोपे. लीफ कर्ल व्हायरस (कुंकवा), करपा व विल्ट प्रतिकारक. वजनदार व चमकदार टोमॅटो फळांसाठी परिपूर्ण.",
        en: "Top branded tomato hybrids hardened for heat, TLCV virus and bacterial wilt resistance. Delivers uniform large fruit size and heavy harvest."
      },
      image: "/images/tomato-yogi-aryaman-1.jpg",
      gallery: [
        "/images/tomato-yogi-aryaman-1.jpg",
        "/images/tomato-virang-1057-sahu-1.jpg",
        "/images/tomato-6242-1.jpg"
      ],
      features: {
        mr: ["कुंकवा (TLCV) व्हायरस प्रतिकारक", "मजबूत रूट बॉल व पांढरी मुळे", "कठिण हवामानासाठी हार्डनिंग केलेले", "दीर्घकाळ चालणारे उत्पादन"],
        en: ["TLCV Virus & Blight Shield", "Firm Compact Root Ball", "Field Hardened in Polyhouse", "Prolonged Fruit Picking Cycle"]
      },
      defaultSpacing: "4 x 1.5 ft",
      plantsPerAcre: 7200
    },
    {
      id: "cabbage",
      name: { mr: "पत्ता कोबी रोपे (वीर ३३३ / युरो २)", en: "Cabbage Seedlings (Veer 333 / Euro 2)" },
      category: "vegetables",
      badge: { mr: "भरघोस वजन", en: "High Weight" },
      leadTime: { mr: "२२-२५ दिवस", en: "22-25 Days" },
      popularBrands: ["वीर ३३३ (Veer 333)", "युरो २ (Euro 2)", "ग्रीन फ्लॅश", "सेंट"],
      description: {
        mr: "घट्ट गड्डा आणि उत्कृष्ट वजनाची हमी देणारी वीर ३३३ व युरो २ कोबी रोपे. वाहतुकीसाठी टिकाऊ आणि बाजारात सर्वोच्च दर मिळवून देणारे वाण.",
        en: "Tight, dense heads with excellent field holding capacity and market weight. Highly suited for commercial vegetable cultivation."
      },
      image: "/images/cabbage-veer-333-1.jpg",
      gallery: [
        "/images/cabbage-veer-333-1.jpg",
        "/images/cabbage-euro-2-1.jpg",
        "/images/cabbage-euro-2-2.jpg"
      ],
      features: {
        mr: ["१००% एकसारखी वाढ", "काळा कुजवा (Black rot) प्रतिकारक", "बाजारासाठी आकर्षक हिरवा रंग", "गड्ड्यांचे वजन १.२ ते २ किलो"],
        en: ["Uniform Maturity & Size", "Black Rot Resilient", "Appealing Fresh Green Hue", "Average Head Weight 1.2-2 kg"]
      },
      defaultSpacing: "2 x 1.5 ft",
      plantsPerAcre: 14500
    },
    {
      id: "chilli",
      name: { mr: "मिरची हायब्रीड रोपे", en: "Chilli Hybrid Seedlings" },
      category: "vegetables",
      badge: { mr: "उच्च प्रतिकारशक्ती", en: "High Resistance" },
      leadTime: { mr: "३०-३५ दिवस", en: "30-35 Days" },
      popularBrands: ["सितारा (Sitara)", "तेजा ४ (Teja 4)", "रेवती (Revati)", "VNR ३०५ (VNR 305)", "अग्नIREKHA", "बुलेट"],
      description: {
        mr: "थ्रीप्स व चुरडा-मुरडा (Thrips & Mites) रोगांना उत्तम प्रतिकार करणारी दर्जेदार मिरची रोपे. हिरवी व लाल सुकी मिरची दोन्ही उत्पादनासाठी योग्य.",
        en: "Disease resilient chilli seedlings with exceptional tolerance to sucking pests and leaf curl. Suitable for both fresh green and dry red harvest."
      },
      image: "/images/chilli-seedlings.jpg",
      gallery: [
        "/images/chilli-seedlings.jpg",
        "/images/polyhouse-nursery-1.jpg"
      ],
      features: {
        mr: ["चुरडा-मुरडा रोग प्रतिकारक", "सशक्त व निरोगी रोपे", "सतत भरपूर फळधारणा", "आकर्षक लांबी व तिखटपणा"],
        en: ["Thrips & Curl Virus Resistance", "Vigorous Branching Habit", "Continuous Flush of Chillies", "High Market Pungency & Gloss"]
      },
      defaultSpacing: "3.5 x 1.5 ft",
      plantsPerAcre: 8200
    },
    {
      id: "brinjal-vangi",
      name: { mr: "वांगी हायब्रीड रोपे", en: "Brinjal (Eggplant) Seedlings" },
      category: "vegetables",
      badge: { mr: "भरघोस तोडे", en: "Extended Harvest" },
      leadTime: { mr: "२५-३० दिवस", en: "25-30 Days" },
      popularBrands: ["पंचगंगा (Panchganga)", "अजय (Ajay)", "उत्कर्ष", "कल्पतरू", "काटेरी जांभळी वांगी"],
      description: {
        mr: "स्थानिक व व्यापारी मागणीनुसार काटेरी, जांभळी, हिरवी वांगी रोपे. खोडकिडी व मर रोगास प्रतिकारक असून झाडाचे आयुष्य दीर्घकाळ टिकते.",
        en: "High yielding brinjal varieties tailored to Maharashtra mandi demands: thorny, purple, and green. Long harvest cycle with minimal shoot borer damage."
      },
      image: "/images/brinjal-seedlings.jpg",
      gallery: [
        "/images/brinjal-seedlings.jpg"
      ],
      features: {
        mr: ["मर (Wilt) रोग प्रतिकारक", "लागवडीनंतर लवकर बहर", "अतिशय चमकदार व आकर्षक फळे", "अनेक महिन्यांपर्यंत नियमित तोडे"],
        en: ["Wilt & Nematode Resistance", "Early First Picking", "Glossy Market-Preferred Skin", "Prolonged Fruit Bearing Cycle"]
      },
      defaultSpacing: "4 x 2 ft",
      plantsPerAcre: 5400
    },
    {
      id: "cauliflower",
      name: { mr: "फ्लॉवर (फुलकोबी) रोपे", en: "Cauliflower Seedlings" },
      category: "vegetables",
      badge: { mr: "शुभ्र पांढरा गड्डा", en: "Pure White" },
      leadTime: { mr: "२२-२५ दिवस", en: "22-25 Days" },
      popularBrands: ["गिरीजा (Girija)", "बरखा (Barkha)", "स्नोबॉल", "स्वाती"],
      description: {
        mr: "पानांनी गड्डा पूर्ण झाकणारा, शुभ्र पांढरा आणि घट्ट फुलकोबी तयार करणारी रोपे. उन्हाळा, पावसाळा व हिवाळा अशा सर्व ऋतूंसाठी योग्य वाण उपलब्ध.",
        en: "Self-blanching curd varieties maintaining pristine snow-white curd color and compact solidity. Available for all seasons."
      },
      image: "/images/cabbage-euro-2-1.jpg",
      gallery: [
        "/images/cabbage-euro-2-1.jpg"
      ],
      features: {
        mr: ["१००% स्वयंचलित पानांचे आवरण", "उष्णता व आर्द्रता सहनशील", "एकसारखे वजन व आकार", "बाजारपेठेत प्रथम दर्जाचा भाव"],
        en: ["Self-Covering Foliage", "Heat & Rain Tolerant", "Uniform Head Diameter", "Top Mandi Price Realization"]
      },
      defaultSpacing: "2 x 1.5 ft",
      plantsPerAcre: 14500
    },
    {
      id: "capsicum-shimla",
      name: { mr: "ढोबळी मिरची (कॅप्सिकम)", en: "Capsicum (Bell Pepper)" },
      category: "vegetables",
      badge: { mr: "हायटेक शेती", en: "Protected Cultivation" },
      leadTime: { mr: "२८-३२ दिवस", en: "28-32 Days" },
      popularBrands: ["इंद्रा (Indra)", "इन्स्पिरेशन (Inspiration)", "बचाटा", "बॉम्बे हायब्रीड"],
      description: {
        mr: "ओपन फील्ड आणि शेडनेट/पॉलीहाऊस दोन्हीसाठी योग्य ढोबळी मिरची रोपे. चार लोबची मोठी, जाड सालीची व टिकाऊ फळे देणारे वाण.",
        en: "Blocky 4-lobed premium capsicum saplings suited for open field or shadenet polyhouse cultivation. High export quality thick walls."
      },
      image: "/images/capsicum-seedlings.jpg",
      gallery: [
        "/images/capsicum-seedlings.jpg"
      ],
      features: {
        mr: ["जाड साल व उत्कृष्ट टिकाऊपणा", "दूरच्या वाहतुकीसाठी योग्य", "सतत फुलोरा व फळधारणा", "उत्कृष्ट बाजारभाव"],
        en: ["Thick Wall Long Shelf-life", "Ideal for Long Distance Mandis", "Consistent Fruit Setting", "High Weight & Shiny Finish"]
      },
      defaultSpacing: "3 x 1.5 ft",
      plantsPerAcre: 9600
    },
    {
      id: "marigold-zendu",
      name: { mr: "झेंडू फुले रोपे (झेंडू रोप)", en: "Commercial Marigold Seedlings" },
      category: "flowers",
      badge: { mr: "सणांसाठी नफा", en: "Festival Cash Crop" },
      leadTime: { mr: "२२-२५ दिवस", en: "22-25 Days" },
      popularBrands: ["कलकत्ता ऑरेंज (Calcutta Orange)", "पुसा नारंगी", "अष्टगंधा", "टेनिस बॉल"],
      description: {
        mr: "दसरा, दिवाळी व गणेशोत्सवासाठी भरघोस आणि मोठ्या आकाराची फुले देणारी झेंडू रोपे. एकाच वेळी भरपूर फुले येऊन शेतकऱ्याला त्वरित रोख नफा मिळतो.",
        en: "Heavy-blooming commercial marigold plants producing giant ball-shaped blooms. High festival demand with fast turnaround cash flow."
      },
      image: "/images/marigold-seedlings.jpg",
      gallery: [
        "/images/marigold-seedlings.jpg"
      ],
      features: {
        mr: ["टपोरी व दाट पाकळ्यांची फुले", "दीर्घकाळ ताजी राहणारी", "कमी खर्चात जास्तीत जास्त नफा", "रोग व कीड प्रतिकारक"],
        en: ["Large Compact Bloom Size", "Excellent Keeping Quality", "Low Input High Margin", "Fast 60-day First Bloom"]
      },
      defaultSpacing: "3 x 2 ft",
      plantsPerAcre: 7200
    }
  ],

  calculatorOptions: [
    { id: "tomato-hybrids", name: { mr: "टोमॅटो (Tomato)", en: "Tomato" }, defaultSpacing: "4 x 1.5", spacingFactor: 6.0, defaultSeedlingsPerAcre: 7200, unitPriceEst: "₹१.२० - ₹१.५०" },
    { id: "watermelon", name: { mr: "टरबूज / खरबूज (Watermelon / Melon)", en: "Watermelon / Melon" }, defaultSpacing: "6 x 1.5", spacingFactor: 9.0, defaultSeedlingsPerAcre: 4800, unitPriceEst: "₹१.८० - ₹२.२०" },
    { id: "papaya-taiwan-786", name: { mr: "पपई तैवान ७८६ (Papaya Taiwan 786)", en: "Papaya Taiwan 786" }, defaultSpacing: "8 x 8", spacingFactor: 64.0, defaultSeedlingsPerAcre: 1000, unitPriceEst: "₹१० - ₹१५" },
    { id: "cabbage", name: { mr: "पत्ता कोबी (Cabbage - Veer 333 / Euro 2)", en: "Cabbage" }, defaultSpacing: "2 x 1.5", spacingFactor: 3.0, defaultSeedlingsPerAcre: 14500, unitPriceEst: "₹०.८० - ₹१.१०" },
    { id: "cauliflower", name: { mr: "फ्लॉवर (Cauliflower)", en: "Cauliflower" }, defaultSpacing: "2 x 1.5", spacingFactor: 3.0, defaultSeedlingsPerAcre: 14500, unitPriceEst: "₹०.८० - ₹१.१०" },
    { id: "chilli", name: { mr: "मिरची (Chilli)", en: "Chilli" }, defaultSpacing: "3.5 x 1.5", spacingFactor: 5.25, defaultSeedlingsPerAcre: 8200, unitPriceEst: "₹०.९० - ₹१.३०" },
    { id: "brinjal-vangi", name: { mr: "वांगी (Brinjal)", en: "Brinjal" }, defaultSpacing: "4 x 2", spacingFactor: 8.0, defaultSeedlingsPerAcre: 5400, unitPriceEst: "₹०.९० - ₹१.३०" },
    { id: "capsicum-shimla", name: { mr: "ढोबळी मिरची (Capsicum)", en: "Capsicum" }, defaultSpacing: "3 x 1.5", spacingFactor: 4.5, defaultSeedlingsPerAcre: 9600, unitPriceEst: "₹१.५० - ₹२.००" },
    { id: "marigold-zendu", name: { mr: "झेंडू (Marigold)", en: "Marigold" }, defaultSpacing: "3 x 2", spacingFactor: 6.0, defaultSeedlingsPerAcre: 7200, unitPriceEst: "₹०.८० - ₹१.१०" }
  ],

  usps: [
    {
      icon: "ShieldCheck",
      title: { mr: "१००% रोगमुक्त व निर्जंतुक रोपे", en: "100% Disease & Pest Free" },
      desc: {
        mr: "आधुनिक कोकोपीट व प्रो-ट्रे तंत्रज्ञानामुळे बुरशी, कीड व व्हायरसपासून १००% सुरक्षित रोपे तयार होतात.",
        en: "Grown in sterilized cocopeat inside controlled polyhouses, completely free from soil-borne pathogens."
      }
    },
    {
      icon: "ThermometerSun",
      title: { mr: "कठिण हार्डनिंग प्रक्रिया", en: "Polyhouse Field Hardening" },
      desc: {
        mr: "थेट शेतातील ऊन आणि तापमानाला सामोरे जाण्यासाठी रोपांचे विशेष हार्डनिंग केले जाते, ज्यामुळे लागवडीनंतर रोपे मरत नाहीत.",
        en: "Specially climate-hardened in open ventilation sheds so seedlings don't suffer transplant shock in fields."
      }
    },
    {
      icon: "Truck",
      title: { mr: "थेट शेतापर्यंत सुरक्षित वाहतूक", en: "Doorstep Farm Gate Delivery" },
      desc: {
        mr: "विशेष डिझाईन केलेल्या वाहनांद्वारे रोपांची ट्रे न हलवता, ताजी व सुरक्षित थेट तुमच्या बांधावर पोहोचवली जातात.",
        en: "Specially cushioned and ventilated delivery vehicles ensuring zero damage to delicate stems and root balls."
      }
    },
    {
      icon: "BadgePercent",
      title: { mr: "होलसेल सवलत व पारदर्शक दर", en: "Wholesale Bulk Discounts" },
      desc: {
        mr: "मोठ्या प्रमाणातील खरेदीसाठी थेट उत्पादक दरात आकर्षक सवलत, ज्यामुळे शेतकऱ्यांच्या भांडवली खर्चात मोठी बचत होते.",
        en: "Direct from nursery wholesale prices with attractive tiered discounts for large acreage farmers and dealers."
      }
    },
    {
      icon: "Headphones",
      title: { mr: "मोफत तज्ञ कृषी सल्ला", en: "Free Expert Agronomy Support" },
      desc: {
        mr: "लागवड अंतर, बेसल डोस, खत नियोजन आणि फवारणीबाबत आमचे कृषी तज्ञ मार्गदर्शन फोन व व्हॉट्सॲपवर विनामूल्य देतात.",
        en: "Complimentary guidance on field preparation, drip fertigation, pest management from planting to first harvest."
      }
    },
    {
      icon: "Sparkles",
      title: { mr: "९९% अंकुरण व भरघोस उत्पादन", en: "99% High Field Survival" },
      desc: {
        mr: "सशक्त पांढऱ्या मुळांचे जाळे आणि दाट खोड यामुळे शेतात लावल्यानंतर रोपे २ दिवसांत वाढ सुरू करतात.",
        en: "Dense active feeder roots enable vigorous immediate establishment in field with near 99% survival rate."
      }
    }
  ],

  testimonials: [
    {
      name: "रोहित ठोके",
      role: { mr: "प्रगतिशील शेतकरी", en: "Progressive Farmer" },
      village: { mr: "सटाणा / कळवण (जि. नाशिक)", en: "Satana / Kalwan (Nashik)" },
      crop: { mr: "टोमॅटो (योगी व ६२४२) आणि टरबूज", en: "Tomato (Yogi & 6242) and Watermelon" },
      quote: {
        mr: "श्रीनाथ ॲग्रीटेकची रोपे वापरल्यामुळे माझ्या भाजीपाला उत्पादनात लक्षणीय वाढ झाली. त्यांची गुणवत्ता आणि सेवा दोन्ही उत्कृष्ट आहेत! रोपांचे हार्डनिंग उत्तम असल्याने उन्हातही एकही रोप वाया गेले नाही.",
        en: "Using Shrinath Agritech seedlings significantly boosted my vegetable yield. Both their seedling quality and customer service are outstanding! Hardened seedlings ensured zero mortality even in harsh sun."
      },
      rating: 5,
      verified: true
    },
    {
      name: "कैलास पवार",
      role: { mr: "भाजीपाला उत्पादक", en: "Vegetable Grower" },
      village: { mr: "देवळा / कळवण (जि. नाशिक)", en: "Deola / Kalwan (Nashik)" },
      crop: { mr: "पत्ता कोबी (वीर ३३३) व फ्लॉवर", en: "Cabbage (Veer 333) & Cauliflower" },
      quote: {
        mr: "श्रीनाथ ॲग्रीटेककडून मी १०,००० कोबी रोपे घेतली होती. सर्व रोपे एकाच आकाराची आणि निरोगी होती. वजनदार गट्टे तयार झाले आणि बाजारात चांगला नफा मिळाला. डिलिव्हरी वेळेवर बांधावर मिळाली.",
        en: "I purchased 10,000 cabbage seedlings from Shrinath Agritech. Every tray was uniform and disease-free. The heads were extremely heavy and fetched premium rates at the mandi. On-time delivery right at the farm!"
      },
      rating: 5,
      verified: true
    },
    {
      name: "सचिन सूर्यवंशी",
      role: { mr: "फळबागायतदार", en: "Horticulture Farmer" },
      village: { mr: "निफाड / चांदवड", en: "Niphad / Chandwad" },
      crop: { mr: "पपई तैवान ७८६", en: "Papaya Taiwan 786" },
      quote: {
        mr: "पपईच्या तैवान ७८६ च्या रोपांसाठी श्रीनाथ ॲग्रीटेक नाशिक जिल्ह्यातील सर्वोत्तम नर्सरी आहे. सर्व रोपे ओरिजिनल तैवान ७८६ असून आज झाडांना घसघशीत फळे लागली आहेत. खूप खूप धन्यवाद!",
        en: "For genuine Papaya Taiwan 786 seedlings, Shrinath Agritech is undoubtedly the finest nursery in Nashik district. Every plant is authentic and loaded with heavy fruit. Highly recommended!"
      },
      rating: 5,
      verified: true
    }
  ],

  faqs: [
    {
      q: {
        mr: "रोपांचे बुकिंग किती दिवस आधी करावे लागते?",
        en: "How many days in advance should we book seedlings?"
      },
      a: {
        mr: "भाजीपाला रोपांसाठी (टोमॅटो, कोबी, टरबूज, मिरची) साधारणपणे २० ते २५ दिवस आधी आणि पपईसाठी ३५ ते ४५ दिवस आधी बुकिंग करणे फायदेशीर ठरते. यामुळे तुम्हाला हव्या त्या तारखेला ताजी व योग्य वयाची रोपे मिळतात.",
        en: "For vegetables like tomato, cabbage, watermelon and chilli, booking 20 to 25 days in advance is optimal. For papaya, 35 to 45 days is recommended so seedlings reach the ideal transplanting age on your scheduled planting date."
      }
    },
    {
      q: {
        mr: "रोपांची डिलिव्हरी शेतावर कशी मिळते?",
        en: "How is seedling delivery handled to our farm?"
      },
      a: {
        mr: "आमच्याकडे विशेष वातानुकूलित व सुरक्षित जाळीदार पिकअप/वाहने आहेत. ठरलेल्या दिवशी रोपे थेट तुमच्या शेतावर सुरक्षित आणि न डॅमेज होता पोहोचवली जातात. नाशिक, धुळे, जळगाव, नगर व संपूर्ण महाराष्ट्रात वाहतूक सुविधा उपलब्ध आहे.",
        en: "We operate dedicated, ventilated transport vehicles tailored for seedling trays. Seedlings are delivered directly to your farm gate across Nashik, Dhule, Jalgaon, Ahmednagar and throughout Maharashtra safely without damage."
      }
    },
    {
      q: {
        mr: "किमान किती रोपांची ऑर्डर देता येते?",
        en: "What is the minimum order quantity for booking?"
      },
      a: {
        mr: "शेतकऱ्यांसाठी कमीत कमी १,००० रोपे किंवा एका ट्रेपासून बुकिंग करता येते. मोठ्या व्होलसेल खरेदीसाठी (५,००० रोपांपेक्षा जास्त) विशेष सवलती लागू होतात.",
        en: "Farmers can book starting from 1,000 seedlings (or single tray minimums for pickup). For wholesale orders above 5,000 plants, special tiered bulk discounts are applicable."
      }
    },
    {
      q: {
        mr: "श्रीनाथ ॲग्रीटेकच्या रोपांचे वैशिष्ट्य काय आहे?",
        en: "What makes Shrinath Agritech seedlings superior?"
      },
      a: {
        mr: "आमच्या हायटेक पॉलीहाऊसमध्ये निर्जंतुक कोकोपीट, प्रमाणित हायब्रीड बियाणे आणि मायक्रो-क्लायमेट नियंत्रणाखाली रोपे तयार केली जातात. शेतात नेण्यापूर्वी त्यांचे योग्य हार्डनिंग केले जाते, ज्यामुळे शेतात लावल्यावर रोपे सुकून मरत नाहीत (Mortality ०-१% पेक्षा कमी).",
        en: "Our seedlings are grown in sterilized cocopeat using 100% certified company hybrid seeds under micro-climate polyhouses with open-air hardening yards, ensuring near zero transplant mortality in your fields."
      }
    },
    {
      q: {
        mr: "लागवडीनंतर शेतकऱ्यांना तांत्रिक मार्गदर्शन मिळते का?",
        en: "Do you provide agronomic guidance post-plantation?"
      },
      a: {
        mr: "होय, अगदी नक्की! रोपे दिल्यानंतरही शेतकरी आम्हाला फोन किंवा व्हॉट्सॲपवर पिकाचे फोटो पाठवून खते, पाणी नियोजन व कीड नियंत्रणाचा मोफत सल्ला मिळवू शकतात.",
        en: "Yes, absolutely! Our agronomy support team is available via phone and WhatsApp. Farmers can send crop photos anytime for customized fertigation and spray schedules free of cost."
      }
    }
  ],

  galleryImages: [
    { src: "/images/watermelon-seedlings-1.jpg", caption: { mr: "टरबूज ट्रे रोपे - सशक्त मुळे", en: "Watermelon Nursery Trays" }, tag: "watermelon" },
    { src: "/images/papaya-taiwan-786-1.jpg", caption: { mr: "पपई तैवान ७८६ पॉलीबॅग", en: "Papaya Taiwan 786 Polybags" }, tag: "papaya" },
    { src: "/images/tomato-yogi-aryaman-1.jpg", caption: { mr: "टोमॅटो योगी व आर्यमान रोपे", en: "Tomato Yogi & Aryaman" }, tag: "tomato" },
    { src: "/images/cabbage-veer-333-1.jpg", caption: { mr: "पत्ता कोबी वीर ३३३ ट्रे", en: "Cabbage Veer 333 Trays" }, tag: "cabbage" },
    { src: "/images/chilli-seedlings.jpg", caption: { mr: "मिरची हायब्रीड रोपे ट्रे", en: "Chilli Hybrid Seedlings" }, tag: "chilli" },
    { src: "/images/brinjal-seedlings.jpg", caption: { mr: "वांगी हायब्रीड रोपे ट्रे", en: "Brinjal Hybrid Seedlings" }, tag: "brinjal" },
    { src: "/images/polyhouse-nursery-1.jpg", caption: { mr: "हायटेक पॉलीहाऊस नर्सरी", en: "Hi-Tech Polyhouse Setup" }, tag: "facility" },
    { src: "/images/farm-delivery-vehicle.jpg", caption: { mr: "शेतावर सुरक्षित ट्रे डिलिव्हरी गाडी", en: "Farm Gate Delivery Pickup" }, tag: "dispatch" },
    { src: "/images/marigold-seedlings.jpg", caption: { mr: "झेंडू फुले रोपे ट्रे", en: "Marigold Flower Seedlings" }, tag: "flowers" },
    { src: "/images/capsicum-seedlings.jpg", caption: { mr: "ढोबळी मिरची रोपे", en: "Capsicum Bell Pepper Seedlings" }, tag: "capsicum" }
  ]
};
