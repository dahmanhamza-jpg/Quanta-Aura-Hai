import React, { useEffect, useRef, useState } from 'react'
import { productionStates } from '../data'

export function IntroStatement() {
  return (
    <section className="intro-statement section-pad reveal-section" id="cosa-facciamo">
      <div className="section-number">01 / COSA FACCIAMO</div>
      <div className="statement-grid">
        <h2><span>PRIMA STRATEGIA.</span><br/>POI CONTENUTI.<br/><em>POI DISTRIBUZIONE.</em></h2>
        <div className="statement-copy">
          <p>Studiamo attività, obiettivi e pubblico. Poi trasformiamo la direzione in contenuti, campagne e presenza digitale coerente.</p>
          <div className="mini-flow"><span>STRATEGIA</span><b>→</b><span>PRODUZIONE</span><b>→</b><span>PUBBLICAZIONE</span><b>→</b><span>CRESCITA</span></div>
        </div>
      </div>
    </section>
  )
}

export function ContentShowcase() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(Number(entry.target.dataset.index))
      })
    }, { rootMargin: '-40% 0px -40% 0px', threshold: 0.01 })

    stepRefs.current.filter(Boolean).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="content-showcase section-pad" aria-labelledby="content-title">
      <div className="section-number">03 / PRODUZIONE CONTENUTI</div>
      <div className="content-heading reveal-section">
        <p className="kicker dark">DAL PIANO ALLA PUBBLICAZIONE.</p>
        <h2 id="content-title">UNA SESSIONE.<br/><span>SETTIMANE DI CONTENUTI.</span></h2>
        <p>Idea → shooting → editing → pubblicazione → analisi. Un flusso semplice, organizzato e ripetibile.</p>
      </div>

      <div className="content-story">
        <div className="phone-stage">
          <div className="floating-social-card fsc-1"><span>REEL</span><strong>01</strong></div>
          <div className="floating-social-card fsc-2"><span>STORY</span><strong>02</strong></div>
          <div className="floating-social-card fsc-3"><span>ADS</span><strong>03</strong></div>
          <div className="production-phone" aria-live="polite">
            <div className="phone-notch" />
            <div className="prod-top"><span>MARKETERO</span><span>0{active + 1}/06</span></div>
            <div className={`prod-visual state-${active + 1}`}>
              <span className="prod-visual-label">{productionStates[active].label}</span>
              <div className="prod-grid"><i/><i/><i/><i/></div>
            </div>
            <div className="prod-copy"><strong>{productionStates[active].label}</strong><p>{productionStates[active].detail}</p></div>
            <div className="prod-nav"><span>●</span><span>◌</span><b>+</b><span>◇</span><span>•••</span></div>
          </div>
        </div>

        <div className="production-steps">
          {productionStates.map((item, index) => (
            <article key={item.id} className={`production-step ${active === index ? 'is-active' : ''}`} data-index={index} ref={(el) => { stepRefs.current[index] = el }}>
              <span>{item.id}</span><div><h3>{item.label}</h3><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ShootingSection() {
  return (
    <section className="shooting-section full-stage reveal-section">
      <div className="shooting-number">2/3</div>
      <div className="shooting-copy">
        <p className="kicker">SHOOTING / ON LOCATION</p>
        <h2>ORE.<br/><span>UN MESE DI CONTENUTI.</span></h2>
        <p>Veniamo nell’attività una o due volte al mese, organizziamo la sessione e registriamo il materiale necessario per alimentare settimane di contenuti.</p>
      </div>
      <div className="shooting-frame" aria-hidden="true"><span>REC</span><b>00:42:16</b><i /></div>
    </section>
  )
}

export function WorkflowDetails() {
  const editing = ['MONTAGGIO', 'SOTTOTITOLI', 'SOUND DESIGN', 'COLOR CORRECTION', 'MOTION GRAPHICS', 'PACING', 'HOOK', 'RETENTION']
  return (
    <section className="workflow-details section-pad" id="metodo" aria-label="Come lavoriamo">
      <div className="section-number">04 / COME LAVORIAMO</div>
      <article className="workflow-panel workflow-strategy reveal-section">
        <span className="workflow-index">01 / STRATEGIA</span>
        <div><p className="kicker dark">PRIMA IL PERCHÉ.</p><h2>NON PARTIAMO<br/>DAI CONTENUTI.</h2></div>
        <p>Partiamo da attività, obiettivi, pubblico, mercato, competitor e posizionamento. Da qui decidiamo cosa comunicare e perché.</p>
      </article>
      <article className="workflow-panel workflow-script reveal-section">
        <span className="workflow-index">02 / SCRIPT</span>
        <div><p className="kicker">NOI PREPARIAMO COSA DIRE.</p><h2>TU DEVI<br/><em>SOLO DIRLO.</em></h2></div>
        <div className="workflow-tags">{['IDEE', 'FORMAT', 'HOOK', 'SCRIPT', 'STORYTELLING', 'CTA'].map((item) => <span key={item}>{item}</span>)}</div>
      </article>
      <article className="workflow-panel workflow-editing reveal-section">
        <span className="workflow-index">03 / EDITING</span>
        <div><p className="kicker">DAL GREZZO AL CONTENUTO.</p><h2>IL RITMO<br/>FA RESTARE.</h2></div>
        <div className="edit-timeline" aria-label="Fasi di editing">{editing.map((item, index) => <span key={item} style={{ '--w': `${42 + index * 6}%` }}><b>{String(index + 1).padStart(2, '0')}</b>{item}</span>)}</div>
      </article>
      <article className="workflow-panel workflow-publish reveal-section">
        <span className="workflow-index">04 / PUBBLICAZIONE</span>
        <div><p className="kicker dark">FINO ALLA PUBBLICAZIONE.</p><h2>UN FLUSSO<br/><em>COMPLETO.</em></h2></div>
        <p>Calendario, caption, programmazione, pubblicazione e ottimizzazione: il lavoro continua anche dopo il montaggio.</p>
      </article>
    </section>
  )
}
