import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { products } from '@/lib/products';

export const metadata = {
  title: 'Products',
  description: 'Explore Elevix products for marketing, outreach, workforce productivity and business learning.',
};

export default function ProductsPage() {
  return (
    <main id="main" className="products-main">
      <section className="container products-hero">
        <div className="breadcrumb"><Link href="/">Home</Link><span>/</span>Products</div>
        <span className="eyebrow">ELEVIX PRODUCTS</span>
        <h1>Smart tools built to help you <em>market, manage, learn and grow.</em></h1>
        <p>Explore practical products designed to simplify everyday business operations, improve productivity and create new opportunities.</p>
      </section>

      <section className="container products-grid-section">
        <div className="products-grid">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`} className="product-card" key={product.slug}>
              <div className="product-card-image"><img src={product.image} alt={product.title} /></div>
              <div className="product-card-copy">
                <span className="eyebrow">{product.eyebrow}</span>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <span className="product-card-link">Explore product <ArrowUpRight size={17} /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
