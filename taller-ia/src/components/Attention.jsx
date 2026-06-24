import { useState } from 'react'
import { attention } from '../data/contenido'

// Attention simplificado: el usuario elige una palabra → ve qué otras palabras
// "mira". Menos texto, más interacción directa.
const TOKENS_CORTO = [1, 3, 4, 5, 6, 8] // índices: corta, bosque, nativo, requiere, plan, manejo
const ETIQUETAS = ['corta', 'bosque', 'nativo', 'requiere', 'plan', 'manejo']

export default function Attention() {
  const { cabezas, prediccion } = attention
  const [selToken, setSelToken] = useState(0) // índice en ETIQUETAS / TOKENS_CORTO
  const [predicho, setPredicho] = useState(false)

  // Tomamos la cabeza 0 (sintáctica) con los 6 tokens clave.
  // Filtramos la auto-atención: la palabra elegida siempre se mira a sí misma y
  // dominaría la barra. Mostramos cuánto mira a las OTRAS palabras (renormalizado a 100%).
  const M = cabezas[0].matriz
  const fila = TOKENS_CORTO[selToken]
  const otros = ETIQUETAS
    .map((t, i) => ({ t, i, w: M[fila][TOKENS_CORTO[i]] }))
    .filter((o) => o.i !== selToken)
  const suma = otros.reduce((s, o) => s + o.w, 0)
  const barras = otros.map((o) => ({ ...o, v: suma > 0 ? o.w / suma : 0 }))
  const max = Math.max(...barras.map((b) => b.v))

  return (
    <div className="attn">
      {/* 1. Elige la palabra que "mira" */}
      <p className="attn__instruccion">
        Elige una palabra y mira a cuáles de las otras les presta más atención la IA:
      </p>
      <div className="attn__palabras">
        {ETIQUETAS.map((t, i) => (
          <button
            key={i}
            className={'attn__palabra' + (i === selToken ? ' attn__palabra--on' : '')}
            onClick={() => setSelToken(i)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* 2. Barras de atención */}
      <p className="attn__cabeza-nombre">🔍 {cabezas[0].nombre}</p>
      <div className="attn__barras-attn">
        {barras.map((b) => {
          const intensidad = max > 0 ? b.v / max : 0
          return (
            <div className="attn__barra-fila" key={b.i}>
              <span className={'attn__barra-tok' + (intensidad > 0.7 ? ' attn__barra-tok--resalta' : '')}>
                {b.t}
              </span>
              <div className="attn__barra-track">
                <div
                  className="attn__barra-fill"
                  style={{ width: `${intensidad * 100}%`, opacity: 0.35 + intensidad * 0.65 }}
                />
              </div>
              <span className="attn__barra-pct">{Math.round(b.v * 100)}%</span>
            </div>
          )
        })}
      </div>

      {/* 3. Predicción de la siguiente palabra */}
      <div className="attn__pred">
        <p className="attn__pred-frase">
          «la <em>corta</em> de <em>bosque nativo</em> requiere <em>plan</em> de <strong>manejo</strong> ___»
        </p>
        <button
          className="btn btn--primary"
          onClick={() => setPredicho((v) => !v)}
        >
          {predicho ? '🙈 Ocultar predicción' : '🔮 ¿Qué palabra sigue?'}
        </button>
        {predicho && (
          <div className="attn__pred-barras">
            {prediccion.map((p, i) => (
              <div className="attn__barra-fila" key={i}>
                <span className="attn__barra-tok">{p.palabra}</span>
                <div className="attn__barra-track">
                  <div className="attn__barra-fill" style={{ width: `${p.prob * 100}%` }} />
                </div>
                <span className="attn__barra-pct">{Math.round(p.prob * 100)}%</span>
              </div>
            ))}
            <p className="attn__pred-nota">
              El modelo elige <strong>"{prediccion[0].palabra}"</strong> porque es lo más plausible
              en millones de documentos similares — no porque lo haya verificado.
            </p>
          </div>
        )}
      </div>

      <p className="attn__leccion">
        💡 Cada palabra repartió un 100% de atención entre las demás. Esto se repite cientos de
        veces en capas → la IA entiende el contexto completo. Predecir la siguiente palabra sigue
        siendo una suma ponderada: el mismo z = w·x + b del perceptrón, a escala gigante.
      </p>
    </div>
  )
}
