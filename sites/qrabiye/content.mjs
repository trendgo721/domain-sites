/* QRABİYE — qrabiye.com.tr
   Premium el yapımı kurabiye ve hediyelik kurabiye markası konsepti.
   Hiçbir bölümde stok, fiyat, teslimat veya müşteri yorumu iddiası yoktur. */

export const content = {
  /* ------------------------------------------------------------------ TR */
  tr: {
    meta: {
      title: "QRABİYE | Butik El Yapımı Kurabiye ve Hediyelik Kurabiye Kutuları",
      description:
        "Butik kurabiye koleksiyonu, hediyelik kurabiye kutuları ve kurumsal hediye konsepti geliştiren modern bir Türk kurabiye markası projesi.",
      ogTitle: "QRABİYE — Butik kurabiye ve hediyelik kurabiye kutuları"
    },

    nav: [
      { href: "#koleksiyon", label: "Koleksiyon" },
      { href: "#kutular", label: "Hediye kutuları" },
      { href: "#kurumsal", label: "Kurumsal hediye" },
      { href: "#rehber", label: "Kurabiye rehberi" },
      { href: "#sss", label: "Sık sorulanlar" }
    ],

    headerCta: { href: "#proje", label: "İletişim" },
    footerTagline:
      "Butik kurabiye, hediyelik kurabiye kutuları ve kurumsal hediye konsepti üzerine kurulu bir marka projesi.",

    hero: {
      eyebrow: "Butik kurabiye · Hediyelik kutu",
      title: "Küçük bir kutuya sığan en zarif ikram",
      text:
        "QRABİYE; tereyağlı klasikler, çikolatalı tarifler ve kuru meyveli karışımlardan oluşan bir kurabiye koleksiyonu ile özel gün ve kurumsal hediye kutularını bir araya getiren modern bir Türk marka konseptidir.",
      actions: [
        { href: "#koleksiyon", label: "Koleksiyonu inceleyin" },
        { href: "#kurumsal", label: "Kurumsal hediye" }
      ],
      meta: [
        { icon: "cookie", text: "El yapımı üretim yaklaşımı" },
        { icon: "gift", text: "Hediye odaklı kutu tasarımı" },
        { icon: "note", text: "Şeffaf içerik ve alerjen bilgisi" }
      ]
    },

    collection: {
      head: {
        eyebrow: "Koleksiyon",
        title: "Kurabiye çeşitleri ve tat profilleri",
        text:
          "Koleksiyon, birbirinden ayrışan altı tat ailesi üzerine kuruludur. Her aile, kutu içinde dengeli bir tatma sırası oluşturacak biçimde planlanır."
      },
      items: [
        {
          icon: "cookie",
          title: "Tereyağlı klasikler",
          text:
            "Un, tereyağı ve şekerin oranına dayanan sade tarifler. Ağızda dağılan kıvamı ve tok tereyağı aromasıyla koleksiyonun temelini oluşturur.",
          chips: ["un kurabiyesi", "vanilya", "sade"]
        },
        {
          icon: "flame",
          title: "Çikolatalı tarifler",
          text:
            "Bitter ve sütlü çikolata parçacıklarıyla hazırlanan, kenarları çıtır ortası yumuşak dokuya sahip kurabiyeler.",
          chips: ["bitter", "damla çikolata", "kakao"]
        },
        {
          icon: "sprout",
          title: "Fındık, fıstık, badem",
          text:
            "Kavrulmuş iç kabuklu yemişlerle hazırlanan tarifler. Yağ oranı yüksek olduğundan daha yoğun ve doyurucu bir profil verir.",
          chips: ["fındık", "antep fıstığı", "badem"]
        },
        {
          icon: "leaf",
          title: "Kuru meyveli karışımlar",
          text:
            "Kayısı, incir, vişne ve kızılcık gibi kurutulmuş meyvelerin hamurla dengelendiği, asitliği yüksek tatlar.",
          chips: ["kayısı", "vişne", "incir"]
        },
        {
          icon: "sun",
          title: "Baharatlı ve mevsimlik",
          text:
            "Tarçın, zencefil, kakule ve portakal kabuğu gibi mevsim baharatlarıyla kurgulanan dönemsel tarifler.",
          chips: ["tarçın", "zencefil", "portakal"]
        },
        {
          icon: "shield",
          title: "Az şekerli ve alternatif un",
          text:
            "Şeker oranı düşürülmüş ya da tam buğday, yulaf ve badem unu gibi alternatiflerle hazırlanan tarif grubu.",
          chips: ["az şekerli", "tam buğday", "yulaf"]
        }
      ]
    },

    boxes: {
      head: {
        eyebrow: "Hediye kutuları",
        title: "Kutu, kurabiyenin yarısıdır",
        text:
          "Kurabiye kutusu; taşıma dayanımı, tazelik ve sunum olmak üzere üç işi aynı anda yapmak zorundadır. Koleksiyon bu üç ölçüte göre üç kutu boyutunda planlanmaktadır."
      },
      items: [
        {
          icon: "box",
          title: "İkramlık kutu",
          text:
            "Ofis masası, küçük teşekkür ve ev ziyareti için tasarlanan kompakt boy. Tek tat ailesinden ya da ikili karışımdan oluşur.",
          chips: ["küçük boy", "tek tat", "teşekkür"]
        },
        {
          icon: "gift",
          title: "Özel gün kutusu",
          text:
            "Doğum günü, yıl dönümü, bayram ve nişan gibi özel günler için karışık dizilim. Kart ve kurdele ile kişiselleştirilebilir kurgu.",
          chips: ["karışık", "kişiye özel kart", "özel gün"]
        },
        {
          icon: "award",
          title: "Kurumsal koleksiyon",
          text:
            "Çok adetli gönderim için tasarlanan, marka rengi ve logosuyla uyumlanabilen ambalaj yaklaşımı.",
          chips: ["çok adet", "logolu ambalaj", "kurumsal"]
        }
      ]
    },

    corporate: {
      head: {
        eyebrow: "Kurumsal hediye",
        title: "Şirket hediyelerinde kurabiyenin avantajı",
        text:
          "Kurumsal hediyede en zor kısım, herkese hitap eden ama sıradan görünmeyen bir seçim yapmaktır. Kurabiye bu dengeyi kurmakta güçlü bir seçenektir."
      },
      blocks: [
        {
          h3: "Neden kurabiye?",
          p: [
            "Kurabiye, paylaşılabilir olduğu için tek kişilik bir hediyeden daha geniş bir etki alanı yaratır: kutu açıldığında ekibin tamamına ulaşır. Raf ömrü çikolataya göre sıcaklığa daha az bağımlıdır ve taşımaya daha dayanıklıdır."
          ],
          ul: [
            "Yılbaşı, bayram ve şirket yıl dönümü gönderimleri",
            "Yeni müşteri ve tedarikçi karşılama kutuları",
            "Fuar, lansman ve etkinlik masası ikramları",
            "İşe yeni başlayan ekip arkadaşları için hoş geldin kutusu"
          ]
        },
        {
          h3: "Planlama nasıl kurgulanır?",
          p: [
            "Kurumsal gönderimlerde belirleyici olan üç değişken vardır: adet, teslim tarihi ve ambalajın markayla uyumu. Bu üçü netleştiğinde tat dizilimi ve kutu boyu buna göre planlanır."
          ]
        }
      ],
      panel: {
        title: "Kurumsal talep formunda paylaşılması yararlı bilgiler",
        items: [
          { term: "Adet aralığı", detail: "Yaklaşık kutu sayısı ve gönderim noktası sayısı" },
          { term: "Tarih", detail: "Hedeflenen teslim tarihi ve esneklik payı" },
          { term: "Diyet kısıtları", detail: "Alerjen, az şekerli veya vejetaryen ihtiyaçları" },
          { term: "Marka kurgusu", detail: "Logo, renk ve varsa kurumsal kılavuz" },
          { term: "Bütçe aralığı", detail: "Kutu başına hedeflenen aralık" }
        ]
      }
    },

    guide: {
      head: {
        eyebrow: "Kurabiye rehberi",
        title: "Tazelik, saklama ve doğru sunum",
        text:
          "Kurabiyenin lezzeti tarif kadar saklama koşuluna da bağlıdır. Aşağıdaki başlıklar, evde ya da ofiste kurabiyeyi ilk günkü dokusunda tutmak için yeterlidir."
      },
      blocks: [
        {
          h3: "Neden bazı kurabiyeler çabuk yumuşar?",
          p: [
            "Kurabiyeler nem alışverişi yapar. Kuru ve gevrek bir kurabiye ortamdaki nemi çeker ve yumuşar; yumuşak dokulu bir kurabiye ise nemini kaybederek sertleşir. Bu nedenle farklı dokudaki kurabiyeleri aynı kapta uzun süre bekletmek her ikisinin de dokusunu bozar."
          ]
        },
        {
          h3: "Saklamanın üç temel kuralı",
          ul: [
            "Hava almayan kap kullanın; kapağın contası dokuyu ısıdan daha çok etkiler.",
            "Gevrek ve yumuşak kurabiyeleri ayrı kaplarda saklayın.",
            "Doğrudan güneş gören ve fırın üstü gibi ısınan yüzeylerden uzak tutun.",
            "Buzdolabı çoğu kurabiye için gerekli değildir; bayatlamayı hızlandırabilir.",
            "Uzun süreli saklamada derin dondurucu, buzdolabından daha iyi sonuç verir."
          ]
        }
      ],
      table: {
        caption: "Kurabiye türlerine göre saklama önerileri",
        head: ["Tür", "Doku", "Oda sıcaklığında", "Notlar"],
        rows: [
          ["Tereyağlı klasik", "Gevrek", "10–14 gün", "Hava almayan kapta nemden korunmalıdır"],
          ["Çikolatalı", "Kenarı çıtır, ortası yumuşak", "7–10 gün", "Sıcak ortamda çikolata yüzeyde beyazlayabilir"],
          ["Yemişli", "Yoğun ve yağlı", "7–10 gün", "Yüksek yağ oranı nedeniyle serin ortam tercih edilir"],
          ["Kuru meyveli", "Yumuşak", "5–7 gün", "Meyvenin nemi hamuru zamanla yumuşatır"],
          ["Az şekerli / alternatif un", "Değişken", "4–6 gün", "Şeker doğal koruyucu olduğundan ömrü kısalır"]
        ],
        note:
          "Süreler genel mutfak pratiğine dayalı yaklaşık değerlerdir; tarif, ortam nemi ve ambalaja göre değişir."
      }
    },

    faqHead: {
      eyebrow: "Sık sorulan sorular",
      title: "Kurabiye, kutu ve marka hakkında",
      text: "Koleksiyon, kurumsal gönderim ve markanın mevcut durumu hakkında en çok gelen sorular."
    },

    faq: [
      {
        q: "QRABİYE şu anda sipariş alıyor mu?",
        a: "Hayır. QRABİYE şu aşamada bir marka ve koleksiyon konsepti olarak geliştirilmektedir; sitede satış, stok veya teslimat altyapısı bulunmamaktadır. Bu nedenle sayfada fiyat ve ürün mevcudiyeti bilgisi yer almaz."
      },
      {
        q: "Hediyelik kurabiye kutusu seçerken nelere dikkat edilmeli?",
        a: "Üç başlık belirleyicidir: kutu içindeki tat çeşitliliği, kurabiyelerin taşımaya dayanıklılığı ve ambalajın nem geçirmezliği. Karışık kutularda gevrek ve yumuşak dokuların ayrı bölmelerde durması sunum kalitesini korur."
      },
      {
        q: "Kurabiye kurumsal hediye olarak neden tercih edilir?",
        a: "Paylaşılabilir olması, taşımaya çikolatadan daha dayanıklı olması ve ambalajın marka kimliğiyle kolayca uyumlanabilmesi başlıca nedenlerdir. Ayrıca porsiyonlanması kolaydır ve ofis ortamında ikram edilebilir."
      },
      {
        q: "Alerjen bilgisi nasıl ele alınıyor?",
        a: "Konsept, her tarif için gluten, süt ürünü, yumurta ve sert kabuklu yemiş içeriğinin kutu üzerinde açıkça belirtilmesi ilkesine dayanır. Aynı mutfakta üretim yapılması durumunda çapraz bulaşma riski de ayrıca bildirilir."
      },
      {
        q: "Özel gün kutuları kişiselleştirilebilir mi?",
        a: "Konsept, kart mesajı, kurdele rengi ve tat dizilimi düzeyinde kişiselleştirmeyi öngörür. Kurumsal gönderimlerde ambalajın marka rengi ve logosuyla uyumlanması planlanmaktadır."
      }
    ],

    acquire: {
      eyebrow: "Bu dijital proje hakkında",
      title: "QRABİYE markası ve alan adı hakkında",
      text:
        "QRABİYE, kurabiye ve hediyelik ürün alanında konumlandırılmış bir marka, konsept ve alan adı projesidir. Marka, proje veya alan adıyla ilgili satın alma ve iş birliği teklifleri için bizimle iletişime geçebilirsiniz.",
      note: "Tüm görüşmeler karşılıklı gizlilik esasıyla yürütülür.",
      cta: "E-posta gönderin",
      subject: "qrabiye.com.tr — marka ve alan adı hakkında"
    }
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    meta: {
      title: "QRABİYE | Artisan Cookies & Turkish Gift Cookie Boxes",
      description:
        "A Turkish brand concept for artisan cookies — butter, chocolate and dried-fruit recipes — in gift boxes made for celebrations and corporate gifting.",
      ogTitle: "QRABİYE — Artisan cookies and gift boxes"
    },

    nav: [
      { href: "#koleksiyon", label: "Collection" },
      { href: "#kutular", label: "Gift boxes" },
      { href: "#kurumsal", label: "Corporate gifting" },
      { href: "#rehber", label: "Cookie guide" },
      { href: "#sss", label: "FAQ" }
    ],

    headerCta: { href: "#proje", label: "Contact" },
    footerTagline:
      "A brand project built around artisan cookies, gift boxes and corporate gifting.",

    hero: {
      eyebrow: "Artisan cookies · Gift boxes",
      title: "The most elegant treat fits in a small box",
      text:
        "QRABİYE is a modern Turkish brand concept that brings together a cookie collection — butter classics, chocolate recipes and dried-fruit blends — with gift boxes built for celebrations and corporate occasions.",
      actions: [
        { href: "#koleksiyon", label: "See the collection" },
        { href: "#kurumsal", label: "Corporate gifting" }
      ],
      meta: [
        { icon: "cookie", text: "Handmade production approach" },
        { icon: "gift", text: "Boxes designed for gifting" },
        { icon: "note", text: "Transparent ingredient and allergen labelling" }
      ]
    },

    collection: {
      head: {
        eyebrow: "Collection",
        title: "Cookie families and flavour profiles",
        text:
          "The collection is built on six distinct flavour families, arranged so that a mixed box follows a balanced tasting order."
      },
      items: [
        {
          icon: "cookie",
          title: "Butter classics",
          text:
            "Simple recipes governed by the ratio of flour, butter and sugar. A short, melting texture and a full dairy aroma form the base of the collection.",
          chips: ["shortbread", "vanilla", "plain"]
        },
        {
          icon: "flame",
          title: "Chocolate recipes",
          text:
            "Made with dark and milk chocolate pieces, baked for crisp edges and a soft centre.",
          chips: ["dark", "chocolate chip", "cocoa"]
        },
        {
          icon: "sprout",
          title: "Hazelnut, pistachio, almond",
          text:
            "Recipes built on roasted nuts. Their higher fat content gives a denser, more filling profile.",
          chips: ["hazelnut", "pistachio", "almond"]
        },
        {
          icon: "leaf",
          title: "Dried fruit blends",
          text:
            "Apricot, fig, sour cherry and cranberry balanced against the dough for a brighter, more acidic finish.",
          chips: ["apricot", "sour cherry", "fig"]
        },
        {
          icon: "sun",
          title: "Spiced and seasonal",
          text:
            "Seasonal recipes shaped by cinnamon, ginger, cardamom and orange peel.",
          chips: ["cinnamon", "ginger", "orange"]
        },
        {
          icon: "shield",
          title: "Low sugar and alternative flours",
          text:
            "A group of recipes with reduced sugar or made with wholewheat, oat and almond flour.",
          chips: ["low sugar", "wholewheat", "oat"]
        }
      ]
    },

    boxes: {
      head: {
        eyebrow: "Gift boxes",
        title: "The box is half the gift",
        text:
          "A cookie box has to do three things at once: survive transport, preserve freshness and present well. The collection is planned in three sizes against exactly those criteria."
      },
      items: [
        {
          icon: "box",
          title: "Treat box",
          text:
            "A compact size for a desk, a small thank-you or a house visit. One flavour family, or a pair of them.",
          chips: ["small", "single family", "thank you"]
        },
        {
          icon: "gift",
          title: "Occasion box",
          text:
            "A mixed arrangement for birthdays, anniversaries and holidays, personalised with a card and ribbon.",
          chips: ["mixed", "personal card", "celebration"]
        },
        {
          icon: "award",
          title: "Corporate collection",
          text:
            "Designed for volume dispatch, with packaging that can follow a company's colour and logo.",
          chips: ["volume", "branded packaging", "corporate"]
        }
      ]
    },

    corporate: {
      head: {
        eyebrow: "Corporate gifting",
        title: "Why cookies work as a company gift",
        text:
          "The hard part of corporate gifting is finding something that suits everyone without looking generic. Cookies sit comfortably in that gap."
      },
      blocks: [
        {
          h3: "The case for cookies",
          p: [
            "A cookie box is shareable, so it reaches a whole team rather than a single recipient. It is also less temperature-sensitive than chocolate and travels better."
          ],
          ul: [
            "Year-end, holiday and company anniversary sends",
            "Welcome boxes for new clients and suppliers",
            "Trade fair, launch and event table treats",
            "Onboarding boxes for new team members"
          ]
        },
        {
          h3: "How planning works",
          p: [
            "Three variables decide everything in a corporate send: quantity, delivery date, and how closely the packaging must follow the brand. Once those are fixed, the flavour arrangement and box size follow."
          ]
        }
      ],
      panel: {
        title: "Useful details to include in a corporate enquiry",
        items: [
          { term: "Quantity range", detail: "Approximate number of boxes and delivery points" },
          { term: "Date", detail: "Target delivery date and how much it can move" },
          { term: "Dietary limits", detail: "Allergens, low-sugar or vegetarian requirements" },
          { term: "Brand setup", detail: "Logo, colours and any brand guidelines" },
          { term: "Budget range", detail: "Target range per box" }
        ]
      }
    },

    guide: {
      head: {
        eyebrow: "Cookie guide",
        title: "Freshness, storage and serving",
        text:
          "Flavour depends as much on storage as on the recipe. The notes below are enough to keep cookies in their day-one texture at home or in the office."
      },
      blocks: [
        {
          h3: "Why do some cookies soften so quickly?",
          p: [
            "Cookies exchange moisture with the air around them. A dry, crisp cookie draws moisture in and softens; a soft cookie loses moisture and hardens. Storing the two textures together for long spoils both."
          ]
        },
        {
          h3: "Three rules for storage",
          ul: [
            "Use an airtight container — the quality of the seal matters more than the room temperature.",
            "Keep crisp and soft cookies in separate containers.",
            "Avoid direct sunlight and warm surfaces such as the top of an oven.",
            "Most cookies do not need refrigeration; it can accelerate staling.",
            "For long storage, a freezer gives far better results than a fridge."
          ]
        }
      ],
      table: {
        caption: "Storage guidance by cookie type",
        head: ["Type", "Texture", "At room temperature", "Notes"],
        rows: [
          ["Butter classic", "Crisp", "10–14 days", "Keep airtight and away from humidity"],
          ["Chocolate", "Crisp edge, soft centre", "7–10 days", "Chocolate may bloom in a warm room"],
          ["Nut", "Dense and rich", "7–10 days", "High fat content prefers a cool spot"],
          ["Dried fruit", "Soft", "5–7 days", "Fruit moisture softens the dough over time"],
          ["Low sugar / alternative flour", "Varies", "4–6 days", "Sugar is a preservative, so shelf life is shorter"]
        ],
        note:
          "Figures are approximate values from general kitchen practice and vary with recipe, humidity and packaging."
      }
    },

    faqHead: {
      eyebrow: "Frequently asked",
      title: "Cookies, boxes and the brand",
      text: "The questions that come up most often about the collection, corporate sends and the current stage of the brand."
    },

    faq: [
      {
        q: "Is QRABİYE taking orders right now?",
        a: "No. QRABİYE is currently being developed as a brand and collection concept; there is no sales, stock or delivery system behind this site. That is why no prices or availability are shown."
      },
      {
        q: "What should you look for in a gift cookie box?",
        a: "Three things decide it: the flavour range inside, how well the cookies survive transport, and whether the packaging keeps moisture out. In mixed boxes, keeping crisp and soft textures in separate compartments preserves quality."
      },
      {
        q: "Why are cookies chosen for corporate gifts?",
        a: "They are shareable, they travel better than chocolate, and the packaging adapts easily to a brand identity. They are also simple to portion and serve in an office."
      },
      {
        q: "How is allergen information handled?",
        a: "The concept is built on stating gluten, dairy, egg and tree-nut content clearly on every box. Where production shares a kitchen, cross-contamination risk is declared as well."
      },
      {
        q: "Can occasion boxes be personalised?",
        a: "The concept allows personalisation at the level of card message, ribbon colour and flavour arrangement. For corporate sends, packaging is planned to follow the company's colour and logo."
      }
    ],

    acquire: {
      eyebrow: "About this digital project",
      title: "About the QRABİYE brand and domain",
      text:
        "QRABİYE is a brand, concept and domain project positioned in the cookie and gifting category. For acquisition, partnership or business proposals regarding this brand, project or domain, contact us.",
      note: "All conversations are handled in confidence.",
      cta: "Send an email",
      subject: "qrabiye.com.tr — brand and domain enquiry"
    }
  },

  /* ------------------------------------------------------------------ AR */
  ar: {
    meta: {
      title: "QRABİYE | كوكيز حرفي وعلب هدايا من الكوكيز",
      description:
        "QRABİYE مفهوم علامة تجارية تركية للكوكيز الحرفي: وصفات الزبدة الكلاسيكية والشوكولاتة والفواكه المجففة، مقدَّمة داخل علب هدايا مصمَّمة للمناسبات والهدايا المؤسسية.",
      ogTitle: "QRABİYE — كوكيز حرفي وعلب هدايا"
    },

    nav: [
      { href: "#koleksiyon", label: "المجموعة" },
      { href: "#kutular", label: "علب الهدايا" },
      { href: "#kurumsal", label: "الهدايا المؤسسية" },
      { href: "#rehber", label: "دليل الكوكيز" },
      { href: "#sss", label: "الأسئلة الشائعة" }
    ],

    headerCta: { href: "#proje", label: "تواصل معنا" },
    footerTagline: "مشروع علامة تجارية قائم على الكوكيز الحرفي وعلب الهدايا والهدايا المؤسسية.",

    hero: {
      eyebrow: "كوكيز حرفي · علب هدايا",
      title: "أرقى ضيافة تتّسع لها علبة صغيرة",
      text:
        "‏QRABİYE مفهوم علامة تركية حديثة يجمع بين مجموعة من الكوكيز — كلاسيكيات الزبدة، ووصفات الشوكولاتة، وخلطات الفواكه المجففة — وبين علب هدايا مصمَّمة للمناسبات الخاصة والهدايا المؤسسية.",
      actions: [
        { href: "#koleksiyon", label: "تصفَّح المجموعة" },
        { href: "#kurumsal", label: "الهدايا المؤسسية" }
      ],
      meta: [
        { icon: "cookie", text: "نهج إنتاج حرفي يدوي" },
        { icon: "gift", text: "علب مصمَّمة للإهداء" },
        { icon: "note", text: "بيان واضح للمكوّنات ومسبّبات الحساسية" }
      ]
    },

    collection: {
      head: {
        eyebrow: "المجموعة",
        title: "عائلات الكوكيز وملامح النكهة",
        text:
          "تقوم المجموعة على ست عائلات نكهة متمايزة، مرتَّبة بحيث تمنح العلبة المشكَّلة تسلسل تذوّق متوازنًا."
      },
      items: [
        {
          icon: "cookie",
          title: "كلاسيكيات الزبدة",
          text:
            "وصفات بسيطة تحكمها نسبة الطحين والزبدة والسكر، بقوام يذوب في الفم ونكهة زبدة واضحة تشكّل أساس المجموعة.",
          chips: ["كوكيز الزبدة", "فانيليا", "سادة"]
        },
        {
          icon: "flame",
          title: "وصفات الشوكولاتة",
          text: "تُحضَّر بقطع الشوكولاتة الداكنة والحليب، بحوافّ مقرمشة وقلب طري.",
          chips: ["داكنة", "رقائق شوكولاتة", "كاكاو"]
        },
        {
          icon: "sprout",
          title: "بندق وفستق ولوز",
          text:
            "وصفات قائمة على المكسرات المحمّصة؛ نسبة الدهون الأعلى تمنحها قوامًا أكثف وإحساسًا أطول بالشبع.",
          chips: ["بندق", "فستق حلبي", "لوز"]
        },
        {
          icon: "leaf",
          title: "خلطات الفواكه المجففة",
          text: "مشمش وتين وكرز وتوت بري تُوازن العجينة وتمنح نكهة أكثر حموضة وانتعاشًا.",
          chips: ["مشمش", "كرز", "تين"]
        },
        {
          icon: "sun",
          title: "بهارات ونكهات موسمية",
          text: "وصفات موسمية تتشكّل بالقرفة والزنجبيل والهيل وقشر البرتقال.",
          chips: ["قرفة", "زنجبيل", "برتقال"]
        },
        {
          icon: "shield",
          title: "سكر أقل وأنواع طحين بديلة",
          text: "مجموعة وصفات بسكر مخفَّض أو بطحين القمح الكامل والشوفان واللوز.",
          chips: ["سكر أقل", "قمح كامل", "شوفان"]
        }
      ]
    },

    boxes: {
      head: {
        eyebrow: "علب الهدايا",
        title: "العلبة نصف الهدية",
        text:
          "على علبة الكوكيز أن تؤدي ثلاث مهام في آن واحد: تحمّل النقل، وحفظ الطزاجة، وحسن التقديم. لذلك خُطِّطت المجموعة بثلاثة أحجام وفق هذه المعايير."
      },
      items: [
        {
          icon: "box",
          title: "علبة الضيافة",
          text: "حجم صغير يناسب المكتب أو شكرًا لطيفًا أو زيارة عائلية، من عائلة نكهة واحدة أو اثنتين.",
          chips: ["حجم صغير", "نكهة واحدة", "شكر"]
        },
        {
          icon: "gift",
          title: "علبة المناسبات",
          text: "تشكيلة مختلطة لأعياد الميلاد والذكرى السنوية والأعياد، مع بطاقة وشريط قابلين للتخصيص.",
          chips: ["مشكَّلة", "بطاقة شخصية", "مناسبات"]
        },
        {
          icon: "award",
          title: "المجموعة المؤسسية",
          text: "مصمَّمة للإرسال بكميات، بتغليف يمكن مواءمته مع ألوان الشركة وشعارها.",
          chips: ["كميات", "تغليف بالعلامة", "مؤسسي"]
        }
      ]
    },

    corporate: {
      head: {
        eyebrow: "الهدايا المؤسسية",
        title: "لماذا ينجح الكوكيز كهدية شركات؟",
        text:
          "أصعب ما في الهدية المؤسسية أن تناسب الجميع دون أن تبدو نمطية، والكوكيز يقع تمامًا في هذه المساحة."
      },
      blocks: [
        {
          h3: "ما الذي يميّزه؟",
          p: [
            "علبة الكوكيز قابلة للمشاركة، فتصل إلى الفريق كله بدل شخص واحد، كما أنها أقل حساسية للحرارة من الشوكولاتة وأكثر تحمّلًا للنقل."
          ],
          ul: [
            "إرساليات نهاية العام والأعياد والذكرى السنوية للشركة",
            "علب ترحيب بالعملاء والمورّدين الجدد",
            "ضيافة طاولات المعارض وحفلات الإطلاق",
            "علبة ترحيب بالزملاء الجدد"
          ]
        },
        {
          h3: "كيف يجري التخطيط؟",
          p: [
            "تحكم الإرسالية المؤسسية ثلاثة متغيّرات: الكمية، وتاريخ التسليم، ومدى التزام التغليف بهوية العلامة. وبتحديدها يُبنى ترتيب النكهات وحجم العلبة."
          ]
        }
      ],
      panel: {
        title: "معلومات مفيدة عند إرسال طلب مؤسسي",
        items: [
          { term: "نطاق الكمية", detail: "عدد العلب التقريبي وعدد نقاط التسليم" },
          { term: "التاريخ", detail: "تاريخ التسليم المستهدف وهامش المرونة" },
          { term: "قيود غذائية", detail: "مسبّبات الحساسية أو خيارات السكر المخفَّض أو النباتية" },
          { term: "هوية العلامة", detail: "الشعار والألوان ودليل الهوية إن وُجد" },
          { term: "نطاق الميزانية", detail: "المدى المستهدف لكل علبة" }
        ]
      }
    },

    guide: {
      head: {
        eyebrow: "دليل الكوكيز",
        title: "الطزاجة والتخزين وحسن التقديم",
        text:
          "تعتمد النكهة على طريقة الحفظ بقدر اعتمادها على الوصفة، والملاحظات التالية تكفي للحفاظ على القوام كما في اليوم الأول."
      },
      blocks: [
        {
          h3: "لماذا يلين بعض الكوكيز سريعًا؟",
          p: [
            "يتبادل الكوكيز الرطوبة مع الهواء المحيط: فالقطعة المقرمشة تمتصّ الرطوبة فتلين، والقطعة الطرية تفقد رطوبتها فتقسو. لذلك يُفسد حفظ القوامين معًا لفترة طويلة كليهما."
          ]
        },
        {
          h3: "ثلاث قواعد للتخزين",
          ul: [
            "استخدم وعاءً محكم الإغلاق؛ جودة الإحكام أهم من حرارة الغرفة.",
            "افصل المقرمش عن الطري في وعاءين مختلفين.",
            "ابتعد عن أشعة الشمس المباشرة والأسطح الساخنة كأعلى الفرن.",
            "معظم الأنواع لا تحتاج إلى التبريد، وقد يسرّع الثلاجة تقادمها.",
            "للحفظ الطويل، التجميد أفضل بكثير من الثلاجة."
          ]
        }
      ],
      table: {
        caption: "إرشادات التخزين حسب نوع الكوكيز",
        head: ["النوع", "القوام", "في حرارة الغرفة", "ملاحظات"],
        rows: [
          ["كلاسيك الزبدة", "مقرمش", "10–14 يومًا", "يُحفظ محكمًا بعيدًا عن الرطوبة"],
          ["شوكولاتة", "حافّة مقرمشة وقلب طري", "7–10 أيام", "قد تتبيّض الشوكولاتة في الأجواء الدافئة"],
          ["مكسرات", "كثيف وغني", "7–10 أيام", "نسبة الدهون العالية تفضّل مكانًا باردًا"],
          ["فواكه مجففة", "طري", "5–7 أيام", "رطوبة الفاكهة تليّن العجينة مع الوقت"],
          ["سكر أقل / طحين بديل", "متغيّر", "4–6 أيام", "السكر مادة حافظة، لذا يقصر العمر"]
        ],
        note: "القيم تقريبية مبنية على الممارسة المطبخية العامة، وتتغيّر بحسب الوصفة والرطوبة والتغليف."
      }
    },

    faqHead: {
      eyebrow: "الأسئلة الشائعة",
      title: "عن الكوكيز والعلب والعلامة",
      text: "أكثر ما يُسأل عن المجموعة والإرساليات المؤسسية والمرحلة الحالية للعلامة."
    },

    faq: [
      {
        q: "هل يستقبل QRABİYE الطلبات حاليًا؟",
        a: "لا. يجري تطوير QRABİYE في هذه المرحلة كمفهوم علامة ومجموعة، ولا توجد خلف الموقع منظومة بيع أو مخزون أو توصيل، ولهذا لا تُعرض أسعار أو حالة توافر."
      },
      {
        q: "ما الذي ينبغي مراعاته عند اختيار علبة كوكيز للهدية؟",
        a: "ثلاثة عوامل: تنوّع النكهات داخل العلبة، وقدرة القطع على تحمّل النقل، ومنع التغليف لدخول الرطوبة. وفي العلب المشكَّلة يحافظ فصل المقرمش عن الطري على الجودة."
      },
      {
        q: "لماذا يُختار الكوكيز للهدايا المؤسسية؟",
        a: "لأنه قابل للمشاركة، وأكثر تحمّلًا للنقل من الشوكولاتة، ويسهل مواءمة تغليفه مع هوية العلامة، كما يسهل تقسيمه وتقديمه في بيئة المكتب."
      },
      {
        q: "كيف تُعالَج معلومات مسبّبات الحساسية؟",
        a: "يقوم المفهوم على ذكر الغلوتين ومشتقات الحليب والبيض والمكسرات بوضوح على كل علبة، ويُصرَّح كذلك باحتمال التلوّث المتبادل عند الإنتاج في مطبخ مشترك."
      },
      {
        q: "هل يمكن تخصيص علب المناسبات؟",
        a: "يتيح المفهوم التخصيص على مستوى نص البطاقة ولون الشريط وترتيب النكهات، ويُخطَّط في الإرساليات المؤسسية لمواءمة التغليف مع ألوان الشركة وشعارها."
      }
    ],

    acquire: {
      eyebrow: "عن هذا المشروع الرقمي",
      title: "بشأن علامة QRABİYE واسم النطاق",
      text:
        "‏QRABİYE مشروع علامة ومفهوم واسم نطاق في مجال الكوكيز والهدايا. للاستفسار عن الاستحواذ أو الشراكة أو أي مقترح تجاري يخصّ هذه العلامة أو المشروع أو النطاق، يسعدنا تواصلكم معنا.",
      note: "تُدار جميع المحادثات بسرّية تامة.",
      cta: "أرسل رسالة",
      subject: "qrabiye.com.tr — استفسار عن العلامة واسم النطاق"
    }
  }
};
