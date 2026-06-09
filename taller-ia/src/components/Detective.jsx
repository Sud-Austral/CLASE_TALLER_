import { useState } from 'react'
import { detective } from '../data/contenido'

// Ejercicio "detective de alucinaciones": el usuario marca las frases que cree
// falsas; al comprobar, se revela cuáles eran inventadas y por qué.
export default function Detective() {
  const [marcadas, setMarcadas] = useState({})
  const [revelado, setRevelado] = useState(false)

  const toggle = (i) => {
    if (revelado) return
    setMarcadas((m) => ({ ...m, [i]: !m[i] }))
  }

  // Puntaje: aciertos = falsas marcadas + verdaderas no marcadas.
  const aciertos = detective.frases.filter(
    (f, i) => Boolean(f.falsa) === Boolean(marcadas[i])
  ).length

  return (
    <div className="detective">
      <p className="detective__intro">{detective.intro}</p>

      <ul className="detective__lista">
        {detective.frases.map((f, i) => {
          const marcada = !!marcadas[i]
          let clase = 'detective__frase'
          if (revelado) {
            if (f.falsa) clase += ' detective__frase--falsa'
            else clase += ' detective__frase--ok'
          } else if (marcada) {
            clase += ' detective__frase--marcada'
          }
          return (
            <li key={i}>
              <button className={clase} onClick={() => toggle(i)} disabled={revelado}>
                <span className="detective__check">
                  {revelado ? (f.falsa ? '🚫' : '✔️') : marcada ? '🚩' : '○'}
                </span>
                <span className="detective__txt">
                  {f.texto}
                  {revelado && f.falsa && (
                    <span className="detective__porque">⚠️ {f.porque}</span>
                  )}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      {!revelado ? (
        <button className="btn btn--primary" onClick={() => setRevelado(true)}>
          🔍 Comprobar mis sospechas
        </button>
      ) : (
        <div className="detective__resultado">
          <strong>Acertaste {aciertos} de {detective.frases.length}.</strong> Las marcadas con 🚫
          eran inventadas.
          <button
            className="btn"
            style={{ marginLeft: 12 }}
            onClick={() => {
              setRevelado(false)
              setMarcadas({})
            }}
          >
            ↺ Reintentar
          </button>
        </div>
      )}

      <p className="detective__leccion">💡 {detective.leccion}</p>
    </div>
  )
}
