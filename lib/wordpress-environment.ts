import { env } from 'cloudflare:workers';
export function wordpressUrl(){return (env as unknown as {WORDPRESS_URL?:string}).WORDPRESS_URL;}
