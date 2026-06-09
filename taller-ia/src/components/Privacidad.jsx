import { useState } from 'react'
import { privacidad } from '../data/contenido'

// Ejercicio "qué NO contarle a la IA": el usuario marca los fragmentos sensibles.
// Hay señuelos (datos públicos) que NO deben marcarse — así la evaluación mide juicio.
export default function Privacidad() {
  const [marcados, setMarcados] = useState({})
  const [revelado, setRevelado] = useState(false)

  const clicable = (rol) => rol === 'sensible' || rol === 'senuelo'
  const idxSensibles = privacidad.tokens
    .map((t, i) => (t.rol === 'sensible' ? i : -1))
    .filter((i) => i >= 0)

  const toggle = (i) => {
    if (revelado || !clicable(privacidad.tokens[i].rol)) return
    setMarcados((m) => ({ ...m, [i]: !m[i] }))
  }

  // Análisis al comprobar.
  const bien = idxSensibles.filter((i) => marcados[i]) // sensibles marcados
  const escapados = idxSensibles.filter((i) => !marcados[i]) // sensibles NO marcados
  const deMas = privacidad.tokens
    .map((t, i) => (t.rol === 'senuelo' && marcados[i] ? i : -1))
    .filter((i) => i >= 0) // señuelos marcados por error

  return (
    <div className="privacidad">
      <p className="privacidad__intro">{privacidad.intro}</p>

      <div className="privacidad__correo">
        {privacidad.tokens.map((tok, i) => {
          if (!clicable(tok.rol)) return <span key={i}>{tok.t}</span>
          const marcado = !!marcados[i]
          let clase = 'privacidad__dato'
          if (revelado) {
            if (tok.rol === 'sensible') clase += marcado ? ' privacidad__dato--ok' : ' privacidad__dato--fallo'
            else clase += marcado ? ' privacidad__dato--demas' : ' privacidad__dato--senuelo-ok'
          } else if (marcado) {
            clase += ' privacidad__dato--marcado'
          }
          return (
            <button key={i} className={clase} onClick={() => toggle(i)} disabled={revelado}>
              {!revelado && marcado ? '████' : tok.t}
            </button>
          )
        })}
      </div>

      {!revelado ? (
        <button className="btn btn--primary" onClick={() => setRevelado(true)}>
          🔒 Comprobar
        </button>
      ) : (
        <div className="privacidad__resultado">
          <p className="privacidad__score">
            <strong>Ocultaste {bien.length} de {idxSensibles.length}</strong> datos sensibles.
          </p>
          {escapados.length > 0 && (
            <p className="privacidad__fila privacidad__fila--mal">
              🚨 Se te escapó: {escapados.map((i) => privacidad.tokens[i].tipo).join(', ')}.
            </p>
          )}
          {deMas.length > 0 && (
            <p className="privacidad__fila privacidad__fila--demas">
              ✂️ Marcaste de más (es información pública): {deMas.map((i) => privacidad.tokens[i].tipo).join(', ')}.
            </p>
          )}
          {escapados.length === 0 && deMas.length === 0 && (
            <p className="privacidad__fila privacidad__fila--ok">
              🎯 Perfecto: ocultaste todo lo sensible y respetaste lo público.
            </p>
          )}
          <button
            className="btn"
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
