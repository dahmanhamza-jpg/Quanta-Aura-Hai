import React from 'react'
import { processSteps, services } from '../data'

export function Process() {
  return (
    <section className="process section-pad" id="metodo">
      <div className="section-number">04 / PROCESS</div>
      <div className="process-heading reveal-section">
        <p className="kicker dark">COME LAVORIAMO</p>
        <h2>UN PITCH DECK.<br/><span>MA IN MOVIMENTO.</span></h2>
      </div>
      <div className="process-stack">
        {processSteps.map((step, index) => (
          <article className={`process-card process-card-${index + 1}`} key={step.id} style={{ '--index': index }}>
            <div className="process-meta"><span>{step.id}</span><span>MARKETERO / METHOD</span></div>
            <div className="process-card-body"><h3>{step.title}</h3><p>{step.copy}</p></div>
            <div className="process-corner">{index + 1}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="services section-pad" id="servizi">
      <div className="section-number light">05 / CAPABILITIES</div>
      <div className="services-heading reveal-section">
        <p className="kicker">SOCIAL + CONTENT + ADS + WEB + GROWTH</p>
        <h2>QUASI TUTTO QUELLO CHE SERVE<br/><span>PER ESSERE FORTI ONLINE.</span></h2>
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
    ['01', 'UN VOLTO', 'Una persona dell’attività disponibile a comparire nei contenuti: titolare, dipendente, collaboratore o professionista.'],
    ['02', 'ACCESSO AI SOCIAL', 'Ci servono gli accessi. Se i profili non esistono, possiamo predisporli noi.'],
    ['03', 'UNA EMAIL', 'Per account, strumenti e campagne.'],
    ['04', '2/3 ORE AL MESE', 'Per registrare i contenuti. Se serve, organizziamo una seconda sessione nel mese.'],
  ]

  return (
    <section className="requirements section-pad reveal-section">
      <div className="section-number">06 / INPUT</div>
      <div className="requirements-heading"><p className="kicker dark">DI COSA ABBIAMO BISOGNO</p><h2>A NOI<br/><span>SERVE POCO.</span></h2></div>
      <div className="requirements-list">
        {items.map(([id, title, copy]) => <article key={id}><span>{id}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  )
}

export function WeVsYou() {
  const tasks = ['STRATEGIA', 'IDEE', 'SCRIPT', 'SHOOTING', 'MONTAGGIO', 'CAPTION', 'PROGRAMMAZIONE', 'PUBBLICAZIONE', 'ADVERTISING', 'ANALISI']
  return (
    <section className="we-you full-stage" aria-label="Noi contro tu">
      <div className="we-side"><div className="we-label">NOI</div><div className="task-cloud">{tasks.map((task, index) => <span key={task} style={{ '--i': index }}>{task}</span>)}</div></div>
      <div className="you-side"><div className="we-label">TU</div><h2>GESTISCI<br/>I CLIENTI.</h2><p>NOI GESTIAMO IL RESTO.</p></div>
    </section>
  )
}
