import { notFound, permanentRedirect } from 'next/navigation';
import { serviceDetails, legacyServiceRoutes } from '@/lib/service-details';
import { UniqueServicePage } from '../components/service-page';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=serviceDetails.find(s=>s.slug===slug);return {title:s?.title??'Page not found',description:s?.intro}}
export default async function Service({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(legacyServiceRoutes[slug])permanentRedirect('/'+legacyServiceRoutes[slug]);const service=serviceDetails.find(s=>s.slug===slug);if(!service)notFound();return <UniqueServicePage key={service.slug} service={service}/>}
