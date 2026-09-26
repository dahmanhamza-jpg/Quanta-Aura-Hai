import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const reactions = [
  'NUwR5b6IwjzB8kTUfU','pk2SjAFWICrgcBuPCN','aDgHPjCUb37h27gwQT','lLffPaWZihqaOWJVkj','26ufdipQqU2lhNA4g','10JhviFuU2gWD6','3oEjHI8WJv4x6UPDB6','11mwI67GLeMvgA','13n7XeyIXEIrbG','3o7TKQ8kAP0f9X5PoY','l3q2K5jinAlChoCLS','3o7TKr3nzbh5WgCFxe','26gsspfbt1HfVQ9va','3o7527pa7qs9kCG78A','xUA7aM09ByyR1w5YWc','xT9IgMw9fhuEGUaJqg','l0HlvtIPzPdt2usKs','3ohhwxmNcPvwyRqYKI','26n6Gx9moCgs1pUuk','3o6Zt4HU9uwXmXSAuI','l0MYt5jPR6QX5pnqM','3o7aD2saalBwwftBIY','26BRuo6sLetdllPAQ','xT5LMHfqQrYRMrAEr6','3o6wrvdHFbwBrUFenu','l2JhtKtDWYNKdRpoA','l4FGuhL4U2WyjdkaY','3oKIPwoeGErMmaI43S','xT0GqjBCkO9BEiSEOk','26gsccje7r5WUrXsA'
]

const roastLines = [
  '💀 Bro pensava di avere aura','Livello aura: -47','Riprovaci nella prossima vita','Il sistema si rifiuta di calcolare la tua aura','NPC detected','Questa è pesante 💀','Non dovevi inserire il tuo nome','Aura trovata. Purtroppo non è tua.','Server in imbarazzo per te','Il risultato è stato censurato per dignità','Bro ha perso aura solo aprendo la pagina','La tua aura è attualmente in manutenzione','Abbiamo controllato due volte. Peggio.','Aura premium non disponibile su questo account','Il protagonista è chiaramente qualcun altro','Sistema: “ma sei sicuro?”','Abbassiamo lo sguardo per rispetto','Hai sbloccato il finale imbarazzante','Il calcolo ha prodotto solo silenzio','0% aura, 100% coraggio a provarci','La matematica non può salvarti','Risultato ufficiale: situazione critica','Questa reaction parla da sola','Hai appena perso altri 12 punti aura','Il tuo nome ha fatto crashare il carisma','Aura in buffering… da sempre','Modalità comparsa secondaria attivata','Il sistema consiglia di cambiare nome','Questo risultato non verrà inserito nel curriculum','Riprova quando Mercurio non è retrogrado'
]

const gifUrl = (id) => `https://media.giphy.com/media/${id}/giphy.gif`
const RONALDO_GIF = gifUrl('VoS983y376DugLAath')

function App() {
  const [name, setName] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const normalizedName = useMemo(() => name.trim().toLowerCase(), [name])

  const calculateAura = () => {
    if (!name.trim()) {
      setError('Inserisci almeno un nome 👀')
      setResult(null)
      return
    }
    setError('')
    if (normalizedName === 'hamza') {
      setResult({ special: true, gif: RONALDO_GIF, aura: 'AURA: ∞', line: 'Il sistema non riesce a calcolare così tanta aura.' })
      return
    }
    const gif = gifUrl(reactions[Math.floor(Math.random() * reactions.length)])
    const line = roastLines[Math.floor(Math.random() * roastLines.length)]
    setResult({ special: false, gif, line })
  }

  const reset = () => { setResult(null); setError(''); setName('') }
  const onKeyDown = (event) => { if (event.key === 'Enter') calculateAura() }

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <section className={`card ${result?.special ? 'special-card' : ''}`} aria-live="polite">
        {!result ? (
          <div className="intro view-enter">
            <div className="eyebrow">AURA CHECK</div>
            <h1>QUANTA AURA HAI?</h1>
            <p className="subtitle">Inserisci il tuo nome. A tuo rischio e pericolo.</p>
            <div className="form-wrap">
              <label htmlFor="name">Inserisci il tuo nome</label>
              <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyDown={onKeyDown} placeholder="Inserisci nome..." autoComplete="off" maxLength={40} autoFocus />
              {error && <div className="error">{error}</div>}
              <button className="primary-btn" onClick={calculateAura}>CALCOLA AURA</button>
            </div>
            <div className="fine-print">Nessuna scienza. Solo giudizio gratuito.</div>
          </div>
        ) : (
          <div className="result view-enter">
            {result.special && <div className="special-kicker">LEGENDARY MODE</div>}
            <div className="gif-frame">
              <img src={result.gif} alt={result.special ? 'Cristiano Ronaldo esulta' : 'Reaction meme'} onError={(event) => {
                if (!event.currentTarget.dataset.fallback) {
                  event.currentTarget.dataset.fallback = '1'
                  event.currentTarget.src = result.special ? RONALDO_GIF : gifUrl('NUwR5b6IwjzB8kTUfU')
                }
              }} />
            </div>
            {result.special ? (
              <>
                <div className="aura-infinity">{result.aura}</div>
                <h2 className="special-title">HAMZA DETECTED.</h2>
                <p className="reaction-text">{result.line}</p>
                <p className="special-subline">Bro è letteralmente il protagonista.</p>
              </>
            ) : <p className="reaction-text">{result.line}</p>}
            <button className="secondary-btn" onClick={reset}>Riprova</button>
          </div>
        )}
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
