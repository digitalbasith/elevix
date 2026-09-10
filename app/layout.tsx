import type { Metadata } from 'next';
import './globals.css';
import './experience.css';
import './editorial.css';
import './services-unique.css';
import './glass-light.css';
import './responsive.css';
import './custom-overrides.css';
import { WhatsAppContact } from './components/contact-popups';
import { MotionProvider } from './components/motion-system';
import { SiteHeader, SiteFooter } from './components/site-shell';
export const metadata: Metadata = {
  title: { default: 'Elevix — Accelerate Innovation', template: '%s | Elevix' },
  description: 'AI-driven IT services, Microsoft 365, web and mobile development. Your partner from the first idea to what comes next.',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><MotionProvider><SiteHeader />{children}<SiteFooter /><WhatsAppContact /></MotionProvider></body></html>;
}
