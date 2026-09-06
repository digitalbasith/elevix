import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqs } from '@/lib/content';
import { PageIntro } from '../components/content-blocks';
import { CallToAction } from '../components/site-shell';
import Link from 'next/link';
export const metadata={title:'FAQ',description:'Answers to common questions about Elevix, our services, and how to get started.'};
export default function FAQ(){return <main id="main" className="inner-main"><div id="top"/><PageIntro eyebrow="FAQ" title="A little clarity goes a long way." description="Questions about working together? Here are a few good places to start."/><section className="container inner-section"><Accordion type="single" collapsible className="faq-list">{faqs.map(([q,a],i)=><AccordionItem value={'faq-'+i} key={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}</Accordion><div className="faq-visual-strip" data-reveal><img src="/images/product-glass.webp" alt="Glass digital product concept" loading="lazy"/><div><h2>Let’s find the answer together.</h2><p>Have a question about your specific project or technology? Our team is here to help.</p><Link href="/contact-us" className="text-link">Start a conversation ↗</Link></div></div></section><CallToAction/></main>}
