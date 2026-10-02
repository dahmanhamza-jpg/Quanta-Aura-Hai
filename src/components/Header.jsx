import React, { useEffect, useState } from 'react'

const navItems = [
  ['cosa-facciamo', 'COSA FACCIAMO'],
  ['servizi', 'SERVIZI'],
  ['metodo', 'METODO'],
  ['risultati', 'RISULTATI'],
  ['contatti', 'CONTATTI'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('cosa-facciamo')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const targets = navItems.map(([id]) => document.getElementById(id)).filter(Boolean)
    if (!targets.length) return
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0.01, 0.2, 0.5] })
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const goTo = (id) => {
    setOpen(false)
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
    })
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <button className="brand" onClick={() => goTo('top')} aria-label="Torna all'inizio">
        <span>MARKETERO</span><em>/ AGENCY</em>
      </button>
      <nav className="desktop-nav" aria-label="Navigazione principale">
        {navItems.map(([id, label]) => <button key={id} className={active === id ? 'active' : ''} onClick={() => goTo(id)}>{label}</button>)}
      </nav>
      <button className="nav-cta desktop-only" onClick={() => goTo('contatti')}>PARLIAMONE</button>
      <button className={`menu-toggle ${open ? 'is-open' : ''}`} onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? 'Chiudi menu' : 'Apri menu'}><span /><span /></button>
      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-label">NAVIGATION / 2026</div>
          {navItems.map(([id, label], index) => <button key={id} style={{ '--i': index }} onClick={() => goTo(id)}><span>0{index + 1}</span>{label}</button>)}
          <button className="mobile-menu-cta" onClick={() => goTo('contatti')}>PARLIAMO DEL TUO PROGETTO →</button>
        </div>
      </div>
    </header>
  )
}
