import { useState } from 'react'
import { publicos } from '../data/contenido'

// Ejercicio "misma ley, distintos públicos": el usuario elige audiencia y ve
// cómo la IA reescribe la misma explicación con otro registro.
export default function Publicos() {
  const [activa, setActiva] = useState(publicos.audiencias[0].id)
  const a = publicos.audiencias.find((x) => x.id === activa)

  return (
    <div className="publicos">
      <div className="publicos__chips">
        {publicos.audiencias.map((au) => (
          <button
            key={au.id}
            className={'chip' + (au.id === activa ? ' chip--on' : '')}
            onClick={() => setActiva(au.id)}
            aria-pressed={au.id === activa}
          >
            <span className="chip__icono">{au.icono}</span> {au.etiqueta}
          </button>
        ))}
      </div>

      <div className="publicos__panel">
        <div className="publicos__cabecera">
          <span className="publicos__icono">{a.icono}</span>
          <span className="publicos__para">Explicado para: <strong>{a.etiqueta}</strong></span>
        </div>
        <p className="publicos__respuesta">{a.respuesta}</p>
      </div>

      <p className="publicos__leccion">💡 {publicos.leccion}</p>
    </div>
  )
}
