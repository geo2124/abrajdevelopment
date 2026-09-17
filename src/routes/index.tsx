import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Building2, ChevronDown, Compass, Download,
  Home, Layers3, Mail, Menu, X,
} from "lucide-react";
import heroImage from "@/assets/abraj-hero.jpg";
import projectsImage from "@/assets/abraj-projects.jpg";
import teamImage from "@/assets/abraj-team.jpg";
import logoAsset from "@/assets/abraj-logo.jfif.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abraj Developments | Landmark Real Estate" },
      { name: "description", content: "Abraj Developments creates landmark residential, commercial, and hospitality destinations across the region." },
      { property: "og:title", content: "Abraj Developments | Landmark Real Estate" },
      { property: "og:description", content: "Building the skyline of what comes next." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const projects = [
  { name: "Aurora Business Park", type: "Commercial", place: "Beirut", detail: "1.2M sq ft of smart workspace", position: "0%" },
  { name: "Solstice Quarter", type: "Mixed-use", place: "Dubai", detail: "Retail, dining & residences", position: "50%" },
  { name: "The Luma Hotel", type: "Hospitality", place: "Doha", detail: "210 keys · five-star standard", position: "100%" },
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" aria-label="Abraj Developments home" className={`block overflow-hidden rounded-sm ${inverse ? "bg-mist" : "bg-background"}`}>
      <img src={logoAsset.url} alt="Abraj Developments" className="h-11 w-auto object-contain px-2 py-1.5 md:h-12" />
    </a>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <section className="relative min-h-[94svh] overflow-hidden">
        <img src={heroImage} alt="Landmark waterfront tower at dusk" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto flex min-h-[94svh] max-w-7xl flex-col px-5 md:px-8">
          <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 md:flex md:justify-between md:py-7">
            <Logo inverse />
            <nav className="hidden items-center gap-8 text-sm text-foreground/85 lg:flex">
              <div className="group relative">
                <a href="#projects" className="flex items-center gap-1.5 py-4 hover:text-foreground">Portfolio <ChevronDown className="size-3.5" /></a>
                <div className="invisible absolute left-0 top-full w-60 translate-y-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="glass-panel rounded-md p-2">
                    {["Commercial Towers", "Mixed-Use Districts", "Hospitality", "Residential"].map((item) => <a key={item} href="#projects" className="block rounded-sm px-3 py-2.5 text-sm text-foreground/80 hover:bg-foreground/10 hover:text-foreground">{item}</a>)}
                  </div>
                </div>
              </div>
              <div className="group relative">
                <a href="#company" className="flex items-center gap-1.5 py-4 hover:text-foreground">Company <ChevronDown className="size-3.5" /></a>
                <div className="invisible absolute left-0 top-full w-48 translate-y-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="glass-panel rounded-md p-2">
                    {["Our Story", "Expertise", "Leadership"].map((item) => <a key={item} href="#company" className="block rounded-sm px-3 py-2.5 text-sm text-foreground/80 hover:bg-foreground/10 hover:text-foreground">{item}</a>)}
                  </div>
                </div>
              </div>
              <a href="#news" className="hover:text-foreground">News</a>
              <a href="#contact" className="hover:text-foreground">Contact</a>
            </nav>
            <a href="#contact" className="hidden items-center gap-2 rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-xl lg:inline-flex">Start a project <ArrowRight className="size-4" /></a>
            <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)} className="glass-panel grid size-11 place-items-center rounded-sm lg:hidden">
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </header>

          {menuOpen && (
            <div className="glass-panel absolute inset-x-5 top-20 z-40 rounded-md p-3 lg:hidden">
              {["Portfolio", "Company", "Expertise", "News", "Contact"].map((item) => <a key={item} href={`#${item === "Portfolio" ? "projects" : item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-foreground/10 px-3 py-4 text-sm last:border-0">{item}<ArrowRight className="size-4 text-accent" /></a>)}
            </div>
          )}

          <div className="flex flex-1 items-center py-12 md:py-16">
            <div className="grid w-full gap-10 lg:grid-cols-12 lg:items-end">
              <div className="reveal min-w-0 lg:col-span-8">
                <p className="inline-flex items-center gap-2 rounded-sm border border-foreground/20 bg-foreground/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ice backdrop-blur-md"><span className="size-1.5 bg-accent" /> Real estate developers · Since 1998</p>
                <h1 className="mt-6 max-w-4xl font-display text-5xl font-light leading-[0.98] text-foreground sm:text-6xl md:text-8xl">Building the skyline of what comes next.</h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">Abraj Developments creates landmark commercial, residential and hospitality destinations—from first vision to final handover.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-6 py-3.5 text-sm font-semibold text-primary">Explore the portfolio <ArrowRight className="size-4" /></a>
                  <a href="#company" className="inline-flex items-center justify-center gap-2 rounded-sm border border-foreground/25 bg-foreground/10 px-6 py-3.5 text-sm font-medium backdrop-blur-md"><Download className="size-4" /> Company profile</a>
                </div>
              </div>
              <aside className="glass-panel reveal reveal-delay hidden rounded-md p-6 lg:col-span-4 lg:block">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-ice">Portfolio at a glance</p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[["24", "Landmarks"], ["1.8M", "Sq metres"], ["6", "Cities"]].map(([value, label]) => <div key={label}><strong className="font-display text-3xl font-normal">{value}</strong><span className="mt-1 block text-xs text-foreground/55">{label}</span></div>)}
                </div>
                <div className="mt-6 border-t border-foreground/15 pt-5"><p className="text-sm font-medium">Meridian One</p><p className="mt-1 text-xs text-foreground/60">48 floors · Delivery 2027</p></div>
              </aside>
            </div>
          </div>
          <a href="#projects" className="mb-8 hidden w-fit items-center gap-3 text-xs text-foreground/55 md:flex"><span className="h-px w-10 bg-accent" /> Scroll to discover</a>
        </div>
      </section>

      <section id="projects" className="bg-mist py-20 text-primary md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
            <div className="min-w-0"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Selected works</p><h2 className="mt-3 font-display text-4xl font-light md:text-6xl">A portfolio of landmarks</h2></div>
            <a href="#contact" className="hidden items-center gap-2 text-sm font-medium sm:flex">View all <ArrowRight className="size-4" /></a>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.name} className="group overflow-hidden rounded-md bg-background shadow-[0_20px_55px_color-mix(in_oklab,var(--primary)_12%,transparent)]">
                <div className="relative aspect-[4/3] overflow-hidden"><img src={projectsImage} alt={project.name} loading="lazy" width={1920} height={768} className="h-full w-[300%] max-w-none object-cover transition-transform duration-700 group-hover:scale-[1.03]" style={{ objectPosition: project.position, transform: `translateX(-${index * 33.333}%)` }} /><span className="absolute left-4 top-4 rounded-sm bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur-md">{project.place}</span></div>
                <div className="p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ice">{project.type}</p><h3 className="mt-2 font-display text-2xl text-foreground">{project.name}</h3><p className="mt-2 text-sm text-foreground/60">{project.detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className="bg-primary py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Our story</p><h2 className="mt-3 max-w-xl font-display text-4xl font-light leading-tight md:text-6xl">Turning land into legacy.</h2><p className="mt-6 max-w-xl leading-relaxed text-foreground/68">For more than twenty-five years, Abraj has paired architectural ambition with disciplined delivery. Our teams manage every stage—feasibility, design, construction and operations—so quality stays in our hands.</p>
            <div id="expertise" className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 text-sm">{["Sustainable by design", "On-time delivery", "In-house expertise", "Investor-led governance"].map((item) => <p key={item} className="flex items-center gap-3 text-foreground/80"><span className="h-px w-5 shrink-0 bg-accent" />{item}</p>)}</div>
          </div>
          <img src={teamImage} alt="Abraj development team reviewing a masterplan" loading="lazy" width={1200} height={1408} className="aspect-[4/5] w-full rounded-md object-cover" />
        </div>
      </section>

      <section id="news" className="bg-deep py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Newsroom</p><h2 className="mt-3 font-display text-4xl font-light md:text-5xl">Latest from Abraj</h2>
          <div className="mt-9 grid gap-px overflow-hidden rounded-md bg-foreground/15 md:grid-cols-3">{[
            ["12 March 2026", "Meridian One reaches its highest point", "The 48-storey flagship advances two months ahead of schedule."],
            ["28 February 2026", "Abraj announces a new waterfront district", "A mixed-use neighbourhood shaped around a public promenade."],
            ["09 February 2026", "Luma earns regional design recognition", "The hospitality destination is praised for low-impact design."],
          ].map(([date, title, copy]) => <article key={title} className="bg-deep p-6 md:p-8"><p className="text-xs text-ice/65">{date}</p><h3 className="mt-3 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-foreground/55">{copy}</p><a href="#contact" aria-label={`Read ${title}`} className="mt-6 inline-flex text-accent"><ArrowRight className="size-5" /></a></article>)}</div>
        </div>
      </section>

      <section id="contact" className="bg-primary py-20 pb-28 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8"><div className="glass-panel grid gap-8 rounded-md p-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-12"><div className="min-w-0"><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Start a conversation</p><h2 className="mt-3 font-display text-4xl font-light md:text-5xl">Let’s build something that lasts.</h2><p className="mt-4 max-w-2xl text-foreground/65">Speak with our development team about land, investment or partnership opportunities.</p></div><a href="mailto:hello@abrajdevelopments.com" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground">Contact our team <Mail className="size-4" /></a></div>
          <footer className="mt-14 flex flex-col gap-6 border-t border-foreground/15 pt-8 text-sm text-foreground/55 md:flex-row md:items-center md:justify-between"><Logo inverse /><p>© 2026 Abraj Developments. All rights reserved.</p><div className="flex gap-5"><a href="#company">Company</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div></footer>
        </div>
      </section>

      <nav aria-label="Mobile navigation" className="fixed inset-x-0 bottom-0 z-50 border-t border-primary/10 bg-mist/95 pb-[env(safe-area-inset-bottom)] text-primary shadow-2xl backdrop-blur-xl md:hidden">
        <div className="grid grid-cols-5">
          {[[Home,"Home","#top"],[Building2,"Projects","#projects"],[Compass,"Explore","#company"],[Layers3,"News","#news"]].map(([Icon,label,href]) => { const NavIcon = Icon as typeof Home; return <a key={label as string} href={href as string} className="flex min-w-0 flex-col items-center gap-1 py-2.5 text-[10px] font-medium"><NavIcon className="size-5" /><span className="truncate">{label as string}</span></a>; })}
          <a href="#contact" className="flex min-w-0 flex-col items-center gap-1 py-2.5 text-[10px] font-semibold"><span className="-mt-5 grid size-10 place-items-center rounded-full bg-accent shadow-lg"><ArrowRight className="size-5" /></span><span>Contact</span></a>
        </div>
      </nav>
    </main>
  );
}