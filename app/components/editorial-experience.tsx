'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Layers3, Users, Check } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from '@/components/ui/carousel';
import { AnimatedText, useMotion } from './motion-system';
import type { Post } from '@/lib/wordpress';

export function ScrollStatement() {
  const { enabled } = useMotion();
  const ref = useRef<HTMLDivElement>(null);
  const text = 'Technology should do more than keep up. It should open doors, connect people, and make your next big idea possible.';
  useEffect(() => {
    const element = ref.current;
    if (!enabled || !element) return;
    let frame = 0;
    let visible = false;
    const words = [...element.querySelectorAll<HTMLElement>('.reading-word')];
    const update = () => {
      frame = 0;
      if (!visible) return;
      const box = element.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (innerHeight * .88 - box.top) / (innerHeight * .45 + box.height * .25)));
      words.forEach((word, index) => word.style.setProperty('--fill', `${Math.max(0, Math.min(1, progress * (words.length + 2) - index)) * 100}%`));
    };
    const queue = () => { if (!frame && visible) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; queue(); }, { rootMargin: '80px' });
    observer.observe(element);
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queue);
      words.forEach(word => word.style.removeProperty('--fill'));
    };
  }, [enabled]);
  return <section className="scroll-statement-section">
    <div className="container scroll-statement-layout" ref={ref}>
      <div className="statement-kicker"><span className="eyebrow"><span className="status-dot"/>OUR POINT OF VIEW</span><span className="statement-star" aria-hidden="true"><Sparkles size={55} strokeWidth={1}/></span></div>
      <div><h2 className="reading-statement">{text.split(' ').map((word, i) => <span className="reading-word" key={i}>{word}{' '}</span>)}</h2><div className="statement-end"><span>THAT’S WHAT WE’RE HERE TO BUILD.</span><Link href="/overview" className="text-link">The Elevix perspective <ArrowUpRight size={18}/></Link></div></div>
    </div>
  </section>;
}

export function CinematicFeature() {
  return <section className="cinematic-feature">
    <div className="cinematic-frame" data-parallax>
      <img className="cinematic-image" data-parallax-image src="/images/glass-architecture.webp" alt="An architectural landscape of connected emerald glass forms" loading="lazy" width="1600" height="900"/>
      <div className="cinematic-shade"/>
      <div className="container cinematic-content">
        <div data-reveal><span className="eyebrow"><span className="status-dot"/>THE FUTURE ISN’T ONE THING.</span><h2><AnimatedText text="It’s everything"/><br/><em><AnimatedText text="working together."/></em></h2><p>Connected products. Intelligent platforms.<br/>Technology built around the way you work.</p><Link href="/services" className="button button-dark">Explore the possibilities <ArrowUpRight size={19}/></Link></div>
        <div className="cinematic-caption"><span>ELEVIX / CONNECTED THINKING</span><span>01 — INFINITE POSSIBILITIES</span></div>
      </div>
    </div>
  </section>;
}

const opportunities = [
  { title: 'Intelligence, everywhere.', label: 'AI & AUTOMATION', image: '/images/ai-glass.webp', description: 'Bring practical intelligence into the everyday. Connect knowledge, automate repetitive work, and give your team more room to focus.', href: '/ai-ml-services', icon: Sparkles },
  { title: 'Experiences that connect.', label: 'DIGITAL PRODUCTS', image: '/images/product-glass.webp', description: 'From the first interaction to the moments that keep people coming back, create thoughtful web and mobile products around your users.', href: '/smart-app-engineering', icon: Layers3 },
  { title: 'People, working better.', label: 'CONNECTED WORKPLACES', image: '/images/workshop.webp', description: 'Help your people work as one. Bring tools, information, and workflows together with Microsoft 365 and custom business applications.', href: '/microsoft-365-services', icon: Users },
];

export function PossibilityPanels() {
  return <section className="section possibility-section"><div className="container">
    <div className="section-heading"><div><span className="eyebrow"><span className="status-dot"/>THINK BIGGER</span><h2><AnimatedText text="What could your"/><br/><span className="muted-title"><AnimatedText text="next chapter look like?"/></span></h2></div><p className="section-note">Different possibilities. The same connected approach to making them real.</p></div>
    <Tabs defaultValue="0" className="possibility-tabs">
      <TabsList className="possibility-panels" aria-label="Explore business possibilities">{opportunities.map((item, i) => <TabsTrigger value={String(i)} key={item.title} className="possibility-panel" data-cursor="expand"><img src={item.image} alt="" loading="lazy"/><span className="possibility-scrim"/><span className="possibility-number">0{i + 1}</span><span className="possibility-caption"><span>{item.label}</span><strong>{item.title}</strong></span><span className="possibility-plus" aria-hidden="true">+</span></TabsTrigger>)}</TabsList>
      {opportunities.map((item, i) => <TabsContent value={String(i)} className="possibility-detail" key={item.title}><item.icon size={28} strokeWidth={1.5}/><p>{item.description}</p><Link href={item.href} className="text-link">Explore this possibility <ArrowUpRight size={18}/></Link></TabsContent>)}
    </Tabs>
  </div></section>;
}

const partnershipOptions = [
  { n: '01', title: 'Shape a new idea.', stage: 'FROM ZERO TO ONE', image: '/images/workshop.webp', text: 'Find clarity, explore the opportunity, and shape a focused first release.', points: ['Discovery & product thinking', 'Design & prototyping', 'MVP development'], href: '/smart-app-engineering' },
  { n: '02', title: 'Take the next leap.', stage: 'FROM MOMENTUM TO SCALE', image: '/images/product-glass.webp', text: 'Evolve a product your users already love, with the engineering to grow.', points: ['Product experience improvements', 'Scalable application foundations', 'Integrations & automation'], href: '/next-gen-app-development' },
  { n: '03', title: 'Reimagine what’s possible.', stage: 'FROM COMPLEXITY TO CLARITY', image: '/images/glass-architecture.webp', text: 'Connect your platforms and turn a complex technology landscape into progress.', points: ['Application modernization', 'AI & cloud solutions', 'Microsoft 365 transformation'], href: '/services' },
];

export function PartnershipCards() {
  return <section className="section partnership-section"><div className="container"><div className="section-heading"><div><span className="eyebrow"><span className="status-dot"/>WHEREVER YOU ARE TODAY</span><h2><AnimatedText text="A partner for"/><br/><span className="muted-title"><AnimatedText text="your next move."/></span></h2></div><Link href="/contact-us" className="text-link">Let’s find your starting point <ArrowUpRight size={18}/></Link></div><div className="partnership-cards">{partnershipOptions.map(item => <article className="partnership-card" key={item.n} data-reveal data-tilt><div className="partnership-image"><img src={item.image} alt="" loading="lazy"/><span>{item.n}</span></div><div className="partnership-content"><span className="eyebrow">{item.stage}</span><h3>{item.title}</h3><p>{item.text}</p><ul>{item.points.map(point => <li key={point}><Check size={15}/>{point}</li>)}</ul><Link href={item.href} className="text-link">Let’s move forward <ArrowUpRight size={18}/></Link></div></article>)}</div></div></section>;
}

export function InsightsCarousel({ posts }: { posts: Post[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => { if (!api) return; const select = () => setCurrent(api.selectedScrollSnap()); select(); api.on('select', select); return () => { api.off('select', select); }; }, [api]);
  if (!posts.length) return <p className="section-note">New perspectives are on the way. Explore our services while we prepare our next insight.</p>;
  return <Carousel opts={{ align: 'start', loop: posts.length > 3 }} setApi={setApi} className="insights-carousel" aria-label="Elevix insights"><CarouselContent>{posts.map(post => <CarouselItem className="insights-slide" key={post.slug}><article className="editorial-post"><Link href={'/blogs/' + post.slug} className="editorial-post-image" data-cursor="view"><img src={post.image || '/images/ai-glass.webp'} alt="" loading="lazy"/><span><ArrowUpRight size={22}/></span></Link><div className="post-meta">{post.category}<span>·</span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</div><h3><Link href={'/blogs/' + post.slug}>{post.title}</Link></h3><Link href={'/blogs/' + post.slug} className="text-link">Read the perspective <ArrowRight size={16}/></Link></article></CarouselItem>)}</CarouselContent><div className="carousel-toolbar"><span className="carousel-counter">0{current + 1}<span> / {String(posts.length).padStart(2, '0')}</span></span><span className="carousel-drag-hint">A FRESH PERSPECTIVE IS ONE SWIPE AWAY</span><div className="carousel-arrows"><CarouselPrevious className="carousel-prev"/><CarouselNext className="carousel-next"/></div></div></Carousel>;
}
