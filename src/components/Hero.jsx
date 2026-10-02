import React, { useEffect, useRef } from 'react'

const cards = [
  { cls: 'hero-card card-a', label: 'REEL / 01', meta: 'CONTENT' },
  { cls: 'hero-card card-b', label: 'CAMPAIGN / 02', meta: 'ADS' },
  { cls: 'hero-card card-c', label: 'WEB / 03', meta: 'UX / UI' },
  { cls: 'hero-card card-d', label: 'EDIT / 04', meta: 'VIDEO' },
  { cls: 'hero-card card-e', label: 'SOCIAL / 05', meta: 'GROWTH' },
]

export default function Hero() {
  const stageRef = useRef(null)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage || window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return
    const onMove = (event) => {
      const rect = stage.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      stage.style.setProperty('--mx-sm', `${x * 5}px`)
      stage.style.setProperty('--mx-md', `${x * 8}px`)
      stage.style.setProperty('--mx-lg', `${x * 11}px`)
      stage.style.setProperty('--mx-neg', `${x * -9}px`)
      stage.style.setProperty('--my-sm', `${y * 5}px`)
      stage.style.setProperty('--my-md', `${y * 8}px`)
      stage.style.setProperty('--my-lg', `${y * 11}px`)
      stage.style.setProperty('--my-neg', `${y * -8}px`)
    }
    const onLeave = () => {
      ;['--mx-sm','--mx-md','--mx-lg','--mx-neg','--my-sm','--my-md','--my-lg','--my-neg'].forEach((key) => stage.style.setProperty(key, '0px'))
    }
    stage.addEventListener('pointermove', onMove)
    stage.addEventListener('pointerleave', onLeave)
    return () => {
      stage.removeEventListener('pointermove', onMove)
      stage.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <section className="hero" id="top" ref={stageRef}>
      <div className="hero-intro" aria-hidden="true"><span>MARKETERO</span></div>
      <div className="hero-corners hero-corners-top">
        <span>MARKETERO AGENCY<small>CREATIVE / SOCIAL / GROWTH</small></span>
        <span>[ 2026 ]</span>
        <span>CONTENT / ADS / WEB</span>
      </div>

      <div className="hero-center">
        <div className="hero-title-wrap" aria-label="Marketero Agency">
          <span className="hero-title-sans">MARKETERO</span>
          <span className="hero-title-serif">Agency</span>
        </div>

        <div className="hero-work-stack" aria-hidden="true">
          {cards.map((card, index) => (
            <div key={card.label} className={card.cls} style={{ '--order': index }}>
              <div className="card-no">0{index + 1}</div>
              <div className="card-visual"><span>{card.meta}</span></div>
              <div className="card-caption"><strong>{card.label}</strong><span>SELECTED WORK</span></div>
            </div>
          ))}
          <div className="hero-phone">
            <div className="phone-bar"><span>9:41</span><span>● ● ●</span></div>
            <div className="phone-word">MAKE</div>
            <div className="phone-screen-grid">
              <i /><i /><i /><i />
            </div>
            <div className="phone-ui"><span>◼</span><span>◌</span><b>+</b><span>◇</span><span>•••</span></div>
          </div>
        </div>

        <div className="hero-badge"><strong>20<br/>26</strong><span>selected<br/>capabilities</span></div>
        <div className="hero-capabilities">
          <span>Social Strategy</span><span>Content Production</span><span>Advertising</span><span>Web Experience</span>
        </div>
      </div>

      <div className="hero-message">
        <p className="kicker">CONTENT. STRATEGY. GROWTH.</p>
        <h1>TU PENSA AI CLIENTI.<br/><span>AL MARKETING PENSIAMO NOI.</span></h1>
        <p className="hero-copy">Strategia, contenuti, video, advertising e digital experience per trasformare la presenza online della tua attività in qualcosa che le persone notano, ricordano e scelgono.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contatti">PARLIAMO DEL TUO PROGETTO →</a>
          <a className="button button-ghost" href="#cosa-facciamo">SCOPRI COSA FACCIAMO</a>
        </div>
      </div>

      <div className="hero-corners hero-corners-bottom">
        <span>SOCIAL / CONTENT</span>
        <span>[ SCROLL TO DISCOVER ]</span>
        <span>ADS / WEB / GROWTH</span>
      </div>
    </section>
  )
}
