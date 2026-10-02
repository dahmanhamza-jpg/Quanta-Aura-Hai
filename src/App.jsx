import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import { IntroStatement, SocialJobStatement, ContentShowcase, ShootingSection, WorkflowDetails } from './components/StorySections'
import { Process, Services, Requirements, WeVsYou } from './components/ProcessServices'
import { AdvertisingLead, WebServices, ResultsWorks, IndustriesFaq, Contact } from './components/ResultsContact'

export default function App() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll('.reveal-section')]
    if (!nodes.length) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }))
  }, [])

  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <IntroStatement />
        <SocialJobStatement />
        <ContentShowcase />
        <ShootingSection />
        <WorkflowDetails />
        <Process />
        <Services />
        <Requirements />
        <WeVsYou />
        <AdvertisingLead />
        <WebServices />
        <ResultsWorks />
        <IndustriesFaq />
        <Contact />
      </main>
    </div>
  )
}
