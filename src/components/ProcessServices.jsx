import React from 'react'
import { services } from '../data'

export function Services() {
  return (
    <section className="services section-pad" id="servizi">
      <div className="section-number light">02 / SERVIZI</div>
      <div className="services-heading reveal-section">
        <p className="kicker">SOCIAL + CONTENT + ADS + WEB + GROWTH</p>
        <h2>TUTTO QUELLO CHE SERVE<br/><span>PER COMUNICARE BENE ONLINE.</span></h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <article className={`service-card service-size-${(index % 4) + 1}`} key={service.id}>
            <div className="service-top"><span>{service.id}</span><span>{service.accent}</span></div>
            <div className="service-art" aria-hidden="true"><b>{service.accent}</b><i/><i/></div>
            <div className="service-copy"><h3>{service.title}</h3><p>{service.copy}</p></div>
            <span className="service-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Requirements() {
  const items = [
    ['01', 'UN REFERENTE / VOLTO', 'Una persona disponibile a comparire nei contenuti quando il format lo richiede: titolare, dipendente, collaboratore o professionista.'],
    ['02', 'ACCESSO AI PROFILI', 'Solo quando è prevista la gestione o la pubblicazione: ci serve poter lavorare sui canali coinvolti nel progetto.'],
    ['03', '2/3 ORE AL MESE', 'Una sessione organizzata per registrare il materiale. Se serve, pianifichiamo una seconda sessione.'],
    ['04', 'OBIETTIVI E PRIORITÀ', 'Servizi da spingere, offerte, periodi importanti e obiettivi: ci bastano indicazioni chiare per costruire il piano.'],
  ]

  return (
    <section className="requirements section-pad reveal-section" id="cosa-ci-serve">
      <div className="section-number">09 / COSA CI SERVE</div>
      <div className="requirements-heading">
        <p className="kicker dark">DI COSA ABBIAMO BISOGNO</p>
        <h2>A NOI<br/><span>SERVE POCO.</span></h2>
      </div>
      <div className="requirements-list">
        {items.map(([id, title, copy]) => (
          <article key={id}><span>{id}</span><h3>{title}</h3><p>{copy}</p></article>
        ))}
      </div>
    </section>
  )
}

export function WeVsYou() {
  const tasks = ['STRATEGIA', 'IDEE', 'SCRIPT', 'SHOOTING', 'MONTAGGIO', 'CAPTION', 'PROGRAMMAZIONE', 'PUBBLICAZIONE', 'ADVERTISING', 'ANALISI']
  return (
    <section className="we-you full-stage" aria-label="Divisione del lavoro">
      <div className="we-side">
        <div className="we-label">NOI</div>
        <div className="task-cloud">{tasks.map((task, index) => <span key={task} style={{ '--task-shift': `${index * 5}px` }}>{task}</span>)}</div>
      </div>
      <div className="you-side">
        <div className="we-label">TU</div>
        <h2>GESTISCI<br/>LA TUA ATTIVITÀ.</h2>
        <p>NOI GESTIAMO IL MARKETING.</p>
      </div>
    </section>
  )
}
