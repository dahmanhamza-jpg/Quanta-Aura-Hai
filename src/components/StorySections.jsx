import React, { useEffect, useRef, useState } from 'react'
import { productionStates } from '../data'

export function IntroStatement() {
  return (
    <section className="intro-statement section-pad reveal-section" id="cosa-facciamo">
      <div className="section-number">01 / POSITIONING</div>
      <div className="statement-grid">
        <h2><span>NON TI SERVONO</span><br/>PIÙ POST.<br/><em>TI SERVE UNA STRATEGIA.</em></h2>
        <div className="statement-copy">
          <p>Creiamo contenuti pensati per attirare attenzione, costruire fiducia e trasformare chi guarda in potenziali clienti.</p>
          <div className="mini-flow"><span>ATTENZIONE</span><b>→</b><span>FIDUCIA</span><b>→</b><span>RICHIESTA</span></div>
        </div>
      </div>
    </section>
  )
}

export function SocialJobStatement() {
  return (
    <section className="social-job full-stage reveal-section">
      <div className="section-number light">02 / WHY</div>
      <div className="social-job-copy">
        <h2>I SOCIAL NON DEVONO<br/>DIVENTARE IL TUO<br/><span>SECONDO LAVORO.</span></h2>
        <div className="job-reveal"><span>QUESTO È IL NOSTRO.</span></div>
      </div>
      <div className="huge-outline-word" aria-hidden="true">SOCIAL</div>
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
      <div className="section-number">03 / CONTENT PRODUCTION</div>
      <div className="content-heading reveal-section">
        <p className="kicker dark">DALL'IDEA AL CLIENTE.</p>
        <h2 id="content-title">UNA SESSIONE.<br/><span>SETTIMANE DI CONTENUTI.</span></h2>
        <p>Idea → Content → Distribution → Cliente. Noi costruiamo la macchina, tu ci metti il volto.</p>
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
        <p>Veniamo direttamente nell’attività una o due volte al mese. Organizziamo sessioni efficienti e registriamo il materiale necessario per alimentare settimane di contenuti.</p>
      </div>
      <div className="shooting-frame" aria-hidden="true"><span>REC</span><b>00:42:16</b><i /></div>
    </section>
  )
}
