import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { caseStudies } from '@/lib/content';

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=caseStudies.find(c=>c.slug===slug);
  return {title:c?.title??'Case study not found',description:c?.description};
}

export default async function Case({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=caseStudies.find(c=>c.slug===slug);
  if(!c) notFound();
  const rich=Boolean(c.sections?.length||c.workflow?.length||c.detailIntro);

  return <main id="main" className="case-theme-main">
    <div id="top"/>
    <section className="container case-theme-hero">
      <div className="case-theme-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/case-studies">Case Studies</Link><span>/</span><span>{c.short??c.client}</span></div>
      <span className="case-theme-pill">{c.label}</span>
      <h1>{c.title}</h1>
      <p>{c.detailIntro??c.description}</p>
      <div className="case-theme-tools">{c.tools.map(t=><span key={t}>{t}</span>)}</div>
    </section>

    <section className="container case-theme-detail">
      {!rich&&<section className="case-theme-overview">
        <span className="eyebrow">THE PROJECT</span>
        <h2>Connected technology. A better way to work.</h2>
        <p>{c.description}</p>
      </section>}

      {c.workflow&&<section className="case-study-section case-workflow-section">
        <span className="eyebrow">WORKFLOW</span>
        <div className="case-workflow">{c.workflow.map((step,index)=><div key={step}><span>{String(index+1).padStart(2,'0')}</span><strong>{step}</strong></div>)}</div>
      </section>}

      {c.sections?.map((section,index)=><section className="case-study-section" key={section.title}>
        <div className="case-study-section-heading">
          <span>{String(index+1).padStart(2,'0')}</span>
          <h2>{section.title}</h2>
        </div>

        {section.paragraphs?.map((p)=><p className="case-study-lead" key={p}>{p}</p>)}

        {section.bullets&&<div className="case-study-bullets">{section.bullets.map(item=><div key={item}><Check size={17}/><span>{item}</span></div>)}</div>}

        {section.cards&&<div className="case-study-cards">{section.cards.map(card=><article key={card.title}>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
          {card.items&&<ul>{card.items.map(item=><li key={item}>{item}</li>)}</ul>}
        </article>)}</div>}

        {section.steps&&<ol className="case-study-steps">{section.steps.map((step,i)=><li key={step}><span>{String(i+1).padStart(2,'0')}</span><p>{step}</p></li>)}</ol>}
      </section>)}

      <section className="case-study-cta">
        <span className="eyebrow">BUILD WITH ELEVIX</span>
        <h2>{c.ctaTitle??'Have a similar project in mind?'}</h2>
        <p>{c.ctaText??'Tell us what you are trying to improve, automate or launch. We’ll help you shape the right delivery approach.'}</p>
        <Link href="/contact-us" className="button button-light">Start a conversation <ArrowUpRight size={18}/></Link>
      </section>

      <div style={{marginTop:16}}><Link href="/case-studies" className="text-link"><ArrowLeft size={16}/> All case studies</Link></div>
    </section>
  </main>;
}
