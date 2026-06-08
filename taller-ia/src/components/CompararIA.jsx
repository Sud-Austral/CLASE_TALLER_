import { useState } from 'react'
import { compararIA } from '../data/contenido'

// Ejercicio "distintos modelos, distintas respuestas": pestañas para comparar
// cómo ChatGPT, Claude y Gemini responden al mismo prompt sobre la Ley 20.283.
export default function CompararIA() {
  const [activo, setActivo] = useState(compararIA.modelos[0].id)
  const modelo = compararIA.modelos.find((m) => m.id === activo)

  return (
    <div className="comparar">
      <div className="comparar__prompt">
        <span className="comparar__prompt-tag">Mismo prompt para las tres IA</span>
        <p>{compararIA.prompt}</p>
      </div>

      <div className="comparar__tabs" role="tablist">
        {compararIA.modelos.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={m.id === activo}
            className={'comparar__tab' + (m.id === activo ? ' comparar__tab--activo' : '')}
            style={m.id === activo ? { borderColor: m.color, color: m.color } : undefined}
            onClick={() => setActivo(m.id)}
          >
            <span className="comparar__tab-icono">{m.icono}</span> {m.nombre}
          </button>
        ))}
      </div>

      <div className="comparar__panel" style={{ borderTopColor: modelo.color }}>
        <div className="comparar__cabecera">
          <span className="comparar__icono-grande" style={{ background: modelo.color }}>
            {modelo.icono}
          </span>
          <div>
            <h3>{modelo.nombre}</h3>
            <span className="comparar__estilo" style={{ color: modelo.color }}>
              {modelo.estilo}
            </span>
          </div>
        </div>

        <p className="comparar__ideal">
          <strong>👍 Ideal para:</strong> {modelo.ideal}
        </p>

        <ul className="comparar__rasgos">
          {modelo.rasgos.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>

      <p className="comparar__leccion">💡 {compararIA.leccion}</p>
    </div>
  )
}
