import Link from 'next/link';
import { AppliedServiceStory } from './glass-stories';
import { ArrowUpRight, Check, LockKeyhole, Sparkles, Workflow, ShieldCheck } from 'lucide-react';
import type { ServiceDetail } from '@/lib/service-details';
import { ServiceInfographic, ServiceScenarios } from './service-infographic';

function Hero({ s }: { s: ServiceDetail }) {
  return (
    <header className="service-hero container">
      <div className="breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/services">Services</Link>
        <span>/</span>
        {s.title}
      </div>
      <div className="service-hero-layout">
        <div className="service-hero-copy">
          <span className="eyebrow">{s.kicker}</span>
          <h1>{s.outcome}</h1>
          <p>{s.intro}</p>
          <Link className="button button-dark" href={'/contact-us?service=' + encodeURIComponent(s.title)}>
            Discuss {s.short} <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="service-hero-art" data-parallax>
          <img data-parallax-image src={s.image} alt={s.title + ' conceptual illustration'} width="1200" height="800" />
          <span className="art-caption">ELEVIX / {s.short.toUpperCase()}</span>
        </div>
      </div>
    </header>
  );
}

function Scope({ s }: { s: ServiceDetail }) {
  return (
    <section className="container service-scope">
      <span className="eyebrow">{s.title.toUpperCase()} / EXPERTISE</span>
      <div className="scope-grid">
        {s.capabilities.map((c, i) => (
          <article key={c}>
            <span>0{i + 1}</span>
            <h3>{c}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Editorial({ s }: { s: ServiceDetail }) {
  return (
    <section className="container service-editorial">
      {s.sections.map((c, i) => (
        <article key={c.title} data-reveal>
          <span className="editorial-number">0{i + 1}</span>
          <div>
            <h2>{c.title}</h2>
            <p>{c.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

function IntelligenceVisualStory() {
  const story = [
    {
      eyebrow: 'TREND 01 / AGENTIC WORKFLOWS',
      title: 'From chat responses to real business actions.',
      text: 'Design assistants that can retrieve the right context, call approved tools, request human approval when needed and complete bounded tasks across your workflows.',
      image: '/images/service-ai.webp',
      alt: 'Concept illustration of an AI service workflow interface',
      icon: Workflow,
    },
    {
      eyebrow: 'TREND 02 / MULTIMODAL INTELLIGENCE',
      title: 'Use documents, screenshots, forms and knowledge together.',
      text: 'Bring together enterprise search, document understanding, OCR, image reasoning and structured outputs so teams can work with more than plain text.',
      image: '/images/ml-intelligence.webp',
      alt: 'Concept illustration of multimodal machine learning and enterprise intelligence',
      icon: Sparkles,
    },
    {
      eyebrow: 'TREND 03 / COPILOTS FOR TEAMS',
      title: 'Build copilots around roles, not generic prompts.',
      text: 'Create role-aware copilots for sales, operations, HR, support and internal teams so people can search, summarize and act inside familiar workflows.',
      image: '/images/ai-glass.webp',
      alt: 'Concept illustration of a governed enterprise AI copilot',
      icon: Workflow,
    },
    {
      eyebrow: 'TREND 04 / HUMAN-IN-THE-LOOP AUTOMATION',
      title: 'Automate the flow, keep humans in control.',
      text: 'Blend AI recommendations with approval checkpoints, audit trails and exception handling so teams can move faster without losing oversight.',
      image: '/images/glass-flow.webp',
      alt: 'Concept illustration of workflow automation with review steps',
      icon: Sparkles,
    },
  ];

  return (
    <section className="container intelligence-visual-story">
      {story.map((item) => {
        const Icon = item.icon;
        return (
          <article key={item.title} className="intelligence-story-card" data-reveal>
            <div className="intelligence-story-copy">
              <span className="eyebrow">{item.eyebrow}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <div className="intelligence-story-tag">
                <Icon size={18} />
                <span>Production-ready AI patterns</span>
              </div>
            </div>
            <div className="intelligence-story-image">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
          </article>
        );
      })}
    </section>
  );
}

function IntelligenceHighlights() {
  const items = [
    {
      title: 'Enterprise RAG & knowledge copilots',
      text: 'Ground answers on internal docs, wikis, tickets, policies and databases with permissions, freshness and citations built in.',
    },
    {
      title: 'AI agents with approval layers',
      text: 'Let agents create drafts, summarize work, update systems and orchestrate tasks — while keeping approvals for high-impact steps.',
    },
    {
      title: 'LLMOps, evaluation & observability',
      text: 'Track quality, cost, latency and failure patterns continuously so your AI products can improve after launch instead of drifting silently.',
    },
    {
      title: 'Secure AI architecture & governance',
      text: 'Protect sensitive data, scope tool access and design guardrails around safety, privacy, access control and auditability.',
    },
  ];

  return (
    <section className="container ai-highlight-section" data-reveal>
      <div className="ai-highlight-heading">
        <span className="eyebrow">WHAT MODERN AI DELIVERY LOOKS LIKE</span>
        <h2>Trending capabilities your team can actually use.</h2>
        <p>
          We focus on practical AI systems that improve speed, accuracy and decision quality — not demos that stop at the prototype stage.
        </p>
      </div>
      <div className="ai-highlight-grid">
        {items.map((item, index) => (
          <article key={item.title} className="ai-highlight-card">
            <span>0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function IntelligenceGallery() {
  const visuals = [
    {
      image: '/images/ai-glass.webp',
      title: 'Governed copilots',
      text: 'Design assistants with the right context, grounded answers and clear user trust signals.',
    },
    {
      image: '/images/glass-flow.webp',
      title: 'Workflow orchestration',
      text: 'Move from isolated prompts to connected task flows across your business tools.',
    },
    {
      image: '/images/workshop.webp',
      title: 'Use-case discovery',
      text: 'Prioritize the AI opportunities that can create measurable value in the shortest path.',
    },
    {
      image: '/images/service-ai.webp',
      title: 'Agent workbenches',
      text: 'Give teams a clear interface to launch, review and approve AI-powered work.',
    },
    {
      image: '/images/ml-intelligence.webp',
      title: 'Document & multimodal AI',
      text: 'Extract, classify and reason over PDFs, screenshots, forms and mixed content.',
    },
    {
      image: '/images/product-glass.webp',
      title: 'AI-ready product experiences',
      text: 'Embed intelligent help, recommendations and automation into customer-facing products.',
    },
  ];

  return (
    <section className="container ai-gallery-section">
      <div className="ai-gallery-heading" data-reveal>
        <span className="eyebrow">VISUAL ROADMAP</span>
        <h2>See the building blocks of a modern AI program.</h2>
      </div>
      <div className="ai-gallery-grid">
        {visuals.map((item) => (
          <article key={item.title} className="ai-gallery-card" data-reveal>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function IntelligenceUseCases() {
  const useCases = [
    {
      title: 'Support & knowledge operations',
      text: 'Deflect repetitive queries, assist agents with trusted answers and accelerate response quality.',
      image: '/images/workspace.webp',
    },
    {
      title: 'Sales & proposal copilots',
      text: 'Create guided assistants that search collateral, prepare drafts and shorten response cycles.',
      image: '/images/service-app.webp',
    },
    {
      title: 'Document processing automation',
      text: 'Read forms, classify documents and extract structured data with human review where needed.',
      image: '/images/ml-intelligence.webp',
    },
    {
      title: 'Internal workflow agents',
      text: 'Coordinate approvals, updates and repeatable business tasks across connected systems.',
      image: '/images/glass-flow.webp',
    },
  ];

  return (
    <section className="container ai-usecase-section" data-reveal>
      <div className="ai-usecase-heading">
        <span className="eyebrow">WHERE AI CREATES VALUE</span>
        <h2>Use cases aligned to real teams and repeatable work.</h2>
        <p>We focus on practical use cases where the workflow, data and approval model are clear enough to deliver measurable results.</p>
      </div>
      <div className="ai-usecase-grid">
        {useCases.map((item) => (
          <article key={item.title} className="ai-usecase-card" data-reveal>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function IntelligenceDeliverySteps() {
  const steps = [
    'Identify the workflow and success metric',
    'Connect the right data, tools and permissions',
    'Prototype the assistant, agent or ML flow',
    'Evaluate quality, safety, latency and cost',
    'Roll out with observability, feedback and governance',
  ];

  return (
    <section className="container ai-delivery-section" data-reveal>
      <div className="ai-delivery-copy">
        <span className="eyebrow">DELIVERY APPROACH</span>
        <h2>From AI idea to production-ready rollout.</h2>
        <p>Modern AI delivery works best when product thinking, data access, approval design and evaluation are handled together from the start.</p>
        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="ai-delivery-visual">
        <img src="/images/service-ai.webp" alt="Production AI delivery visual" loading="lazy" />
        <div className="ai-delivery-note">Strategy → Prototype → Evaluation → Rollout</div>
      </div>
    </section>
  );
}

function Handover({ s }: { s: ServiceDetail }) {
  return (
    <section className="container service-handover" data-reveal>
      <div>
        <span className="eyebrow">CLEAR SCOPE. USEFUL OUTPUTS.</span>
        <h2>What we can deliver.</h2>
        <p>The final scope is agreed around your systems, priorities and constraints.</p>
      </div>
      <ul>
        {s.deliverables.map((d) => (
          <li key={d}>
            <Check size={18} />
            {d}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Questions({ s }: { s: ServiceDetail }) {
  return (
    <section className="container service-questions">
      <span className="eyebrow">BEFORE WE BEGIN</span>
      <h2>Your {s.short} questions.</h2>
      {s.faq.map((f) => (
        <details key={f.q}>
          <summary>
            {f.q}
            <span>+</span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  );
}

function Closing({ s }: { s: ServiceDetail }) {
  const copy: Record<string, [string, string]> = {
    workplace: ['Make your workplace work better.', 'Start with the process your team wants to simplify.'],
    intelligence: ['Move from AI ideas to trusted action.', 'Bring a workflow or business challenge. We’ll help shape a grounded, measurable and production-ready approach.'],
    product: ['What should your next product make possible?', 'Let’s talk users, platforms and the first release.'],
    nextgen: ['Design the next intelligent interaction.', 'Choose a real workflow. Define what good looks like.'],
    cloud: ['Give your next stage a stronger foundation.', 'Tell us about your workloads, constraints and migration goals.'],
  };

  return (
    <section className="container service-closing" data-reveal>
      <span className="eyebrow">LET’S TALK / {s.short.toUpperCase()}</span>
      <h2>{copy[s.theme][0]}</h2>
      <p>{copy[s.theme][1]}</p>
      <Link href={'/contact-us?service=' + encodeURIComponent(s.title)} className="button button-dark">
        Start a conversation <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}

export function UniqueServicePage({ service: s }: { service: ServiceDetail }) {
  return (
    <main id="main" className={'inner-main unique-service service-' + s.theme}>
      <div id="top" />
      <Hero s={s} />

      {s.theme === 'workplace' && (
        <>
          <Scope s={s} />
          <section className="container diagram-section">
            <ServiceInfographic service={s} />
          </section>
          <Editorial s={s} />
          <div className="container service-wide-image">
            <img src="/images/workspace.webp" alt="Conceptual collaborative workspace" loading="lazy" />
            <span>People first. Connected by Microsoft 365.</span>
          </div>
        </>
      )}

      {s.theme === 'intelligence' && (
        <>
          <section className="intelligence-lab">
            <div className="container">
              <span className="eyebrow">FROM EXPERIMENT TO EVERYDAY USE</span>
              <ServiceInfographic service={s} />
            </div>
          </section>
          <Scope s={s} />
          <IntelligenceVisualStory />
          <section className="container service-section">
            <h2>Choose the problem. Then the model.</h2>
            <ServiceScenarios service={s} />
          </section>
          <IntelligenceHighlights />
          <IntelligenceGallery />
          <IntelligenceUseCases />
          <IntelligenceDeliverySteps />
          <Editorial s={s} />
          <aside className="container guardrail-note">
            <ShieldCheck size={25} />
            <p>
              Production AI needs more than a good model. Grounding, evaluation, observability, least-privilege tool access and appropriate human approval belong in the architecture from day one.
            </p>
          </aside>
        </>
      )}

      {s.theme === 'product' && (
        <>
          <section className="container product-story">
            <div>
              <span className="eyebrow">THE EXPERIENCE COMES FIRST</span>
              <h2>
                One task.
                <br />
                Every screen.
                <br />
                <em>No loose ends.</em>
              </h2>
              <p>
                Prototype the complete journey, from a first visit to a successful outcome. Then engineer the systems that make it dependable.
              </p>
            </div>
            <img src="/images/service-app.webp" alt="Web and mobile application concept" loading="lazy" />
          </section>
          <section className="container diagram-section">
            <ServiceInfographic service={s} />
          </section>
          <Editorial s={s} />
          <Scope s={s} />
        </>
      )}

      {s.theme === 'nextgen' && (
        <>
          <section className="container nextgen-manifesto" data-reveal>
            <span className="eyebrow">THE DIFFERENCE IS IN THE WORKFLOW</span>
            <h2>
              Don’t just add a chat box.
              <br />
              <em>Design what happens next.</em>
            </h2>
          </section>
          <section className="container nextgen-system">
            <div className="nextgen-system-copy" data-reveal>
              <span className="eyebrow">INTELLIGENT EXPERIENCE DESIGN</span>
              <h2>Put intelligence inside the product, not below it.</h2>
              <p>
                Blend contextual help, grounded answers and approval-aware automation directly into the user journey. The goal is a cleaner experience where people can understand, trust and act on what the application proposes.
              </p>
              <ul className="nextgen-system-points">
                <li>
                  <Check size={18} />
                  Context-aware recommendations and assistants
                </li>
                <li>
                  <Check size={18} />
                  Permission-aware actions with review checkpoints
                </li>
                <li>
                  <Check size={18} />
                  Measurable workflows that improve over time
                </li>
              </ul>
            </div>
            <div className="nextgen-system-visual" data-reveal>
              <ServiceInfographic service={s} />
            </div>
          </section>
          <section className="container nextgen-feature-panel">
            <aside className="nextgen-feature-card" data-reveal>
              <div className="nextgen-feature-copy">
                <LockKeyhole size={36} />
                <h3>Trust is part of the product.</h3>
                <p>Make permissions visible. Explain what the application proposes. Give users control before consequential actions.</p>
                <div className="governance-loop">Visible permissions <span>·</span> Human approval <span>·</span> Action logs</div>
              </div>
              <div className="nextgen-feature-visual">
                <img src="/images/ai-glass.webp" alt="Connected intelligent application concept" loading="lazy" />
              </div>
            </aside>
          </section>
          <section className="container service-section">
            <ServiceScenarios service={s} />
          </section>
          <Scope s={s} />
        </>
      )}

      {s.theme === 'cloud' && (
        <>
          <section className="container cloud-blueprint">
            <div>
              <span className="eyebrow">ARCHITECTURE WITH INTENT</span>
              <h2>
                Resilience is
                <br />
                a system property.
              </h2>
              <p>
                Connect the layers with clear ownership. Security, monitoring and cost management apply across the entire foundation.
              </p>
              <div className="cloud-crosscut">
                Security<span>Observability</span>Cost visibility
              </div>
            </div>
            <ServiceInfographic service={s} />
          </section>
          <Scope s={s} />
          <Editorial s={s} />
          <div className="container service-wide-image">
            <img src="/images/glass-architecture.webp" alt="Layered glass architecture representing a scalable foundation" loading="lazy" />
            <span>Plan the move. Operate with confidence.</span>
          </div>
        </>
      )}

      <AppliedServiceStory service={s} />
      <Handover s={s} />
      <Questions s={s} />
      <Closing s={s} />
    </main>
  );
}
