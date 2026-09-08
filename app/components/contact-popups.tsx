'use client';
import { MessageCircle } from 'lucide-react';

export function WhatsAppContact(){
  return <a className="whatsapp-fixed" href="https://wa.me/919976730885" target="_blank" rel="noopener noreferrer" aria-label="Chat with Elevix on WhatsApp"><MessageCircle size={28}/><span>WhatsApp</span></a>;
}
