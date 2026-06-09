import { useState } from 'react'
import { docAccion } from '../data/contenido'

// Ejercicio "de documento a acción": transforma un párrafo legal denso en una
// checklist accionable al pulsar el botón.
export default function DocAccion() {
  const [transformado, setTransformado] = useState(false)

  return (
    <div className="docaccion">
      <div className="docaccion__columnas">
        <div className="docaccion__col">
          <span className="docaccion__tag docaccion__tag--legal">📜 Texto legal (denso)</span>
          <p className="docaccion__legal">{docAccion.textoLegal}</p>
        </div>

        <div className="docaccion__flecha">→</div>

        <div className="docaccion__col">
          <span className="docaccion__tag docaccion__tag--accion">✅ Checklist accionable</span>
          {transformado ? (
            <ul className="docaccion__check">
              {docAccion.checklist.map((c, i) => (
                <li key={i} style={{ animationDelay: `${i * 0.1}s` }}>{c}</li>
              ))}
            </ul>
          ) : (
            <p className="docaccion__placeholder">Pulsa el botón para que la IA lo transforme…</p>
          )}
        </div>
      </div>

      <div className="docaccion__prompt">
        <span className="docaccion__prompt-tag">Prompt usado</span>
        <p>{docAccion.promptUsado}</p>
      </div>

      {!transformado ? (
        <button className="btn btn--primary" onClick={() => setTransformado(true)}>
          ⚙️ Transformar con IA
        </button>
      ) : (
        <button className="btn" onClick={() => setTransformado(false)}>↺ Ver de nuevo</button>
      )}

      <p className="docaccion__leccion">💡 {docAccion.leccion}</p>
    </div>
  )
}
