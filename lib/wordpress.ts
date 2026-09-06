import { wordpressUrl } from './wordpress-environment';
import localPosts from './posts.json';
export type Block = { type: string; text: string; src?:string; alt?:string };
export type Post = {slug:string;title:string;category:string;date:string;excerpt:string;image:string|null;blocks:Block[];sourceUrl?:string};
type WpPost = {slug:string;title:{rendered:string};content:{rendered:string};excerpt:{rendered:string};date:string;_embedded?:{'wp:featuredmedia'?:{source_url?:string}[];'wp:term'?:{name:string}[][]}};
function decode(text:string){const entities:Record<string,string>={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' ',rsquo:'’',lsquo:'‘',rdquo:'”',ldquo:'“',ndash:'–',mdash:'—',hellip:'…'};return text.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi,(match,code:string)=>{if(code.startsWith('#')){const n=code[1].toLowerCase()==='x'?parseInt(code.slice(2),16):parseInt(code.slice(1),10);return n>0&&n<=0x10ffff?String.fromCodePoint(n):'';}return entities[code]??match;});}
function plain(text:string){return decode(text.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim());}
function blocks(html:string):Block[]{
 const cleaned=html.replace(/<(script|style|iframe|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi,'').replace(/<!--[\s\S]*?-->/g,'');
 const result:Block[]=[];
 for(const m of cleaned.matchAll(/<(h[2-4]|p|li|blockquote)\b[^>]*>([\s\S]*?)<\/\1>|<img\b[^>]*>/gi)){
  const imageHtml=m[1]?m[2]:m[0];
  if(m[1]){const text=plain(m[2]);if(text)result.push({type:m[1],text});}
  for(const img of imageHtml.matchAll(/<img\b[^>]*>/gi)){const src=safeImage(decode(img[0].match(/\bsrc\s*=\s*["']([^"']+)["']/i)?.[1]??''));if(src)result.push({type:'image',text:'',src,alt:plain(img[0].match(/\balt\s*=\s*["']([^"']*)["']/i)?.[1]??'')});}
 }
 return result.length?result:[{type:'p',text:plain(cleaned)}];
}
function safeImage(value?:string){if(!value)return null;try{const u=new URL(value);return u.protocol==='https:'?u.href:null;}catch{return null;}}
function normalize(p:WpPost):Post{return {slug:p.slug,title:plain(p.title.rendered),category:p._embedded?.['wp:term']?.[0]?.[0]?.name??'Insights',date:p.date,excerpt:plain(p.excerpt.rendered),image:safeImage(p._embedded?.['wp:featuredmedia']?.[0]?.source_url),blocks:blocks(p.content.rendered)}}
function endpoint(){const value=wordpressUrl()?.trim();if(!value)return null;const url=new URL(value);if(url.protocol!=='https:')throw new Error('WordPress must use HTTPS');return url.href.replace(/\/$/,'')+'/wp-json/wp/v2/posts';}
export async function getPosts(page=1):Promise<{posts:Post[];totalPages:number;unavailable?:boolean}>{
 try{const url=endpoint();if(!url)return {posts:localPosts as Post[],totalPages:1};const response=await fetch(`${url}?status=publish&per_page=9&page=${page}&_embed`,{cache:'no-store',signal:AbortSignal.timeout(8000)});if(!response.ok)throw new Error('Unable to load posts');const data=await response.json() as WpPost[];if(!Array.isArray(data))throw new Error('Invalid posts');return {posts:data.map(normalize),totalPages:Math.max(1,Number(response.headers.get('X-WP-TotalPages'))||1)};}catch{return {posts:[],totalPages:1,unavailable:true};}
}
export async function getPost(slug:string):Promise<{post:Post|null;unavailable?:boolean}>{
 try{const url=endpoint();if(!url)return {post:(localPosts as Post[]).find(p=>p.slug===slug)??null};const response=await fetch(`${url}?slug=${encodeURIComponent(slug)}&status=publish&_embed`,{cache:'no-store',signal:AbortSignal.timeout(8000)});if(!response.ok)throw new Error('Unable to load post');const data=await response.json() as WpPost[];return {post:data.length?normalize(data[0]):null};}catch{return {post:null,unavailable:true};}
}

export function getWordPressAdminUrl(){try{const url=endpoint();return url?url.replace('/wp-json/wp/v2/posts','/wp-admin/'):null;}catch{return null;}}
