import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Mail, MessageCircle, Menu, X, ArrowUp, Code2, Music } from "lucide-react";
import { t, contacts, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nader Elbahnsawy — Web Developer, Songwriter & Composer" },
      { name: "description", content: "Portfolio of Nader Elbahnsawy: web developer, songwriter, singer and music composer turning ideas into digital experiences." },
      { property: "og:title", content: "Nader Elbahnsawy — Portfolio" },
      { property: "og:description", content: "Web Developer | Songwriter | Singer | Music Composer" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const icons = { facebook: Facebook, whatsapp: MessageCircle, email: Mail, instagram: Instagram };
const sections = ["home", "about", "skills", "projects", "contact"] as const;

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [intro, setIntro] = useState(true);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const c = t[lang];

  useEffect(() => {
    const id = setTimeout(() => setIntro(false), 2200);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Intro */}
      <div
        aria-hidden={!intro}
        onClick={() => setIntro(false)}
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-700 ${intro ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <img src="/images/portrait-1.png" alt="" onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} className="portrait-fade h-56 w-48 object-cover animate-rise sm:h-72 sm:w-60" />
        <h1 className="neon-text animate-glitch px-4 text-center text-4xl font-extrabold tracking-[0.2em] text-foreground sm:text-6xl">
          {c.name}
        </h1>
        <p className="animate-rise text-sm uppercase tracking-[0.4em] text-crimson" style={{ animationDelay: ".5s" }}>
          {c.welcome}
        </p>
      </div>

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-display text-lg font-extrabold tracking-widest">
            N<span className="text-crimson neon-text">.</span>E
          </a>
          <ul className="hidden gap-8 md:flex">
            {sections.map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="text-sm text-muted-foreground transition hover:text-crimson">
                  {c.nav[s]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              aria-label="Toggle language"
              className="rounded-full border px-4 py-1.5 text-sm transition hover:border-crimson hover:text-crimson"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>
            <button className="p-2 md:hidden" aria-label={c.menu} aria-expanded={menu} onClick={() => setMenu(!menu)}>
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
        {menu && (
          <ul className="flex flex-col border-t bg-background px-5 py-4 md:hidden">
            {sections.map((s) => (
              <li key={s}>
                <a href={`#${s}`} onClick={() => setMenu(false)} className="block py-3 text-muted-foreground hover:text-crimson">
                  {c.nav[s]}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="grain relative flex min-h-screen items-center pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-crimson">{c.roles}</p>
            <h1 className="neon-text mb-4 text-4xl font-extrabold leading-tight tracking-wide sm:text-6xl">{c.name}</h1>
            <h2 className="mb-5 text-2xl font-semibold text-foreground/90 sm:text-3xl">{c.headline}</h2>
            <p className="mb-8 max-w-md text-muted-foreground">{c.sub}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="neon-box rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:scale-105">
                {c.ctaProjects}
              </a>
              <a href="#contact" className="rounded-full border border-crimson px-7 py-3 font-semibold transition hover:bg-accent">
                {c.ctaContact}
              </a>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <img src="/images/portrait-2.png" alt="Nader Elbahnsawy portrait" onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} className="portrait-fade max-h-[78vh] w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title={c.aboutTitle}>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          {c.about.map((p) => <p key={p}>{p}</p>)}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title={c.skillsTitle}>
        <div className="grid gap-10 md:grid-cols-2">
          {(["web", "creative"] as const).map((g) => {
            const Icon = g === "web" ? Code2 : Music;
            return (
              <div key={g}>
                <h3 className="mb-5 flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-crimson">
                  <Icon className="h-4 w-4" /> {c.skillGroups[g]}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {c.skills[g].map((s) => (
                    <span key={s} className="rounded-md border bg-card px-4 py-2.5 text-sm transition hover:-translate-y-1 hover:border-crimson hover:neon-box">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title={c.projectsTitle}>
        <div className="grid gap-6 md:grid-cols-2">
          {c.projects.map((p, i) => (
            <article key={i} className="group rounded-xl border bg-card p-7 transition duration-500 hover:-translate-y-2 hover:border-crimson hover:neon-box">
              <span className="text-xs uppercase tracking-[0.25em] text-crimson">{c.concept}</span>
              <h3 className="mt-3 mb-3 text-2xl font-bold">{p.title}</h3>
              <p className="text-muted-foreground">{p.desc}</p>
              {open === i && (
                <div className="mt-5 animate-rise">
                  <p className="mb-2 text-sm font-semibold">{c.features}</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2"><span className="text-crimson">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="mt-6 rounded-full border border-crimson px-5 py-2 text-sm transition hover:bg-primary hover:text-primary-foreground"
              >
                {open === i ? c.hide : c.details}
              </button>
            </article>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={c.contactTitle}>
        <p className="mb-10 max-w-xl text-lg text-muted-foreground">{c.contactSub}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((ct) => {
            const Icon = icons[ct.key];
            return (
              <a
                key={ct.key}
                href={ct.href}
                target={ct.key === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={`${ct.label}: ${ct.value}`}
                className="group flex flex-col gap-3 rounded-xl border bg-card p-6 transition hover:-translate-y-1 hover:border-crimson hover:neon-box"
              >
                <Icon className="h-6 w-6 text-crimson transition group-hover:scale-110" />
                <span className="font-semibold">{ct.label}</span>
                <span dir="ltr" className="break-all text-start text-sm text-muted-foreground">{ct.value}</span>
              </a>
            );
          })}
        </div>
      </Section>

      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          <p className="font-display text-lg font-bold">{c.footerName}</p>
          <p className="text-sm text-muted-foreground">{c.roles}</p>
          <div className="flex gap-4">
            {contacts.map((ct) => {
              const Icon = icons[ct.key];
              return (
                <a key={ct.key} href={ct.href} target={ct.key === "email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={ct.label} className="text-muted-foreground transition hover:text-crimson">
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground">{c.footerRights}</p>
        </div>
      </footer>

      {scrolled && (
        <a href="#home" aria-label={c.toTop} className="neon-box fixed bottom-6 end-6 z-40 rounded-full bg-primary p-3 text-primary-foreground transition hover:scale-110">
          <ArrowUp className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-24">
      <div className="reveal mx-auto max-w-6xl px-5">
        <h2 className="mb-10 text-3xl font-extrabold sm:text-5xl">
          {title}<span className="text-crimson neon-text">.</span>
        </h2>
        {children}
      </div>
    </section>
  );
}
