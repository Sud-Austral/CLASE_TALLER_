import { useState } from 'react'
import { subeNivel } from '../data/contenido'

// Ejercicio "sube el nivel del prompt": un deslizador entre 3 niveles de detalle.
export default function SubeNivel() {
  const [nivel, setNivel] = useState(0)
  const n = subeNivel.niveles[nivel]

  return (
    <div className="sube">
      <input
        type="range"
        min="0"
        max={subeNivel.niveles.length - 1}
        step="1"
        value={nivel}
        onChange={(e) => setNivel(parseInt(e.target.value, 10))}
        className="sube__range"
        aria-label="Nivel de detalle del prompt"
      />
      <div className="sube__marcas">
        {subeNivel.niveles.map((nv, i) => (
          <button
            key={i}
            className={'sube__marca' + (i === nivel ? ' sube__marca--on' : '')}
            onClick={() => setNivel(i)}
            style={i === nivel ? { color: nv.tono } : undefined}
          >
            {nv.etiqueta}
          </button>
        ))}
      </div>

      <div className="sube__prompt" style={{ borderColor: n.tono }}>
        <span className="sube__prompt-tag" style={{ background: n.tono }}>Prompt</span>
        <p>{n.prompt}</p>
      </div>

      <div className="sube__respuesta">
        <span className="sube__respuesta-tag">Respuesta de la IA</span>
        <p style={{ whiteSpace: 'pre-line' }}>{n.respuesta}</p>
        <p className="sube__critica" style={{ color: n.tono }}>{n.critica}</p>
      </div>

      <p className="sube__leccion">💡 {subeNivel.leccion}</p>
    </div>
  )
}
