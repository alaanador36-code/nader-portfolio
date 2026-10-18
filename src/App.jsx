import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDownRight, ArrowUpRight, Code2, Menu, X, Globe2, Mail,
  Instagram, Facebook, MessageCircle, Braces, Monitor, Layers3,
  Sparkles, ExternalLink, BriefcaseBusiness, Check, Zap
} from 'lucide-react';

const portraitIntro = '/assets/portrait-1.png';
const portraitHero = '/assets/portrait-2.png';
const whatsapp = 'https://wa.me/201150163445';

const copy = {
  en: {
    nav: ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'],
    tag: 'WEB DEVELOPER · DIGITAL CREATOR',
    heroA: 'I build digital',
    heroB: 'experiences that',
    heroC: 'stand out.',
    intro: 'Modern, responsive websites designed to bring ideas to life and help businesses build a stronger online presence.',
    hire: 'Let’s work together',
    work: 'Explore my work',
    scroll: 'SCROLL TO EXPLORE',
    available: 'Open to projects & opportunities',
    aboutLabel: 'A LITTLE ABOUT ME',
    aboutTitle: 'Ideas deserve a great place on the web.',
    aboutText: 'I’m Nader Elbahnsawy, a web developer focused on building clean, responsive, and engaging digital experiences. I combine front-end skills with a strong interest in visual design to turn ideas into websites people enjoy using.',
    aboutText2: 'I’m continuously learning, building, and improving — one project at a time.',
    skillsLabel: 'MY TOOLKIT',
    skillsTitle: 'The tools behind the experience.',
    skillsText: 'The core technologies I use to create the web.',
    projectsLabel: 'SELECTED WORK',
    projectsTitle: 'Projects in progress.',
    projectsText: 'A look at what I’m building. These projects are currently in development, and live previews will be added when available.',
    inProgress: 'IN DEVELOPMENT',
    cafeTitle: 'GENERAL Café',
    cafeText: 'A café website concept designed around a menu, kids’ area, parties and events, booking information, and the atmosphere of the place.',
    musicTitle: 'Nader Elbahnsawy Music',
    musicText: 'A music-focused artist website concept with a track list, custom audio player, artist presentation, and contact links.',
    servicesLabel: 'WHAT I CAN BUILD',
    servicesTitle: 'Let’s build something useful.',
    servicesText: 'Clear pricing to get started. The final quote depends on the project’s scope, pages, and required features.',
    priceLabel: 'STARTING RANGE',
    priceNote: 'Final price depends on scope and functionality.',
    service1: 'Responsive websites',
    service1d: 'Clean websites that adapt to phones, tablets, and desktops.',
    service2: 'Personal portfolios',
    service2d: 'A professional online presence to show your work and skills.',
    service3: 'Small business websites',
    service3d: 'A clear home for your business, services, menu, and contact details.',
    service4: 'Landing pages',
    service4d: 'Focused pages for a service, campaign, or new idea.',
    contactLabel: 'HAVE A PROJECT IN MIND?',
    contactTitle: 'Let’s make it real.',
    contactText: 'Tell me what you have in mind. We can talk through the idea, features, and a suitable starting point.',
    whatsapp: 'Discuss your project on WhatsApp',
    email: 'Send me an email',
    social: 'OR FIND ME HERE',
    footerLine: 'Building thoughtful experiences, one line at a time.',
    rights: 'ALL RIGHTS RESERVED.',
    message: 'صلي على النبي، أنا عايز ويبسايت بمشروعي',
    menu: 'Open navigation',
  },
  ar: {
    nav: ['الرئيسية', 'نبذة عني', 'المهارات', 'المشاريع', 'الخدمات', 'تواصل'],
    tag: 'مطور مواقع ويب · صانع تجارب رقمية',
    heroA: 'ببني تجارب',
    heroB: 'رقمية مختلفة',
    heroC: 'تسيب أثر.',
    intro: 'مواقع عصرية ومتجاوبة بتحوّل الأفكار لتجارب رقمية مميزة وتساعد البيزنس يكون له حضور أقوى على الإنترنت.',
    hire: 'خلينا نشتغل سوا',
    work: 'شوف مشاريعي',
    scroll: 'انزل واكتشف',
    available: 'متاح لمشاريع وفرص جديدة',
    aboutLabel: 'نبذة بسيطة عني',
    aboutTitle: 'كل فكرة تستحق مكانًا مميزًا على الويب.',
    aboutText: 'أنا نادر البهنساوي، مطور مواقع مهتم ببناء تجارب رقمية منظمة ومتجاوبة وسهلة الاستخدام. بجمع بين مهارات تطوير الواجهات والاهتمام بالتفاصيل البصرية لتحويل الأفكار لمواقع ممتعة في الاستخدام.',
    aboutText2: 'بتعلم وبطوّر من نفسي باستمرار، مشروع ورا مشروع.',
    skillsLabel: 'أدواتي',
    skillsTitle: 'التقنيات وراء التجربة.',
    skillsText: 'التقنيات الأساسية اللي بستخدمها في تطوير الويب.',
    projectsLabel: 'نماذج من شغلي',
    projectsTitle: 'مشاريع تحت التطوير.',
    projectsText: 'دي نظرة على المشاريع اللي بشتغل عليها حاليًا. هضيف روابط المعاينة لما تكون متاحة.',
    inProgress: 'لسا شغال عليها',
    cafeTitle: 'موقع كافيه GENERAL',
    cafeText: 'تصور لموقع كافيه يشمل المنيو، منطقة الأطفال، الحفلات والمناسبات، معلومات الحجز، وأجواء المكان.',
    musicTitle: 'موقع Nader Elbahnsawy Music',
    musicText: 'تصور لموقع موسيقي للفنان، يشمل قائمة الأغاني ومشغل صوت مخصص ونبذة عن الفنان وروابط التواصل.',
    servicesLabel: 'أقدر أعملك إيه؟',
    servicesTitle: 'خلينا نبني حاجة مفيدة.',
    servicesText: 'أسعار واضحة كبداية، والسعر النهائي بيتحدد حسب حجم المشروع وعدد الصفحات والمميزات المطلوبة.',
    priceLabel: 'الأسعار المبدئية',
    priceNote: 'السعر النهائي حسب تفاصيل المشروع ووظائفه.',
    service1: 'مواقع متجاوبة',
    service1d: 'مواقع منظمة بتشتغل على الموبايل والتابلت والكمبيوتر.',
    service2: 'مواقع شخصية',
    service2d: 'واجهة ملفته تعرض شغلك ومهاراتك بشكل رايق زيك يزميلي.',
    service3: 'مواقع للشركات الصغيرة والكبيره',
    service3d: 'مكان واضح لعرض نشاطك وخدماتك والمنيو والاسعار وبيانات التواصل.',
    service4: 'صفحات هبوط',
    service4d: 'صفحات مركزة لخدمة أو حملة أو فكرة جديدة.',
    contactLabel: 'عندك مشروع في بالك؟',
    contactTitle: 'خلينا نحوله لحقيقة.',
    contactText: 'احكيلي عن فكرتك، ونتكلم عن التفاصيل والمميزات المطلوبة والميزانية المناسبة كبداية.',
    whatsapp: 'ناقش مشروعك على واتساب',
    email: 'ابعتلي إيميل',
    social: 'أو تواصل معايا هنا',
    footerLine: 'ببني تجارب رقمية باهتمام، سطر كود في كل مرة.',
    rights: 'جميع الحقوق محفوظة.',
    message: 'صلي على النبي، أنا عايز ويبسايت بمشروعي',
    menu: 'افتح القائمة',
  }
};

const skills = [
  { name: 'HTML', detail: 'Semantic structure', icon: Braces, number: '01' },
  { name: 'CSS', detail: 'Responsive visual design', icon: Layers3, number: '02' },
  { name: 'JavaScript', detail: 'Interactive experiences', icon: Code2, number: '03' },
  { name: 'React', detail: 'Component-based UI', icon: Zap, number: '04' },
];

function App() {
  const [lang, setLang] = useState('en');
  const [showIntro, setShowIntro] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];
  const rtl = lang === 'ar';

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 2100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.title = 'Nader Elbahnsawy | Web Developer';
  }, [lang, rtl]);

  const waLink = `${whatsapp}?text=${encodeURIComponent(t.message)}`;
  const navIds = ['home', 'about', 'skills', 'projects', 'services', 'contact'];

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div className="intro-screen" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.025, filter: 'blur(8px)' }} transition={{ duration: 0.55, ease: 'easeInOut' }}>
            <div className="intro-grid" />
            <motion.div className="intro-content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
              <div className="intro-image-wrap"><img src={portraitIntro} alt="Nader Elbahnsawy portrait" className="intro-image" /></div>
              <p className="intro-overline">WEB DEVELOPER / DIGITAL CREATOR</p>
              <h1 className="intro-name"><span>Nader</span><span>Elbahnsawy<span className="red-dot">.</span></span></h1>
              <div className="intro-line"><span /></div>
            </motion.div>
            <span className="intro-index">NE — 001</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`site-shell ${rtl ? 'is-rtl' : ''}`}>
        <header className="topbar">
          <button className="brand" onClick={() => goTo('home')} aria-label="Go to home">
            <span className="brand-mark">N<span>E</span></span><span className="brand-name">NADER<span>ELBAHNSAWY</span></span>
          </button>
          <nav className={`desktop-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            {t.nav.map((label, i) => <button key={navIds[i]} onClick={() => goTo(navIds[i])}>{label}</button>)}
          </nav>
          <div className="header-actions">
            <button className="lang-switch" onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} aria-label="Switch language"><Globe2 size={15}/><span>{lang === 'en' ? 'AR' : 'EN'}</span></button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={t.menu}>{menuOpen ? <X/> : <Menu/>}</button>
          </div>
        </header>

        <main>
          <section id="home" className="hero section-wrap">
            <div className="hero-bg-word" aria-hidden="true">DEVELOPER</div>
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" />{t.tag}</div>
              <h1 className="hero-title"><span>{t.heroA}</span><span>{t.heroB}</span><span className="outlined">{t.heroC}</span></h1>
              <p className="hero-description">{t.intro}</p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => goTo('contact')}>{t.hire}<ArrowUpRight size={18}/></button>
                <button className="btn btn-ghost" onClick={() => goTo('projects')}>{t.work}<ArrowDownRight size={17}/></button>
              </div>
              <div className="hero-bottomline"><span className="tiny-square" />{t.available}<span className="hero-bottomline-rule" /></div>
            </div>
            <div className="hero-visual">
              <div className="portrait-glow" />
              <div className="portrait-frame"><img src={portraitHero} alt="Portrait of Nader Elbahnsawy" /></div>
              <div className="portrait-corner corner-tl" /><div className="portrait-corner corner-br" />
              <div className="vertical-label">NADER ELBAHNSAWY / WEB DEV</div>
              <div className="hero-stamp"><span>NE</span><small>BUILD<br/>WITH INTENT</small></div>
              <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            </div>
            <div className="hero-scroll"><span>{t.scroll}</span><div className="scroll-track"><i /></div></div>
            <div className="hero-coordinate">30°02' N — DIGITAL SPACE</div>
          </section>

          <section id="about" className="section section-wrap about-section">
            <div className="section-kicker"><span>01</span><span>{t.aboutLabel}</span><i /></div>
            <div className="about-grid">
              <h2 className="section-heading">{t.aboutTitle}</h2>
              <div className="about-copy"><p>{t.aboutText}</p><p>{t.aboutText2}</p><div className="about-signature">Nader<span>.</span></div></div>
            </div>
            <div className="stat-strip"><div><span className="stat-icon"><Code2 size={18}/></span><strong>04</strong><small>CORE TECHNOLOGIES</small></div><div><span className="stat-icon"><Monitor size={18}/></span><strong>100%</strong><small>RESPONSIVE MINDSET</small></div><div><span className="stat-icon"><Sparkles size={18}/></span><strong>∞</strong><small>ROOM TO IMPROVE</small></div></div>
          </section>

          <section id="skills" className="section section-wrap skills-section">
            <div className="section-kicker"><span>02</span><span>{t.skillsLabel}</span><i /></div>
            <div className="section-title-row"><h2 className="section-heading">{t.skillsTitle}</h2><p>{t.skillsText}</p></div>
            <div className="skills-grid">{skills.map((skill) => { const Icon = skill.icon; return <motion.article className="skill-card" key={skill.name} whileHover={{ y: -6, borderColor: 'rgba(255,42,58,.65)' }} transition={{ duration: .2 }}><div className="skill-card-top"><span>{skill.number}</span><Icon size={23}/></div><h3>{skill.name}</h3><p>{skill.detail}</p><div className="skill-meter"><span /></div></motion.article>; })}</div>
          </section>

          <section id="projects" className="section section-wrap projects-section">
            <div className="section-kicker"><span>03</span><span>{t.projectsLabel}</span><i /></div>
            <div className="section-title-row projects-title-row"><h2 className="section-heading">{t.projectsTitle}</h2><p>{t.projectsText}</p></div>
            <div className="projects-grid">
              <article className="project-card project-cafe">
                <div className="project-art cafe-art"><div className="art-grid" /><span className="art-label">GENERAL / CAFÉ</span><div className="cafe-graphic"><span>G</span><i /></div><div className="art-bottom"><span>HOSPITALITY</span><span>01 — 02</span></div></div>
                <div className="project-info"><div className="project-meta"><span className="project-status"><i />{t.inProgress}</span><span>01 / 02</span></div><h3>{t.cafeTitle}</h3><p>{t.cafeText}</p><div className="tech-list"><span>HTML</span><span>CSS</span><span>JavaScript</span></div></div>
              </article>
              <article className="project-card project-music">
                <div className="project-art music-art"><div className="art-grid" /><span className="art-label">NADER ELBAHNSAWY / MUSIC</span><div className="music-graphic"><span>NE</span><div className="waveform">{Array.from({length: 27}, (_, i) => <i key={i} style={{height: `${18 + ((i * 17 + 13) % 58)}px`}} />)}</div></div><div className="art-bottom"><span>SOUND & IDENTITY</span><span>02 — 02</span></div></div>
                <div className="project-info"><div className="project-meta"><span className="project-status"><i />{t.inProgress}</span><span>02 / 02</span></div><h3>{t.musicTitle}</h3><p>{t.musicText}</p><div className="tech-list"><span>HTML</span><span>CSS</span><span>JavaScript</span></div></div>
              </article>
            </div>
          </section>

          <section id="services" className="section section-wrap services-section">
            <div className="section-kicker"><span>04</span><span>{t.servicesLabel}</span><i /></div>
            <div className="services-heading-row"><div><h2 className="section-heading">{t.servicesTitle}</h2><p className="section-subtext">{t.servicesText}</p></div><div className="price-card"><span>{t.priceLabel}</span><strong><small>EGP</small> 700 <i>—</i> 1,500</strong><p>{t.priceNote}</p></div></div>
            <div className="services-grid">
              {[['01',t.service1,t.service1d,Monitor],['02',t.service2,t.service2d,BriefcaseBusiness],['03',t.service3,t.service3d,Globe2],['04',t.service4,t.service4d,ArrowUpRight]].map(([n,title,desc,Icon]) => <article className="service-item" key={n}><span className="service-number">{n}</span><Icon size={21}/><h3>{title}</h3><p>{desc}</p><ArrowUpRight className="service-arrow" size={18}/></article>)}
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div className="contact-glow" />
            <div className="section-wrap contact-inner">
              <div className="section-kicker"><span>05</span><span>{t.contactLabel}</span><i /></div>
              <h2>{t.contactTitle}<span>.</span></h2>
              <p className="contact-description">{t.contactText}</p>
              <div className="contact-actions">
                <a className="btn btn-primary" href={waLink} target="_blank" rel="noreferrer"><MessageCircle size={19}/>{t.whatsapp}<ArrowUpRight size={17}/></a>
                <a className="btn btn-ghost" href="mailto:alaanador36@gmail.com"><Mail size={18}/>{t.email}</a>
              </div>
              <div className="social-row"><span>{t.social}</span><a href="https://www.facebook.com/nader.elbahnsawy" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18}/></a><a href="https://www.instagram.com/nader_elbahnsawy/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a><a href="mailto:alaanador36@gmail.com" aria-label="Email"><Mail size={18}/></a><a href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18}/></a></div>
              <div className="contact-email"><span>EMAIL</span><a href="mailto:alaanador36@gmail.com">alaanador36@gmail.com</a></div>
            </div>
          </section>
        </main>

        <footer className="footer section-wrap"><button className="brand footer-brand" onClick={() => goTo('home')}><span className="brand-mark">N<span>E</span></span><span className="brand-name">NADER<span>ELBAHNSAWY</span></span></button><p>{t.footerLine}</p><span className="footer-right">© {new Date().getFullYear()} NADER ELBAHNSAWY <span>{t.rights}</span></span></footer>
      </div>
    </>
  );
}

export default App;