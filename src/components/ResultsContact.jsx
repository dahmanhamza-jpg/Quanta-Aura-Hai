import React, { useState } from 'react'
import { faq, industries, works } from '../data'

export function AdvertisingLead() {
  return (
    <>
      <section className="ads-section full-stage reveal-section">
        <div className="section-number light">07 / DISTRIBUTION</div>
        <div className="ads-copy">
          <p className="kicker">ADVERTISING</p>
          <h2>ESSERE VISTI<br/><span>NON BASTA.</span></h2>
          <h3>DEVI ESSERE VISTO<br/>DALLE PERSONE GIUSTE.</h3>
          <p>Audience, area geografica, creatività, test, retargeting e conversione: costruiamo campagne pensate per intercettare attenzione utile.</p>
        </div>
        <div className="ad-map" aria-hidden="true">
          <span className="pulse p1"/><span className="pulse p2"/><span className="pulse p3"/><span className="pulse p4"/>
          <div className="target-card"><small>TARGET / LOCAL</small><strong>RIGHT<br/>PEOPLE</strong><span>→ LEAD</span></div>
        </div>
      </section>
      <section className="lead-flow section-pad reveal-section">
        <div className="section-number">08 / LEAD GENERATION</div>
        <div className="lead-flow-head"><p className="kicker dark">NON CERCHIAMO SOLO LIKE.</p><h2>CERCHIAMO<br/><span>ATTENZIONE UTILE.</span></h2></div>
        <div className="funnel-flow">
          {['ATTENZIONE', 'INTERESSE', 'CONTATTO', 'APPUNTAMENTO', 'CLIENTE'].map((item, index) => (
            <React.Fragment key={item}><div className="funnel-node"><span>0{index + 1}</span><strong>{item}</strong></div>{index < 4 && <div className="funnel-arrow">→</div>}</React.Fragment>
          ))}
        </div>
        <p className="flow-note">AD → LANDING → CONTATTO → CLIENTE. Nessuna promessa di risultati garantiti: misuriamo, testiamo e ottimizziamo ciò che è sotto il nostro controllo.</p>
      </section>
    </>
  )
}

export function WebServices() {
  return (
    <section className="web-services section-pad reveal-section">
      <div className="section-number light">09 / WEB</div>
      <div className="web-heading"><h2>I SOCIAL CREANO <em>ATTENZIONE.</em><br/>IL SITO CREA <span>FIDUCIA.</span></h2></div>
      <div className="browser-mock">
        <div className="browser-top"><i/><i/><i/><span>marketero.agency / experience</span></div>
        <div className="browser-body"><aside><span>WEB DESIGN</span><span>LANDING PAGE</span><span>RESTYLING</span><span>UX / UI</span></aside><div className="browser-canvas"><strong>MAKE IT<br/><em>TRUSTWORTHY.</em></strong><div className="browser-chip">MOBILE FIRST</div></div></div>
      </div>
      <div className="ecommerce-strip"><span>E-COMMERCE</span><p>UX · MOBILE · CONVERSIONE · VELOCITÀ · DESIGN · TRACKING · CHECKOUT · FIDUCIA</p></div>
    </section>
  )
}

export function ResultsWorks() {
  return (
    <section className="results-works section-pad" id="risultati">
      <div className="section-number">10 / PROOF</div>
      <div className="results-head reveal-section"><p className="kicker dark">I NUMERI CONTANO.</p><h2>RISULTATI REALI.<br/><span>APPENA LI INSERIAMO.</span></h2><p>Nessun numero inventato. Questi campi sono predisposti per dati verificati, non per riempire lo spazio.</p></div>
      <div className="metrics-grid">
        <div><strong>+XXM</strong><span>VIEWS</span><small>PLACEHOLDER</small></div><div><strong>+XXX</strong><span>LEAD</span><small>PLACEHOLDER</small></div><div><strong>+XX%</strong><span>CRESCITA</span><small>PLACEHOLDER</small></div><div><strong>XX</strong><span>CLIENTI</span><small>PLACEHOLDER</small></div>
      </div>
      <div className="works-title reveal-section"><span>SELECTED</span><em>Works</em></div>
      <div className="works-stage">
        {works.map((work, index) => <article className={`work-card work-${work.tone}`} key={work.id}><div className="work-visual"><span>DEMO / PLACEHOLDER</span><b>0{index + 1}</b></div><div className="work-info"><span>{work.id} / {work.sector}</span><strong>{work.service}</strong><span>{work.year}</span><p>{work.result}</p></div></article>)}
      </div>
      <div className="case-grid">
        {[1,2,3].map((n) => <article key={n} className="case-card"><span>CASE STUDY 0{n} / PLACEHOLDER</span><dl><div><dt>SETTORE</dt><dd>[INSERIRE]</dd></div><div><dt>PROBLEMA</dt><dd>[INSERIRE]</dd></div><div><dt>STRATEGIA</dt><dd>[INSERIRE]</dd></div><div><dt>CONTENUTI</dt><dd>[INSERIRE]</dd></div><div><dt>RISULTATO</dt><dd>[INSERIRE RISULTATO REALE]</dd></div></dl></article>)}
      </div>
    </section>
  )
}

export function IndustriesFaq() {
  const [openFaq, setOpenFaq] = useState(0)
  return (
    <>
      <section className="industries section-pad reveal-section">
        <div className="section-number light">11 / INDUSTRIES</div><h2>DOVE POSSIAMO<br/><span>FARE LA DIFFERENZA.</span></h2>
        <div className="marquee" aria-label={industries.join(', ')}><div>{[...industries, ...industries].map((item, index) => <span key={`${item}-${index}`}>{item}<b>✦</b></span>)}</div></div>
      </section>
      <section className="faq section-pad reveal-section">
        <div className="section-number">12 / FAQ</div>
        <div className="faq-grid"><div className="faq-title"><p className="kicker dark">LE DOMANDE CHE STAI PER FARCI</p><h2>PRIMA CHE<br/><span>TU LE FACCIA.</span></h2></div><div className="faq-list">
          {faq.map(([question, answer], index) => { const isOpen = openFaq === index; return <article className={isOpen ? 'is-open' : ''} key={question}><button onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}><span>0{index + 1}</span><strong>{question}</strong><b>{isOpen ? '−' : '+'}</b></button><div className="faq-answer"><p>{answer}</p></div></article> })}
        </div></div>
      </section>
    </>
  )
}

export function Contact() {
  const [state, setState] = useState('idle')
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
  const onSubmit = async (event) => {
    event.preventDefault()
    if (!endpoint) { setState('unconfigured'); return }
    setState('loading')
    const form = event.currentTarget
    try {
      const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Request failed')
      form.reset(); setState('success')
    } catch { setState('error') }
  }

  return (
    <>
      <section className="final-cta full-stage reveal-section"><div className="section-number light">13 / ACTION</div><h2>IL TUO PROSSIMO CLIENTE<br/>POTREBBE ESSERE<br/><span>GIÀ ONLINE.</span></h2><p>FACCIAMO IN MODO<br/>CHE TROVI TE.</p><a href="#contatti" className="mega-cta">PARLIAMONE <span>→</span></a></section>
      <section className="contact section-pad" id="contatti"><div className="section-number">14 / CONTACT</div><div className="contact-grid">
        <div className="contact-heading reveal-section"><p className="kicker dark">START A PROJECT</p><h2>RACCONTACI<br/><span>COSA VUOI FAR CRESCERE.</span></h2><p>Compila i campi. Se l’endpoint di contatto non è ancora configurato, il sito te lo dirà chiaramente senza simulare invii.</p></div>
        <form className="contact-form" onSubmit={onSubmit}>
          <label>NOME<input name="name" required autoComplete="name" /></label><label>ATTIVITÀ<input name="business" required /></label><label>EMAIL<input name="email" type="email" required autoComplete="email" /></label><label>TELEFONO<input name="phone" type="tel" autoComplete="tel" /></label><label>SETTORE<input name="sector" /></label><label>SERVIZIO<select name="service" defaultValue=""><option value="" disabled>Seleziona</option><option>Social Management</option><option>Content Production</option><option>Advertising</option><option>Lead Generation</option><option>Web Design</option><option>E-commerce</option><option>Altro</option></select></label><label className="full">MESSAGGIO<textarea name="message" rows="5" required /></label>
          <button className="submit-button" type="submit" disabled={state === 'loading'}>{state === 'loading' ? 'INVIO…' : 'PARLIAMONE →'}</button>
          <div className={`form-status status-${state}`} role="status">{state === 'unconfigured' && 'Modulo pronto ma non ancora collegato: configura VITE_CONTACT_ENDPOINT per attivare l’invio. Nessun dato è stato inviato.'}{state === 'success' && 'Messaggio inviato correttamente.'}{state === 'error' && 'Invio non riuscito. Riprova più tardi o usa un contatto alternativo quando verrà configurato.'}</div>
        </form>
      </div></section>
      <footer className="footer"><div className="footer-brand"><strong>MARKETERO</strong><em>Agency</em></div><div><span>CONTENT. STRATEGY. GROWTH.</span><small>© 2026 MARKETERO AGENCY</small></div><a href="#top">BACK TO TOP ↑</a></footer>
    </>
  )
}
