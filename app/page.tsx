"use client";

import { useState } from "react";

const services = [
  { title: "Bad", eyebrow: "Planung · Umbau · Wellness", text: "Ob moderne Badinstallation, funktionales Familienbad oder persönliche Wellnessoase – wir verwirklichen Ihren Bäderwunsch aus einer Hand.", image: "/images/bad.jpg", tone: "light" },
  { title: "Heizung & Sanitär", eyebrow: "Wärme · Wasser · Komfort", text: "Hochwertige Vaillant Heizungsprodukte, fundierte Erfahrung und zuverlässiger Kundenservice – dafür steht Haustechnik Stachel seit Jahrzehnten.", image: "/images/heizung.jpg", tone: "dark" },
  { title: "Unser Team", eyebrow: "Persönlich · Qualifiziert · Nah", text: "Motivierte und qualifizierte Mitarbeiter sind stets bemüht, Ihre Bedürfnisse zu erfüllen. Wir sind Ihr Partner in allen Fragen der Haustechnik.", image: "/images/team.jpg", tone: "light" },
];

const offers = [
  { title: "Badrenovierung", text: "Komplettsanierung von Dusche und Bad und Neueinrichtung einer Wellness-Erlebnis-Dusche", image: "/images/angebot-bad.jpg" },
  { title: "Fußbodenheizung", text: "Neueinrichtung einer Fußbodenheizung in der kompletten Wohnung", image: "/images/angebot-heizung.jpg" },
];

export default function Home() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand"><img src="/images/logo.jpg" alt="Haustechnik Stachel" /><span>Haustechnik<br /><b>Stachel</b></span></a>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Für Sie</a><a href="#angebot">Unser Angebot</a><a href="#ueber-uns">Über uns</a><a href="#ausbildung">Ausbildung</a>
        </nav>
        <a href="tel:+49841956222" className="header-call"><span>+49 (841) 95 62 22</span><b>Jetzt anrufen ↗</b></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-copy"><p className="kicker">Haustechnik aus Ingolstadt · seit über 85 Jahren</p><h1>Wärme, Wasser<br /><em>und Wohlfühlen.</em></h1><p className="hero-text">Wir machen Haustechnik persönlich. Mit Erfahrung, Sorgfalt und dem Anspruch, dass Sie sich jeden Tag auf Ihre Räume verlassen können.</p><div className="hero-actions"><a className="button button-dark" href="#kontakt">Projekt besprechen <span>↗</span></a><a className="text-link" href="#leistungen">Leistungen entdecken <span>↓</span></a></div></div>
        <div className="hero-stamp"><strong>85+</strong><span>Jahre<br />Erfahrung</span></div>
      </section>

      <section className="intro section" id="ueber-uns"><div className="section-label">01 / Das sind wir</div><div className="intro-grid"><h2>Handwerk, das<br /><em>mitdenkt.</em></h2><div><p className="lead">Willkommen bei Haustechnik Stachel. Wir verbinden traditionelles Handwerk mit dem technischen Fortschritt von heute.</p><p>Ihre Zufriedenheit ist unser Anspruch. Vorwiegend betreuen wir Privatkunden, die umfassend bedient und dauerhaft begleitet werden möchten. Darüber hinaus bedienen wir gewerbliche Kunden bei Modernisierungen und Reparaturen.</p><a className="arrow-link" href="#kontakt">Lernen Sie uns kennen <span>↗</span></a></div></div></section>

      <section className="services section" id="leistungen"><div className="section-top"><div><div className="section-label">02 / Für Sie</div><h2>Alles aus einer<br /><em>Hand.</em></h2></div><p>Service, Kundendienst, Umbau und Modernisierung von Bädern, Wasser-, Gas- und Heizungsanlagen – das ist unser Schwerpunkt.</p></div><div className="service-grid">{services.map((s, i) => <article className={`service-card ${s.tone}`} key={s.title}><div className="service-photo" style={{ backgroundImage: `url(${s.image})` }} /><div className="service-content"><div><span className="card-number">0{i + 1}</span><p className="eyebrow">{s.eyebrow}</p><h3>{s.title}</h3><p>{s.text}</p></div><a href="#kontakt" aria-label={`${s.title} anfragen`}>Mehr erfahren <span>↗</span></a></div></article>)}</div></section>

      <section className="statement"><div className="statement-inner"><span className="quote-mark">“</span><p>KUNDENDIENST<br /><em>wird bei uns GROSS geschrieben.</em></p><span className="statement-line" /><small>Unser Firmenmotto in einem Satz.</small></div></section>

      <section className="offers section" id="angebot"><div className="section-top"><div><div className="section-label">03 / Unser Angebot</div><h2>Was wir<br /><em>machen.</em></h2></div><p>Von der ersten Idee bis zur sauberen Umsetzung: Wir begleiten Projekte mit Erfahrung, Übersicht und viel Liebe zum Detail.</p></div><div className="offer-grid">{offers.map((o, i) => <article className="offer-card" key={o.title}><div className="offer-image" style={{ backgroundImage: `url(${o.image})` }}><span>0{i + 1}</span></div><div className="offer-copy"><h3>{o.title}</h3><p>{o.text}</p><a href="#kontakt" className="arrow-link">Mehr dazu <span>↗</span></a></div></article>)}</div></section>

      <section className="backflow section"><div className="backflow-image" /><div className="backflow-copy"><div className="section-label">04 / Schutz für Ihr Zuhause</div><h2>Rückstau?<br /><em>Lieber nicht.</em></h2><p className="lead">Hatten Sie noch nie Wasser im Keller?</p><p>Wir bauen seit vielen Jahren die zuverlässigen und sicheren Rückstausicherungen der Firma Kessel aus Lenting ein. Schützen auch Sie sich und Ihr Hab und Gut vor Kanalrückstau – auch wenn Sie bisher nicht betroffen waren.</p><p>In den meisten Fällen helfen ganz einfache Maßnahmen, um einen guten Schutz vor Kanalrückstau zu haben. Nur wer nichts unternimmt, wird durch Schaden klug.</p><button className="faq-toggle" onClick={() => setOpen(open === "faq" ? null : "faq")} aria-expanded={open === "faq"}>Warum Rückstauschutz? <span>{open === "faq" ? "−" : "+"}</span></button>{open === "faq" && <p className="faq-answer">„Bei uns war sowas noch nie – und wir wohnen jetzt schon zig Jahre hier …“ Genau deshalb lohnt sich eine Prüfung, bevor das nächste Starkregenereignis kommt.</p>}</div></section>

      <section className="training section" id="ausbildung"><div><div className="section-label">05 / Ausbildung</div><h2>Mach was<br /><em>Solides.</em></h2></div><p>Du möchtest anpacken, Technik verstehen und einen Beruf mit Zukunft lernen? Bei uns erwartet dich ein erfahrenes Team und echtes Handwerk.</p><a href="#kontakt" className="button button-dark">Kontakt aufnehmen <span>↗</span></a></section>

      <section className="contact section" id="kontakt"><div className="contact-panel"><div><div className="section-label">06 / Kontakt</div><h2>Reden wir<br /><em>über Ihr Projekt.</em></h2><p>Für Bad, Heizung, Wasser, Gas, Klima, Solar, Reparaturen und Vaillant Kundendienst sind wir für Sie da.</p></div><div className="contact-details"><a href="tel:+49841956222" className="contact-phone">+49 (841) 95 62 22</a><a href="mailto:info@haustechnik-stachel.de">info@haustechnik-stachel.de</a><p>Frühlingstraße 16<br />85055 Ingolstadt</p></div></div></section>

      <footer><div className="footer-top"><a href="#top" className="brand footer-brand"><img src="/images/logo.jpg" alt="" /><span>Haustechnik<br /><b>Stachel</b></span></a><p>Seit über 85 Jahren<br />für Sie da.</p><div className="footer-links"><a href="#leistungen">Leistungen</a><a href="#angebot">Angebot</a><a href="#kontakt">Kontakt</a><a href="#top">Nach oben ↑</a></div></div><div className="footer-bottom"><span>© Haustechnik Stachel · Inh. Anton Selensky</span><span><a href="#kontakt">Impressum</a> · <a href="#kontakt">Datenschutz</a> · <a href="#kontakt">Notfallnummern</a></span></div></footer>
    </main>
  );
}
