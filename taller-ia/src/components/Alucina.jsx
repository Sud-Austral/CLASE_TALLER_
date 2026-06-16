import { useState } from 'react'
import { alucina } from '../data/contenido'

// Por qué sabe pero alucina: comparación visual pre-entrenado vs RLHF.
// Rediseñado: menos texto, foco en el contraste y el juego de recompensa.
export default function Alucina() {
  const { prompt, antes, despues, rlhf } = alucina
  const [elegida, setElegida] = useState(null)
  const [rondas, setRondas] = useState(0)
  const [aciertos, setAciertos] = useState(0)

  function elegir(i) {
    if (elegida !== null) return
    setElegida(i)
    setRondas((r) => r + 1)
    if (i === rlhf.correcta) setAciertos((a) => a + 1)
  }

  function reiniciar() {
    setElegida(null)
  }

  return (
    <div className="aluc">
      {/* Prompt */}
      <div className="aluc__prompt">
        <span className="aluc__prompt-tag">📋 Prompt</span>
        <strong>{prompt}</strong>
      </div>

      {/* Comparación lado a lado */}
      <div className="aluc__cols">
        <div className="aluc__col aluc__col--antes">
          <div className="aluc__badge aluc__badge--antes">{antes.etiqueta}</div>
          <div className="aluc__respuesta">
            {antes.partes.map((p, i) => (
              <span key={i} className={p.alucinacion ? 'aluc__alucinacion' : ''}>
                {p.t}
              </span>
            ))}
          </div>
          {elegida !== null && elegida !== rlhf.correcta && <div className="aluc__tag-aluci">⚠️ Contiene un dato inventado</div>}
          {elegida !== null && (
            <div className="aluc__tag-aluci aluc__tag-aluci--revelado">
              ⚠️ "Art. 14 bis" y la tasa del 3% no existen en la ley.
            </div>
          )}
        </div>

        <div className="aluc__col aluc__col--despues">
          <div className="aluc__badge aluc__badge--despues">{despues.etiqueta}</div>
          <div className="aluc__respuesta">
            {despues.partes.map((p, i) => (
              <span key={i} className={p.honesto ? 'aluc__honesto' : ''}>
                {p.t}
              </span>
            ))}
          </div>
          {elegida !== null && (
            <div className="aluc__tag-ok">
              ✅ Cita la ley correctamente y avisa de verificar los detalles.
            </div>
          )}
        </div>
      </div>

      {/* RLHF: el usuario es el entrenador */}
      <div className="aluc__rlhf">
        <p className="aluc__rlhf-titulo">⚖️ {rlhf.pregunta}</p>
        <div className="aluc__rlhf-btns">
          {rlhf.opciones.map((op, i) => {
            let clase = 'btn'
            if (elegida !== null) {
              if (i === rlhf.correcta) clase += ' btn--primary'
              else if (elegida === i) clase += ' aluc__btn--mal'
            }
            return (
              <button key={i} className={clase} onClick={() => elegir(i)} disabled={elegida !== null}>
                {op}
              </button>
            )
          })}
        </div>

        {elegida !== null && (
          <div className={'aluc__feedback' + (elegida === rlhf.correcta ? '' : ' aluc__feedback--mal')}>
            <p>{elegida === rlhf.correcta ? rlhf.feedbackOk : rlhf.feedbackMal}</p>
            <div className="aluc__marcador">
              {aciertos} de {rondas} ronda{rondas !== 1 ? 's' : ''} correctas
              <div className="aluc__medidor">
                <div className="aluc__medidor-fill" style={{ width: `${rondas > 0 ? (aciertos / rondas) * 100 : 0}%` }} />
              </div>
            </div>
            <button className="btn" onClick={reiniciar}>↺ Ver de nuevo</button>
          </div>
        )}
      </div>

      <p className="aluc__leccion">💡 {alucina.leccion}</p>
    </div>
  )
}
