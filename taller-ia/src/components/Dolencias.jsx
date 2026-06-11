import { useState } from 'react'
import { dolencias } from '../data/contenido'

// Sección final: levantamiento de dolencias en vivo. El facilitador (o cada
// participante) anota fricciones, las categoriza y copia la lista para la UIA.
// Solo estado local: la lista vive mientras la pantalla esté abierta.
export default function Dolencias() {
  const [texto, setTexto] = useState('')
  const [categoria, setCategoria] = useState(dolencias.categorias[0].id)
  const [lista, setLista] = useState([])
  const [copiado, setCopiado] = useState(false)

  const agregar = () => {
    const t = texto.trim()
    if (!t) return
    setLista((l) => [...l, { texto: t, categoria }])
    setTexto('')
  }

  const quitar = (i) => setLista((l) => l.filter((_, j) => j !== i))

  const copiar = async () => {
    const cuerpo = lista
      .map((d) => {
        const cat = dolencias.categorias.find((c) => c.id === d.categoria)
        return `- [${cat ? cat.etiqueta : d.categoria}] ${d.texto}`
      })
      .join('\n')
    try {
      await navigator.clipboard.writeText(`Dolencias levantadas en la jornada UIA:\n${cuerpo}`)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2500)
    } catch {
      // sin permiso de portapapeles: no romper la sesión
    }
  }

  const catDe = (id) => dolencias.categorias.find((c) => c.id === id)

  return (
    <div className="dolencias">
      <div className="dolencias__form">
        <div className="dolencias__cats">
          {dolencias.categorias.map((c) => (
            <button
              key={c.id}
              className={'chip' + (categoria === c.id ? ' chip--on' : '')}
              onClick={() => setCategoria(c.id)}
            >
              <span className="chip__icono">{c.icono}</span> {c.etiqueta}
            </button>
          ))}
        </div>
        <div className="dolencias__entrada">
          <input
            className="dolencias__input"
            type="text"
            value={texto}
            placeholder={dolencias.placeholder}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && agregar()}
          />
          <button className="btn btn--primary" onClick={agregar} disabled={!texto.trim()}>
            + Anotar
          </button>
        </div>
      </div>

      {lista.length === 0 ? (
        <p className="dolencias__vacio">
          Aún no hay dolencias anotadas. Usa las preguntas de arriba para destrabar la conversación.
        </p>
      ) : (
        <>
          <ul className="dolencias__lista">
            {lista.map((d, i) => {
              const cat = catDe(d.categoria)
              return (
                <li key={i} className="dolencias__item">
                  <span className="dolencias__cat">{cat?.icono} {cat?.etiqueta}</span>
                  <span className="dolencias__txt">{d.texto}</span>
                  <button className="dolencias__quitar" onClick={() => quitar(i)} aria-label="Quitar">
                    ✕
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="dolencias__acciones">
            <span className="dolencias__contador">
              {lista.length} dolencia{lista.length !== 1 ? 's' : ''} anotada{lista.length !== 1 ? 's' : ''}
            </span>
            <button className="btn btn--primary" onClick={copiar}>
              {copiado ? '✅ Copiada' : '📋 Copiar lista para la UIA'}
            </button>
          </div>
        </>
      )}

      <p className="dolencias__leccion">💡 {dolencias.leccion}</p>
    </div>
  )
}
