import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { caseStudies } from '@/lib/content';
import { PageIntro } from '../../components/content-blocks';
import { CallToAction } from '../../components/site-shell';

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=caseStudies.find(c=>c.slug===slug);
  return {title:c?.title??'Case study not found',description:c?.description};
}

export default async function Case({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=caseStudies.find(c=>c.slug===slug);
  if(!c) notFound();

  const picture=c.image??'/images/product-glass.webp';
  const rich=Boolean(c.sections?.length||c.workflow?.length||c.detailIntro);

  return <main id="main" className="inner-main">
    <div id="top"/>
    <PageIntro eyebrow="Case Studies" title={c.title} description={c.description} image={picture}/>
    <section className="container inner-section">
      <div className="case-detail-hero">
        <div className={'case-visual case-with-image '+c.color}>
          <img src={picture} alt={c.title+' visual'} loading="lazy"/>
          <span className="case-label">{c.label}</span>
          <div className="case-visual-bottom"><span>{c.tools[0]}</span><ArrowUpRight size={25}/></div>
        </div>
        <div className="case-detail-body">
          <span className="eyebrow">THE PROJECT</span>
          <h2>{c.detailTitle??'Connected technology. A better way to work.'}</h2>
          <p>{c.detailIntro??c.description}</p>
          <div className="tag-list">{c.tools.map(t=><span className="tag" key={t}>{t}</span>)}</div>
          <Link href="/contact-us" className="text-link">Discuss a similar project <ArrowUpRight size={18}/></Link>
        </div>
      </div>

      {rich&&<>
        {c.workflow&&<section className="case-study-section case-workflow-section">
          <span className="eyebrow">WORKFLOW</span>
          <div className="case-workflow">{c.workflow.map((step,index)=><div key={step}><span>{String(index+1).padStart(2,'0')}</span><strong>{step}</strong></div>)}</div>
        </section>}

        <div className="case-study-content">
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
        </div>

        {c.ctaTitle&&<section className="case-study-cta">
          <span className="eyebrow">BUILD WITH ELEVIX</span>
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaText}</p>
          <Link href="/contact-us" className="button button-dark">Start a conversation <ArrowUpRight size={18}/></Link>
        </section>}
      </>}

      <div style={{marginTop:40}}><Link href="/case-studies" className="text-link"><ArrowLeft size={16}/>All case studies</Link></div>
    </section>
    <CallToAction/>
  </main>;
}
