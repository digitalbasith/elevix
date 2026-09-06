import Link from 'next/link';
export default function NotFound(){return <main id="main" className="container error-state"><span className="eyebrow" style={{justifyContent:'center'}}>404 · A DIFFERENT DIRECTION</span><h1>This page isn’t here.</h1><p>Let’s get you back to somewhere useful.</p><Link href="/" className="button button-dark">Back to Elevix →</Link></main>}
