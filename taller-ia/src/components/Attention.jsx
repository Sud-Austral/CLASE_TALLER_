import { useState } from 'react'
import { attention } from '../data/contenido'

// Concepto LLM 1 — Attention: heatmap interactivo de pesos de atención sobre una
// frase, con selector de "cabeza" y predicción de la siguiente palabra.
export default function Attention() {
  const { tokens, cabezas, prediccion, leccion } = attention
  const [cabeza, setCabeza] = useState(0)
  const [fila, setFila] = useState(1) // token-fila resaltado (por defecto "corta")
  const [predicho, setPredicho] = useState(false)

  const M = cabezas[cabeza].matriz

  // Color verde con opacidad proporcional al peso.
  const celda = (v) => ({
    background: `rgba(46, 125, 50, ${Math.min(1, v * 1.6)})`,
    color: v > 0.45 ? '#fff' : 'transparent',
  })

  return (
    <div className="attn">
      <div className="attn__tabs">
        {cabezas.map((c, i) => (
          <button
            key={i}
            className={'attn__tab' + (i === cabeza ? ' attn__tab--on' : '')}
            onClick={() => setCabeza(i)}
          >
            {c.nombre}
          </button>
        ))}
      </div>
      <p className="attn__desc">{cabezas[cabeza].descripcion}</p>

      <div className="attn__scroll">
        <table className="attn__grid">
          <thead>
            <tr>
              <th className="attn__corner">desde \ hacia</th>
              {tokens.map((t, j) => (
                <th key={j} className="attn__colhead">{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tokens.map((t, i) => (
              <tr
                key={i}
                className={i === fila ? 'attn__row--on' : ''}
                onMouseEnter={() => setFila(i)}
              >
                <th className="attn__rowhead">{t}</th>
                {M[i].map((v, j) => (
                  <td key={j} className="attn__cell" style={celda(v)} title={`${(v * 100).toFixed(0)}%`}>
                    {Math.round(v * 100)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="attn__hint">
        Pasa el mouse por una fila: ves cómo <strong>"{tokens[fila]}"</strong> reparte su atención
        (cada número es %, la fila suma 100). Las celdas más verdes son las palabras a las que más
        "mira".
      </p>

      <div className="attn__pred">
        <button className="btn btn--primary" onClick={() => setPredicho(true)} disabled={predicho}>
          🔮 Predecir la siguiente palabra
        </button>
        {predicho && (
          <div className="attn__barras">
            <p className="attn__pred-txt">
              «la corta de bosque nativo requiere plan de manejo <strong>___</strong>»
            </p>
            {prediccion.map((p, i) => (
              <div className="attn__barra" key={i}>
                <span className="attn__barra-lbl">{p.palabra}</span>
                <div className="attn__barra-track">
                  <div className="attn__barra-fill" style={{ width: `${p.prob * 100}%` }} />
                </div>
                <span className="attn__barra-val">{(p.prob * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="attn__leccion">💡 {leccion}</p>
    </div>
  )
}
