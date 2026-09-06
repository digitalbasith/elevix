import { Grid2X2, BrainCircuit, Smartphone, Workflow, Cloud } from 'lucide-react';
const symbols = [
  {slug:'microsoft-365-services',icon:Grid2X2,tone:'blue'},
  {slug:'ai-ml-services',icon:BrainCircuit,tone:'violet'},
  {slug:'smart-app-engineering',icon:Smartphone,tone:'coral'},
  {slug:'next-gen-app-development',icon:Workflow,tone:'amber'},
  {slug:'cloud-services',icon:Cloud,tone:'teal'},
];
export function ServiceIcon({slug}:{slug:string}){
  const service=symbols.find(s=>s.slug===slug)??symbols[0];
  const Icon=service.icon;
  return <span className={'service-color-icon tone-'+service.tone} aria-hidden="true"><Icon size={21} strokeWidth={1.8}/></span>;
}
