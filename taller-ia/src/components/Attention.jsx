import { useState } from 'react'
import { attention } from '../data/contenido'

// Attention simplificado: el usuario elige una palabra → ve qué otras palabras
// "mira". Menos texto, más interacción directa.
const TOKENS_CORTO = [1, 3, 4, 5, 6, 8] // índices: corta, bosque, nativo, requiere, plan, manejo
const ETIQUETAS = ['corta', 'bosque', 'nativo', 'requiere', 'plan', 'manejo']

export default function Attention() {
  const { tokens, cabezas, prediccion } = attention
  const [selToken, setSelToken] = useState(0) // índice en ETIQUETAS / TOKENS_CORTO
  const [predicho, setPredicho] = useState(false)

  // Tomamos la cabeza 0 (sintáctica) con los 6 tokens clave
  const M = cabezas[0].matriz
  const fila = TOKENS_CORTO[selToken]
  const pesos = TOKENS_CORTO.map((j) => M[fila][j])
  const max = Math.max(...pesos)

  return (
    <div className="attn">
      {/* 1. Elige la palabra que "mira" */}
      <p className="attn__instruccion">
        Elige una palabra — la IA le da más peso a las que resaltan más:
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
      <div className="attn__barras-attn">
        {ETIQUETAS.map((t, i) => {
          const v = pesos[i]
          const intensidad = max > 0 ? v / max : 0
          return (
            <div className="attn__barra-fila" key={i}>
              <span className={'attn__barra-tok' + (intensidad > 0.7 ? ' attn__barra-tok--resalta' : '')}>
                {t}
              </span>
              <div className="attn__barra-track">
                <div
                  className="attn__barra-fill"
                  style={{ width: `${intensidad * 100}%`, opacity: 0.35 + intensidad * 0.65 }}
                />
              </div>
              <span className="attn__barra-pct">{Math.round(v * 100)}%</span>
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
          onClick={() => setPredicho(true)}
          disabled={predicho}
        >
          🔮 ¿Qué palabra sigue?
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
