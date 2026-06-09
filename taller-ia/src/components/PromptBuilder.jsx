import { useState } from 'react'
import { ingredientesPrompt, promptVago, promptEjemplo } from '../data/contenido'

// Detecta heurísticamente si un prompt contiene cada ingrediente.
// Busca ESTRUCTURA (un patrón de instrucción), no solo una palabra mágica suelta,
// para no premiar el pegar "experto" o "tabla" sin sentido.
function detectar(texto) {
  const t = ' ' + texto.toLowerCase() + ' '
  return {
    // Rol: una fórmula de asignación de rol ("actúa como X", "eres un X").
    rol: /\b(act[úu]a como|comp[óo]rtate como|eres un|eres una|como si fueras)\b/.test(t),
    // Cantidad: un número o cuantificador acotando el tamaño.
    cantidad: /\b(\d+|un[ao]?|dos|tres|cuatro|cinco)\s+(viñetas?|puntos?|p[áa]rrafos?|l[íi]neas?|p[áa]ginas?|diapositivas?|frases?|ejemplos?)\b|\bm[áa]ximo\b|\ben\s+\d+\b/.test(t),
    // Foco: acota el tema ("centrado/enfocado en…", "sobre…", "solo…").
    foco: /\b(centrad[oa] en|enfocad[oa] en|sobre (el|la|los|las|las?)|respecto a|solo |únicamente|destacando|que destaque)\b/.test(t),
    // Formato: pide una forma de salida concreta.
    formato: /\b(en una tabla|como (tabla|lista|checklist|viñetas)|tono \w+|formato|en formato|estructurad[oa]|en columnas)\b/.test(t),
  }
}

export default function PromptBuilder() {
  const [texto, setTexto] = useState(promptVago)
  const [verEjemplo, setVerEjemplo] = useState(false)

  const det = detectar(texto)
  const logrados = ingredientesPrompt.filter((i) => det[i.id]).length
  const total = ingredientesPrompt.length

  return (
    <div className="prompt-builder">
      <label className="pb__label">Escribe (o mejora) tu prompt:</label>
      <textarea
        className="pb__textarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={4}
        spellCheck="false"
      />

      <div className="pb__medidor">
        <div className="pb__medidor-cab">
          <span>Tu prompt tiene <strong>{logrados} de {total}</strong> ingredientes</span>
          <div className="pb__barra">
            <div className="pb__barra-fill" style={{ width: `${(logrados / total) * 100}%` }} />
          </div>
        </div>
        <div className="pb__ingredientes">
          {ingredientesPrompt.map((ing) => (
            <div
              key={ing.id}
              className={'pb__ing' + (det[ing.id] ? ' pb__ing--ok' : '')}
              title={ing.pista}
            >
              <span className="pb__ing-icono">{det[ing.id] ? '✅' : ing.icono}</span>
              <div>
                <strong>{ing.etiqueta}</strong>
                <span className="pb__ing-pista">{ing.pista}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {logrados === total ? (
        <p className="pb__feedback pb__feedback--ok">
          🎉 ¡Prompt completo! Rol + cantidad + foco + formato. Esto sí se puede usar tal cual.
        </p>
      ) : (
        <p className="pb__feedback">
          El medidor es una ayuda, no una nota: lo que importa es que tu instrucción sea clara.
          Prueba a añadir el ingrediente que te falte.
        </p>
      )}

      <button className="btn" onClick={() => setVerEjemplo((v) => !v)}>
        {verEjemplo ? 'Ocultar ejemplo' : '💡 Ver un ejemplo fuerte'}
      </button>
      {verEjemplo && (
        <div className="pb__ejemplo">
          <span className="pb__ejemplo-tag">Ejemplo</span>
          <p>{promptEjemplo}</p>
          <button className="btn btn--primary" onClick={() => setTexto(promptEjemplo)}>
            Usar este ejemplo
          </button>
        </div>
      )}

      <p className="prompt-builder__nota">
        El prompt es el factor que <strong>tú</strong> controlas, y el que más cambia el resultado.
        Es la habilidad más importante que desarrollaremos juntos.
      </p>
    </div>
  )
}
