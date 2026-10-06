import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CaseGrid } from '../components/content-blocks';

export const metadata={title:'Case Studies',description:'Explore how Elevix brings AI, apps, automation, cloud and digital transformation to life.'};

export default function Cases(){
  return <main id="main" className="case-theme-main">
    <div id="top"/>
    <section className="container case-theme-hero">
      <div className="case-theme-breadcrumb"><Link href="/">Home</Link><span>/</span><span>Case Studies</span></div>
      <span className="case-theme-pill">WORK THAT MOVES BUSINESS</span>
      <h1>Great ideas. Real-world <span className="muted-title">impact.</span></h1>
      <p>A closer look at the work—AI, apps, automation, healthcare, finance and cloud transformation. The case studies stay focused on the challenge, solution and outcome, without decorative imagery.</p>
    </section>
    <section className="container"><CaseGrid/></section>
    <section className="container">
      <div className="case-study-cta">
        <span className="eyebrow">HAVE A SIMILAR CHALLENGE?</span>
        <h2>Tell us what you want to improve, automate or launch.</h2>
        <p>We’ll help you shape a practical way forward around your users, systems and business priorities.</p>
        <Link href="/contact-us" className="button button-light">Start a conversation <ArrowUpRight size={18}/></Link>
      </div>
    </section>
  </main>
}
