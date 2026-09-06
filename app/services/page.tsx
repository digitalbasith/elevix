import { PageIntro, ServiceGrid } from '../components/content-blocks';
import { CallToAction } from '../components/site-shell';
import { TechMarquee } from '../components/experience';
export const metadata={title:'Our Services',description:'Explore Elevix services for Microsoft 365 Solutions, AI & ML Services, Smart App Engineering, Next-Gen App Development, and Cloud services.'};
export default function Services(){return <main id="main" className="inner-main"><div id="top"/><PageIntro eyebrow="Our Services" title="Your ambition. Our expertise." description="Digital transformation solutions for startups to global enterprises. The right thinking, technology, and team for your next chapter."/><section className="container inner-section"><ServiceGrid/></section><TechMarquee/><CallToAction/></main>}
