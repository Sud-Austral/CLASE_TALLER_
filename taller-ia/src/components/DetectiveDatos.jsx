import { useState } from 'react'
import { detectiveDatos } from '../data/contenido'

// Actividad de gobernanza G1: el mismo predio en 3 sistemas. El usuario marca
// las filas con conflicto REAL (dato contradictorio, no solo formato distinto).
export default function DetectiveDatos() {
  const [marcadas, setMarcadas] = useState({})
  const [revelado, setRevelado] = useState(false)

  const toggle = (i) => {
    if (revelado) return
    setMarcadas((m) => ({ ...m, [i]: !m[i] }))
  }

  const conflictos = detectiveDatos.campos.filter((c) => c.conflicto).length
  const cazados = detectiveDatos.campos.filter((c, i) => c.conflicto && marcadas[i]).length
  const deMas = detectiveDatos.campos.filter((c, i) => !c.conflicto && marcadas[i]).length

  return (
    <div className="ddatos">
      <p className="ddatos__pregunta">{detectiveDatos.pregunta}</p>

      <div className="ddatos__scroll">
        <table className="ddatos__tabla">
          <thead>
            <tr>
              <th className="ddatos__corner">Campo</th>
              {detectiveDatos.sistemas.map((s, i) => (
                <th key={i}>{s}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {detectiveDatos.campos.map((c, i) => {
              const marcada = !!marcadas[i]
              let clase = 'ddatos__fila'
              if (revelado) {
                if (c.conflicto) clase += ' ddatos__fila--conflicto'
                else clase += ' ddatos__fila--formato'
                if (Boolean(c.conflicto) !== marcada) clase += ' ddatos__fila--discrepa'
              } else if (marcada) {
                clase += ' ddatos__fila--marcada'
              }
              return (
                <tr key={i} className={clase} onClick={() => toggle(i)}>
                  <th className="ddatos__campo">
                    {revelado ? (c.conflicto ? '⚠️ ' : '🔤 ') : marcada ? '🚩 ' : '○ '}
                    {c.campo}
                  </th>
                  {c.valores.map((v, j) => (
                    <td key={j}>{v}</td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {revelado && (
        <div className="ddatos__explicaciones">
          {detectiveDatos.campos.map((c, i) => (
            <p key={i} className={'ddatos__explica' + (c.conflicto ? ' ddatos__explica--conflicto' : '')}>
              <strong>{c.conflicto ? '⚠️' : '🔤'} {c.campo}:</strong> {c.explica}
            </p>
          ))}
        </div>
      )}

      {!revelado ? (
        <button className="btn btn--primary" onClick={() => setRevelado(true)}>
          🔍 Comprobar
        </button>
      ) : (
        <div className="ddatos__resultado">
          <p className="ddatos__score">
            Detectaste <strong>{cazados} de {conflictos}</strong> conflictos reales
            {deMas > 0 && <> · marcaste {deMas} diferencia{deMas > 1 ? 's' : ''} de solo formato</>}.
          </p>
          <button
            className="btn"
            onClick={() => {
              setRevelado(false)
              setMarcadas({})
            }}
          >
            ↺ Reintentar
          </button>
        </div>
      )}

      <p className="ddatos__leccion">💡 {detectiveDatos.leccion}</p>
    </div>
  )
}
