import { useState } from 'react'
import { rolesDatos } from '../data/contenido'

// Actividad de gobernanza G2: en cada situación, el usuario decide qué rol
// (dueño / custodio / usuario) debe actuar. Feedback inmediato por situación.
export default function RolesDatos() {
  const [respuestas, setRespuestas] = useState({}) // idx situación → id rol elegido

  const responder = (i, rolId) => {
    if (respuestas[i] !== undefined) return
    setRespuestas((r) => ({ ...r, [i]: rolId }))
  }

  const respondidas = Object.keys(respuestas).length
  const aciertos = rolesDatos.situaciones.filter((s, i) => respuestas[i] === s.correcto).length

  return (
    <div className="rdatos">
      <div className="rdatos__roles">
        {rolesDatos.roles.map((r) => (
          <div className="rdatos__rol" key={r.id}>
            <span className="rdatos__rol-icono">{r.icono}</span>
            <div>
              <strong>{r.nombre}</strong>
              <p>{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rdatos__situaciones">
        {rolesDatos.situaciones.map((s, i) => {
          const elegida = respuestas[i]
          const lista = elegida !== undefined
          return (
            <div className="rdatos__situacion" key={i}>
              <p className="rdatos__texto">
                <span className="rdatos__num">{i + 1}</span> {s.texto}
              </p>
              <div className="rdatos__botones">
                {rolesDatos.roles.map((r) => {
                  let clase = 'btn rdatos__btn'
                  if (lista) {
                    if (r.id === s.correcto) clase += ' rdatos__btn--correcto'
                    else if (r.id === elegida) clase += ' rdatos__btn--mal'
                  }
                  return (
                    <button key={r.id} className={clase} onClick={() => responder(i, r.id)} disabled={lista}>
                      {r.icono} {r.nombre}
                    </button>
                  )
                })}
              </div>
              {lista && (
                <p className={'rdatos__feedback' + (elegida === s.correcto ? ' rdatos__feedback--ok' : '')}>
                  {elegida === s.correcto ? '✅ ' : '❌ '}
                  {s.explica}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {respondidas === rolesDatos.situaciones.length && (
        <div className="rdatos__resultado">
          <strong>Acertaste {aciertos} de {rolesDatos.situaciones.length}.</strong>{' '}
          <button className="btn" onClick={() => setRespuestas({})}>↺ Reintentar</button>
        </div>
      )}

      <p className="rdatos__leccion">💡 {rolesDatos.leccion}</p>
    </div>
  )
}
