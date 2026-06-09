import { useState } from 'react'
import { privacidad } from '../data/contenido'

// Ejercicio "qué NO contarle a la IA": el usuario marca los fragmentos sensibles
// del correo. Al comprobar, se revela qué debía ocultarse.
export default function Privacidad() {
  const [marcados, setMarcados] = useState({})
  const [revelado, setRevelado] = useState(false)

  // Índices de los tokens sensibles (los que NO son texto de relleno).
  const sensibles = privacidad.tokens
    .map((t, i) => (t.sensible ? i : -1))
    .filter((i) => i >= 0)

  const toggle = (i) => {
    // sólo se pueden marcar fragmentos sensibles, y sólo antes de revelar
    if (revelado || !privacidad.tokens[i].sensible) return
    setMarcados((m) => ({ ...m, [i]: !m[i] }))
  }

  const aciertos = sensibles.filter((i) => marcados[i]).length

  return (
    <div className="privacidad">
      <p className="privacidad__intro">{privacidad.intro}</p>

      <div className="privacidad__correo">
        {privacidad.tokens.map((tok, i) => {
          if (!tok.sensible) return <span key={i}>{tok.t}</span>
          const marcado = !!marcados[i]
          let clase = 'privacidad__dato'
          if (revelado) clase += ' privacidad__dato--revelado'
          else if (marcado) clase += ' privacidad__dato--marcado'
          return (
            <button key={i} className={clase} onClick={() => toggle(i)} disabled={revelado}>
              {revelado ? `[${tok.tipo.toUpperCase()}]` : marcado ? '████' : tok.t}
            </button>
          )
        })}
      </div>

      {!revelado ? (
        <button className="btn btn--primary" onClick={() => setRevelado(true)}>
          🔒 Ocultar datos sensibles
        </button>
      ) : (
        <div className="privacidad__resultado">
          <strong>Marcaste {aciertos} de {sensibles.length}</strong> datos sensibles. Así, anonimizado,
          el correo ya se puede pegar en una IA.
          <button
            className="btn"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setRevelado(false)
              setMarcados({})
            }}
          >
            ↺ Reintentar
          </button>
        </div>
      )}

      <p className="privacidad__leccion">💡 {privacidad.leccion}</p>
    </div>
  )
}
