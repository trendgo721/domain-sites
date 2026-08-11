/* İŞİN HAZIR — isinhazir.com.tr
   İstihdam / kariyer platformu konsepti.
   ÖNEMLİ: Platform hazırlık aşamasındadır. Sitede gerçek ilan, gerçek şirket,
   gerçek aday veya yayında bir hizmet bulunduğu iddiası yer almaz; tüm
   ifadeler planlanan işleyişi anlatır. */

export const content = {
  /* ------------------------------------------------------------------ TR */
  tr: {
    meta: {
      title: "İŞİN HAZIR | İş İlanları ve Eleman Bulma Platformu Konsepti",
      description:
        "İş arayanlarla eleman arayan işverenleri sade ve şeffaf bir akışta buluşturmayı hedefleyen istihdam platformu konsepti. Platform hazırlık aşamasındadır.",
      ogTitle: "İŞİN HAZIR — İş ve kariyer platformu konsepti"
    },

    nav: [
      { href: "#adaylar", label: "Adaylar için" },
      { href: "#isverenler", label: "İşverenler için" },
      { href: "#nasil", label: "Nasıl çalışacak" },
      { href: "#rehber", label: "Kariyer rehberi" },
      { href: "#sss", label: "Sık sorulanlar" }
    ],

    navFooter: [{ href: "#sektorler", label: "Sektörler" }],

    headerCta: { href: "#proje", label: "İletişim" },
    footerTagline:
      "İş arayanlarla eleman arayanları sade bir akışta buluşturmayı hedefleyen, hazırlık aşamasındaki bir istihdam platformu projesi.",

    hero: {
      eyebrow: "İş ilanları · Kariyer · Eleman bulma",
      title: "İş arayanla eleman arayanı gereksiz adım olmadan buluşturmak",
      text:
        "İŞİN HAZIR; başvuru sürecini kısaltmayı, ilan bilgisini şeffaflaştırmayı ve her iki tarafa da sürecin hangi aşamada olduğunu göstermeyi hedefleyen bir istihdam platformu konseptidir. Platform şu anda hazırlık aşamasındadır ve yayında ilan bulunmamaktadır.",
      actions: [
        { href: "#nasil", label: "Nasıl çalışacak?" },
        { href: "#rehber", label: "Kariyer rehberi" }
      ],
      meta: [
        { icon: "clock", text: "Platform hazırlık aşamasında" },
        { icon: "shield", text: "Veri minimizasyonu ilkesi" },
        { icon: "search", text: "Şeffaf ilan bilgisi hedefi" }
      ]
    },

    candidates: {
      head: {
        eyebrow: "Adaylar için",
        title: "Başvuru sürecinin en yorucu kısmı belirsizliktir",
        text:
          "İş arama sürecinde zaman kaybının büyük bölümü, eksik ilan bilgisi ve yanıtsız kalan başvurulardan doğar. Konseptin adaya bakan tarafı bu iki soruna göre kurgulanmaktadır."
      },
      items: [
        {
          icon: "note",
          title: "Tek profil, çok başvuru",
          text:
            "Bir kez oluşturulan profil ile başvuruların tekrar tekrar form doldurmadan iletilmesi hedeflenir.",
          chips: ["profil", "hızlı başvuru"]
        },
        {
          icon: "search",
          title: "Eksiksiz ilan bilgisi",
          text:
            "Çalışma şekli, konum, vardiya düzeni ve ücret aralığı gibi başlıkların ilanda açıkça yer alması ilkesi.",
          chips: ["çalışma şekli", "konum", "ücret aralığı"]
        },
        {
          icon: "clock",
          title: "Başvuru durumu takibi",
          text:
            "Başvurunun incelendi, ön elemede veya sonuçlandı gibi durumlarının adaya görünür olması.",
          chips: ["durum takibi", "geri bildirim"]
        },
        {
          icon: "shield",
          title: "Görünürlük kontrolü",
          text:
            "Profilin kimlere açık olacağının adayın kontrolünde kalması ve verinin yalnızca başvurulan ilanla paylaşılması.",
          chips: ["gizlilik", "izin"]
        }
      ]
    },

    employers: {
      head: {
        eyebrow: "İşverenler için",
        title: "Doğru adayı bulmak, çok aday görmekten farklıdır",
        text:
          "Eleman arayan tarafta asıl maliyet, ilan yayınlamak değil, uygun olmayan başvuruları elemek için harcanan zamandır."
      },
      items: [
        {
          icon: "briefcase",
          title: "Anlaşılır ilan oluşturma",
          text:
            "İlanın zorunlu alanlarla oluşturulması; belirsiz başlıkların ve eksik bilgilerin baştan önlenmesi.",
          chips: ["ilan şablonu", "zorunlu alanlar"]
        },
        {
          icon: "users",
          title: "Ön eleme soruları",
          text:
            "Pozisyona özel birkaç kısa soruyla, başvuruların ilk aşamada nesnel kriterlere göre sıralanması.",
          chips: ["ön eleme", "kriter"]
        },
        {
          icon: "chart",
          title: "Süreç görünürlüğü",
          text:
            "Hangi ilanın kaç başvuru aldığı ve sürecin hangi aşamada tıkandığının işveren tarafında görünür olması.",
          chips: ["raporlama", "süreç"]
        },
        {
          icon: "link",
          title: "Ekip içi değerlendirme",
          text:
            "Aynı ilan üzerinde birden fazla kişinin not bırakabilmesi ve kararın tek kişiye bağlı kalmaması.",
          chips: ["iş birliği", "not"]
        }
      ]
    },

    how: {
      head: {
        eyebrow: "Nasıl çalışacak",
        title: "Dört adımlık sade bir akış",
        text:
          "Aşağıdaki akış, platformun planlanan işleyişini anlatır; hâlihazırda çalışan bir hizmeti tarif etmez."
      },
      steps: [
        {
          title: "Profil ve ilan",
          text:
            "Aday profilini bir kez oluşturur; işveren ilanı yapılandırılmış alanlarla yayımlar."
        },
        {
          title: "Eşleşme",
          text:
            "Konum, çalışma şekli ve deneyim gibi nesnel alanlar üzerinden ilan ile aday eşleştirilir."
        },
        {
          title: "Ön eleme",
          text:
            "Pozisyona özel kısa sorularla başvurular sıralanır; her iki taraf da neyin eksik olduğunu görür."
        },
        {
          title: "Görüşme",
          text:
            "Görüşme daveti ve sonucun platform üzerinden iletilmesi, sürecin yanıtsız kalmamasını hedefler."
        }
      ]
    },

    sectors: {
      head: {
        eyebrow: "Sektörler",
        title: "Kapsanması planlanan alanlar",
        text:
          "Konsept, mavi yaka ve beyaz yaka pozisyonlarını birlikte kapsayacak biçimde planlanmaktadır."
      },
      items: [
        {
          icon: "truck",
          title: "Lojistik ve depo",
          text: "Depo görevlisi, sevkiyat, dağıtım ve saha operasyonu pozisyonları.",
          chips: ["depo", "sevkiyat", "saha"]
        },
        {
          icon: "box",
          title: "Üretim ve imalat",
          text: "Üretim bandı, kalite kontrol, bakım ve teknik operatör pozisyonları.",
          chips: ["üretim", "kalite", "teknik"]
        },
        {
          icon: "users",
          title: "Perakende ve hizmet",
          text: "Mağaza, kasa, müşteri hizmetleri ve çağrı merkezi pozisyonları.",
          chips: ["mağaza", "müşteri hizmetleri"]
        },
        {
          icon: "chart",
          title: "Ofis ve yönetim",
          text: "Muhasebe, satın alma, insan kaynakları ve idari işler pozisyonları.",
          chips: ["ofis", "muhasebe", "İK"]
        },
        {
          icon: "spark",
          title: "Bilişim ve dijital",
          text: "Yazılım, teknik destek, veri ve dijital pazarlama pozisyonları.",
          chips: ["yazılım", "destek", "dijital"]
        },
        {
          icon: "flame",
          title: "Gıda, turizm ve sağlık",
          text: "Mutfak, servis, konaklama ve sağlık destek pozisyonları.",
          chips: ["mutfak", "konaklama", "sağlık"]
        }
      ]
    },

    guide: {
      head: {
        eyebrow: "Kariyer rehberi",
        title: "Başvuru ve ilan yazımında işe yarayan pratikler",
        text:
          "Aşağıdaki başlıklar platformdan bağımsız olarak geçerlidir; hem iş arayanın hem de ilan yazan işverenin işini kolaylaştırır."
      },
      blocks: [
        {
          h3: "CV'yi pozisyona göre düzenlemek",
          p: [
            "Tek bir CV'yi her ilana göndermek, en sık yapılan ve en pahalıya mal olan hatadır. İlanda geçen sorumluluk başlıklarının CV'de karşılığının bulunması, ilk elemeyi geçmenin en pratik yoludur."
          ],
          ul: [
            "Görev tanımı yerine sonuç yazın: ne yaptığınızı değil, neyi değiştirdiğinizi",
            "Son beş yılı ayrıntılandırın, daha eskisini kısaltın",
            "Tarih boşluklarını kısa bir cümleyle açıklayın",
            "İki sayfayı aşmayın; okuyan kişi ortalama birkaç dakika ayırır"
          ]
        },
        {
          h3: "İlanı doğru okumak",
          p: [
            "İlanda 'tercihen' ile 'zorunlu' arasındaki fark başvuru kararını belirler. Zorunlu şartların tamamını karşılamıyorsanız bile, tercih edilen niteliklerin çoğunu karşılıyorsanız başvurmak makuldür."
          ]
        },
        {
          h3: "İşveren tarafında: iyi ilan nasıl yazılır?",
          p: [
            "Belirsiz ilan, hem başvuru sayısını hem de başvuru kalitesini düşürür. İyi bir ilanda pozisyonun günlük işleyişi, çalışma düzeni ve karar süreci açıkça yazılıdır."
          ],
          ul: [
            "Başlığı pozisyonun yaygın adıyla yazın, iç unvanla değil",
            "Çalışma şekli, konum ve vardiya düzenini net belirtin",
            "Ücret aralığı paylaşmak başvuru kalitesini yükseltir",
            "Sürecin kaç aşamalı olduğunu ve tahmini süreyi yazın"
          ]
        },
        {
          h3: "Görüşmeye hazırlık",
          p: [
            "Görüşme öncesi şirketin ne yaptığını, pozisyonun hangi ekibe bağlı olduğunu ve son dönem işlerini bilmek, hazırlıklı olmanın en görünür işaretidir. Kendi tarafınızdan da soru hazırlamak süreci karşılıklı bir değerlendirmeye dönüştürür."
          ]
        }
      ],
      panel: {
        title: "Başvuru öncesi hızlı kontrol",
        items: [
          { term: "Pozisyon adı", detail: "CV başlığı ile ilan başlığı örtüşüyor mu?" },
          { term: "Konum", detail: "Ulaşım süresi gerçekçi mi, uzaktan çalışma var mı?" },
          { term: "Zorunlu şartlar", detail: "Belge, ehliyet, sertifika gibi şartlar karşılanıyor mu?" },
          { term: "Çalışma düzeni", detail: "Vardiya, hafta sonu ve mesai beklentisi net mi?" },
          { term: "İletişim", detail: "CV'deki telefon ve e-posta güncel mi?" }
        ]
      }
    },

    faqHead: {
      eyebrow: "Sık sorulan sorular",
      title: "Platform ve mevcut durum hakkında",
      text: "Projenin hangi aşamada olduğu ve nasıl çalışacağı hakkında en çok sorulanlar."
    },

    faq: [
      {
        q: "Şu anda siteden iş başvurusu yapılabiliyor mu?",
        a: "Hayır. İŞİN HAZIR hazırlık aşamasındadır. Sitede yayımlanmış iş ilanı, kayıtlı şirket veya aday havuzu bulunmamaktadır; sayfadaki tüm anlatım planlanan işleyişi tarif eder."
      },
      {
        q: "İlan yayınlamak isteyen bir şirket ne yapmalı?",
        a: "Platform yayına alınmadığı için şu anda ilan yayınlanamaz. İş birliği veya erken aşama görüşmesi için sayfanın alt bölümündeki e-posta adresi üzerinden iletişime geçilebilir."
      },
      {
        q: "Kişisel veriler nasıl ele alınacak?",
        a: "Konsept, veri minimizasyonu ilkesi üzerine kuruludur: yalnızca başvuru için gerekli alanların istenmesi, profilin görünürlüğünün adayın kontrolünde olması ve verinin yalnızca başvurulan ilanla paylaşılması planlanmaktadır."
      },
      {
        q: "Platform ücretli mi olacak?",
        a: "Ticari model henüz kesinleşmemiştir. Bu nedenle sayfada fiyat, paket veya abonelik bilgisi yer almamaktadır."
      },
      {
        q: "Ne zaman yayına alınacak?",
        a: "Yayın tarihi için bir taahhüt verilmemektedir. Proje, marka ve alan adı düzeyinde iş birliği görüşmelerine açıktır."
      }
    ],

    acquire: {
      eyebrow: "Bu dijital proje hakkında",
      title: "İŞİN HAZIR markası ve alan adı hakkında",
      text:
        "İŞİN HAZIR, istihdam ve kariyer alanında konumlandırılmış bir marka, konsept ve alan adı projesidir. Marka, proje veya alan adıyla ilgili satın alma ve iş birliği teklifleri için bizimle iletişime geçebilirsiniz.",
      note: "Tüm görüşmeler karşılıklı gizlilik esasıyla yürütülür.",
      cta: "E-posta gönderin",
      subject: "isinhazir.com.tr — marka ve alan adı hakkında"
    }
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    meta: {
      title: "İŞİN HAZIR | A Turkish Jobs and Recruitment Platform Concept",
      description:
        "İŞİN HAZIR is a Türkiye-focused employment platform concept designed to connect candidates and employers through a short, transparent process. The platform is in preparation.",
      ogTitle: "İŞİN HAZIR — Jobs and career platform concept"
    },

    nav: [
      { href: "#adaylar", label: "For candidates" },
      { href: "#isverenler", label: "For employers" },
      { href: "#nasil", label: "How it will work" },
      { href: "#rehber", label: "Career guide" },
      { href: "#sss", label: "FAQ" }
    ],

    navFooter: [{ href: "#sektorler", label: "Sectors" }],

    headerCta: { href: "#proje", label: "Contact" },
    footerTagline:
      "An employment platform project, currently in preparation, aiming to connect candidates and employers through a simple process.",

    hero: {
      eyebrow: "Job listings · Careers · Hiring",
      title: "Connecting candidates and employers without the wasted steps",
      text:
        "İŞİN HAZIR is an employment platform concept built to shorten the application process, make listing information transparent, and show both sides exactly where a process stands. The platform is currently in preparation and no listings are live.",
      actions: [
        { href: "#nasil", label: "How it will work" },
        { href: "#rehber", label: "Career guide" }
      ],
      meta: [
        { icon: "clock", text: "Platform in preparation" },
        { icon: "shield", text: "Built on data minimisation" },
        { icon: "search", text: "Transparent listing information" }
      ]
    },

    candidates: {
      head: {
        eyebrow: "For candidates",
        title: "The exhausting part of applying is the uncertainty",
        text:
          "Most of the time lost in a job search comes from incomplete listings and applications that are never answered. The candidate side of the concept is designed around those two problems."
      },
      items: [
        {
          icon: "note",
          title: "One profile, many applications",
          text: "A profile created once, so applications no longer mean filling in the same form again.",
          chips: ["profile", "fast apply"]
        },
        {
          icon: "search",
          title: "Complete listing information",
          text:
            "A principle that working pattern, location, shift structure and salary range appear openly in the listing.",
          chips: ["working pattern", "location", "salary range"]
        },
        {
          icon: "clock",
          title: "Application status",
          text: "States such as reviewed, shortlisted or closed made visible to the candidate.",
          chips: ["status", "feedback"]
        },
        {
          icon: "shield",
          title: "Visibility control",
          text:
            "The candidate decides who can see the profile, and data is shared only with the listing applied to.",
          chips: ["privacy", "consent"]
        }
      ]
    },

    employers: {
      head: {
        eyebrow: "For employers",
        title: "Finding the right candidate is not the same as seeing many",
        text:
          "On the hiring side the real cost is not publishing a listing — it is the time spent filtering out applications that were never a fit."
      },
      items: [
        {
          icon: "briefcase",
          title: "Structured listings",
          text: "Listings built from required fields, so vague titles and missing details are prevented up front.",
          chips: ["templates", "required fields"]
        },
        {
          icon: "users",
          title: "Screening questions",
          text: "A few role-specific questions that rank applications against objective criteria from the start.",
          chips: ["screening", "criteria"]
        },
        {
          icon: "chart",
          title: "Process visibility",
          text: "How many applications each listing received, and where the process is stalling.",
          chips: ["reporting", "process"]
        },
        {
          icon: "link",
          title: "Team review",
          text: "Several people can leave notes on the same listing, so the decision is not held by one person.",
          chips: ["collaboration", "notes"]
        }
      ]
    },

    how: {
      head: {
        eyebrow: "How it will work",
        title: "A simple four-step flow",
        text: "The flow below describes the planned behaviour of the platform, not a service running today."
      },
      steps: [
        {
          title: "Profile and listing",
          text: "The candidate builds a profile once; the employer publishes a listing through structured fields."
        },
        {
          title: "Matching",
          text: "Listings and candidates are matched on objective fields such as location, working pattern and experience."
        },
        {
          title: "Screening",
          text: "Short role-specific questions rank applications, and both sides can see what is missing."
        },
        {
          title: "Interview",
          text: "Invitations and outcomes are communicated through the platform, so no application is left unanswered."
        }
      ]
    },

    sectors: {
      head: {
        eyebrow: "Sectors",
        title: "Areas planned for coverage",
        text: "The concept is planned to cover blue-collar and white-collar positions together."
      },
      items: [
        {
          icon: "truck",
          title: "Logistics and warehousing",
          text: "Warehouse, dispatch, distribution and field operation roles.",
          chips: ["warehouse", "dispatch", "field"]
        },
        {
          icon: "box",
          title: "Manufacturing",
          text: "Production line, quality control, maintenance and technical operator roles.",
          chips: ["production", "quality", "technical"]
        },
        {
          icon: "users",
          title: "Retail and service",
          text: "Store, checkout, customer service and contact centre roles.",
          chips: ["store", "customer service"]
        },
        {
          icon: "chart",
          title: "Office and administration",
          text: "Accounting, procurement, human resources and administrative roles.",
          chips: ["office", "accounting", "HR"]
        },
        {
          icon: "spark",
          title: "IT and digital",
          text: "Software, technical support, data and digital marketing roles.",
          chips: ["software", "support", "digital"]
        },
        {
          icon: "flame",
          title: "Food, tourism and health",
          text: "Kitchen, service, hospitality and healthcare support roles.",
          chips: ["kitchen", "hospitality", "health"]
        }
      ]
    },

    guide: {
      head: {
        eyebrow: "Career guide",
        title: "Practices that work, on both sides of a listing",
        text:
          "These points hold independently of any platform and make life easier for candidates and for whoever writes the listing."
      },
      blocks: [
        {
          h3: "Tailoring a CV to the role",
          p: [
            "Sending one CV to every listing is the most common and most expensive mistake. Making sure the responsibilities named in the listing have a counterpart in the CV is the most practical way through the first filter."
          ],
          ul: [
            "Write outcomes rather than duties: not what you did, but what changed",
            "Give detail on the last five years and compress what came before",
            "Explain gaps in a single short sentence",
            "Stay within two pages; a reader spends a few minutes at most"
          ]
        },
        {
          h3: "Reading a listing properly",
          p: [
            "The difference between 'required' and 'preferred' decides whether to apply. Even when you do not meet every requirement, applying is reasonable if you meet most of the preferred qualities."
          ]
        },
        {
          h3: "For employers: writing a listing that works",
          p: [
            "A vague listing reduces both the number and the quality of applications. A good one states the day-to-day of the role, the working pattern and how the decision is made."
          ],
          ul: [
            "Title it with the common name of the role, not an internal job grade",
            "State working pattern, location and shift structure clearly",
            "Publishing a salary range raises application quality",
            "Say how many stages the process has and roughly how long it takes"
          ]
        },
        {
          h3: "Preparing for an interview",
          p: [
            "Knowing what the company does, which team the role reports into and what it has shipped recently is the most visible sign of preparation. Bringing your own questions turns the meeting into a mutual assessment."
          ]
        }
      ],
      panel: {
        title: "Quick check before applying",
        items: [
          { term: "Role title", detail: "Does your CV headline match the listing title?" },
          { term: "Location", detail: "Is the commute realistic; is remote work possible?" },
          { term: "Requirements", detail: "Are licences, certificates and documents in place?" },
          { term: "Working pattern", detail: "Are shifts, weekends and overtime expectations clear?" },
          { term: "Contact", detail: "Are the phone number and email on your CV current?" }
        ]
      }
    },

    faqHead: {
      eyebrow: "Frequently asked",
      title: "About the platform and its current stage",
      text: "The questions that come up most often about where the project stands and how it will work."
    },

    faq: [
      {
        q: "Can I apply for a job through the site today?",
        a: "No. İŞİN HAZIR is in preparation. There are no published job listings, registered companies or candidate pools behind this site; everything described here is planned behaviour."
      },
      {
        q: "What should a company that wants to post a listing do?",
        a: "Listings cannot be posted because the platform is not live. For partnership or early-stage discussions, use the email address in the section below."
      },
      {
        q: "How will personal data be handled?",
        a: "The concept is built on data minimisation: asking only for fields an application needs, leaving profile visibility under the candidate's control, and sharing data only with the listing applied to."
      },
      {
        q: "Will the platform be paid?",
        a: "The commercial model has not been settled, which is why no pricing, package or subscription information appears on this page."
      },
      {
        q: "When will it launch?",
        a: "No launch date is being committed to. The project is open to discussions at brand and domain level."
      }
    ],

    acquire: {
      eyebrow: "About this digital project",
      title: "About the İŞİN HAZIR brand and domain",
      text:
        "İŞİN HAZIR is a brand, concept and domain project positioned in employment and careers. For acquisition, partnership or business proposals regarding this brand, project or domain, contact us.",
      note: "All conversations are handled in confidence.",
      cta: "Send an email",
      subject: "isinhazir.com.tr — brand and domain enquiry"
    }
  },

  /* ------------------------------------------------------------------ AR */
  ar: {
    meta: {
      title: "İŞİN HAZIR | مفهوم منصّة تركية للوظائف والتوظيف",
      description:
        "‏İŞİN HAZIR مفهوم منصّة توظيف تركية تهدف إلى ربط الباحثين عن عمل بأصحاب العمل عبر مسار قصير وشفاف. المنصّة قيد الإعداد حاليًا.",
      ogTitle: "İŞİN HAZIR — مفهوم منصّة للوظائف والمسار المهني"
    },

    nav: [
      { href: "#adaylar", label: "للباحثين عن عمل" },
      { href: "#isverenler", label: "لأصحاب العمل" },
      { href: "#nasil", label: "آلية العمل" },
      { href: "#rehber", label: "دليل مهني" },
      { href: "#sss", label: "الأسئلة الشائعة" }
    ],

    navFooter: [{ href: "#sektorler", label: "القطاعات" }],

    headerCta: { href: "#proje", label: "تواصل معنا" },
    footerTagline: "مشروع منصّة توظيف قيد الإعداد، يهدف إلى ربط المرشحين وأصحاب العمل بمسار بسيط.",

    hero: {
      eyebrow: "إعلانات وظائف · مسار مهني · توظيف",
      title: "ربط الباحث عن عمل بصاحب العمل دون خطوات زائدة",
      text:
        "‏İŞİN HAZIR مفهوم منصّة توظيف يهدف إلى اختصار مسار التقديم، وجعل معلومات الإعلان شفافة، وإظهار موضع الطلب لكلا الطرفين. المنصّة قيد الإعداد حاليًا ولا توجد إعلانات منشورة.",
      actions: [
        { href: "#nasil", label: "آلية العمل" },
        { href: "#rehber", label: "الدليل المهني" }
      ],
      meta: [
        { icon: "clock", text: "المنصّة قيد الإعداد" },
        { icon: "shield", text: "مبدأ تقليل البيانات" },
        { icon: "search", text: "شفافية معلومات الإعلان" }
      ]
    },

    candidates: {
      head: {
        eyebrow: "للباحثين عن عمل",
        title: "أكثر ما يرهق في التقديم هو الغموض",
        text:
          "يضيع معظم الوقت في البحث عن عمل بسبب إعلانات ناقصة وطلبات بلا رد، ولذلك صُمِّم جانب المرشح في المفهوم حول هاتين المشكلتين."
      },
      items: [
        {
          icon: "note",
          title: "ملف واحد وطلبات متعددة",
          text: "ملف يُنشأ مرة واحدة، فلا يعني كل تقديم إعادة تعبئة النموذج نفسه.",
          chips: ["الملف", "تقديم سريع"]
        },
        {
          icon: "search",
          title: "معلومات إعلان كاملة",
          text: "مبدأ يقضي بذكر نمط العمل والموقع ونظام المناوبات ونطاق الأجر بوضوح في الإعلان.",
          chips: ["نمط العمل", "الموقع", "نطاق الأجر"]
        },
        {
          icon: "clock",
          title: "متابعة حالة الطلب",
          text: "إظهار حالات مثل «قيد المراجعة» أو «القائمة القصيرة» أو «مغلق» للمرشح.",
          chips: ["الحالة", "تغذية راجعة"]
        },
        {
          icon: "shield",
          title: "التحكم في الظهور",
          text: "المرشح يقرّر من يرى ملفه، ولا تُشارك بياناته إلا مع الإعلان الذي تقدّم إليه.",
          chips: ["الخصوصية", "الموافقة"]
        }
      ]
    },

    employers: {
      head: {
        eyebrow: "لأصحاب العمل",
        title: "العثور على المرشح المناسب غير رؤية عدد كبير من المرشحين",
        text:
          "الكلفة الحقيقية في التوظيف ليست نشر الإعلان، بل الوقت الذي يُنفَق في استبعاد طلبات لم تكن مناسبة أصلًا."
      },
      items: [
        {
          icon: "briefcase",
          title: "إعلانات مُهيكلة",
          text: "إعلانات تُبنى بحقول إلزامية، فتُمنع العناوين الغامضة والمعلومات الناقصة من البداية.",
          chips: ["قوالب", "حقول إلزامية"]
        },
        {
          icon: "users",
          title: "أسئلة الفرز الأولي",
          text: "أسئلة قصيرة خاصة بالوظيفة ترتّب الطلبات وفق معايير موضوعية منذ البداية.",
          chips: ["فرز", "معايير"]
        },
        {
          icon: "chart",
          title: "وضوح المسار",
          text: "عدد الطلبات لكل إعلان، والمرحلة التي يتعثّر فيها المسار.",
          chips: ["تقارير", "مسار"]
        },
        {
          icon: "link",
          title: "تقييم جماعي",
          text: "إمكانية كتابة ملاحظات من أكثر من شخص على الإعلان نفسه، فلا يبقى القرار بيد فرد واحد.",
          chips: ["تعاون", "ملاحظات"]
        }
      ]
    },

    how: {
      head: {
        eyebrow: "آلية العمل",
        title: "مسار بسيط من أربع خطوات",
        text: "يصف المسار التالي السلوك المخطَّط للمنصّة، لا خدمة تعمل اليوم."
      },
      steps: [
        {
          title: "الملف والإعلان",
          text: "ينشئ المرشح ملفه مرة واحدة، وينشر صاحب العمل إعلانه عبر حقول مُهيكلة."
        },
        {
          title: "المطابقة",
          text: "تُطابق الإعلانات والمرشحون عبر حقول موضوعية كالموقع ونمط العمل والخبرة."
        },
        {
          title: "الفرز",
          text: "أسئلة قصيرة خاصة بالوظيفة ترتّب الطلبات، ويرى الطرفان ما هو ناقص."
        },
        {
          title: "المقابلة",
          text: "تُبلَّغ الدعوات والنتائج عبر المنصّة، فلا يبقى أي طلب بلا رد."
        }
      ]
    },

    sectors: {
      head: {
        eyebrow: "القطاعات",
        title: "المجالات المخطَّط لتغطيتها",
        text: "يشمل المفهوم الوظائف المهنية والمكتبية معًا."
      },
      items: [
        {
          icon: "truck",
          title: "اللوجستيات والمستودعات",
          text: "وظائف المستودع والشحن والتوزيع والعمليات الميدانية.",
          chips: ["مستودع", "شحن", "ميداني"]
        },
        {
          icon: "box",
          title: "الصناعة والإنتاج",
          text: "وظائف خط الإنتاج ومراقبة الجودة والصيانة والمشغّل الفني.",
          chips: ["إنتاج", "جودة", "فني"]
        },
        {
          icon: "users",
          title: "التجزئة والخدمات",
          text: "وظائف المتجر والصندوق وخدمة العملاء ومراكز الاتصال.",
          chips: ["متجر", "خدمة عملاء"]
        },
        {
          icon: "chart",
          title: "المكتب والإدارة",
          text: "وظائف المحاسبة والمشتريات والموارد البشرية والشؤون الإدارية.",
          chips: ["مكتب", "محاسبة", "موارد بشرية"]
        },
        {
          icon: "spark",
          title: "تقنية المعلومات والرقمنة",
          text: "وظائف البرمجة والدعم الفني والبيانات والتسويق الرقمي.",
          chips: ["برمجة", "دعم", "رقمي"]
        },
        {
          icon: "flame",
          title: "الأغذية والسياحة والصحة",
          text: "وظائف المطبخ والخدمة والضيافة والدعم الصحي.",
          chips: ["مطبخ", "ضيافة", "صحة"]
        }
      ]
    },

    guide: {
      head: {
        eyebrow: "دليل مهني",
        title: "ممارسات مفيدة على طرفي الإعلان",
        text: "تصلح هذه النقاط بمعزل عن أي منصّة، وتسهّل العمل على المرشح وعلى كاتب الإعلان معًا."
      },
      blocks: [
        {
          h3: "تكييف السيرة الذاتية مع الوظيفة",
          p: [
            "إرسال سيرة واحدة إلى كل إعلان أكثر الأخطاء شيوعًا وأغلاها ثمنًا. وأن تجد المسؤوليات المذكورة في الإعلان مقابلًا لها في السيرة هو أقصر طريق لتجاوز الفرز الأول."
          ],
          ul: [
            "اكتب النتائج لا المهام: ليس ما فعلته بل ما غيّرته",
            "فصّل السنوات الخمس الأخيرة واختصر ما قبلها",
            "اشرح فجوات التواريخ بجملة قصيرة",
            "لا تتجاوز صفحتين؛ فالقارئ يمنحك دقائق معدودة"
          ]
        },
        {
          h3: "قراءة الإعلان بدقّة",
          p: [
            "الفرق بين «مطلوب» و«يُفضَّل» هو ما يحسم قرار التقديم. وحتى إن لم تستوفِ كل الشروط، فالتقديم معقول إذا استوفيت معظم المؤهلات المفضَّلة."
          ]
        },
        {
          h3: "لأصحاب العمل: كيف يُكتب إعلان جيد؟",
          p: [
            "الإعلان الغامض يقلّل عدد الطلبات وجودتها معًا. والإعلان الجيد يوضّح تفاصيل العمل اليومي ونمطه وكيفية اتخاذ القرار."
          ],
          ul: [
            "استخدم الاسم الشائع للوظيفة لا المسمّى الداخلي",
            "حدّد نمط العمل والموقع ونظام المناوبات بوضوح",
            "ذكر نطاق الأجر يرفع جودة الطلبات",
            "اذكر عدد مراحل المسار ومدته التقريبية"
          ]
        },
        {
          h3: "التحضير للمقابلة",
          p: [
            "معرفة ما تفعله الشركة، والفريق الذي تتبع له الوظيفة، وأحدث أعمالها، أوضح دليل على الاستعداد. وتحضير أسئلتك يحوّل اللقاء إلى تقييم متبادل."
          ]
        }
      ],
      panel: {
        title: "فحص سريع قبل التقديم",
        items: [
          { term: "المسمّى الوظيفي", detail: "هل يتطابق عنوان سيرتك مع عنوان الإعلان؟" },
          { term: "الموقع", detail: "هل زمن التنقّل واقعي، وهل العمل عن بُعد متاح؟" },
          { term: "الشروط", detail: "هل الرخص والشهادات والوثائق متوفرة؟" },
          { term: "نمط العمل", detail: "هل المناوبات وعطل الأسبوع والعمل الإضافي واضحة؟" },
          { term: "التواصل", detail: "هل الهاتف والبريد في سيرتك محدَّثان؟" }
        ]
      }
    },

    faqHead: {
      eyebrow: "الأسئلة الشائعة",
      title: "عن المنصّة ومرحلتها الحالية",
      text: "أكثر ما يُسأل عن موضع المشروع وطريقة عمله."
    },

    faq: [
      {
        q: "هل يمكن التقدّم لوظيفة عبر الموقع اليوم؟",
        a: "لا. المنصّة قيد الإعداد، ولا توجد خلف الموقع إعلانات منشورة أو شركات مسجّلة أو قاعدة مرشحين؛ وكل ما يُعرض هنا يصف سلوكًا مخطَّطًا."
      },
      {
        q: "ماذا تفعل شركة ترغب في نشر إعلان؟",
        a: "لا يمكن نشر الإعلانات لأن المنصّة غير مفعّلة. وللشراكة أو النقاش المبكر يمكن استخدام البريد الإلكتروني في القسم أدناه."
      },
      {
        q: "كيف ستُعالَج البيانات الشخصية؟",
        a: "يقوم المفهوم على تقليل البيانات: طلب الحقول الضرورية للتقديم فقط، وإبقاء ظهور الملف بيد المرشح، ومشاركة البيانات مع الإعلان المتقدَّم إليه دون سواه."
      },
      {
        q: "هل ستكون المنصّة مدفوعة؟",
        a: "لم يُحسم النموذج التجاري بعد، ولهذا لا تظهر في الصفحة أي أسعار أو باقات أو اشتراكات."
      },
      {
        q: "متى ستُطلق؟",
        a: "لا يوجد التزام بتاريخ إطلاق. والمشروع منفتح على النقاش على مستوى العلامة واسم النطاق."
      }
    ],

    acquire: {
      eyebrow: "عن هذا المشروع الرقمي",
      title: "بشأن علامة İŞİN HAZIR واسم النطاق",
      text:
        "‏İŞİN HAZIR مشروع علامة ومفهوم واسم نطاق في مجال التوظيف والمسار المهني. للاستفسار عن الاستحواذ أو الشراكة أو أي مقترح تجاري يخصّ هذه العلامة أو المشروع أو النطاق، يسعدنا تواصلكم معنا.",
      note: "تُدار جميع المحادثات بسرّية تامة.",
      cta: "أرسل رسالة",
      subject: "isinhazir.com.tr — استفسار عن العلامة واسم النطاق"
    }
  }
};
