import { useState } from 'react'
import { ingredientesPrompt, promptVago } from '../data/contenido'

// Constructor de prompts: el usuario activa rol / cantidad / foco / formato
// y ve cómo una instrucción vaga se convierte en una precisa.
export default function PromptBuilder() {
  const [activos, setActivos] = useState({})

  const toggle = (id) => setActivos((prev) => ({ ...prev, [id]: !prev[id] }))

  const partes = ingredientesPrompt.filter((ing) => activos[ing.id])
  const promptFinal = partes.map((p) => p.texto).join(' ')
  const completo = partes.length === ingredientesPrompt.length

  return (
    <div className="prompt-builder">
      <div className="prompt-builder__chips">
        {ingredientesPrompt.map((ing) => (
          <button
            key={ing.id}
            className={'chip' + (activos[ing.id] ? ' chip--on' : '')}
            onClick={() => toggle(ing.id)}
            aria-pressed={!!activos[ing.id]}
          >
            <span className="chip__icono">{ing.icono}</span> {ing.etiqueta}
          </button>
        ))}
      </div>

      <div className="prompt-builder__caja">
        <div className="prompt-builder__col">
          <span className="prompt-builder__tag prompt-builder__tag--malo">Prompt vago</span>
          <p className="prompt-builder__texto prompt-builder__texto--malo">{promptVago}</p>
          <p className="prompt-builder__res">→ Resultado vago, sin foco, difícil de usar.</p>
        </div>

        <div className="prompt-builder__col">
          <span className="prompt-builder__tag prompt-builder__tag--bueno">Tu prompt preciso</span>
          <p className="prompt-builder__texto prompt-builder__texto--bueno">
            {promptFinal || <em style={{ opacity: 0.6 }}>Activa los ingredientes de arriba…</em>}
          </p>
          {completo && (
            <p className="prompt-builder__res prompt-builder__res--ok">
              ✅ ¡Listo! Rol + cantidad + foco + formato. Esto sí se puede usar.
            </p>
          )}
        </div>
      </div>

      <p className="prompt-builder__nota">
        La calidad del resultado depende <strong>100%</strong> de las instrucciones que damos.
        Esa habilidad —el <em>prompt</em>— es la más importante que desarrollaremos juntos.
      </p>
    </div>
  )
}
