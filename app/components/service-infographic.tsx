'use client';
import { useState } from 'react';
import { ArrowDown, ArrowRight, Check, Database, Layers3, LockKeyhole, Network, Sparkles } from 'lucide-react';
import type { ServiceDetail } from '@/lib/service-details';
export function ServiceInfographic({service}:{service:ServiceDetail}){
 const [active,setActive]=useState(0);const node=service.nodes[active];
 return <figure className={'service-infographic map-'+service.theme} data-reveal aria-label={service.diagramTitle}>
  <figcaption><span className="eyebrow">EXPLORE THE SYSTEM</span><h2>{service.diagramTitle}</h2><p>Select a component to see its role.</p></figcaption>
  <div className="infographic-canvas">
   {service.theme==='workplace'&&<div className="workplace-hub"><Network size={32}/><strong>Your people</strong><span>Identity & permissions</span></div>}
   <div className="infographic-nodes">{service.nodes.map((n,i)=><div className="node-wrap" key={n.title}><button className={'diagram-node '+(active===i?'selected':'')} onClick={()=>setActive(i)} aria-pressed={active===i} aria-controls={'diagram-detail-'+service.theme}><span className="node-index">{String(i+1).padStart(2,'0')}</span><strong>{n.title}</strong>{service.theme==='cloud'?<Layers3 size={22}/>:service.theme==='intelligence'?<Database size={20}/>:<ArrowRight size={20}/>}</button>{i<service.nodes.length-1&&<ArrowDown className="node-connector" size={18} aria-hidden="true"/>}</div>)}</div>
   {service.theme==='nextgen'&&<div className="governance-loop"><LockKeyhole size={18}/>Permissions · approval · audit trail</div>}
  </div><div id={'diagram-detail-'+service.theme} className="diagram-detail" aria-live="polite"><span>0{active+1}</span><div><h3>{node.title}</h3><p>{node.text}</p></div><Check size={22}/></div>
 </figure>
}
export function ServiceScenarios({service}:{service:ServiceDetail}){const [index,setIndex]=useState(0);return <div className="scenario-explorer" data-reveal><div className="scenario-menu">{service.sections.map((s,i)=><button key={s.title} onClick={()=>setIndex(i)} aria-pressed={index===i} aria-controls={'scenario-'+service.theme}><span>0{i+1}</span>{s.title}<ArrowRight size={20}/></button>)}</div><div id={'scenario-'+service.theme} className="scenario-detail" aria-live="polite"><Sparkles size={32}/><span className="eyebrow">A CLOSER LOOK / 0{index+1}</span><h3>{service.sections[index].title}</h3><p>{service.sections[index].text}</p></div></div>}
