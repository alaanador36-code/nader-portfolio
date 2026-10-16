export type Lang = "en" | "ar";

export const t = {
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    name: "NADER ELBAHNSAWY",
    welcome: "Welcome to My World.",
    roles: "Web Developer | Songwriter | Singer | Music Composer",
    headline: "Turning Ideas Into Digital Experiences.",
    sub: "I build modern digital experiences with creativity, precision, and a distinctive visual identity.",
    ctaProjects: "Explore My Projects",
    ctaContact: "Contact Me",
    aboutTitle: "About Me",
    about: [
      "I'm Nader Elbahnsawy — a creative mind moving between code and music. I build websites, write songs, sing, and compose, and each discipline sharpens the others.",
      "What drives me is the meeting point of technology, creativity, and visual storytelling: crafting digital experiences that don't just work, but feel distinctive and memorable.",
    ],
    skillsTitle: "Skills & Interests",
    skillGroups: { web: "Web", creative: "Creative" },
    skills: {
      web: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "Website UI Design", "Website Animations"],
      creative: ["Creative Direction", "Songwriting", "Singing", "Music Composition"],
    },
    projectsTitle: "Featured Projects",
    concept: "Portfolio Concept",
    details: "View Details",
    hide: "Hide Details",
    features: "Key features",
    projects: [
      {
        title: "GENERAL Cafe",
        desc: "A modern bilingual website concept for GENERAL Cafe in Wadi Hof, Cairo, featuring a stylish menu, café information, kids' area, event inquiries, and contact details.",
        features: ["Arabic and English interface", "Interactive menu concept", "Café information and contact section", "Kids' area and events information", "Responsive layout"],
      },
      {
        title: "Nader Music Website",
        desc: "A cinematic music website concept for Nader Elbahnsawy, designed to showcase songs, lyrics, music identity, and an immersive listening experience.",
        features: ["Dark cinematic design", "Music player concept", "Song and lyrics sections", "Artist biography", "Responsive interface"],
      },
    ],
    contactTitle: "Let's Work Together",
    contactSub: "Have a project in mind? Let's create something remarkable together.",
    footerRights: "© 2026 Nader Elbahnsawy. All rights reserved.",
    footerName: "Nader Elbahnsawy",
    toTop: "Back to top",
    menu: "Menu",
  },
  ar: {
    nav: { home: "الرئيسية", about: "من أنا", skills: "المهارات", projects: "المشاريع", contact: "تواصل" },
    name: "نادر البهنساوي",
    welcome: "مرحبًا بك في عالمي.",
    roles: "مطوّر ويب | كاتب أغاني | مطرب | ملحّن",
    headline: "أحوّل الأفكار إلى تجارب رقمية.",
    sub: "أبني تجارب رقمية حديثة بإبداع ودقة وهوية بصرية مميزة.",
    ctaProjects: "استكشف مشاريعي",
    ctaContact: "تواصل معي",
    aboutTitle: "من أنا",
    about: [
      "أنا نادر البهنساوي — شخص مبدع يتنقّل بين البرمجة والموسيقى. أصمّم المواقع، وأكتب الأغاني، وأغنّي، وألحّن، وكل مجال منها يصقل الآخر.",
      "ما يحرّكني هو نقطة التقاء التقنية والإبداع والسرد البصري: صناعة تجارب رقمية لا تعمل فحسب، بل تترك أثرًا مميزًا لا يُنسى.",
    ],
    skillsTitle: "المهارات والاهتمامات",
    skillGroups: { web: "الويب", creative: "الإبداع" },
    skills: {
      web: ["HTML", "CSS", "JavaScript", "التصميم المتجاوب", "تصميم واجهات المواقع", "حركات المواقع"],
      creative: ["التوجيه الإبداعي", "كتابة الأغاني", "الغناء", "التلحين"],
    },
    projectsTitle: "مشاريع مميزة",
    concept: "مفهوم ضمن معرض الأعمال",
    details: "عرض التفاصيل",
    hide: "إخفاء التفاصيل",
    features: "أبرز المزايا",
    projects: [
      {
        title: "GENERAL Cafe",
        desc: "مفهوم موقع حديث ثنائي اللغة لمقهى GENERAL في وادي حوف بالقاهرة، يضم قائمة أنيقة، ومعلومات المقهى، ومنطقة الأطفال، واستفسارات الفعاليات، وبيانات التواصل.",
        features: ["واجهة بالعربية والإنجليزية", "مفهوم قائمة تفاعلية", "قسم معلومات المقهى والتواصل", "معلومات منطقة الأطفال والفعاليات", "تصميم متجاوب"],
      },
      {
        title: "موقع نادر الموسيقي",
        desc: "مفهوم موقع موسيقي سينمائي لنادر البهنساوي، مصمّم لعرض الأغاني والكلمات والهوية الموسيقية وتجربة استماع غامرة.",
        features: ["تصميم سينمائي داكن", "مفهوم مشغّل موسيقى", "أقسام للأغاني والكلمات", "السيرة الفنية", "واجهة متجاوبة"],
      },
    ],
    contactTitle: "لنعمل معًا",
    contactSub: "لديك مشروع في ذهنك؟ لنصنع معًا شيئًا استثنائيًا.",
    footerRights: "© 2026 نادر البهنساوي. جميع الحقوق محفوظة.",
    footerName: "نادر البهنساوي",
    toTop: "العودة للأعلى",
    menu: "القائمة",
  },
} as const;

export const contacts = [
  { key: "facebook", label: "Facebook", value: "Nader Elbahnsawy", href: "https://www.facebook.com/share/1KB9a4UwdR/" },
  { key: "whatsapp", label: "WhatsApp", value: "+20 01150163445", href: "https://wa.me/201150163445" },
  { key: "email", label: "Email", value: "alaanador36@gmail.com", href: "mailto:alaanador36@gmail.com" },
  { key: "instagram", label: "Instagram", value: "@nader_elbahnsawy", href: "https://www.instagram.com/nader_elbahnsawy" },
] as const;
