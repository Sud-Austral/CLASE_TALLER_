import { useState, useRef } from 'react'
import { dolencias } from '../data/contenido'

export default function Dolencias() {
  const [texto, setTexto] = useState('')
  const [categoria, setCategoria] = useState(dolencias.categorias[0].id)
  const [lista, setLista] = useState([])
  const [copiado, setCopiado] = useState(false)
  const [errorClip, setErrorClip] = useState(false)
  const tidRef = useRef(null)

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
      await navigator.clipboard.writeText(`Fricciones levantadas en la jornada UIA:\n${cuerpo}`)
      setCopiado(true)
      setErrorClip(false)
      clearTimeout(tidRef.current)
      tidRef.current = setTimeout(() => setCopiado(false), 2500)
    } catch {
      setErrorClip(true)
    }
  }

  const catDe = (id) => dolencias.categorias.find((c) => c.id === id)

  return (
    <div className="dolencias">
      {/* 7 preguntas guía */}
      <div className="dolencias__preguntas">
        {dolencias.preguntas.map((p) => (
          <div key={p.n} className="dolencias__pregunta">
            <span className="dolencias__pregunta-n">{p.n}</span>
            <div>
              <p className="dolencias__pregunta-q">{p.q}</p>
              <p className="dolencias__pregunta-pista">{p.pista}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Formulario de entrada */}
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
          Aún no hay fricciones anotadas. Usa las preguntas de arriba y escribe cada una abajo.
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
              {lista.length} fricci{lista.length !== 1 ? 'ones' : 'ón'} anotada{lista.length !== 1 ? 's' : ''}
            </span>
            <button className="btn btn--primary" onClick={copiar}>
              {copiado ? '✅ Copiada' : '📋 Copiar lista para la UIA'}
            </button>
            {errorClip && (
              <span className="dolencias__error-clip">
                No se pudo copiar automáticamente. Selecciona el texto manualmente.
              </span>
            )}
          </div>
        </>
      )}

      <p className="dolencias__leccion">💡 {dolencias.leccion}</p>
    </div>
  )
}
