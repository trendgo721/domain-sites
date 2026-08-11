/* ONLINE FİDAN — onlinefidan.com.tr
   Fidan, meyve fidanı ve süs bitkileri üzerine çevrim içi fidancılık konsepti.
   Ticari arama niyeti yüksek olduğu için içerik, satın alma kararına
   gerçekten yardım eden bilgiler üzerine kuruludur.
   Fiyat, stok ve teslimat iddiası içermez. */

export const content = {
  /* ------------------------------------------------------------------ TR */
  tr: {
    meta: {
      title: "ONLINE FİDAN | Meyve Fidanı, Zeytin Fidanı ve Süs Bitkileri Rehberi",
      description:
        "Meyve fidanı, zeytin fidanı, ceviz ve badem fidanı ile süs bitkileri için dikim takvimi, aşılı fidan ve anaç seçimi, bakım adımları ve fidan fiyatlarını belirleyen faktörler.",
      ogTitle: "ONLINE FİDAN — Fidan seçimi, dikim takvimi ve bakım rehberi"
    },

    nav: [
      { href: "#kategoriler", label: "Fidan kategorileri" },
      { href: "#takvim", label: "Dikim takvimi" },
      { href: "#rehber", label: "Seçim rehberi" },
      { href: "#bakim", label: "Bakım" },
      { href: "#sss", label: "Sık sorulanlar" }
    ],

    navFooter: [{ href: "#fiyat", label: "Fidan fiyatları" }],

    headerCta: { href: "#proje", label: "İletişim" },
    footerTagline:
      "Fidan seçimi, dikim takvimi ve bahçe bakımı üzerine Türkçe kaynak oluşturmayı hedefleyen bir çevrim içi fidancılık projesi.",

    hero: {
      eyebrow: "Fidan · Meyve fidanı · Süs bitkileri",
      title: "Doğru fidan, doğru mevsimde ve doğru toprakta başlar",
      text:
        "ONLINE FİDAN; meyve fidanı, zeytin fidanı, sert kabuklu türler ve süs bitkilerinde çeşit seçiminden dikim zamanına kadar olan kararları tek bir kaynakta toplamayı hedefleyen bir çevrim içi fidancılık projesidir.",
      actions: [
        { href: "#takvim", label: "Dikim takvimine bakın" },
        { href: "#rehber", label: "Fidan seçim rehberi" }
      ],
      meta: [
        { icon: "sprout", text: "Tür ve anaç bazlı seçim" },
        { icon: "calendar", text: "Bölgeye göre dikim dönemi" },
        { icon: "note", text: "Etiket ve fidan sınıfı bilgisi" }
      ]
    },

    categories: {
      head: {
        eyebrow: "Fidan kategorileri",
        title: "Hangi fidan, hangi bahçeye?",
        text:
          "Kategoriler yalnızca ürün grubu değil, aynı zamanda farklı bakım rejimi demektir. Bir meyve bahçesi ile peyzaj dikiminin sulama ve budama ihtiyacı aynı değildir."
      },
      items: [
        {
          icon: "tree",
          title: "Meyve fidanı",
          text:
            "Elma, armut, kiraz, vişne, şeftali, kayısı ve erik gibi türler. Anaç seçimi ağacın boyunu, dikim aralığını ve ilk ürün yılını belirler.",
          chips: ["elma", "kiraz", "şeftali", "kayısı"]
        },
        {
          icon: "olive",
          title: "Zeytin fidanı",
          text:
            "Gemlik, Ayvalık ve Memecik gibi çeşitler sofralık veya yağlık hedefe göre ayrılır. Genç fidan ilk yıllarda don ve rüzgâra karşı korunmalıdır.",
          chips: ["gemlik", "ayvalık", "sofralık", "yağlık"]
        },
        {
          icon: "sprout",
          title: "Sert kabuklu türler",
          text:
            "Ceviz, badem, fındık ve antep fıstığı. Kazık kök yapısı nedeniyle dikim çukuru ve toprak derinliği bu grupta daha kritiktir.",
          chips: ["ceviz", "badem", "fındık"]
        },
        {
          icon: "leaf",
          title: "Asma ve bağ fidanı",
          text:
            "Sofralık ve şaraplık üzüm çeşitleri. Terbiye sistemi (telli/goble) daha dikim aşamasında kararlaştırılmalıdır.",
          chips: ["sofralık üzüm", "asma", "terbiye sistemi"]
        },
        {
          icon: "sun",
          title: "Süs bitkileri ve çalılar",
          text:
            "Ligustrum, taflan, ardıç, mazı ve gül gibi türler. Çit, perde ve odak bitkisi olarak farklı budama disiplinleri ister.",
          chips: ["çit bitkisi", "gül", "mazı"]
        },
        {
          icon: "droplet",
          title: "Bahçe ve peyzaj bitkileri",
          text:
            "Yer örtücüler, çok yıllık çiçekler ve gölge ağaçları. Peyzajda su ihtiyacı benzer bitkileri aynı bölgede toplamak sulama maliyetini düşürür.",
          chips: ["yer örtücü", "gölge ağacı", "peyzaj"]
        }
      ]
    },

    calendar: {
      head: {
        eyebrow: "Dikim takvimi",
        title: "Fidan ne zaman dikilir?",
        text:
          "Dikim zamanı, fidanın kök yapısına ve bölgenin kış sertliğine göre değişir. Genel kural: çıplak köklü fidan uyku döneminde, tüplü fidan ise sıcakların dışında her dönemde dikilebilir."
      },
      table: {
        caption: "Fidan tipine göre uygun dikim dönemleri",
        head: ["Fidan tipi", "Uygun dönem", "Dikkat edilecek nokta"],
        rows: [
          [
            "Çıplak köklü meyve fidanı",
            "Kasım – Mart (yaprak dökümünden uyanmaya kadar)",
            "Donlu ve çamurlu günlerde dikimden kaçınılır"
          ],
          [
            "Tüplü (saksılı) fidan",
            "Yaz sıcakları dışında yıl boyu",
            "Kök topağı dağıtılmadan dikilir; kök stresi düşüktür"
          ],
          [
            "Zeytin fidanı",
            "İlkbahar; ılıman bölgelerde sonbahar",
            "İlk kışında genç fidan don ve rüzgârdan korunmalıdır"
          ],
          [
            "Ceviz, badem, fındık",
            "Aralık – Şubat",
            "Kazık kök nedeniyle derin ve geniş çukur gerekir"
          ],
          [
            "Asma çubuğu ve fidanı",
            "Şubat – Nisan",
            "Terbiye sistemi ve sıra arası mesafe önceden planlanır"
          ],
          [
            "Süs çalıları (tüplü)",
            "Sonbahar tercih edilir",
            "Sonbahar dikimi kışı kök gelişimiyle geçirmeyi sağlar"
          ]
        ],
        note:
          "Dönemler Türkiye geneli için genel bir çerçevedir; yüksek rakımlı ve sert kışlı bölgelerde ilkbahar dikimi daha güvenlidir."
      }
    },

    guide: {
      head: {
        eyebrow: "Fidan seçim rehberi",
        title: "Fidan alırken kararı belirleyen beş başlık",
        text:
          "Fidan ucuz bir kalem gibi görünür, ancak yanlış seçim beş yıl sonra ortaya çıkar. Aşağıdaki başlıklar satın almadan önce netleştirilmelidir."
      },
      blocks: [
        {
          h3: "Aşılı fidan mı, çöğür mü?",
          p: [
            "Aşılı fidan, bilinen bir çeşidin bilinen bir anaç üzerine aşılanmasıyla üretilir; meyve özellikleri öngörülebilirdir. Tohumdan yetişen çöğür fidanında ise meyve kalitesi ve verim zamanı belirsizdir. Meyve bahçesi kuran hemen herkes için aşılı fidan doğru seçimdir."
          ]
        },
        {
          h3: "Anaç, ağacın boyunu belirler",
          p: [
            "Bodur anaç daha erken ürün ve kolay hasat verir ama destek sistemi ve düzenli sulama ister. Çöğür (tohum) anaç daha geç ürün verir, buna karşılık kuraklığa ve topraktaki olumsuzluklara daha dayanıklıdır. Dikim aralığı da bu karara bağlıdır."
          ]
        },
        {
          h3: "Tüplü mü, çıplak köklü mü?",
          p: [
            "Çıplak köklü fidan uyku döneminde daha ekonomiktir ve kök gelişimi doğrudan toprakta başlar. Tüplü fidan ise dikim penceresini genişletir ve nakil şokunu azaltır. Sezon dışında dikim yapılacaksa tüplü tercih edilir."
          ]
        },
        {
          h3: "Sertifikalı ve standart fidan",
          p: [
            "Türkiye'de fidanlar üretim kontrolüne göre sınıflandırılır; sertifikalı sınıf, çeşit doğruluğu ve sağlık kontrolü açısından daha yüksek güvence sunar. Etiketin üzerinde çeşit, anaç, üretici ve sınıf bilgisinin bulunması beklenir."
          ]
        },
        {
          h3: "Soğuklama ihtiyacı ve tozlayıcı",
          p: [
            "Her çeşidin kış boyunca belirli bir süre düşük sıcaklığa ihtiyacı vardır; bu ihtiyaç karşılanmazsa çiçeklenme düzensizleşir. Ayrıca kiraz, elma ve badem gibi türlerin çoğunda meyve tutumu için uyumlu bir tozlayıcı çeşide ihtiyaç duyulur."
          ]
        }
      ],
      panel: {
        title: "Fidan teslim alırken kontrol listesi",
        items: [
          { term: "Etiket", detail: "Çeşit adı, anaç, üretim yılı ve fidan sınıfı okunabilir olmalı" },
          { term: "Kök", detail: "Nemli, kırılmamış ve küflenmemiş; kılcal kökler canlı olmalı" },
          { term: "Aşı noktası", detail: "Kaynamış, çatlamamış ve toprak seviyesinin üzerinde kalacak" },
          { term: "Gövde", detail: "Düzgün, yaralanmamış ve dengeli kalınlıkta" },
          { term: "Tomurcuk", detail: "Uyku döneminde diri; kurumuş ve buruşmuş olmamalı" },
          { term: "Ambalaj", detail: "Kökler nem tutucu malzemeyle sarılmış olmalı" }
        ]
      }
    },

    care: {
      head: {
        eyebrow: "Dikim ve bakım",
        title: "İlk yıl, ağacın ömrünü belirler",
        text:
          "Fidanın ilk sezonunda amaç meyve almak değil, kök sistemini kurmaktır. Bu beş adım doğru uygulandığında sonraki yıllarda müdahale ihtiyacı azalır."
      },
      steps: [
        {
          title: "Çukur ve toprak",
          text:
            "Kök hacminin rahatça yerleşeceği genişlikte çukur açılır; çıkan toprak yanmış organik gübreyle karıştırılarak geri doldurulur."
        },
        {
          title: "Dikim derinliği",
          text:
            "Aşı noktası toprak seviyesinin üzerinde kalmalıdır. Derin dikim, aşının topraktan kök salmasına ve anacın etkisinin kaybolmasına yol açar."
        },
        {
          title: "Can suyu",
          text:
            "Dikimin hemen ardından bol su verilir. Amaç sulamak değil, kökle toprak arasındaki hava boşluklarını kapatmaktır."
        },
        {
          title: "Şekil budaması",
          text:
            "İlk yıl taç yapısı belirlenir. Dengeli dallanma, ileride ışık alan ve hasadı kolay bir ağaç oluşturur."
        },
        {
          title: "Malç ve yabancı ot",
          text:
            "Gövdeye değmeyecek şekilde serilen malç, toprak nemini korur ve genç fidanın su rekabetini azaltır."
        }
      ]
    },

    pricing: {
      head: {
        eyebrow: "Fidan fiyatları",
        title: "Fidan fiyatını belirleyen faktörler",
        text:
          "Fidan fiyatları sabit değildir; tür, yaş ve üretim biçimi arasındaki fark aynı türde bile ciddi aralıklar oluşturur. Bu sayfada fiyat listesi verilmez, fiyatı oluşturan değişkenler açıklanır."
      },
      blocks: [
        {
          h3: "Fiyatı yukarı ve aşağı çeken değişkenler",
          ul: [
            "Tür ve çeşit: yeni ve talebi yüksek çeşitler daha pahalıdır",
            "Anaç tipi: bodur ve klon anaçlar çöğür anaca göre maliyetlidir",
            "Fidan yaşı ve boyu: bir yaşındaki fidan ile iki yaşındaki fidan arasında belirgin fark vardır",
            "Üretim biçimi: tüplü fidan, çıplak köklüye göre daha yüksek maliyet taşır",
            "Fidan sınıfı: sertifikalı üretim ek kontrol maliyeti içerir",
            "Mevsim ve talep: dikim sezonunun tepe haftalarında fiyatlar yükselir",
            "Taşıma: canlı materyalin ambalajı ve sevkiyat süresi maliyete yansır"
          ]
        },
        {
          h3: "Ucuz fidanın gerçek maliyeti",
          p: [
            "Etiketsiz veya çeşidi doğrulanamayan bir fidanın maliyeti satın alma fiyatı değildir; üç–beş yıl sonra beklenen meyveyi vermediğinde kaybedilen zamandır. Bahçe kurulumunda fidan kalemi toplam yatırımın küçük bir bölümüdür, sonucun ise en belirleyici parçasıdır."
          ]
        }
      ]
    },

    faqHead: {
      eyebrow: "Sık sorulan sorular",
      title: "Fidan seçimi ve dikimi hakkında",
      text: "Fidan alırken en çok sorulan sorular ve kısa, uygulanabilir yanıtlar."
    },

    faq: [
      {
        q: "Fidan dikimi için en uygun zaman nedir?",
        a: "Çıplak köklü fidanlar için kasım–mart arası uyku dönemi en uygun aralıktır. Tüplü fidanlar yaz sıcakları dışında yıl boyu dikilebilir. Sert kışların yaşandığı yüksek rakımlı bölgelerde ilkbahar dikimi daha güvenlidir."
      },
      {
        q: "Tüplü fidan mı, çıplak köklü fidan mı daha iyidir?",
        a: "İkisi de doğru koşulda iyidir. Çıplak köklü fidan sezon içinde daha ekonomiktir; tüplü fidan ise sezon dışında dikim imkânı verir ve nakil şokunu azaltır."
      },
      {
        q: "Aşılı fidan neden tavsiye edilir?",
        a: "Aşılı fidanda çeşit bellidir; meyvenin tadı, iriliği ve olgunlaşma zamanı öngörülebilir. Tohumdan büyüyen fidanda bu özelliklerin hiçbiri garanti değildir."
      },
      {
        q: "Fidan kaç yılda meyve verir?",
        a: [
          "Tür ve anaca göre değişir. Bodur anaç üzerine aşılı elma ve armutta ilk ürün genellikle 2–3 yılda alınır.",
          "Kiraz ve şeftalide 3–4 yıl, zeytinde 3–5 yıl, cevizde ise anaç ve çeşide bağlı olarak 4–7 yıl arası bir süre beklenir."
        ]
      },
      {
        q: "Tek bir ağaç meyve verir mi, tozlayıcı şart mı?",
        a: "Kiraz, elma, armut ve bademin birçok çeşidi kendine verimsizdir; yakınında uyumlu bir tozlayıcı çeşit ister. Şeftali, kayısı ve incirde ise çoğu çeşit kendine verimlidir."
      },
      {
        q: "Online fidan satın alırken nelere dikkat edilmeli?",
        a: "Etiketin çeşit ve anaç bilgisini içermesi, kökün nemli malzemeyle ambalajlanmış olması, sevkiyat süresinin kısa tutulması ve teslimde canlılık kontrolünün mümkün olması aranmalıdır."
      },
      {
        q: "ONLINE FİDAN şu anda satış yapıyor mu?",
        a: "Hayır. ONLINE FİDAN şu aşamada bir çevrim içi fidancılık konsepti ve bilgi kaynağı olarak geliştirilmektedir; sitede fiyat, stok, sipariş veya kargo altyapısı bulunmamaktadır."
      }
    ],

    acquire: {
      eyebrow: "Bu dijital proje hakkında",
      title: "ONLINE FİDAN markası ve alan adı hakkında",
      text:
        "ONLINE FİDAN, fidancılık ve bahçe bitkileri alanında konumlandırılmış bir marka, konsept ve alan adı projesidir. Marka, proje veya alan adıyla ilgili satın alma ve iş birliği teklifleri için bizimle iletişime geçebilirsiniz.",
      note: "Tüm görüşmeler karşılıklı gizlilik esasıyla yürütülür.",
      cta: "E-posta gönderin",
      subject: "onlinefidan.com.tr — marka ve alan adı hakkında"
    }
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    meta: {
      title: "ONLINE FİDAN | Fruit Trees, Olive Saplings and Garden Plants Guide",
      description:
        "Planting calendar, grafted saplings and rootstock selection, first-year care and the factors behind sapling prices — for fruit trees, olive saplings, nut trees and ornamental plants.",
      ogTitle: "ONLINE FİDAN — Choosing, planting and caring for saplings"
    },

    nav: [
      { href: "#kategoriler", label: "Categories" },
      { href: "#takvim", label: "Planting calendar" },
      { href: "#rehber", label: "Buying guide" },
      { href: "#bakim", label: "Care" },
      { href: "#sss", label: "FAQ" }
    ],

    navFooter: [{ href: "#fiyat", label: "Prices" }],

    headerCta: { href: "#proje", label: "Contact" },
    footerTagline:
      "An online nursery project aiming to become a dependable Turkish reference for choosing, planting and caring for saplings.",

    hero: {
      eyebrow: "Saplings · Fruit trees · Garden plants",
      title: "The right sapling starts with the right season and the right soil",
      text:
        "ONLINE FİDAN is an online nursery project that gathers the decisions behind fruit trees, olive saplings, nut species and ornamental plants — from variety and rootstock to planting time — into one reference.",
      actions: [
        { href: "#takvim", label: "See the planting calendar" },
        { href: "#rehber", label: "Buying guide" }
      ],
      meta: [
        { icon: "sprout", text: "Selection by species and rootstock" },
        { icon: "calendar", text: "Planting windows by region" },
        { icon: "note", text: "Labelling and sapling grades explained" }
      ]
    },

    categories: {
      head: {
        eyebrow: "Categories",
        title: "Which sapling for which garden?",
        text:
          "A category is not only a product group — it is a different care regime. An orchard and a landscape planting do not share the same watering and pruning needs."
      },
      items: [
        {
          icon: "tree",
          title: "Fruit trees",
          text:
            "Apple, pear, cherry, sour cherry, peach, apricot and plum. The rootstock decides tree size, spacing and the year of first harvest.",
          chips: ["apple", "cherry", "peach", "apricot"]
        },
        {
          icon: "olive",
          title: "Olive saplings",
          text:
            "Varieties such as Gemlik, Ayvalık and Memecik split by table or oil purpose. Young trees need shelter from frost and wind in their first years.",
          chips: ["gemlik", "ayvalık", "table", "oil"]
        },
        {
          icon: "sprout",
          title: "Nut species",
          text:
            "Walnut, almond, hazelnut and pistachio. Their taproot makes planting depth and hole size more critical than in other groups.",
          chips: ["walnut", "almond", "hazelnut"]
        },
        {
          icon: "leaf",
          title: "Vines",
          text:
            "Table and wine grape varieties. The training system has to be decided at planting, not afterwards.",
          chips: ["table grapes", "vines", "training system"]
        },
        {
          icon: "sun",
          title: "Ornamentals and shrubs",
          text:
            "Privet, laurel, juniper, thuja and roses. Used as hedging, screening or a focal plant, each asks for a different pruning discipline.",
          chips: ["hedging", "roses", "thuja"]
        },
        {
          icon: "droplet",
          title: "Garden and landscape plants",
          text:
            "Ground cover, perennials and shade trees. Grouping plants with similar water needs lowers irrigation cost across a landscape.",
          chips: ["ground cover", "shade trees", "landscape"]
        }
      ]
    },

    calendar: {
      head: {
        eyebrow: "Planting calendar",
        title: "When should saplings be planted?",
        text:
          "Timing follows the root form and the severity of the local winter. The general rule: bare-root while dormant, container-grown at any time outside high summer."
      },
      table: {
        caption: "Planting windows by sapling type",
        head: ["Sapling type", "Window", "What to watch"],
        rows: [
          [
            "Bare-root fruit trees",
            "November – March (leaf fall to bud break)",
            "Avoid frozen ground and waterlogged days"
          ],
          [
            "Container-grown",
            "Year round, outside high summer",
            "Plant without breaking the root ball; transplant stress is low"
          ],
          [
            "Olive saplings",
            "Spring; autumn in mild regions",
            "Protect young trees from frost and wind in the first winter"
          ],
          [
            "Walnut, almond, hazelnut",
            "December – February",
            "The taproot needs a deep, generous hole"
          ],
          [
            "Vines",
            "February – April",
            "Decide training system and row spacing in advance"
          ],
          [
            "Ornamental shrubs (container)",
            "Autumn preferred",
            "Autumn planting lets roots establish over winter"
          ]
        ],
        note:
          "These windows are a general frame for Türkiye; in high-altitude regions with hard winters, spring planting is safer."
      }
    },

    guide: {
      head: {
        eyebrow: "Buying guide",
        title: "Five things that decide the purchase",
        text:
          "A sapling looks like a small line item, but a wrong choice shows up five years later. Settle these points before buying."
      },
      blocks: [
        {
          h3: "Grafted or seedling?",
          p: [
            "A grafted sapling puts a known variety on a known rootstock, so fruit characteristics are predictable. A seedling grown from stone or pip offers no guarantee on fruit quality or when it will bear. For anyone planting an orchard, grafted is the right answer."
          ]
        },
        {
          h3: "Rootstock decides tree size",
          p: [
            "Dwarfing rootstock brings earlier fruit and easier harvest, but needs support and steady irrigation. Seedling rootstock bears later while tolerating drought and difficult soil better. Spacing follows from that decision."
          ]
        },
        {
          h3: "Container-grown or bare-root?",
          p: [
            "Bare-root is more economical in the dormant season and roots start directly in the soil. Container-grown widens the planting window and reduces transplant shock — the choice when planting out of season."
          ]
        },
        {
          h3: "Certified and standard grades",
          p: [
            "Saplings in Türkiye are graded by production control; the certified grade offers stronger assurance on varietal accuracy and plant health. The label should carry variety, rootstock, producer and grade."
          ]
        },
        {
          h3: "Chilling requirement and pollination",
          p: [
            "Every variety needs a certain amount of winter cold; if that is not met, flowering becomes erratic. Most cherry, apple and almond varieties also need a compatible pollinator nearby to set fruit."
          ]
        }
      ],
      panel: {
        title: "Checklist when the saplings arrive",
        items: [
          { term: "Label", detail: "Variety, rootstock, production year and grade must be legible" },
          { term: "Roots", detail: "Moist, unbroken and free of mould; fine roots still alive" },
          { term: "Graft union", detail: "Fully knitted, uncracked, and left above soil level" },
          { term: "Stem", detail: "Straight, undamaged and of even thickness" },
          { term: "Buds", detail: "Plump while dormant, not dried or shrivelled" },
          { term: "Packaging", detail: "Roots wrapped in moisture-retaining material" }
        ]
      }
    },

    care: {
      head: {
        eyebrow: "Planting and care",
        title: "The first year sets the life of the tree",
        text:
          "In its first season the aim is not fruit but root system. Get these five steps right and later years need far less intervention."
      },
      steps: [
        {
          title: "Hole and soil",
          text:
            "Dig wide enough for the roots to sit without bending, and backfill with the excavated soil mixed with well-rotted organic matter."
        },
        {
          title: "Planting depth",
          text:
            "The graft union stays above soil level. Planting too deep lets the scion root and cancels the effect of the rootstock."
        },
        {
          title: "First watering",
          text:
            "Water generously straight after planting. The purpose is not irrigation but closing the air pockets between roots and soil."
        },
        {
          title: "Formative pruning",
          text:
            "The crown is shaped in the first year. Balanced branching gives a tree that catches light and is easy to harvest."
        },
        {
          title: "Mulch and weeds",
          text:
            "Mulch spread clear of the trunk holds soil moisture and removes competition for water around a young tree."
        }
      ]
    },

    pricing: {
      head: {
        eyebrow: "Sapling prices",
        title: "What actually sets the price",
        text:
          "Sapling prices are not fixed: age, species and production method create wide ranges even within one species. No price list is published here — the variables behind the price are."
      },
      blocks: [
        {
          h3: "What moves the price",
          ul: [
            "Species and variety: newer, in-demand varieties cost more",
            "Rootstock: dwarfing and clonal rootstocks cost more than seedling stock",
            "Age and size: there is a clear gap between a one and a two-year-old sapling",
            "Production method: container-grown carries more cost than bare-root",
            "Grade: certified production includes the cost of extra control",
            "Season and demand: prices rise in the peak weeks of the planting season",
            "Transport: packaging and transit time for living material feed into cost"
          ]
        },
        {
          h3: "The real cost of a cheap sapling",
          p: [
            "An unlabelled sapling of unverifiable variety does not cost what you paid for it; it costs the three to five years lost when it fails to bear what you expected. Saplings are a small share of the investment in an orchard and the largest share of the outcome."
          ]
        }
      ]
    },

    faqHead: {
      eyebrow: "Frequently asked",
      title: "About choosing and planting saplings",
      text: "The most common questions, with short and usable answers."
    },

    faq: [
      {
        q: "When is the best time to plant?",
        a: "For bare-root saplings, the dormant window from November to March. Container-grown saplings can go in year round outside high summer. In high-altitude regions with hard winters, spring is safer."
      },
      {
        q: "Container-grown or bare-root — which is better?",
        a: "Both are good in the right conditions. Bare-root is more economical in season; container-grown allows out-of-season planting and reduces transplant shock."
      },
      {
        q: "Why are grafted saplings recommended?",
        a: "With a grafted sapling the variety is known, so flavour, size and ripening time are predictable. A seedling guarantees none of that."
      },
      {
        q: "How long before a sapling bears fruit?",
        a: [
          "It depends on species and rootstock. Apple and pear on dwarfing rootstock usually give a first crop in 2–3 years.",
          "Cherry and peach take 3–4 years, olive 3–5 years, and walnut anywhere from 4 to 7 years depending on rootstock and variety."
        ]
      },
      {
        q: "Will a single tree bear fruit, or is a pollinator needed?",
        a: "Many cherry, apple, pear and almond varieties are self-incompatible and need a compatible pollinator nearby. Most peach, apricot and fig varieties are self-fertile."
      },
      {
        q: "What should you check when buying saplings online?",
        a: "That the label states variety and rootstock, that roots are packed in moisture-retaining material, that transit time is short, and that you can inspect the plants on arrival."
      },
      {
        q: "Is ONLINE FİDAN selling today?",
        a: "No. ONLINE FİDAN is being developed as an online nursery concept and information resource. There is no pricing, stock, ordering or shipping system behind this site."
      }
    ],

    acquire: {
      eyebrow: "About this digital project",
      title: "About the ONLINE FİDAN brand and domain",
      text:
        "ONLINE FİDAN is a brand, concept and domain project positioned in the nursery and garden plant category. For acquisition, partnership or business proposals regarding this brand, project or domain, contact us.",
      note: "All conversations are handled in confidence.",
      cta: "Send an email",
      subject: "onlinefidan.com.tr — brand and domain enquiry"
    }
  },

  /* ------------------------------------------------------------------ AR */
  ar: {
    meta: {
      title: "ONLINE FİDAN | دليل شتلات الأشجار المثمرة والزيتون ونباتات الحدائق",
      description:
        "روزنامة الغرس، واختيار الشتلة المطعَّمة والأصل، والعناية في السنة الأولى، والعوامل التي تحدّد أسعار الشتلات — للأشجار المثمرة وشتلات الزيتون والمكسرات ونباتات الزينة.",
      ogTitle: "ONLINE FİDAN — اختيار الشتلات وغرسها والعناية بها"
    },

    nav: [
      { href: "#kategoriler", label: "الفئات" },
      { href: "#takvim", label: "روزنامة الغرس" },
      { href: "#rehber", label: "دليل الشراء" },
      { href: "#bakim", label: "العناية" },
      { href: "#sss", label: "الأسئلة الشائعة" }
    ],

    navFooter: [{ href: "#fiyat", label: "الأسعار" }],

    headerCta: { href: "#proje", label: "تواصل معنا" },
    footerTagline: "مشروع مشتل إلكتروني يسعى ليكون مرجعًا موثوقًا لاختيار الشتلات وغرسها والعناية بها.",

    hero: {
      eyebrow: "شتلات · أشجار مثمرة · نباتات حدائق",
      title: "الشتلة الصحيحة تبدأ بالموسم الصحيح والتربة الصحيحة",
      text:
        "‏ONLINE FİDAN مشروع مشتل إلكتروني يجمع القرارات المتعلقة بالأشجار المثمرة وشتلات الزيتون وأشجار المكسرات ونباتات الزينة — من الصنف والأصل إلى موعد الغرس — في مرجع واحد.",
      actions: [
        { href: "#takvim", label: "روزنامة الغرس" },
        { href: "#rehber", label: "دليل الشراء" }
      ],
      meta: [
        { icon: "sprout", text: "اختيار حسب النوع والأصل" },
        { icon: "calendar", text: "مواعيد الغرس بحسب الإقليم" },
        { icon: "note", text: "شرح البطاقات ودرجات الشتلة" }
      ]
    },

    categories: {
      head: {
        eyebrow: "الفئات",
        title: "أي شتلة تناسب أي حديقة؟",
        text:
          "الفئة ليست مجرد مجموعة منتجات بل نظام عناية مختلف؛ فالبستان المثمر والتنسيق الحدائقي لا يتشاركان الاحتياج نفسه للري والتقليم."
      },
      items: [
        {
          icon: "tree",
          title: "الأشجار المثمرة",
          text:
            "تفاح وكمثرى وكرز وخوخ ومشمش وبرقوق. الأصل هو ما يحدّد حجم الشجرة ومسافات الغرس وسنة أول محصول.",
          chips: ["تفاح", "كرز", "خوخ", "مشمش"]
        },
        {
          icon: "olive",
          title: "شتلات الزيتون",
          text:
            "أصناف مثل غيمليك وآيوالِك وميميجيك تنقسم بحسب غاية المائدة أو الزيت، وتحتاج الأشجار الفتية حماية من الصقيع والرياح.",
          chips: ["غيمليك", "آيوالك", "مائدة", "زيت"]
        },
        {
          icon: "sprout",
          title: "أشجار المكسرات",
          text:
            "جوز ولوز وبندق وفستق. جذرها الوتدي يجعل عمق الغرس وحجم الحفرة أكثر حساسية من بقية المجموعات.",
          chips: ["جوز", "لوز", "بندق"]
        },
        {
          icon: "leaf",
          title: "شتلات العنب",
          text: "أصناف عنب المائدة والنبيذ. ويجب تحديد نظام التدعيم عند الغرس لا بعده.",
          chips: ["عنب مائدة", "كرمة", "نظام تدعيم"]
        },
        {
          icon: "sun",
          title: "نباتات الزينة والشجيرات",
          text:
            "لجستروم وغار وعرعر وثويا وورد؛ ولكلٍّ منها انضباط تقليم مختلف بحسب استعمالها سياجًا أو ساترًا أو نبتة محورية.",
          chips: ["سياج نباتي", "ورد", "ثويا"]
        },
        {
          icon: "droplet",
          title: "نباتات الحدائق والتنسيق",
          text:
            "مغطيات التربة والنباتات المعمّرة وأشجار الظل. وتجميع النباتات المتقاربة في احتياج الماء يخفض كلفة الري.",
          chips: ["مغطيات تربة", "أشجار ظل", "تنسيق حدائق"]
        }
      ]
    },

    calendar: {
      head: {
        eyebrow: "روزنامة الغرس",
        title: "متى تُغرس الشتلات؟",
        text:
          "يتبع التوقيت شكل الجذر وقسوة الشتاء المحلي. والقاعدة العامة: الشتلة عارية الجذور أثناء السكون، والمزروعة في أصص في أي وقت خارج ذروة الصيف."
      },
      table: {
        caption: "مواعيد الغرس بحسب نوع الشتلة",
        head: ["نوع الشتلة", "الموعد المناسب", "ما ينبغي الانتباه له"],
        rows: [
          [
            "شتلات مثمرة عارية الجذور",
            "تشرين الثاني – آذار (من تساقط الأوراق حتى التبرعم)",
            "يُتجنّب الغرس في الأرض المتجمّدة أو المشبعة بالماء"
          ],
          [
            "شتلات في أصص",
            "طوال العام خارج ذروة الصيف",
            "تُغرس دون تفكيك كتلة الجذور، وإجهاد النقل منخفض"
          ],
          [
            "شتلات الزيتون",
            "الربيع، والخريف في المناطق المعتدلة",
            "تُحمى الأشجار الفتية من الصقيع والرياح في الشتاء الأول"
          ],
          ["الجوز واللوز والبندق", "كانون الأول – شباط", "الجذر الوتدي يحتاج حفرة عميقة وواسعة"],
          ["شتلات العنب", "شباط – نيسان", "يُحدَّد نظام التدعيم ومسافات الصفوف مسبقًا"],
          [
            "شجيرات الزينة (في أصص)",
            "يُفضَّل الخريف",
            "الغرس الخريفي يتيح تأسيس الجذور خلال الشتاء"
          ]
        ],
        note: "هذه المواعيد إطار عام لتركيا، والغرس الربيعي أكثر أمانًا في المرتفعات ذات الشتاء القاسي."
      }
    },

    guide: {
      head: {
        eyebrow: "دليل الشراء",
        title: "خمسة عوامل تحسم قرار الشراء",
        text:
          "تبدو الشتلة بندًا صغيرًا، لكن الاختيار الخاطئ يظهر بعد خمس سنوات. لذا يُحسم ما يلي قبل الشراء."
      },
      blocks: [
        {
          h3: "مطعَّمة أم بذرية؟",
          p: [
            "الشتلة المطعَّمة تضع صنفًا معروفًا على أصل معروف، فتصبح صفات الثمرة متوقّعة. أما الشتلة البذرية فلا تضمن جودة الثمرة ولا موعد الإثمار. ولمن يؤسّس بستانًا، المطعَّمة هي الجواب الصحيح."
          ]
        },
        {
          h3: "الأصل يحدّد حجم الشجرة",
          p: [
            "الأصل المقزّم يقدّم إثمارًا أبكر وقطفًا أسهل لكنه يحتاج دعامة وريًا منتظمًا، بينما الأصل البذري يثمر متأخرًا ويتحمّل الجفاف والتربة الصعبة أكثر. ومسافات الغرس تتبع هذا القرار."
          ]
        },
        {
          h3: "في أصص أم عارية الجذور؟",
          p: [
            "الشتلة عارية الجذور أوفر في موسم السكون وتبدأ جذورها في التربة مباشرة، بينما توسّع الشتلة المزروعة في أصص نافذة الغرس وتقلّل صدمة النقل، وهي الخيار عند الغرس خارج الموسم."
          ]
        },
        {
          h3: "الدرجات المعتمدة والقياسية",
          p: [
            "تُصنَّف الشتلات في تركيا وفق رقابة الإنتاج، وتمنح الدرجة المعتمدة ضمانًا أقوى لصحة الصنف وسلامة النبات. ويُفترض أن تحمل البطاقة الصنف والأصل والمنتج والدرجة."
          ]
        },
        {
          h3: "احتياج البرودة والتلقيح",
          p: [
            "يحتاج كل صنف قدرًا من برودة الشتاء، وإن لم يتوفّر اضطرب الإزهار. كما تحتاج معظم أصناف الكرز والتفاح واللوز ملقِّحًا متوافقًا قريبًا لعقد الثمار."
          ]
        }
      ],
      panel: {
        title: "قائمة فحص عند استلام الشتلات",
        items: [
          { term: "البطاقة", detail: "الصنف والأصل وسنة الإنتاج والدرجة مقروءة بوضوح" },
          { term: "الجذور", detail: "رطبة وسليمة وخالية من العفن، والجذيرات حيّة" },
          { term: "منطقة التطعيم", detail: "ملتحمة وغير متشققة وتبقى فوق مستوى التربة" },
          { term: "الساق", detail: "مستقيمة وسليمة ومتساوية السماكة" },
          { term: "البراعم", detail: "ممتلئة أثناء السكون وغير جافة أو ذابلة" },
          { term: "التغليف", detail: "الجذور ملفوفة بمادة تحفظ الرطوبة" }
        ]
      }
    },

    care: {
      head: {
        eyebrow: "الغرس والعناية",
        title: "السنة الأولى تحدّد عمر الشجرة",
        text:
          "الهدف في الموسم الأول ليس الثمر بل تأسيس الجذور، وضبط هذه الخطوات الخمس يقلّل التدخّل في السنوات التالية."
      },
      steps: [
        {
          title: "الحفرة والتربة",
          text: "تُحفر بسعة تكفي لاستقرار الجذور دون انثناء، وتُردم بالتربة المخلوطة بسماد عضوي متحلّل."
        },
        {
          title: "عمق الغرس",
          text: "تبقى منطقة التطعيم فوق مستوى التربة؛ فالغرس العميق يجعل الطعم يُجذّر ويلغي أثر الأصل."
        },
        {
          title: "رية التأسيس",
          text: "تُروى الشتلة بغزارة فور الغرس، والغاية إغلاق الفراغات الهوائية بين الجذر والتربة لا مجرد الري."
        },
        {
          title: "تقليم التكوين",
          text: "يُشكَّل التاج في السنة الأولى؛ والتفريع المتوازن يمنح شجرة تلتقط الضوء ويسهل قطافها."
        },
        {
          title: "التغطية والأعشاب",
          text: "المهاد المفروش بعيدًا عن الساق يحفظ رطوبة التربة ويزيل منافسة الأعشاب على الماء."
        }
      ]
    },

    pricing: {
      head: {
        eyebrow: "أسعار الشتلات",
        title: "ما الذي يحدّد السعر فعلًا؟",
        text:
          "أسعار الشتلات ليست ثابتة؛ فالعمر والنوع وطريقة الإنتاج تصنع فوارق واسعة داخل النوع الواحد. ولا تُنشر هنا قائمة أسعار بل العوامل التي تصنعها."
      },
      blocks: [
        {
          h3: "ما الذي يرفع السعر أو يخفضه",
          ul: [
            "النوع والصنف: الأصناف الحديثة والمطلوبة أغلى",
            "الأصل: الأصول المقزّمة والكلونية أعلى كلفة من البذرية",
            "العمر والحجم: الفارق واضح بين شتلة عمرها سنة وأخرى عمرها سنتان",
            "طريقة الإنتاج: الشتلة في أصيص أعلى كلفة من عارية الجذور",
            "الدرجة: الإنتاج المعتمد يتضمّن كلفة رقابة إضافية",
            "الموسم والطلب: ترتفع الأسعار في ذروة أسابيع الغرس",
            "النقل: تغليف المادة الحيّة ومدة الشحن ينعكسان في الكلفة"
          ]
        },
        {
          h3: "الكلفة الحقيقية للشتلة الرخيصة",
          p: [
            "الشتلة بلا بطاقة أو بصنف لا يمكن التحقق منه لا تكلّف ثمنها، بل تكلّف ثلاث إلى خمس سنوات تضيع حين لا تثمر ما كان متوقعًا. فالشتلات حصة صغيرة من استثمار البستان وأكبر حصة من نتيجته."
          ]
        }
      ]
    },

    faqHead: {
      eyebrow: "الأسئلة الشائعة",
      title: "عن اختيار الشتلات وغرسها",
      text: "أكثر الأسئلة تكرارًا بإجابات قصيرة وقابلة للتطبيق."
    },

    faq: [
      {
        q: "ما أفضل وقت للغرس؟",
        a: "للشتلات عارية الجذور، فترة السكون من تشرين الثاني إلى آذار. أما شتلات الأصص فتُغرس طوال العام خارج ذروة الصيف. وفي المرتفعات ذات الشتاء القاسي يكون الربيع أكثر أمانًا."
      },
      {
        q: "أيهما أفضل: شتلة الأصيص أم عارية الجذور؟",
        a: "كلاهما جيد في ظروفه. عارية الجذور أوفر داخل الموسم، وشتلة الأصيص تتيح الغرس خارج الموسم وتقلّل صدمة النقل."
      },
      {
        q: "لماذا يُنصح بالشتلة المطعَّمة؟",
        a: "لأن الصنف معروف فيها، فتصبح النكهة والحجم وموعد النضج متوقّعة، بينما لا تضمن الشتلة البذرية أيًّا من ذلك."
      },
      {
        q: "بعد كم سنة تثمر الشتلة؟",
        a: [
          "يعتمد على النوع والأصل. التفاح والكمثرى على أصل مقزّم يعطيان أول محصول عادة خلال سنتين إلى ثلاث.",
          "ويحتاج الكرز والخوخ 3–4 سنوات، والزيتون 3–5 سنوات، والجوز من 4 إلى 7 سنوات بحسب الأصل والصنف."
        ]
      },
      {
        q: "هل تثمر الشجرة الواحدة أم لا بدّ من ملقِّح؟",
        a: "كثير من أصناف الكرز والتفاح والكمثرى واللوز غير ذاتية التلقيح وتحتاج ملقِّحًا متوافقًا قريبًا، بينما معظم أصناف الخوخ والمشمش والتين ذاتية التلقيح."
      },
      {
        q: "ما الذي يجب التحقق منه عند شراء الشتلات عبر الإنترنت؟",
        a: "أن تذكر البطاقة الصنف والأصل، وأن تكون الجذور مغلَّفة بمادة تحفظ الرطوبة، وأن تكون مدة الشحن قصيرة، وأن يتاح فحص النبات عند الاستلام."
      },
      {
        q: "هل يبيع ONLINE FİDAN حاليًا؟",
        a: "لا. يجري تطوير ONLINE FİDAN كمفهوم مشتل إلكتروني ومصدر معلومات، ولا توجد خلف الموقع منظومة أسعار أو مخزون أو طلب أو شحن."
      }
    ],

    acquire: {
      eyebrow: "عن هذا المشروع الرقمي",
      title: "بشأن علامة ONLINE FİDAN واسم النطاق",
      text:
        "‏ONLINE FİDAN مشروع علامة ومفهوم واسم نطاق في مجال المشاتل ونباتات الحدائق. للاستفسار عن الاستحواذ أو الشراكة أو أي مقترح تجاري يخصّ هذه العلامة أو المشروع أو النطاق، يسعدنا تواصلكم معنا.",
      note: "تُدار جميع المحادثات بسرّية تامة.",
      cta: "أرسل رسالة",
      subject: "onlinefidan.com.tr — استفسار عن العلامة واسم النطاق"
    }
  }
};
