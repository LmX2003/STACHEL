/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../site-shell";
import { labels, pages, routes } from "../site-data";

export function generateStaticParams(){return routes.map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const page=pages[slug];if(!page)return{};return{title:`${page.title} | Haustechnik Stachel`,description:page.intro}}

export default async function DetailPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=pages[slug];if(!page)notFound();const servicePage=["bad","heizung","gas","solar","wasser"].includes(slug);return <><Header/><main className={`detail-page ${page.legal?"legal-page":""}`}>
  <section className={`detail-hero ${page.image?"has-image":"no-image"}`}><div className="detail-copy"><div className="breadcrumb"><Link href="/">Startseite</Link><span>/</span><span>{page.title}</span></div><p className="overline">{page.eyebrow}</p><h1>{page.title}</h1><p className="detail-intro">{page.intro}</p></div>{page.image&&<div className="detail-media"><img src={page.image} alt={page.imageAlt||""}/><span className="image-caption">Originalprojekt · Haustechnik Stachel</span></div>}</section>
  {slug==="galerie"&&<Gallery/>}
  <section className="content-shell"><aside className="content-nav"><span>Auf dieser Seite</span>{page.sections.map((s,i)=><a href={`#section-${i}`} key={i}>{String(i+1).padStart(2,"0")} {s.heading||"Informationen"}</a>)}</aside><article className="content-article">{page.sections.map((section,i)=><section id={`section-${i}`} className="content-section" key={i}><span className="content-number">{String(i+1).padStart(2,"0")}</span>{section.heading&&<h2>{section.heading}</h2>}{section.paragraphs?.map((p,j)=><p key={j}>{p}</p>)}{section.items&&<ul>{section.items.map((item,j)=><li key={j}>{linkify(item)}</li>)}</ul>}</section>)}</article></section>
  {servicePage&&<section className="service-promise"><p className="overline">Von der Planung bis zum Service</p><h2>Ein Ansprechpartner.<br/><em>Auch nach der Montage.</em></h2><Link href="/kontakt" className="round-link" aria-label="Kontakt aufnehmen">↗</Link></section>}
  {page.related&&<section className="related"><p className="overline">Weiterlesen</p><div>{page.related.map(r=><Link href={`/${r}`} key={r}><span>{labels[r]}</span><i>↗</i></Link>)}</div></section>}
</main><Footer/></>}

function linkify(text:string){if(text.includes("+49")||text.includes("0841")){const number=text.match(/(?:\+49|0)[0-9 ()/-]+/)?.[0];if(number)return <>{text.slice(0,text.indexOf(number))}<a href={`tel:${number.replace(/\D/g,"").replace(/^49/,"+49")}`}>{number}</a>{text.slice(text.indexOf(number)+number.length)}</>}return text}

function Gallery(){const items=[["/images/original/solar_anlage01-1920w.jpg","Solarthermie auf einem Wohnhaus"],["/images/original/solar_anlage02-1920w.jpg","Realisierte Solaranlage"],["/images/original/solar_anlage03-1920w.jpg","Solarkollektoren auf dem Dach"],["/images/original/WhatsApp-Image-2020-03-25-at-09.05.28-1920w-1920w.jpeg","Modernes Bad"],["/images/original/WhatsApp-Image-2020-03-25-at-10.09.18-1920w.jpeg","Moderne Heiztechnik"]];return <section className="gallery-wall">{items.map(([src,alt],i)=><figure className={i===3?"wide":""} key={src}><img src={src} alt={alt}/><figcaption>{String(i+1).padStart(2,"0")} · {alt}</figcaption></figure>)}</section>}
