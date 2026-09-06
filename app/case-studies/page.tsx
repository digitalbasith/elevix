import { PageIntro, CaseGrid } from '../components/content-blocks';
import { CallToAction } from '../components/site-shell';
import { TechMarquee } from '../components/experience';
export const metadata={title:'Case Studies',description:'Explore how Elevix brings automation, collaboration, and digital transformation to life.'};
export default function Cases(){return <main id="main" className="inner-main"><div id="top"/><PageIntro eyebrow="Case Studies" title="Great ideas. Real-world impact." description="A closer look at the work. Discover how thoughtful technology helps teams work better and businesses move forward."/><section className="container inner-section"><CaseGrid/></section><TechMarquee/><CallToAction/></main>}
