import { useState } from 'react'
import { alucina } from '../data/contenido'

// Concepto LLM 2 — Por qué sabe pero alucina: compara respuesta pre-entrenada
// (con alucinación) vs. afinada con RLHF, y simula un paso de recompensa humana.
export default function Alucina() {
  const { prompt, antes, despues, rlhf, leccion } = alucina
  const [elegida, setElegida] = useState(null)
  const [recompensa, setRecompensa] = useState(0)

  function elegir(i) {
    if (elegida !== null) return
    setElegida(i)
    if (i === rlhf.correcta) setRecompensa((r) => r + 1)
  }

  return (
    <div className="aluc">
      <div className="aluc__prompt">
        <span className="aluc__prompt-tag">Prompt CONAF</span>
        <p>{prompt}</p>
      </div>

      <div className="aluc__cols">
        <Columna datos={antes} variante="antes" />
        <Columna datos={despues} variante="despues" />
      </div>

      <div className="aluc__rlhf">
        <p className="aluc__rlhf-q">⚖️ {rlhf.pregunta}</p>
        <div className="aluc__rlhf-btns">
          {rlhf.opciones.map((op, i) => (
            <button
              key={i}
              className={
                'btn' +
                (elegida === null ? '' : i === rlhf.correcta ? ' btn--primary' : '') +
                (elegida === i && i !== rlhf.correcta ? ' aluc__btn--mal' : '')
              }
              onClick={() => elegir(i)}
              disabled={elegida !== null}
            >
              {op}
            </button>
          ))}
        </div>

        {elegida !== null && (
          <div className="aluc__feedback">
            <p>{elegida === rlhf.correcta ? rlhf.feedbackOk : rlhf.feedbackMal}</p>
            <div className="aluc__recompensa">
              Recompensa R acumulada: <strong>{recompensa}</strong>
              <span className="aluc__medidor">
                <span className="aluc__medidor-fill" style={{ width: `${Math.min(100, recompensa * 50)}%` }} />
              </span>
            </div>
            <button className="btn" onClick={() => setElegida(null)}>↺ Otra ronda</button>
          </div>
        )}
      </div>

      <p className="aluc__leccion">💡 {leccion}</p>
    </div>
  )
}

function Columna({ datos, variante }) {
  return (
    <div className={'aluc__col aluc__col--' + variante}>
      <span className="aluc__etiqueta">{datos.etiqueta}</span>
      <p className="aluc__desc">{datos.descripcion}</p>
      <div className="aluc__respuesta">
        {datos.partes.map((p, i) => (
          <span
            key={i}
            className={
              p.alucinacion ? 'aluc__alucinacion' : p.honesto ? 'aluc__honesto' : undefined
            }
          >
            {p.t}
          </span>
        ))}
      </div>
    </div>
  )
}
