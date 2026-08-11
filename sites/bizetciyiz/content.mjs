/* BİZ ETÇİYİZ — bizetciyiz.com.tr
   Premium kasap ve et kültürü markası konsepti.
   Sitede satış, stok, fiyat, teslimat veya müşteri yorumu iddiası yoktur;
   içerik et parçaları, pişirme ve saklama bilgisi üzerine kuruludur. */

export const content = {
  /* ------------------------------------------------------------------ TR */
  tr: {
    meta: {
      title: "BİZ ETÇİYİZ | Kasap Kültürü, Et Parçaları ve Pişirme Rehberi",
      description:
        "Dana ve kuzu et parçaları, hangi kesimin hangi yönteme uygun olduğu, iç pişirme sıcaklıkları ve saklama koşulları üzerine bir kasap markası konsepti.",
      ogTitle: "BİZ ETÇİYİZ — Kasap kültürü ve et rehberi"
    },

    nav: [
      { href: "#etler", label: "Et çeşitleri" },
      { href: "#parcalar", label: "Et parçaları" },
      { href: "#pisirme", label: "Pişirme rehberi" },
      { href: "#kalite", label: "Kalite ilkeleri" },
      { href: "#sss", label: "Sık sorulanlar" }
    ],

    headerCta: { href: "#proje", label: "İletişim" },
    footerTagline:
      "Et parçaları, pişirme yöntemleri ve kasap kültürü üzerine kurulu bir premium kasap markası projesi.",

    hero: {
      eyebrow: "Kasap kültürü · Dana · Kuzu",
      title: "İyi et, doğru parçayı doğru yönteme teslim etmekle başlar",
      text:
        "BİZ ETÇİYİZ; hangi kesimin hangi pişirme yöntemine uygun olduğunu, iç sıcaklıkların ne anlama geldiğini ve etin nasıl saklanacağını anlaşılır biçimde aktarmayı hedefleyen bir kasap markası konseptidir.",
      actions: [
        { href: "#parcalar", label: "Et parçalarını görün" },
        { href: "#pisirme", label: "Pişirme rehberi" }
      ],
      meta: [
        { icon: "knife", text: "Kesim ve parça odaklı yaklaşım" },
        { icon: "thermometer", text: "İç sıcaklıkla pişirme" },
        { icon: "shield", text: "Soğuk zincir disiplini" }
      ]
    },

    categories: {
      head: {
        eyebrow: "Et çeşitleri",
        title: "Etin sınıflandırılması, mutfakta işe yarayan biçimiyle",
        text:
          "Bir eti tanımlayan şey hayvan türü kadar, o parçanın hayvanın hangi bölgesinden geldiğidir. Çok çalışan kaslar bağ dokusu yönünden zengindir ve uzun pişirme ister; az çalışanlar ise kısa sürede yüksek ısıda pişer."
      },
      items: [
        {
          icon: "flame",
          title: "Izgaralık kesimler",
          text:
            "Bonfile, antrikot, kontrfile ve pirzola gibi az çalışan kaslardan gelen, kısa sürede yüksek ısıda pişirilen parçalar.",
          chips: ["antrikot", "bonfile", "pirzola"]
        },
        {
          icon: "clock",
          title: "Yavaş pişirmelik kesimler",
          text:
            "Kaburga, döş, incik ve gerdan gibi bağ dokusu yüksek parçalar. Kollajen ancak uzun ve düşük ısıda jelatine dönüşür.",
          chips: ["kaburga", "incik", "gerdan"]
        },
        {
          icon: "knife",
          title: "Dana eti",
          text:
            "Mermerlenme, dinlendirme süresi ve kesim yönü dana ette lezzetin üç belirleyicisidir.",
          chips: ["dana", "mermerlenme", "rosto"]
        },
        {
          icon: "olive",
          title: "Kuzu eti",
          text:
            "Kendine özgü yağ profili nedeniyle baharatla dengelenir. Pirzola hızlı, gerdan ve kol ise uzun pişirmeye uygundur.",
          chips: ["kuzu", "pirzola", "but"]
        },
        {
          icon: "box",
          title: "Kıyma ve köftelik",
          text:
            "Kıymada belirleyici olan et–yağ oranı ve çekim inceliğidir. Köftede yağsız kıyma kuru bir sonuç verir.",
          chips: ["kıyma", "köftelik", "yağ oranı"]
        },
        {
          icon: "thermometer",
          title: "Hazırlık kesimleri",
          text:
            "Kuşbaşı, sote ve şiş gibi porsiyonlanmış hazırlıklar; parça boyutu pişirme süresini doğrudan belirler.",
          chips: ["kuşbaşı", "şiş", "sote"]
        }
      ]
    },

    cuts: {
      head: {
        eyebrow: "Et parçaları",
        title: "Hangi parça, hangi yöntem?",
        text:
          "Aşağıdaki tablo, kasap tezgâhında en sık karşılaşılan parçaları doku özellikleri ve uygun pişirme yöntemleriyle birlikte özetler."
      },
      table: {
        caption: "Dana ve kuzu kesimlerinin doku özellikleri ve uygun pişirme yöntemleri",
        head: ["Parça", "Tür", "Doku özelliği", "Uygun yöntem"],
        rows: [
          ["Bonfile", "Dana", "En yumuşak kas, yağ oranı düşük", "Kısa süre, yüksek ısı"],
          ["Antrikot", "Dana", "Kas içi yağ (mermerlenme) belirgin", "Izgara, döküm tava"],
          ["Kontrfile", "Dana", "Dış yağ tabakası dokuyu korur", "Izgara, mühürleyip fırın"],
          ["Nuar", "Dana", "Yağsız ve lifli", "Rosto, haşlama, ince dilimleme"],
          ["Kaburga", "Dana", "Bağ dokusu ve yağ yüksek", "Düşük ısıda uzun pişirme"],
          ["Döş", "Dana", "Kalın bağ dokulu, yağlı", "Yavaş pişirme, tütsüleme"],
          ["İncik", "Dana / Kuzu", "Kollajen bakımından zengin", "Fırında veya tencerede uzun süre"],
          ["Pirzola", "Kuzu", "İnce ve hızlı pişen", "Izgara"],
          ["Gerdan", "Kuzu", "Bol bağ dokulu", "Güveç, tencere yemeği"],
          ["But", "Kuzu", "Az yağlı ve iri parça", "Bütün hâlde fırın"],
          ["Kıyma", "Dana / Kuzu", "Et–yağ oranı sonucu belirler", "Köfte, sote, ragu"]
        ],
        note:
          "Tablo genel mutfak pratiğini özetler; sonuç hayvanın yaşı, besleme rejimi ve dinlendirme süresine göre değişir."
      }
    },

    cooking: {
      head: {
        eyebrow: "Pişirme rehberi",
        title: "İç sıcaklık, sürenin yerini alır",
        text:
          "Süreyle pişirmek etin kalınlığına, başlangıç sıcaklığına ve ocağın gücüne bağlı olduğu için değişkendir. İç sıcaklığı ölçmek ise tek nesnel yöntemdir."
      },
      table: {
        caption: "Bütün kesimlerde hedef iç sıcaklık aralıkları",
        head: ["Pişme derecesi", "Hedef iç sıcaklık", "Sonuç"],
        rows: [
          ["Az pişmiş (rare)", "52–55 °C", "Merkez canlı kırmızı, çok yumuşak"],
          ["Orta az (medium rare)", "55–58 °C", "Pembe merkez, en dengeli sululuk"],
          ["Orta (medium)", "58–63 °C", "Açık pembe, daha sıkı doku"],
          ["Orta iyi (medium well)", "63–68 °C", "Pembelik azalır, su kaybı artar"],
          ["İyi pişmiş (well done)", "70 °C ve üzeri", "Homojen renk, belirgin sıkılık"]
        ],
        note:
          "Kıyma ve kıymadan yapılan ürünlerin, yüzeydeki mikroorganizmalar karışıma dağıldığı için tamamen pişirilmesi (yaklaşık 71 °C) önerilir."
      },
      blocks: [
        {
          h3: "Dinlendirme neden gereklidir?",
          p: [
            "Pişirme sırasında kas lifleri kasılır ve suyu merkeze doğru iter. Et ocaktan alındıktan sonra 5–10 dakika dinlendirildiğinde bu su lifler arasına yeniden dağılır; ilk kesişte tabağa akan sıvı belirgin biçimde azalır."
          ]
        },
        {
          h3: "Kesim yönü sonucu değiştirir",
          p: [
            "Et, kas lifi yönüne dik olarak dilimlendiğinde çiğneme sırasında kırılması gereken lif uzunluğu kısalır. Aynı parça, yanlış yönde kesildiğinde belirgin biçimde sert algılanır."
          ]
        },
        {
          h3: "Yüzey kuruluğu ve mühürleme",
          p: [
            "Kızarma tepkimesinin oluşabilmesi için et yüzeyinin kuru olması gerekir. Islak yüzey önce buharlaşmaya harcandığı için renk ve aroma gelişimi gecikir."
          ]
        }
      ]
    },

    quality: {
      head: {
        eyebrow: "Kalite ilkeleri",
        title: "Tezgâhın arkasında değişmeyen kurallar",
        text:
          "Et kalitesi tek bir aşamada değil, kesimden tezgâha kadar olan zincirin tamamında korunur veya kaybedilir."
      },
      blocks: [
        {
          h3: "Dinlendirme ve olgunlaştırma",
          p: [
            "Kesimden hemen sonra kaslar sertleşir; bu evre çözülmeden etin yumuşaklığı ortaya çıkmaz. Kontrollü koşullarda süren olgunlaştırma sürecinde etin kendi enzimleri bağ dokusunu gevşetir. Kuru olgunlaştırmada yüzeyden nem kaybı yaşanır ve aroma yoğunlaşır; ıslak olgunlaştırmada ise et vakumlu ambalajında bekletilir."
          ]
        },
        {
          h3: "Soğuk zincir",
          p: [
            "Etin bozulmasını hızlandıran tek değişken sıcaklıktır. Kesimden tezgâha, tezgâhtan eve kadar sıcaklığın kesintisiz düşük tutulması, tazeliğin görünürdeki bütün göstergelerinden daha belirleyicidir."
          ],
          ul: [
            "Alışverişte et en son alınır ve doğrudan eve gidilir",
            "Buzdolabında en soğuk raf ete ayrılır",
            "Çiğ et, pişmiş ürünlerden ayrı ve alt rafta saklanır",
            "Çiğ et için ayrı kesme tahtası ve bıçak kullanılır"
          ]
        }
      ],
      panel: {
        title: "Saklama ve çözdürme",
        items: [
          { term: "Buzdolabı", detail: "0–4 °C aralığında, kapalı kapta" },
          { term: "Derin dondurucu", detail: "−18 °C ve altı; porsiyonlanarak dondurulur" },
          { term: "Çözdürme", detail: "Oda sıcaklığında değil, buzdolabında yapılır" },
          { term: "Tekrar dondurma", detail: "Çözülmüş çiğ et yeniden dondurulmaz" },
          { term: "Kıyma", detail: "Yüzey alanı büyük olduğundan en kısa sürede tüketilir" }
        ]
      }
    },

    faqHead: {
      eyebrow: "Sık sorulan sorular",
      title: "Et seçimi ve pişirme hakkında",
      text: "Tezgâhta ve mutfakta en çok karşılaşılan sorular."
    },

    faq: [
      {
        q: "Etin koyu rengi bozulduğu anlamına mı gelir?",
        a: "Her zaman değil. Kırmızı etin rengi, kastaki miyoglobinin oksijenle temasına göre değişir; vakumlu ambalajda bekleyen et koyu görünür ve havayla temas ettiğinde parlak kırmızıya döner. Bozulmanın göstergesi renk değil, koku, yapışkan yüzey ve ambalaj şişmesidir."
      },
      {
        q: "Olgunlaştırma tam olarak ne sağlar?",
        a: "Etin kendi enzimleri, kontrollü sıcaklık ve nemde bağ dokusunu gevşetir; sonuçta doku yumuşar ve aroma yoğunlaşır. Kuru olgunlaştırmada nem kaybı nedeniyle tat daha konsantre, verim ise daha düşüktür."
      },
      {
        q: "Aynı et neden bazen sert oluyor?",
        a: "Üç neden öne çıkar: parçanın bağ dokusu oranına uygun olmayan pişirme yöntemi, iç sıcaklığın hedefi aşması ve etin lif yönünde dilimlenmesi. Yavaş pişirmelik bir parçayı ızgarada pişirmek en sık yapılan hatadır."
      },
      {
        q: "Köftelik kıymada yağ oranı ne olmalı?",
        a: "Genel mutfak pratiğinde köfte ve burger için yaklaşık %15–20 yağ oranı dengeli kabul edilir. Tamamen yağsız kıyma pişirmede kurur; çok yağlı kıyma ise ızgarada dağılabilir."
      },
      {
        q: "Donmuş et nasıl çözdürülmelidir?",
        a: "En güvenli yöntem, etin ambalajıyla birlikte buzdolabında yavaş çözdürülmesidir. Oda sıcaklığında bekletmek yüzey sıcaklığını mikrobiyal üreme aralığına taşır. Çözülen çiğ et yeniden dondurulmamalıdır."
      },
      {
        q: "BİZ ETÇİYİZ şu anda satış yapıyor mu?",
        a: "Hayır. BİZ ETÇİYİZ bu aşamada bir kasap markası ve içerik konsepti olarak geliştirilmektedir; sitede ürün satışı, stok, fiyat veya teslimat altyapısı bulunmamaktadır."
      }
    ],

    acquire: {
      eyebrow: "Bu dijital proje hakkında",
      title: "BİZ ETÇİYİZ markası ve alan adı hakkında",
      text:
        "BİZ ETÇİYİZ, kasap ve et kategorisinde konumlandırılmış bir marka, konsept ve alan adı projesidir. Marka, proje veya alan adıyla ilgili satın alma ve iş birliği teklifleri için bizimle iletişime geçebilirsiniz.",
      note: "Tüm görüşmeler karşılıklı gizlilik esasıyla yürütülür.",
      cta: "E-posta gönderin",
      subject: "bizetciyiz.com.tr — marka ve alan adı hakkında"
    }
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    meta: {
      title: "BİZ ETÇİYİZ | Butchery Craft, Cuts of Meat and a Cooking Guide",
      description:
        "A premium butcher brand concept built around beef and lamb cuts, which cut suits which method, target internal temperatures, resting, and correct storage and thawing.",
      ogTitle: "BİZ ETÇİYİZ — Butchery craft and meat guide"
    },

    nav: [
      { href: "#etler", label: "Meat types" },
      { href: "#parcalar", label: "Cuts" },
      { href: "#pisirme", label: "Cooking guide" },
      { href: "#kalite", label: "Quality" },
      { href: "#sss", label: "FAQ" }
    ],

    headerCta: { href: "#proje", label: "Contact" },
    footerTagline:
      "A premium butcher brand project built around cuts of meat, cooking method and butchery craft.",

    hero: {
      eyebrow: "Butchery · Beef · Lamb",
      title: "Good meat begins by handing the right cut to the right method",
      text:
        "BİZ ETÇİYİZ is a butcher brand concept built to explain, clearly, which cut suits which cooking method, what internal temperatures actually mean, and how meat should be stored.",
      actions: [
        { href: "#parcalar", label: "See the cuts" },
        { href: "#pisirme", label: "Cooking guide" }
      ],
      meta: [
        { icon: "knife", text: "A cut-led approach" },
        { icon: "thermometer", text: "Cooking by internal temperature" },
        { icon: "shield", text: "Cold chain discipline" }
      ]
    },

    categories: {
      head: {
        eyebrow: "Meat types",
        title: "Classification as it is actually useful in a kitchen",
        text:
          "What defines a piece of meat is not only the animal but the part of it that the muscle came from. Hard-working muscles are rich in connective tissue and need long cooking; the ones that work least cook fast over high heat."
      },
      items: [
        {
          icon: "flame",
          title: "Grilling cuts",
          text:
            "Fillet, ribeye, sirloin and chops — from muscles that work little, cooked briefly over high heat.",
          chips: ["ribeye", "fillet", "chops"]
        },
        {
          icon: "clock",
          title: "Slow-cooking cuts",
          text:
            "Short rib, brisket, shank and neck, all high in connective tissue. Collagen only turns to gelatine given time and low heat.",
          chips: ["short rib", "shank", "neck"]
        },
        {
          icon: "knife",
          title: "Beef",
          text: "Marbling, ageing time and the direction of slicing are the three things that decide flavour in beef.",
          chips: ["beef", "marbling", "roast"]
        },
        {
          icon: "olive",
          title: "Lamb",
          text:
            "Its distinctive fat profile is balanced with spice. Chops cook fast; neck and shoulder reward long cooking.",
          chips: ["lamb", "chops", "leg"]
        },
        {
          icon: "box",
          title: "Mince",
          text:
            "What matters in mince is the meat-to-fat ratio and the coarseness of the grind. Lean mince gives a dry result in meatballs.",
          chips: ["mince", "meatballs", "fat ratio"]
        },
        {
          icon: "thermometer",
          title: "Prepared cuts",
          text: "Cubed, stir-fry and skewer preparations, where piece size directly sets the cooking time.",
          chips: ["cubed", "skewer", "stir-fry"]
        }
      ]
    },

    cuts: {
      head: {
        eyebrow: "Cuts",
        title: "Which cut, which method?",
        text:
          "The table below summarises the cuts most often seen at the counter, with their texture and the method that suits them."
      },
      table: {
        caption: "Texture and suitable cooking method for beef and lamb cuts",
        head: ["Cut", "Animal", "Texture", "Suitable method"],
        rows: [
          ["Fillet", "Beef", "Softest muscle, low in fat", "Short, high heat"],
          ["Ribeye", "Beef", "Pronounced intramuscular fat", "Grill, cast iron pan"],
          ["Sirloin", "Beef", "Outer fat cap protects the texture", "Grill, or sear then roast"],
          ["Silverside", "Beef", "Lean and fibrous", "Roast, braise, slice thin"],
          ["Short rib", "Beef", "High in connective tissue and fat", "Long cooking at low heat"],
          ["Brisket", "Beef", "Thick connective tissue, fatty", "Slow cooking, smoking"],
          ["Shank", "Beef / Lamb", "Rich in collagen", "Long in the oven or a pot"],
          ["Chops", "Lamb", "Thin and quick to cook", "Grill"],
          ["Neck", "Lamb", "Plenty of connective tissue", "Casserole, stew"],
          ["Leg", "Lamb", "Lean and large", "Roasted whole"],
          ["Mince", "Beef / Lamb", "Meat-to-fat ratio decides the result", "Meatballs, sautés, ragù"]
        ],
        note:
          "The table summarises general kitchen practice; results vary with the animal's age, feeding and ageing time."
      }
    },

    cooking: {
      head: {
        eyebrow: "Cooking guide",
        title: "Internal temperature replaces timing",
        text:
          "Timing varies with thickness, starting temperature and the power of the heat. Measuring internal temperature is the one objective method."
      },
      table: {
        caption: "Target internal temperature ranges for whole cuts",
        head: ["Doneness", "Target internal temperature", "Result"],
        rows: [
          ["Rare", "52–55 °C", "Bright red centre, very tender"],
          ["Medium rare", "55–58 °C", "Pink centre, the most balanced juiciness"],
          ["Medium", "58–63 °C", "Light pink, firmer texture"],
          ["Medium well", "63–68 °C", "Little pink left, more moisture lost"],
          ["Well done", "70 °C and above", "Even colour, noticeably firm"]
        ],
        note:
          "Mince and products made from it should be cooked through (around 71 °C), because surface microorganisms are distributed through the mixture."
      },
      blocks: [
        {
          h3: "Why resting matters",
          p: [
            "While cooking, muscle fibres contract and push moisture towards the centre. Resting the meat for five to ten minutes lets that moisture redistribute between the fibres, and far less of it runs onto the plate at the first cut."
          ]
        },
        {
          h3: "Slicing direction changes the result",
          p: [
            "Slicing across the grain shortens the fibres that have to be broken while chewing. The same cut, sliced the wrong way, is perceived as noticeably tougher."
          ]
        },
        {
          h3: "A dry surface and searing",
          p: [
            "Browning needs a dry surface. When the surface is wet, the first energy goes into evaporation, and colour and aroma development are delayed."
          ]
        }
      ]
    },

    quality: {
      head: {
        eyebrow: "Quality",
        title: "The rules that do not change behind the counter",
        text:
          "Meat quality is not preserved or lost at a single stage, but across the whole chain from slaughter to counter."
      },
      blocks: [
        {
          h3: "Resting and ageing",
          p: [
            "Muscles stiffen immediately after slaughter, and tenderness does not appear until that phase resolves. During controlled ageing the meat's own enzymes loosen connective tissue. Dry ageing loses moisture from the surface and concentrates flavour; wet ageing keeps the meat in vacuum packaging."
          ]
        },
        {
          h3: "The cold chain",
          p: [
            "Temperature is the single variable that accelerates spoilage. Keeping it low without interruption — from slaughter to counter and counter to home — matters more than any visible sign of freshness."
          ],
          ul: [
            "Buy meat last and go straight home",
            "Give meat the coldest shelf in the fridge",
            "Store raw meat below and apart from cooked food",
            "Use a separate board and knife for raw meat"
          ]
        }
      ],
      panel: {
        title: "Storage and thawing",
        items: [
          { term: "Refrigerator", detail: "Between 0 and 4 °C, in a closed container" },
          { term: "Freezer", detail: "−18 °C or below; freeze in portions" },
          { term: "Thawing", detail: "In the fridge, never at room temperature" },
          { term: "Refreezing", detail: "Thawed raw meat should not be refrozen" },
          { term: "Mince", detail: "Large surface area, so use it soonest" }
        ]
      }
    },

    faqHead: {
      eyebrow: "Frequently asked",
      title: "About choosing and cooking meat",
      text: "The questions that come up most often at the counter and in the kitchen."
    },

    faq: [
      {
        q: "Does dark colour mean the meat has spoiled?",
        a: "Not necessarily. The colour of red meat depends on how the myoglobin in the muscle meets oxygen; meat kept in vacuum packaging looks dark and turns bright red on contact with air. Spoilage shows in smell, a sticky surface and a swollen pack — not in colour."
      },
      {
        q: "What does ageing actually do?",
        a: "At controlled temperature and humidity the meat's own enzymes loosen connective tissue, so texture softens and aroma concentrates. Dry ageing gives more concentrated flavour and lower yield because of moisture loss."
      },
      {
        q: "Why is the same cut sometimes tough?",
        a: "Three reasons dominate: a cooking method that does not match the cut's connective tissue, an internal temperature taken past the target, and slicing along the grain instead of across it. Grilling a cut meant for slow cooking is the most common mistake."
      },
      {
        q: "What fat ratio suits mince for meatballs?",
        a: "In general kitchen practice, around 15–20% fat is considered balanced for meatballs and burgers. Completely lean mince dries out, while very fatty mince can fall apart on a grill."
      },
      {
        q: "How should frozen meat be thawed?",
        a: "The safest method is slow thawing in the fridge, still in its packaging. Leaving it at room temperature brings the surface into the range where microorganisms multiply. Thawed raw meat should not be refrozen."
      },
      {
        q: "Is BİZ ETÇİYİZ selling today?",
        a: "No. BİZ ETÇİYİZ is being developed as a butcher brand and content concept. There is no product sales, stock, pricing or delivery system behind this site."
      }
    ],

    acquire: {
      eyebrow: "About this digital project",
      title: "About the BİZ ETÇİYİZ brand and domain",
      text:
        "BİZ ETÇİYİZ is a brand, concept and domain project positioned in the butchery and meat category. For acquisition, partnership or business proposals regarding this brand, project or domain, contact us.",
      note: "All conversations are handled in confidence.",
      cta: "Send an email",
      subject: "bizetciyiz.com.tr — brand and domain enquiry"
    }
  },

  /* ------------------------------------------------------------------ AR */
  ar: {
    meta: {
      title: "BİZ ETÇİYİZ | حرفة الجزارة وقطعيات اللحم ودليل الطهي",
      description:
        "مفهوم علامة جزارة راقية يقوم على قطعيات لحم البقر والضأن، وأي قطعة تناسب أي طريقة طهي، ودرجات الحرارة الداخلية، والإراحة، وشروط الحفظ وإذابة التجميد.",
      ogTitle: "BİZ ETÇİYİZ — حرفة الجزارة ودليل اللحوم"
    },

    nav: [
      { href: "#etler", label: "أنواع اللحوم" },
      { href: "#parcalar", label: "القطعيات" },
      { href: "#pisirme", label: "دليل الطهي" },
      { href: "#kalite", label: "معايير الجودة" },
      { href: "#sss", label: "الأسئلة الشائعة" }
    ],

    headerCta: { href: "#proje", label: "تواصل معنا" },
    footerTagline: "مشروع علامة جزارة راقية يقوم على القطعيات وطرق الطهي وحرفة الجزارة.",

    hero: {
      eyebrow: "جزارة · لحم بقر · لحم ضأن",
      title: "اللحم الجيد يبدأ بتسليم القطعة الصحيحة للطريقة الصحيحة",
      text:
        "‏BİZ ETÇİYİZ مفهوم علامة جزارة يشرح بوضوح أي قطعة تناسب أي طريقة طهي، وما تعنيه درجات الحرارة الداخلية فعليًا، وكيف يُحفظ اللحم.",
      actions: [
        { href: "#parcalar", label: "تصفَّح القطعيات" },
        { href: "#pisirme", label: "دليل الطهي" }
      ],
      meta: [
        { icon: "knife", text: "منهج قائم على القطعية" },
        { icon: "thermometer", text: "طهي وفق الحرارة الداخلية" },
        { icon: "shield", text: "انضباط سلسلة التبريد" }
      ]
    },

    categories: {
      head: {
        eyebrow: "أنواع اللحوم",
        title: "تصنيف اللحم كما يفيد في المطبخ فعلًا",
        text:
          "ما يحدّد القطعة ليس نوع الحيوان فحسب بل موضع العضلة منه. فالعضلات كثيرة العمل غنية بالنسيج الضام وتحتاج طهيًا طويلًا، وأقلّها عملًا تنضج سريعًا على حرارة عالية."
      },
      items: [
        {
          icon: "flame",
          title: "قطعيات الشواء",
          text: "الفيليه والريب آي والسيرلوين والريش: عضلات قليلة العمل تُطهى سريعًا على حرارة عالية.",
          chips: ["ريب آي", "فيليه", "ريش"]
        },
        {
          icon: "clock",
          title: "قطعيات الطهي البطيء",
          text:
            "الضلوع والصدر والموزة والرقبة، وكلها غنية بالنسيج الضام. والكولاجين لا يتحوّل إلى جيلاتين إلا بالوقت والحرارة المنخفضة.",
          chips: ["ضلوع", "موزة", "رقبة"]
        },
        {
          icon: "knife",
          title: "لحم البقر",
          text: "التخطيط الدهني ومدة التعتيق واتجاه التقطيع هي العوامل الثلاثة التي تحدّد النكهة.",
          chips: ["بقر", "تخطيط دهني", "روست"]
        },
        {
          icon: "olive",
          title: "لحم الضأن",
          text: "يُوازَن ملمح دهنه المميّز بالتوابل؛ فالريش تنضج سريعًا، والرقبة والكتف تكافئان الطهي الطويل.",
          chips: ["ضأن", "ريش", "فخذ"]
        },
        {
          icon: "box",
          title: "اللحم المفروم",
          text: "المهم في المفروم نسبة اللحم إلى الدهن وخشونة الفرم؛ فالمفروم الخالي من الدهن يعطي كفتة جافة.",
          chips: ["مفروم", "كفتة", "نسبة الدهن"]
        },
        {
          icon: "thermometer",
          title: "التحضيرات المقطّعة",
          text: "المكعبات والسوتيه والأسياخ، وحجم القطعة هو ما يحدّد زمن الطهي مباشرة.",
          chips: ["مكعبات", "أسياخ", "سوتيه"]
        }
      ]
    },

    cuts: {
      head: {
        eyebrow: "القطعيات",
        title: "أي قطعة لأي طريقة؟",
        text: "يلخّص الجدول أكثر القطعيات حضورًا على المنضدة، مع قوامها والطريقة التي تناسبها."
      },
      table: {
        caption: "قوام قطعيات البقر والضأن وطرق الطهي المناسبة لها",
        head: ["القطعية", "الحيوان", "القوام", "الطريقة المناسبة"],
        rows: [
          ["فيليه", "بقر", "أطرى العضلات وقليل الدهن", "حرارة عالية لوقت قصير"],
          ["ريب آي", "بقر", "دهن داخلي واضح", "شواء أو مقلاة حديدية"],
          ["سيرلوين", "بقر", "طبقة دهن خارجية تحمي القوام", "شواء أو تحمير ثم فرن"],
          ["سيلفرسايد", "بقر", "قليل الدهن وليفي", "روست أو سلق وتقطيع رفيع"],
          ["ضلوع قصيرة", "بقر", "نسيج ضام ودهن مرتفعان", "طهي طويل بحرارة منخفضة"],
          ["صدر (بريسكِت)", "بقر", "نسيج ضام سميك ودهن", "طهي بطيء أو تدخين"],
          ["موزة", "بقر / ضأن", "غنية بالكولاجين", "فرن أو قدر لوقت طويل"],
          ["ريش", "ضأن", "رقيقة وسريعة النضج", "شواء"],
          ["رقبة", "ضأن", "نسيج ضام وفير", "طواجن ويخنات"],
          ["فخذ", "ضأن", "قليل الدهن وكبير", "شيّ كامل في الفرن"],
          ["مفروم", "بقر / ضأن", "نسبة اللحم إلى الدهن تحسم النتيجة", "كفتة، سوتيه، راغو"]
        ],
        note: "يلخّص الجدول الممارسة العامة، وتتغيّر النتيجة بعمر الحيوان وتغذيته ومدة التعتيق."
      }
    },

    cooking: {
      head: {
        eyebrow: "دليل الطهي",
        title: "الحرارة الداخلية تحلّ محلّ التوقيت",
        text:
          "يتغيّر التوقيت بحسب السماكة وحرارة البداية وقوة النار، أما قياس الحرارة الداخلية فهو الطريقة الموضوعية الوحيدة."
      },
      table: {
        caption: "نطاقات الحرارة الداخلية المستهدفة للقطع الكاملة",
        head: ["درجة النضج", "الحرارة الداخلية المستهدفة", "النتيجة"],
        rows: [
          ["نيء (Rare)", "52–55 °م", "قلب أحمر زاهٍ وطراوة عالية"],
          ["نصف نيء (Medium rare)", "55–58 °م", "قلب وردي وأفضل توازن في العصارة"],
          ["وسط (Medium)", "58–63 °م", "وردي فاتح وقوام أكثر تماسكًا"],
          ["فوق الوسط (Medium well)", "63–68 °م", "وردية أقل وفقد رطوبة أكبر"],
          ["ناضج تمامًا (Well done)", "70 °م فأكثر", "لون متجانس وتماسك واضح"]
        ],
        note:
          "يُنصح بطهي المفروم ومنتجاته حتى النضج التام (نحو 71 °م) لأن الأحياء الدقيقة السطحية تتوزّع داخل الخليط."
      },
      blocks: [
        {
          h3: "لماذا الإراحة ضرورية؟",
          p: [
            "تنقبض ألياف العضلة أثناء الطهي فتدفع العصارة نحو المركز. وإراحة اللحم من خمس إلى عشر دقائق تعيد توزيع تلك العصارة بين الألياف، فيقلّ كثيرًا ما يسيل في الطبق عند أول قطع."
          ]
        },
        {
          h3: "اتجاه التقطيع يغيّر النتيجة",
          p: [
            "التقطيع عموديًا على اتجاه الألياف يقصّر الألياف التي يجب كسرها أثناء المضغ، والقطعة نفسها تبدو أقسى بوضوح إذا قُطِّعت في الاتجاه الخاطئ."
          ]
        },
        {
          h3: "جفاف السطح والتحمير",
          p: [
            "يحتاج التحمير سطحًا جافًا؛ فحين يكون السطح رطبًا تُستهلك الطاقة أولًا في التبخير، فيتأخر تكوّن اللون والنكهة."
          ]
        }
      ]
    },

    quality: {
      head: {
        eyebrow: "معايير الجودة",
        title: "قواعد لا تتغيّر خلف المنضدة",
        text: "لا تُحفظ جودة اللحم أو تُفقد في مرحلة واحدة بل عبر السلسلة كاملة من الذبح إلى المنضدة."
      },
      blocks: [
        {
          h3: "الإراحة والتعتيق",
          p: [
            "تتيبّس العضلات بعد الذبح مباشرة، ولا تظهر الطراوة قبل انتهاء هذه المرحلة. وخلال التعتيق المضبوط ترخي إنزيمات اللحم نفسها النسيج الضام. التعتيق الجاف يفقد رطوبة سطحية ويركّز النكهة، والتعتيق الرطب يبقي اللحم في تغليف مفرّغ."
          ]
        },
        {
          h3: "سلسلة التبريد",
          p: [
            "الحرارة هي المتغيّر الوحيد الذي يسرّع الفساد. وإبقاؤها منخفضة دون انقطاع — من الذبح إلى المنضدة ومن المنضدة إلى البيت — أهم من كل علامات الطزاجة الظاهرة."
          ],
          ul: [
            "يُشترى اللحم في آخر جولة التسوّق ويُتوجَّه به إلى المنزل مباشرة",
            "يُخصَّص أبرد رفّ في الثلاجة للحم",
            "يُحفظ اللحم النيء أسفل الأطعمة المطهوة وبمعزل عنها",
            "يُستعمل لوح تقطيع وسكين منفصلان للّحم النيء"
          ]
        }
      ],
      panel: {
        title: "الحفظ وإذابة التجميد",
        items: [
          { term: "الثلاجة", detail: "بين صفر و4 °م في وعاء مغلق" },
          { term: "المجمّد", detail: "‏−18 °م فأقل، ويُجمَّد بحصص" },
          { term: "الإذابة", detail: "في الثلاجة لا في حرارة الغرفة" },
          { term: "إعادة التجميد", detail: "لا يُعاد تجميد اللحم النيء بعد إذابته" },
          { term: "المفروم", detail: "مساحته السطحية كبيرة فيُستهلك أولًا" }
        ]
      }
    },

    faqHead: {
      eyebrow: "الأسئلة الشائعة",
      title: "عن اختيار اللحم وطهيه",
      text: "أكثر ما يُسأل عند المنضدة وفي المطبخ."
    },

    faq: [
      {
        q: "هل اللون الداكن يعني فساد اللحم؟",
        a: "ليس بالضرورة. يتغيّر لون اللحم الأحمر بحسب تلامس الميوغلوبين مع الأكسجين؛ فاللحم في تغليف مفرّغ يبدو داكنًا ويعود أحمر زاهيًا عند ملامسة الهواء. أما الفساد فيظهر في الرائحة والسطح اللزج وانتفاخ العبوة لا في اللون."
      },
      {
        q: "ما الذي يفعله التعتيق فعلًا؟",
        a: "عند حرارة ورطوبة مضبوطتين ترخي إنزيمات اللحم النسيج الضام، فيلين القوام وتتركّز النكهة. والتعتيق الجاف يمنح نكهة أكثف ومردودًا أقل بسبب فقد الرطوبة."
      },
      {
        q: "لماذا تأتي القطعة نفسها قاسية أحيانًا؟",
        a: "ثلاثة أسباب رئيسية: طريقة طهي لا تناسب نسبة النسيج الضام في القطعة، وتجاوز الحرارة الداخلية للهدف، والتقطيع مع اتجاه الألياف بدل عكسه. وشيّ قطعة مخصّصة للطهي البطيء أكثر الأخطاء شيوعًا."
      },
      {
        q: "ما نسبة الدهن المناسبة في المفروم للكفتة؟",
        a: "تُعدّ نسبة نحو 15–20٪ من الدهن متوازنة للكفتة والبرغر في الممارسة العامة. فالمفروم الخالي من الدهن يجفّ، والمفرط في الدهن قد يتفتّت على الشواية."
      },
      {
        q: "كيف يُذاب اللحم المجمّد؟",
        a: "أأمن طريقة هي الإذابة البطيئة في الثلاجة مع بقاء التغليف. أما تركه في حرارة الغرفة فينقل سطحه إلى نطاق تكاثر الأحياء الدقيقة. ولا يُعاد تجميد اللحم النيء بعد إذابته."
      },
      {
        q: "هل يبيع BİZ ETÇİYİZ حاليًا؟",
        a: "لا. يجري تطوير BİZ ETÇİYİZ كمفهوم علامة جزارة ومحتوى، ولا توجد خلف الموقع منظومة بيع أو مخزون أو أسعار أو توصيل."
      }
    ],

    acquire: {
      eyebrow: "عن هذا المشروع الرقمي",
      title: "بشأن علامة BİZ ETÇİYİZ واسم النطاق",
      text:
        "‏BİZ ETÇİYİZ مشروع علامة ومفهوم واسم نطاق في مجال الجزارة واللحوم. للاستفسار عن الاستحواذ أو الشراكة أو أي مقترح تجاري يخصّ هذه العلامة أو المشروع أو النطاق، يسعدنا تواصلكم معنا.",
      note: "تُدار جميع المحادثات بسرّية تامة.",
      cta: "أرسل رسالة",
      subject: "bizetciyiz.com.tr — استفسار عن العلامة واسم النطاق"
    }
  }
};
