import React from 'react'
import { works } from '../data'

export function AdvertisingLead() {
  return (
    <>
      <section className="ads-section full-stage reveal-section">
        <div className="section-number light">05 / ADVERTISING</div>
        <div className="ads-copy">
          <p className="kicker">ADVERTISING</p>
          <h2>ESSERE VISTI<br/><span>NON BASTA.</span></h2>
          <h3>DEVI ESSERE VISTO<br/>DALLE PERSONE GIUSTE.</h3>
          <p>Area geografica, pubblico, creatività, test, retargeting e ottimizzazione: costruiamo campagne coerenti con l’obiettivo del progetto.</p>
        </div>
        <div className="ad-map" aria-hidden="true">
          <span className="pulse p1"/><span className="pulse p2"/><span className="pulse p3"/><span className="pulse p4"/>
          <div className="target-card"><small>TARGET / LOCAL</small><strong>RIGHT<br/>PEOPLE</strong><span>→ ACTION</span></div>
        </div>
      </section>

      <section className="lead-flow section-pad reveal-section">
        <div className="section-number">06 / CRESCITA</div>
        <div className="lead-flow-head"><p className="kicker dark">NON CERCHIAMO SOLO LIKE.</p><h2>DALL’ATTENZIONE<br/><span>ALL’AZIONE.</span></h2></div>
        <div className="funnel-flow">
          {['ATTENZIONE', 'INTERESSE', 'VISITA', 'AZIONE', 'CLIENTE'].map((item, index) => (
            <React.Fragment key={item}><div className="funnel-node"><span>0{index + 1}</span><strong>{item}</strong></div>{index < 4 && <div className="funnel-arrow">→</div>}</React.Fragment>
          ))}
        </div>
        <p className="flow-note">Campagna → contenuto → pagina o profilo → azione → cliente. Misuriamo le performance e ottimizziamo ciò che può essere migliorato.</p>
      </section>
    </>
  )
}

export function WebServices() {
  return (
    <section className="web-services section-pad reveal-section">
      <div className="section-number light">07 / WEB</div>
      <div className="web-heading"><h2>I SOCIAL CREANO <em>ATTENZIONE.</em><br/>IL SITO CREA <span>FIDUCIA.</span></h2></div>
      <div className="browser-mock">
        <div className="browser-top"><i/><i/><i/><span>web / experience</span></div>
        <div className="browser-body"><aside><span>WEB DESIGN</span><span>LANDING PAGE</span><span>RESTYLING</span><span>UX / UI</span></aside><div className="browser-canvas"><strong>MAKE IT<br/><em>TRUSTWORTHY.</em></strong><div className="browser-chip">MOBILE FIRST</div></div></div>
      </div>
      <div className="ecommerce-strip"><span>E-COMMERCE</span><p>UX · MOBILE · VELOCITÀ · DESIGN · CHECKOUT · FIDUCIA</p></div>
    </section>
  )
}

export function ResultsWorks() {
  return (
    <section className="results-works section-pad" id="lavori">
      <div className="section-number">08 / ESEMPI</div>
      <div className="results-head reveal-section">
        <p className="kicker dark">COME PUÒ PRENDERE FORMA IL LAVORO.</p>
        <h2>ESEMPI DI<br/><span>IMPOSTAZIONE.</span></h2>
        <p>Tre esempi semplici per mostrare come combiniamo servizi diversi in base al tipo di attività. Nessun risultato inventato: qui mostriamo il metodo e la struttura del lavoro.</p>
      </div>
      <div className="works-title reveal-section"><span>PROJECT</span><em>Examples</em></div>
      <div className="works-stage">
        {works.map((work, index) => (
          <article className={`work-card work-${work.tone}`} key={work.id}>
            <div className="work-visual"><span>ESEMPIO / FORMAT</span><b>0{index + 1}</b></div>
            <div className="work-info"><span>{work.id} / {work.sector}</span><strong>{work.service}</strong><span>{work.year}</span><p>{work.result}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function PortfolioEnd() {
  return (
    <>
      <section className="final-cta full-stage reveal-section">
        <div className="section-number light">10 / SUMMARY</div>
        <h2>STRATEGIA.<br/>CONTENUTI.<br/><span>ADS. WEB.</span></h2>
        <p>UN SOLO FLUSSO.<br/>TUTTO COORDINATO.</p>
      </section>
      <footer className="footer">
        <div className="footer-brand"><strong>MARKETERO</strong><em>Agency</em></div>
        <div><span>PORTFOLIO / SERVICES</span><small>© 2026 MARKETERO AGENCY</small></div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  )
}
