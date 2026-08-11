/* AGROLIVES — agrolives.com.tr
   Modern tarım, zeytin yetiştiriciliği ve zeytinyağı üretimi ekosistemi konsepti.
   Ürün satışı, stok, sertifika veya üretim tesisi iddiası içermez. */

export const content = {
  /* ------------------------------------------------------------------ TR */
  tr: {
    meta: {
      title: "AGROLIVES | Modern Tarım, Zeytin Yetiştiriciliği ve Zeytinyağı",
      description:
        "AGROLIVES; zeytin yetiştiriciliği, zeytinyağı üretim süreci, tarım ürünleri ve sürdürülebilir modern tarım uygulamaları üzerine kurulu bir tarım ekosistemi konseptidir.",
      ogTitle: "AGROLIVES — Modern tarım ve zeytin ekosistemi"
    },

    nav: [
      { href: "#faaliyet", label: "Faaliyet alanları" },
      { href: "#zeytin", label: "Zeytin çeşitleri" },
      { href: "#uretim", label: "Üretim süreci" },
      { href: "#surdurulebilir", label: "Sürdürülebilirlik" },
      { href: "#sss", label: "Sık sorulanlar" }
    ],

    headerCta: { href: "#proje", label: "İletişim" },
    footerTagline:
      "Zeytin yetiştiriciliği, zeytinyağı üretimi ve sürdürülebilir tarım uygulamaları üzerine bir marka projesi.",

    hero: {
      eyebrow: "Modern tarım · Zeytin · Zeytinyağı",
      title: "Topraktan şişeye kadar izlenebilir bir zeytin üretimi",
      text:
        "AGROLIVES; zeytin bahçesi yönetimi, hasat planlaması, soğuk sıkım zeytinyağı üretimi ve tarımsal veri takibini tek bir üretim anlayışında birleştirmeyi hedefleyen bir tarım markası konseptidir.",
      actions: [
        { href: "#zeytin", label: "Zeytin çeşitlerini görün" },
        { href: "#uretim", label: "Üretim süreci" }
      ],
      meta: [
        { icon: "olive", text: "Çeşit ve bölge odaklı yetiştiricilik" },
        { icon: "droplet", text: "Soğuk sıkım üretim yaklaşımı" },
        { icon: "chart", text: "Ölçüme dayalı bahçe yönetimi" }
      ]
    },

    areas: {
      head: {
        eyebrow: "Faaliyet alanları",
        title: "Tarımın dört ana ekseni",
        text:
          "Konsept, zeytini merkeze alan ancak genel tarımsal üretimi de kapsayan dört başlık üzerine kuruludur."
      },
      items: [
        {
          icon: "olive",
          title: "Zeytin yetiştiriciliği",
          text:
            "Çeşit seçimi, dikim aralığı, budama sistemi ve sulama planlamasının bölgeye göre kurgulanması. Verimliliğin büyük kısmı bu dört kararla belirlenir.",
          chips: ["çeşit seçimi", "budama", "sulama"]
        },
        {
          icon: "droplet",
          title: "Zeytinyağı üretimi",
          text:
            "Hasat olgunluğu, hasat–sıkım arası süre ve malaksasyon sıcaklığının kontrol edildiği soğuk sıkım süreci.",
          chips: ["soğuk sıkım", "erken hasat", "asitlik"]
        },
        {
          icon: "sprout",
          title: "Tarım ürünleri",
          text:
            "Zeytin dışında bölgeye uygun ikinci ürün planlaması: bakliyat, yem bitkileri ve örtü bitkileriyle toprak dinlendirme.",
          chips: ["örtü bitkisi", "münavebe", "toprak"]
        },
        {
          icon: "chart",
          title: "Tarım teknolojisi",
          text:
            "Toprak analizi, hava durumu verisi ve verim kaydının bahçe bazında tutulması; kararların gözleme değil ölçüme dayanması.",
          chips: ["toprak analizi", "verim kaydı", "izlenebilirlik"]
        }
      ]
    },

    varieties: {
      head: {
        eyebrow: "Zeytin çeşitleri",
        title: "Türkiye'nin başlıca zeytin çeşitleri",
        text:
          "Doğru çeşit, iklime ve amaca göre seçilir. Sofralık bir çeşidi yağlık olarak işlemek de, yağlık bir çeşidi sofralık beklentiyle dikmek de verimi düşürür."
      },
      table: {
        caption: "Türkiye'de yaygın zeytin çeşitleri ve kullanım alanları",
        head: ["Çeşit", "Ana bölge", "Kullanım", "Öne çıkan özellik"],
        rows: [
          ["Gemlik", "Güney Marmara", "Sofralık", "Yüksek et/çekirdek oranı, siyah salamuraya uygun"],
          ["Ayvalık (Edremit)", "Kuzey Ege", "Yağlık ve sofralık", "Erken hasatta meyvemsi ve yüksek polifenollü yağ"],
          ["Memecik", "Güney Ege", "Yağlık ve sofralık", "Geç olgunlaşır, yağ verimi yüksektir"],
          ["Domat", "İç Ege / Akhisar", "Sofralık", "İri taneli, yeşil kırma zeytin için tercih edilir"],
          ["Uslu", "İç Ege / Akhisar", "Sofralık", "İri siyah sofralık, salamurada dokusunu korur"],
          ["Nizip Yağlık", "Güneydoğu Anadolu", "Yağlık", "Sıcak ve kurak koşullara dayanıklıdır"],
          ["Erkence", "İzmir çevresi", "Sofralık ve yağlık", "Erken olgunlaşır; 'hurma zeytin' ile bilinir"]
        ],
        note:
          "Tablo, yaygın yetiştiricilik pratiğine dayalı genel bir özettir; performans bahçe koşullarına ve bakım rejimine göre değişir."
      },
      blocks: [
        {
          h3: "Çeşit seçerken sorulacak üç soru",
          ul: [
            "Bahçenin kış soğukları ve yaz sıcakları hangi aralıkta seyrediyor?",
            "Hedef sofralık mı, yağlık mı, yoksa çift amaçlı mı?",
            "Sulama imkânı var mı; yoksa kurağa dayanıklı bir çeşit mi gerekiyor?"
          ]
        }
      ]
    },

    process: {
      head: {
        eyebrow: "Üretim süreci",
        title: "Hasattan şişeye altı adım",
        text:
          "Zeytinyağı kalitesi büyük ölçüde hasat ile sıkım arasındaki saatlerde belirlenir. Süreç bu nedenle zaman ve sıcaklık üzerine kuruludur."
      },
      steps: [
        {
          title: "Hasat olgunluğu",
          text:
            "Meyve rengi dönmeye başladığında hasat edilen zeytin daha düşük yağ verimi ama daha yüksek polifenol ve aroma verir."
        },
        {
          title: "Hasat yöntemi",
          text:
            "Dala ve meyveye zarar vermeyen toplama, yaralanmaya bağlı erken oksidasyonu ve asitlik artışını önler."
        },
        {
          title: "Nakil ve bekleme",
          text:
            "Havalandırılan kasalarda taşıma ve mümkün olan en kısa bekleme süresi; yığın hâlinde bekleyen zeytin ısınır ve fermente olur."
        },
        {
          title: "Kırma ve malaksasyon",
          text:
            "Hamurun düşük sıcaklıkta yoğrulması, aroma bileşenlerinin korunması açısından belirleyicidir."
        },
        {
          title: "Ayırma ve depolama",
          text:
            "Yağın sudan ayrılmasının ardından paslanmaz çelik tankta, ışık ve oksijenden korunarak depolanması."
        },
        {
          title: "Analiz ve dolum",
          text:
            "Serbest asitlik, peroksit ve duyusal değerlendirme sonuçlarına göre sınıflandırma ve dolum planlaması."
        }
      ]
    },

    sustainability: {
      head: {
        eyebrow: "Sürdürülebilirlik",
        title: "Toprağı tüketmeyen tarım pratiği",
        text:
          "Sürdürülebilirlik, tarımda çoğu zaman maliyet kalemi değil verim kalemidir: toprağın organik maddesi arttıkça su tutma kapasitesi ve kök gelişimi iyileşir."
      },
      blocks: [
        {
          h3: "Suyu doğru kullanmak",
          p: [
            "Zeytin kurağa dayanıklıdır, ancak meyve tutumu ve tane iriliği için kritik dönemlerde suya ihtiyaç duyar. Damla sulama ile toprak nemine göre yapılan planlama, hem su tüketimini hem de tuzlanma riskini azaltır."
          ]
        },
        {
          h3: "Toprağın organik maddesi",
          p: [
            "Budama artıklarının parçalanarak toprağa geri verilmesi ve kış aylarında örtü bitkisi kullanımı, erozyonu azaltır ve toprak yapısını iyileştirir."
          ],
          ul: [
            "Toprak analizine dayalı gübreleme, tahmine dayalı gübrelemeden daha ucuzdur",
            "Örtü bitkileri yabancı ot baskısını mekanik olarak düşürür",
            "Budama artığının parçalanması organik madde döngüsünü sürdürür",
            "Bahçe içi biyoçeşitlilik doğal düşman popülasyonunu destekler"
          ]
        }
      ],
      panel: {
        title: "Zeytinyağında kalite göstergeleri",
        items: [
          { term: "Serbest asitlik", detail: "Meyvenin hasat sonrası ne kadar iyi korunduğunu gösterir" },
          { term: "Peroksit değeri", detail: "Oksidasyonun ilk aşamasını ölçer; depolama koşuluna duyarlıdır" },
          { term: "Polifenol", detail: "Acı–yakıcı algısı ve raf ömrüyle ilişkilidir" },
          { term: "Duyusal panel", detail: "Meyvemsilik ve kusur değerlendirmesi laboratuvar sonucunu tamamlar" },
          { term: "Hasat–sıkım süresi", detail: "Kaliteyi en çok etkileyen tek değişkendir" }
        ]
      }
    },

    faqHead: {
      eyebrow: "Sık sorulan sorular",
      title: "Zeytin ve zeytinyağı üretimi hakkında",
      text: "Yetiştiricilik, hasat ve yağ kalitesi konusunda en sık karşılaşılan sorular."
    },

    faq: [
      {
        q: "Erken hasat zeytinyağı neden daha değerli kabul edilir?",
        a: "Erken hasatta yağ verimi düşer fakat polifenol içeriği ve aroma yoğunluğu artar. Bu da hem duyusal olarak daha belirgin bir yağ hem de oksidasyona karşı daha dayanıklı bir ürün anlamına gelir."
      },
      {
        q: "Soğuk sıkım tam olarak neyi ifade eder?",
        a: "Zeytin hamurunun işlenmesi sırasında sıcaklığın belirli bir eşiğin altında tutulmasını ifade eder. Sıcaklık yükseldikçe yağ verimi artar ancak uçucu aroma bileşenleri ve polifenoller azalır."
      },
      {
        q: "Zeytin fidanı dikiminde en sık yapılan hata nedir?",
        a: "Bölgeye uygun olmayan çeşit seçimi ve fazla sık dikim. Sık dikilen bahçelerde ağaçlar birkaç yıl sonra ışık için rekabete girer; budama maliyeti artar, verim düşer."
      },
      {
        q: "Zeytinyağı nasıl saklanmalıdır?",
        a: "Işık, ısı ve oksijen üç temel düşmandır. Koyu renk cam veya çelik kapta, oda sıcaklığının altında ve ağzı sıkı kapalı biçimde saklanması raf ömrünü belirgin biçimde uzatır."
      },
      {
        q: "AGROLIVES şu anda ürün satıyor mu?",
        a: "Hayır. AGROLIVES bu aşamada bir tarım ve zeytin ekosistemi markası konsepti olarak geliştirilmektedir; sitede satış, stok, sertifika veya tesis iddiası bulunmamaktadır."
      }
    ],

    acquire: {
      eyebrow: "Bu dijital proje hakkında",
      title: "AGROLIVES markası ve alan adı hakkında",
      text:
        "AGROLIVES, tarım ve zeytin ekosisteminde konumlandırılmış bir marka, konsept ve alan adı projesidir. Marka, proje veya alan adıyla ilgili satın alma ve iş birliği teklifleri için bizimle iletişime geçebilirsiniz.",
      note: "Tüm görüşmeler karşılıklı gizlilik esasıyla yürütülür.",
      cta: "E-posta gönderin",
      subject: "agrolives.com.tr — marka ve alan adı hakkında"
    }
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    meta: {
      title: "AGROLIVES | Modern Agriculture, Olive Growing and Olive Oil",
      description:
        "AGROLIVES is an agricultural brand concept built around olive growing, cold-pressed olive oil production, field crops and measurable, sustainable modern farming practice.",
      ogTitle: "AGROLIVES — Modern agriculture and the olive ecosystem"
    },

    nav: [
      { href: "#faaliyet", label: "What we cover" },
      { href: "#zeytin", label: "Olive varieties" },
      { href: "#uretim", label: "Production" },
      { href: "#surdurulebilir", label: "Sustainability" },
      { href: "#sss", label: "FAQ" }
    ],

    headerCta: { href: "#proje", label: "Contact" },
    footerTagline:
      "A brand project about olive growing, olive oil production and sustainable farming practice.",

    hero: {
      eyebrow: "Modern agriculture · Olives · Olive oil",
      title: "Olive production you can follow from soil to bottle",
      text:
        "AGROLIVES is an agricultural brand concept that brings grove management, harvest planning, cold-pressed olive oil production and field data into a single way of working.",
      actions: [
        { href: "#zeytin", label: "See olive varieties" },
        { href: "#uretim", label: "Production process" }
      ],
      meta: [
        { icon: "olive", text: "Variety and region-led growing" },
        { icon: "droplet", text: "Cold-press production approach" },
        { icon: "chart", text: "Grove management based on measurement" }
      ]
    },

    areas: {
      head: {
        eyebrow: "What we cover",
        title: "Four axes of the operation",
        text:
          "The concept centres on olives while covering general agricultural production across four areas."
      },
      items: [
        {
          icon: "olive",
          title: "Olive growing",
          text:
            "Variety selection, planting distance, pruning system and irrigation planned for the specific region. Most of the yield is decided by those four choices.",
          chips: ["varieties", "pruning", "irrigation"]
        },
        {
          icon: "droplet",
          title: "Olive oil production",
          text:
            "A cold-press process governed by fruit ripeness, the hours between harvest and milling, and malaxation temperature.",
          chips: ["cold press", "early harvest", "acidity"]
        },
        {
          icon: "sprout",
          title: "Field crops",
          text:
            "Second-crop planning suited to the region: pulses, forage crops and cover crops that let the soil recover.",
          chips: ["cover crops", "rotation", "soil"]
        },
        {
          icon: "chart",
          title: "Agricultural technology",
          text:
            "Soil analysis, weather data and yield records kept per grove, so decisions rest on measurement rather than impression.",
          chips: ["soil analysis", "yield records", "traceability"]
        }
      ]
    },

    varieties: {
      head: {
        eyebrow: "Olive varieties",
        title: "The principal olive varieties of Türkiye",
        text:
          "The right variety follows the climate and the purpose. Pressing a table variety for oil, or planting an oil variety and expecting table fruit, both cost yield."
      },
      table: {
        caption: "Common Turkish olive varieties and their uses",
        head: ["Variety", "Main region", "Use", "Character"],
        rows: [
          ["Gemlik", "Southern Marmara", "Table", "High flesh-to-stone ratio, suited to black brine"],
          ["Ayvalık (Edremit)", "Northern Aegean", "Oil and table", "Fruity, high-polyphenol oil at early harvest"],
          ["Memecik", "Southern Aegean", "Oil and table", "Ripens late, high oil yield"],
          ["Domat", "Inner Aegean / Akhisar", "Table", "Large fruit, preferred for cracked green olives"],
          ["Uslu", "Inner Aegean / Akhisar", "Table", "Large black table olive that holds texture in brine"],
          ["Nizip Yağlık", "South-eastern Anatolia", "Oil", "Tolerant of hot, dry conditions"],
          ["Erkence", "Around İzmir", "Table and oil", "Early ripening; known for 'hurma' olives"]
        ],
        note:
          "The table summarises common growing practice; performance varies with grove conditions and management."
      },
      blocks: [
        {
          h3: "Three questions before choosing a variety",
          ul: [
            "What is the range of winter cold and summer heat on this land?",
            "Is the target table fruit, oil, or both?",
            "Is irrigation available, or is drought tolerance required?"
          ]
        }
      ]
    },

    process: {
      head: {
        eyebrow: "Production",
        title: "Six steps from harvest to bottle",
        text:
          "Oil quality is largely decided in the hours between harvest and milling, which is why the process is built around time and temperature."
      },
      steps: [
        {
          title: "Ripeness at harvest",
          text:
            "Fruit picked as the colour turns yields less oil but carries higher polyphenol content and more aroma."
        },
        {
          title: "Harvest method",
          text:
            "Picking that spares branch and fruit prevents the early oxidation and rising acidity that bruising causes."
        },
        {
          title: "Transport and waiting",
          text:
            "Ventilated crates and the shortest possible wait; olives left in bulk heat up and begin to ferment."
        },
        {
          title: "Crushing and malaxation",
          text:
            "Working the paste at a low temperature is what preserves the volatile aroma compounds."
        },
        {
          title: "Separation and storage",
          text:
            "After the oil is separated from the water it is stored in stainless steel, shielded from light and oxygen."
        },
        {
          title: "Analysis and filling",
          text:
            "Classification and filling planned against free acidity, peroxide value and sensory assessment."
        }
      ]
    },

    sustainability: {
      head: {
        eyebrow: "Sustainability",
        title: "Farming that does not exhaust the soil",
        text:
          "In agriculture sustainability is usually a yield item rather than a cost item: as soil organic matter rises, so do water-holding capacity and root development."
      },
      blocks: [
        {
          h3: "Using water well",
          p: [
            "Olives tolerate drought but need water at the critical stages of fruit set and sizing. Drip irrigation planned against soil moisture reduces both consumption and the risk of salinity."
          ]
        },
        {
          h3: "Soil organic matter",
          p: [
            "Shredding prunings back into the soil and using winter cover crops reduces erosion and improves soil structure."
          ],
          ul: [
            "Fertilising from a soil test is cheaper than fertilising from habit",
            "Cover crops suppress weeds mechanically",
            "Shredded prunings keep the organic matter cycle running",
            "Biodiversity in the grove supports populations of natural predators"
          ]
        }
      ],
      panel: {
        title: "Quality indicators in olive oil",
        items: [
          { term: "Free acidity", detail: "Shows how well the fruit was protected after harvest" },
          { term: "Peroxide value", detail: "Measures early oxidation; sensitive to storage" },
          { term: "Polyphenols", detail: "Linked to bitterness, pungency and shelf life" },
          { term: "Sensory panel", detail: "Fruitiness and defect assessment completes the lab result" },
          { term: "Harvest-to-mill time", detail: "The single variable with the greatest effect on quality" }
        ]
      }
    },

    faqHead: {
      eyebrow: "Frequently asked",
      title: "About olives and olive oil production",
      text: "The questions that come up most often about growing, harvest and oil quality."
    },

    faq: [
      {
        q: "Why is early-harvest olive oil valued more highly?",
        a: "Early harvest gives less oil per tonne but more polyphenols and a more intense aroma — a more expressive oil that also resists oxidation for longer."
      },
      {
        q: "What does cold pressing actually mean?",
        a: "It means keeping the paste below a defined temperature during processing. Higher temperatures increase yield but reduce volatile aroma compounds and polyphenols."
      },
      {
        q: "What is the most common mistake when planting olive trees?",
        a: "Choosing a variety unsuited to the region, and planting too densely. In crowded groves the trees compete for light within a few years: pruning costs rise and yield falls."
      },
      {
        q: "How should olive oil be stored?",
        a: "Light, heat and oxygen are the three enemies. Dark glass or steel, below room temperature and tightly closed will extend shelf life noticeably."
      },
      {
        q: "Does AGROLIVES sell products today?",
        a: "No. AGROLIVES is currently developed as an agriculture and olive ecosystem brand concept. There is no sales system, stock, certification or facility claimed behind this site."
      }
    ],

    acquire: {
      eyebrow: "About this digital project",
      title: "About the AGROLIVES brand and domain",
      text:
        "AGROLIVES is a brand, concept and domain project positioned in agriculture and the olive sector. For acquisition, partnership or business proposals regarding this brand, project or domain, contact us.",
      note: "All conversations are handled in confidence.",
      cta: "Send an email",
      subject: "agrolives.com.tr — brand and domain enquiry"
    }
  },

  /* ------------------------------------------------------------------ AR */
  ar: {
    meta: {
      title: "AGROLIVES | زراعة حديثة وزيتون وزيت زيتون",
      description:
        "‏AGROLIVES مفهوم علامة زراعية يقوم على زراعة الزيتون وإنتاج زيت الزيتون بالعصر البارد والمحاصيل الحقلية والممارسات الزراعية الحديثة المستدامة القائمة على القياس.",
      ogTitle: "AGROLIVES — الزراعة الحديثة ومنظومة الزيتون"
    },

    nav: [
      { href: "#faaliyet", label: "مجالات العمل" },
      { href: "#zeytin", label: "أصناف الزيتون" },
      { href: "#uretim", label: "مراحل الإنتاج" },
      { href: "#surdurulebilir", label: "الاستدامة" },
      { href: "#sss", label: "الأسئلة الشائعة" }
    ],

    headerCta: { href: "#proje", label: "تواصل معنا" },
    footerTagline: "مشروع علامة يعنى بزراعة الزيتون وإنتاج زيته والممارسات الزراعية المستدامة.",

    hero: {
      eyebrow: "زراعة حديثة · زيتون · زيت زيتون",
      title: "إنتاج زيتون يمكن تتبّعه من التربة إلى الزجاجة",
      text:
        "‏AGROLIVES مفهوم علامة زراعية يجمع إدارة البساتين وتخطيط الحصاد وإنتاج زيت الزيتون بالعصر البارد وبيانات الحقل في منهجية عمل واحدة.",
      actions: [
        { href: "#zeytin", label: "أصناف الزيتون" },
        { href: "#uretim", label: "مراحل الإنتاج" }
      ],
      meta: [
        { icon: "olive", text: "زراعة تراعي الصنف والإقليم" },
        { icon: "droplet", text: "نهج الإنتاج بالعصر البارد" },
        { icon: "chart", text: "إدارة بساتين قائمة على القياس" }
      ]
    },

    areas: {
      head: {
        eyebrow: "مجالات العمل",
        title: "أربعة محاور للعمل الزراعي",
        text: "يتمحور المفهوم حول الزيتون مع تغطية الإنتاج الزراعي العام عبر أربعة محاور."
      },
      items: [
        {
          icon: "olive",
          title: "زراعة الزيتون",
          text:
            "اختيار الصنف ومسافات الغرس ونظام التقليم وخطة الري بحسب الإقليم؛ فهذه القرارات الأربعة تحدّد معظم الإنتاجية.",
          chips: ["الأصناف", "التقليم", "الري"]
        },
        {
          icon: "droplet",
          title: "إنتاج زيت الزيتون",
          text:
            "عملية عصر باردة تحكمها درجة نضج الثمرة، والساعات بين القطف والعصر، وحرارة الخلط.",
          chips: ["عصر بارد", "قطف مبكر", "الحموضة"]
        },
        {
          icon: "sprout",
          title: "المحاصيل الحقلية",
          text:
            "تخطيط محصول ثانٍ يناسب الإقليم: البقوليات ومحاصيل العلف والمحاصيل الغطائية التي تريح التربة.",
          chips: ["محاصيل غطائية", "دورة زراعية", "التربة"]
        },
        {
          icon: "chart",
          title: "التقنيات الزراعية",
          text:
            "تحليل التربة وبيانات الطقس وسجلات الإنتاج لكل بستان، لتستند القرارات إلى القياس لا إلى الانطباع.",
          chips: ["تحليل التربة", "سجلات الإنتاج", "التتبّع"]
        }
      ]
    },

    varieties: {
      head: {
        eyebrow: "أصناف الزيتون",
        title: "أبرز أصناف الزيتون في تركيا",
        text:
          "يُختار الصنف تبعًا للمناخ والغاية؛ فعصر صنف مائدة لاستخراج الزيت، أو غرس صنف زيتي بانتظار ثمار مائدة، كلاهما يقلّص الإنتاج."
      },
      table: {
        caption: "أصناف الزيتون التركية الشائعة واستخداماتها",
        head: ["الصنف", "الإقليم الرئيسي", "الاستخدام", "أبرز الخصائص"],
        rows: [
          ["غيمليك", "جنوب مرمرة", "مائدة", "نسبة لبّ إلى نواة عالية، مناسب للكبيس الأسود"],
          ["آيوالِك (إدرميت)", "شمال بحر إيجه", "زيت ومائدة", "زيت فاكهي عالي البوليفينول عند القطف المبكر"],
          ["ميميجيك", "جنوب بحر إيجه", "زيت ومائدة", "متأخر النضج وعالي المردود الزيتي"],
          ["دومات", "إيجه الداخلية / أقحصار", "مائدة", "ثمرة كبيرة تُفضَّل للزيتون الأخضر المرضوض"],
          ["أُصلو", "إيجه الداخلية / أقحصار", "مائدة", "زيتون أسود كبير يحافظ على قوامه في الكبيس"],
          ["نيزيب يالِك", "جنوب شرق الأناضول", "زيت", "يتحمّل الحرارة والجفاف"],
          ["إركنجه", "محيط إزمير", "مائدة وزيت", "مبكّر النضج ويُعرف بزيتون «الهرمة»"]
        ],
        note: "الجدول ملخّص لممارسات الزراعة الشائعة، ويتغيّر الأداء بحسب ظروف البستان وأسلوب العناية."
      },
      blocks: [
        {
          h3: "ثلاثة أسئلة قبل اختيار الصنف",
          ul: [
            "ما مدى برودة الشتاء وحرارة الصيف في هذه الأرض؟",
            "هل الهدف ثمار مائدة أم زيت أم الاثنان معًا؟",
            "هل الري متاح أم أنّ تحمّل الجفاف شرط أساسي؟"
          ]
        }
      ]
    },

    process: {
      head: {
        eyebrow: "مراحل الإنتاج",
        title: "ست خطوات من الحصاد إلى الزجاجة",
        text:
          "تتحدّد جودة الزيت إلى حد بعيد في الساعات الفاصلة بين القطف والعصر، ولذلك تقوم العملية على الزمن والحرارة."
      },
      steps: [
        {
          title: "درجة النضج عند القطف",
          text: "الثمرة التي تُقطف مع بداية تغيّر اللون تعطي زيتًا أقل لكن ببوليفينول أعلى ونكهة أوضح."
        },
        {
          title: "أسلوب القطف",
          text: "قطف يحافظ على الغصن والثمرة يمنع الأكسدة المبكرة وارتفاع الحموضة الناتجين عن الرضوض."
        },
        {
          title: "النقل والانتظار",
          text: "صناديق مهوّاة وأقصر مدة انتظار ممكنة؛ فالزيتون المكدَّس يسخن ويبدأ في التخمّر."
        },
        {
          title: "الجرش والخلط",
          text: "معالجة العجينة عند حرارة منخفضة هي ما يحفظ مركّبات النكهة الطيّارة."
        },
        {
          title: "الفصل والتخزين",
          text: "بعد فصل الزيت عن الماء يُخزَّن في صهاريج الفولاذ المقاوم بعيدًا عن الضوء والأكسجين."
        },
        {
          title: "التحليل والتعبئة",
          text: "التصنيف وخطة التعبئة وفق الحموضة الحرة ورقم البيروكسيد والتقييم الحسّي."
        }
      ]
    },

    sustainability: {
      head: {
        eyebrow: "الاستدامة",
        title: "زراعة لا تستنزف التربة",
        text:
          "الاستدامة في الزراعة بند إنتاجية أكثر منها بند تكلفة: فكلما ارتفعت المادة العضوية تحسّنت قدرة التربة على حفظ الماء ونمو الجذور."
      },
      blocks: [
        {
          h3: "استعمال الماء بذكاء",
          p: [
            "يتحمّل الزيتون الجفاف لكنه يحتاج الماء في مرحلتي العقد وتكوين الثمرة. والري بالتنقيط المخطَّط وفق رطوبة التربة يخفّض الاستهلاك ومخاطر الملوحة معًا."
          ]
        },
        {
          h3: "المادة العضوية في التربة",
          p: [
            "فرم بقايا التقليم وإعادتها إلى التربة، واستعمال محاصيل غطائية شتوية، يقلّلان الانجراف ويحسّنان بنية التربة."
          ],
          ul: [
            "التسميد وفق تحليل التربة أقل كلفة من التسميد بالعادة",
            "المحاصيل الغطائية تكبح الأعشاب ميكانيكيًا",
            "فرم بقايا التقليم يُبقي دورة المادة العضوية فاعلة",
            "التنوّع الحيوي داخل البستان يدعم الأعداء الطبيعيين للآفات"
          ]
        }
      ],
      panel: {
        title: "مؤشرات الجودة في زيت الزيتون",
        items: [
          { term: "الحموضة الحرة", detail: "تبيّن مدى جودة حفظ الثمرة بعد القطف" },
          { term: "رقم البيروكسيد", detail: "يقيس الأكسدة المبكرة وهو حسّاس لظروف التخزين" },
          { term: "البوليفينولات", detail: "ترتبط بالمرارة واللذع وطول العمر التخزيني" },
          { term: "التقييم الحسّي", detail: "تقدير الفاكهية والعيوب يكمّل نتيجة المختبر" },
          { term: "زمن القطف حتى العصر", detail: "المتغيّر الأشد تأثيرًا في الجودة" }
        ]
      }
    },

    faqHead: {
      eyebrow: "الأسئلة الشائعة",
      title: "عن زراعة الزيتون وإنتاج زيته",
      text: "أكثر ما يُسأل بشأن الزراعة والحصاد وجودة الزيت."
    },

    faq: [
      {
        q: "لماذا يُعدّ زيت القطف المبكر أعلى قيمة؟",
        a: "يعطي القطف المبكر زيتًا أقل كميةً لكنه أغنى بالبوليفينولات وأكثف نكهة، فينتج زيت أوضح حسّيًا وأكثر مقاومة للأكسدة."
      },
      {
        q: "ماذا يعني العصر البارد فعليًا؟",
        a: "يعني إبقاء عجينة الزيتون تحت حدّ حراري محدّد أثناء المعالجة. فارتفاع الحرارة يزيد المردود لكنه يقلّل مركّبات النكهة الطيّارة والبوليفينولات."
      },
      {
        q: "ما أكثر الأخطاء شيوعًا عند غرس أشجار الزيتون؟",
        a: "اختيار صنف لا يلائم الإقليم، والغرس المكثّف. ففي البساتين المزدحمة تتنافس الأشجار على الضوء خلال سنوات قليلة، فترتفع كلفة التقليم وينخفض الإنتاج."
      },
      {
        q: "كيف يُخزَّن زيت الزيتون؟",
        a: "الضوء والحرارة والأكسجين ثلاثة أعداء. والحفظ في زجاج داكن أو فولاذ، دون حرارة الغرفة ومحكم الإغلاق، يطيل العمر التخزيني بوضوح."
      },
      {
        q: "هل تبيع AGROLIVES منتجات اليوم؟",
        a: "لا. يجري تطوير AGROLIVES حاليًا كمفهوم علامة لمنظومة الزراعة والزيتون، ولا يوجد خلف الموقع نظام بيع أو مخزون أو شهادات أو منشأة."
      }
    ],

    acquire: {
      eyebrow: "عن هذا المشروع الرقمي",
      title: "بشأن علامة AGROLIVES واسم النطاق",
      text:
        "‏AGROLIVES مشروع علامة ومفهوم واسم نطاق في مجال الزراعة وقطاع الزيتون. للاستفسار عن الاستحواذ أو الشراكة أو أي مقترح تجاري يخصّ هذه العلامة أو المشروع أو النطاق، يسعدنا تواصلكم معنا.",
      note: "تُدار جميع المحادثات بسرّية تامة.",
      cta: "أرسل رسالة",
      subject: "agrolives.com.tr — استفسار عن العلامة واسم النطاق"
    }
  }
};
