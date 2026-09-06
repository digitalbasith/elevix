# Elevix redesign

A responsive React + TypeScript website with a light glassmorphism design, built with Vinext and deployable to Cloudflare Workers through Sites. Uses the supplied Elevix logo and an original glass hero asset. Existing public page names, four blog articles, and current case-study summaries are retained from elevixtech.com (retrieved September 2, 2026).

## Develop

Run `npm run install:ci`, then `npm run dev`. Build the deployable website with `npm run build`.

## WordPress publishing

The frontend is ready for a separate WordPress installation. WordPress itself is not installed or hosted in this repository; Cloudflare Workers cannot run the PHP WordPress application.

1. Install WordPress on your chosen WordPress host, using an HTTPS URL.
2. Import `wordpress/elevix-posts.xml` in WordPress under Tools → Import → WordPress. It contains the four existing articles, titles, original slugs, and publication dates. Review the imported historical content before publishing updates.
3. Set `WORDPRESS_URL` to the WordPress installation's base URL in the Sites runtime environment (and `.env` for local development). Do not add `/wp-json` to the value. The public REST API must allow reading published posts at `/wp-json/wp/v2/posts`.
4. The blog listing and detail routes read published posts, categories, dates, featured images, and article content server-side through the WordPress REST API. No credentials are required to read public posts. WordPress remains the editing and publishing interface.

With `WORDPRESS_URL` unset, the site serves the four migrated posts from `lib/posts.json`. Once configured, an unavailable WordPress API shows an honest retry state instead of replacing live content with fallback articles. Posts are paginated, nine per page. WordPress titles and article content are rendered as safe text blocks; headings, paragraphs, lists and blockquotes are supported. Embedded scripts, forms, iframes, and complex Gutenberg blocks are not reproduced. Feature images must use HTTPS. Configure WordPress and this site’s canonical URLs with your eventual public domain before launch.

## Contact

The contact form validates name, email, and message and opens a prefilled email draft addressed to the existing `sales@elevixtech.com` mailbox. It explicitly asks visitors to review and send from their own email app. The site does not silently submit or store enquiries and never reports them as sent. Direct email links and a copy-message fallback are available. A server delivery service can be connected when the owner provides the preferred provider and credentials.

## Content and launch

Page routes: `/`, `/services`, six individual service pages, `/overview`, `/case-studies`, three case detail pages, `/blogs`, article detail routes, `/careers`, `/faq`, and `/contact-us`. Original placeholder telephone information, template testimonials, and unsupported guarantees have been omitted. Case results are reproduced from the current source website. Product copy has been rewritten for the redesign.

The deployment is private for review. Connecting the production domain and publishing publicly are separate owner decisions. The existing elevixtech.com website is unchanged.

## Visual experience update

The expanded homepage includes 16 content sections, a three-slide hero, technology and headline marquees, six interactive 3D flip cards, an outcome carousel, an accessible four-step process tabset, industry cards, Microsoft 365 feature, image ribbon, people section, insights, FAQs, and CTA.

Motion is shared across all routes: staggered heading reveals, scroll reveals, floating glass cards, magnetic CTA response, subtle desktop cursor orbit, and reading progress. Carousels use the existing Embla/Shadcn primitive. Process tabs use the existing Radix/Shadcn primitive. Flip cards work by click, touch, or keyboard, move focus between faces, and remove their hidden face from interaction. Slideshow autoplay pauses on hover, focus, viewport exit, hidden tabs, or the global motion setting. Reduced-motion preferences are respected; the fixed Motion control lets visitors pause decorative motion. The standard cursor remains visible.

Three new original illustrations were generated for this update: an AI glass network, glass product forms, and a conceptual studio interior. The interior is illustrative, not a photograph of an Elevix office. Nine service and blog visuals were reused from the existing Elevix site, and all image assets are local WebP files. Existing WordPress connection and contact draft behavior remain in place.

Design research references: Work & Co (https://www.work.co/) for project-led storytelling, Thoughtworks (https://www.thoughtworks.com/) for capability / industry / insight hierarchy, and AKQA (https://www.akqa.com/) for large visuals and editorial rhythm. These informed the composition; their artwork and copy were not reused. Consulted September 2, 2026. Original Elevix assets are listed in `design/asset-sources.json`.
## Editorial expansion

The expanded homepage adds scroll-highlight storytelling, cinematic architecture imagery, keyboard-accessible expanding image tabs, partnership cards, and an insights carousel. Shared motion adds bounded image parallax, pointer tilt and contextual cursor labels, with reduced-motion support. New workshop imagery is conceptual illustration, not a photograph of Elevix employees.

Additional composition references: https://www.instrument.com/, https://www.basicagency.com/, and https://ustwo.com/work/ (consulted September 2, 2026). No reference-site artwork or copy was reused. The vector footer wordmark comes from the original Elevix site's publicly served logo asset.
## Service-specific redesign and Vercel

The five service pages use individually composed workplace, intelligence, product, next-generation and cloud layouts, each with unique copy, an interactive accessible infographic, scope, deliverables and FAQs. Legacy service URLs redirect to their closest current service. Leadership is in Company navigation; approved people details are still required and no identities are fabricated.

`vercel.json` builds with Next.js (webpack); the existing Sites/Vinext build remains intact. The WordPress environment adapter is switched by the Next.js webpack alias. Set `WORDPRESS_URL` to the HTTPS WordPress installation base URL in the target platform. `/admin` links editors to that installation’s protected `/wp-admin/` dashboard. No WordPress credentials are stored in this site. Live published posts, categories, featured images and supported body images are read server-side with no-store requests. Drafts are excluded. Homepage, blog index and article routes render dynamically. A configured CMS failure produces an explicit unavailable state, not stale local content. Without a WordPress URL the migrated local articles remain visible; live publishing is not connected yet.

New Microsoft 365, AI/ML and cloud images are original conceptual generated artwork, not actual customer systems or technical diagrams. Diagrams are separately authored as interactive semantic UI. No external portraits or leadership biographies have been invented.
