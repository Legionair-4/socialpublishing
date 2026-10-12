import Link from 'next/link';
import { ArrowRight, CalendarDays, Layers3, ShieldCheck, Sparkles } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const features = [
  { title: 'One publishing workspace', detail: 'Prepare content for TikTok, Instagram and Facebook in one place.', Icon: Layers3 },
  { title: 'Scheduling with control', detail: 'Manage publication timing while respecting each network’s requirements.', Icon: CalendarDays },
  { title: 'Built for teams', detail: 'Separate business workspaces, account permissions and publication history.', Icon: ShieldCheck },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Sparkles size={20} /></span>
          SocialPublishing
        </Link>
        <ThemeToggle />
      </header>
      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full border bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Multi-platform publishing · In development</span>
            <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl">Your content. <span className="text-primary">One workspace.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">A clearer way for businesses to organise, prepare and publish social content across their channels.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90">Explore features <ArrowRight size={17}/></a>
              <a href="https://github.com/Legionair-4/socialpublishing" className="inline-flex items-center rounded-xl border bg-card px-5 py-3 font-semibold hover:bg-accent">View development</a>
            </div>
          </div>
          <div className="rounded-3xl border bg-card p-5 shadow-xl shadow-primary/5">
            <div className="flex items-center justify-between border-b pb-4"><span className="font-semibold">Publishing overview</span><span className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">Preview</span></div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {['TikTok', 'Instagram', 'Facebook'].map(name => <div key={name} className="rounded-xl border bg-secondary p-3 text-center text-sm font-medium">{name}</div>)}
            </div>
            <div className="mt-5 space-y-3">
              {['Create a post', 'Choose your channels', 'Review and publish'].map((name, index) => (
                <div key={name} className="flex items-center gap-4 rounded-xl border p-4"><span className="grid size-9 place-items-center rounded-lg bg-accent text-sm font-bold text-accent-foreground">{index + 1}</span><span className="font-medium">{name}</span></div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Illustrative UI only. Social account connections and publishing are not yet active.</p>
          </div>
        </section>
        <section id="features" className="border-t bg-secondary/40 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold tracking-tight">Designed for independent businesses</h2>
            <p className="mt-3 text-muted-foreground">A focused publishing workflow, without unnecessary complexity.</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {features.map(({ title, detail, Icon }) => <article key={title} className="rounded-2xl border bg-card p-6"><Icon className="text-primary" size={28}/><h3 className="mt-5 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p></article>)}
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">© {new Date().getFullYear()} SocialPublishing · Product in development</footer>
    </div>
  );
}
