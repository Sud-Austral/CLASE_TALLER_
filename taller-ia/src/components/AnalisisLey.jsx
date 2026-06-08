import { useState } from 'react'
import { analisisLey } from '../data/contenido'

// Ejercicio "una palabra lo cambia todo": el usuario añade/quita la palabra
// "crítico" en el prompt y ve cómo el análisis de la Ley 20.283 se transforma.
export default function AnalisisLey() {
  const [critico, setCritico] = useState(false)
  const datos = critico ? analisisLey.critico : analisisLey.neutral

  return (
    <div className="analisis">
      {/* El prompt, con la palabra que aparece/desaparece */}
      <div className="analisis__prompt">
        <span>{analisisLey.promptBase}</span>
        <span className={'analisis__palabra' + (critico ? ' analisis__palabra--on' : '')}>
          {critico ? analisisLey.palabra : ' ______'}
        </span>
        <span>{analisisLey.promptCola}</span>
      </div>

      {/* El interruptor de una sola palabra */}
      <div className="analisis__toggle">
        <button
          className={'switch' + (critico ? ' switch--on' : '')}
          onClick={() => setCritico((v) => !v)}
          aria-pressed={critico}
        >
          <span className="switch__bola" />
        </button>
        <span className="analisis__toggle-txt">
          {critico ? (
            <>Palabra <strong>"crítico"</strong> añadida ✅</>
          ) : (
            <>Pulsa para añadir la palabra <strong>"crítico"</strong></>
          )}
        </span>
      </div>

      {/* Resultado */}
      <div className={'analisis__panel' + (critico ? ' analisis__panel--critico' : '')}>
        <div className="analisis__cabecera">
          <h3>{datos.titulo}</h3>
          <p className="analisis__tono">{datos.tono}</p>
        </div>

        <ul className="analisis__puntos">
          {datos.puntos.map((p, i) => (
            <li key={i} className={p.nuevo ? 'analisis__punto analisis__punto--nuevo' : 'analisis__punto'}>
              <span className="analisis__punto-icono">{p.icono}</span>
              <span>{p.texto}</span>
              {p.nuevo && <span className="analisis__badge">nuevo</span>}
            </li>
          ))}
        </ul>

        <div className="analisis__conclusion">
          <strong>Conclusión:</strong> {datos.conclusion}
        </div>
      </div>

      <p className="analisis__leccion">💡 {analisisLey.leccion}</p>
    </div>
  )
}
