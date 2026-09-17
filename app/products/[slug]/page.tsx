import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { getProduct, products } from '@/lib/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product?.title ?? 'Product', description: product?.description };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main id="main" className="product-detail-main">
      <section className="container product-detail-hero">
        <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span>{product.short}</div>
        <div className="product-detail-hero-grid">
          <div className="product-detail-copy">
            <span className="eyebrow">{product.eyebrow}</span>
            <h1>{product.title}</h1>
            <p className="product-lead">{product.description}</p>
            <p>{product.intro}</p>
            <Link href={`/contact-us?product=${encodeURIComponent(product.title)}`} className="button button-dark">Talk to us <ArrowUpRight size={18} /></Link>
          </div>
          <div className="product-detail-image"><img src={product.image} alt={product.title} /></div>
        </div>
      </section>

      <section className="container product-feature-section">
        <div className="product-section-heading">
          <span className="eyebrow">KEY FEATURES</span>
          <h2>{product.featuresTitle}</h2>
        </div>
        <div className="product-feature-grid">
          {product.features.map((feature, index) => (
            <article key={feature.title} className="product-feature-card">
              <span>0{index + 1}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-benefits-wrap">
        <div className="container product-benefits-grid">
          <div className="product-section-heading">
            <span className="eyebrow">WHY IT MATTERS</span>
            <h2>{product.benefitsTitle}</h2>
          </div>
          <div className="product-benefit-list">
            {product.benefits.map((benefit) => (
              <article key={benefit.title}>
                <Check size={20} />
                <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {product.flow && (
        <section className="container product-flow-section">
          <span className="eyebrow">FROM START TO GROWTH</span>
          <div className="product-flow">{product.flow.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>)}</div>
        </section>
      )}

      {product.audience && (
        <section className="container product-audience-section">
          <span className="eyebrow">PERFECT FOR</span>
          <h2>Built for teams that want more from every interaction.</h2>
          <div className="product-audience-grid">{product.audience.map((item) => <span key={item}>{item}</span>)}</div>
        </section>
      )}

      <section className="container product-closing">
        <span className="eyebrow">READY WHEN YOU ARE</span>
        <h2>{product.closingTitle}</h2>
        <p>{product.closingText}</p>
        <Link href={`/contact-us?product=${encodeURIComponent(product.title)}`} className="button button-dark">Start a conversation <ArrowUpRight size={18} /></Link>
      </section>
    </main>
  );
}
