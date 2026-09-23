'use client';
import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

export function ContactForm(){
 const [teamSize,setTeamSize]=useState('');
 const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');

 async function submit(e:React.FormEvent<HTMLFormElement>){
   e.preventDefault();
   const form=e.currentTarget;
   const data=new FormData(form);
   data.set('companySize',teamSize||'Not provided');
   data.set('_subject','New Elevix website enquiry — '+String(data.get('name')||'Website visitor'));
   data.set('_template','table');
   data.set('_captcha','false');
   data.set('_replyto',String(data.get('email')||''));
   setStatus('sending');

   try{
     const response=await fetch('https://formsubmit.co/ajax/reuben.peter@elevixtech.com',{
       method:'POST',
       headers:{Accept:'application/json'},
       body:data,
     });
     if(!response.ok) throw new Error('Submission failed');
     setStatus('sent');
     form.reset();
     setTeamSize('');
   }catch{
     setStatus('error');
   }
 }

 return <form className="contact-form" onSubmit={submit}>
   <h2>Tell us what you have in mind.</h2>
   <p className="form-note">Send your enquiry directly to our team. We’ll get back to you as soon as possible.</p>
   <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{position:'absolute',left:'-9999px'}}/>
   <div className="form-row">
     <div className="field"><label htmlFor="name">Full name *</label><input id="name" name="name" placeholder="Your name" required maxLength={100} autoComplete="name"/></div>
     <div className="field"><label htmlFor="email">Work email *</label><input id="email" type="email" name="email" placeholder="you@company.com" required maxLength={200} autoComplete="email"/></div>
   </div>
   <div className="form-row">
     <div className="field"><label htmlFor="company">Company name</label><input id="company" name="company" placeholder="Your company" maxLength={150} autoComplete="organization"/></div>
     <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" type="tel" name="phone" placeholder="Your phone number" maxLength={40} autoComplete="tel"/></div>
   </div>
   <div className="field">
     <label htmlFor="team-size">Company size</label>
     <Select value={teamSize} onValueChange={setTeamSize}>
       <SelectTrigger id="team-size" className="w-full min-h-12 bg-[#f9fcfa]"><SelectValue placeholder="Select company size"/></SelectTrigger>
       <SelectContent>{['1–25','26–50','51–250','251–1,000','1,001–5,000','5,000+'].map(s=><SelectItem key={s} value={s}>{s} people</SelectItem>)}</SelectContent>
     </Select>
   </div>
   <div className="field"><label htmlFor="message">How can we help? *</label><textarea id="message" name="message" required minLength={10} maxLength={1500} placeholder="A little about your project, goals, or the challenge you’re solving…" rows={5}/></div>
   <button type="submit" className="button button-dark" disabled={status==='sending'}>{status==='sending'?'Sending…':'Send enquiry'} <ArrowUpRight size={18}/></button>
   {status==='sent'&&<div className="form-result" role="status"><strong><Check size={16}/> Enquiry sent.</strong><p>Thanks — your message has been submitted to the Elevix team.</p></div>}
   {status==='error'&&<div className="form-result" role="alert"><strong>Couldn’t send the enquiry.</strong><p>Please email <a href="mailto:reuben.peter@elevixtech.com">reuben.peter@elevixtech.com</a>.</p></div>}
 </form>
}
