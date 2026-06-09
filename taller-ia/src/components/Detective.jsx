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

  // Desglose por tipo de error (el error caro para un fiscalizador es dejar pasar la mentira).
  const totalFalsas = detective.frases.filter((f) => f.falsa).length
  const cazadas = detective.frases.filter((f, i) => f.falsa && marcadas[i]).length
  const escapadas = totalFalsas - cazadas // mentiras que pasaron: el error grave
  const falsosPositivos = detective.frases.filter((f, i) => !f.falsa && marcadas[i]).length

  return (
    <div className="detective">
      <p className="detective__intro">{detective.intro}</p>

      <ul className="detective__lista">
        {detective.frases.map((f, i) => {
          const marcada = !!marcadas[i]
          // En revelado, marca dónde el juicio del usuario discrepó de la realidad.
          const discrepa = revelado && Boolean(f.falsa) !== marcada
          let clase = 'detective__frase'
          if (revelado) {
            if (f.falsa) clase += ' detective__frase--falsa'
            else clase += ' detective__frase--ok'
            if (discrepa) clase += ' detective__frase--discrepa'
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
                  {revelado && discrepa && f.falsa && (
                    <span className="detective__discrepa-tag">⚠️ Se te pasó esta mentira</span>
                  )}
                  {revelado && discrepa && !f.falsa && (
                    <span className="detective__discrepa-tag detective__discrepa-tag--leve">Era verdadera</span>
                  )}
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
          <p className="detective__score">
            🎯 Cazaste <strong>{cazadas} de {totalFalsas}</strong> mentiras.
          </p>
          {escapadas > 0 && (
            <p className="detective__fila detective__fila--mal">
              🚨 Se te pasaron <strong>{escapadas}</strong> — y dejar pasar una mentira a un
              documento oficial es el error caro.
            </p>
          )}
          {falsosPositivos > 0 && (
            <p className="detective__fila detective__fila--leve">
              🤨 Marcaste {falsosPositivos} frase{falsosPositivos > 1 ? 's' : ''} verdadera
              {falsosPositivos > 1 ? 's' : ''} como falsa: desconfiar de más también cuesta tiempo.
            </p>
          )}
          {escapadas === 0 && falsosPositivos === 0 && (
            <p className="detective__fila detective__fila--ok">
              👏 Impecable: cazaste todas las mentiras sin descartar ninguna verdad.
            </p>
          )}
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

      <p className="detective__leccion">💡 {detective.leccion}</p>
    </div>
  )
}
