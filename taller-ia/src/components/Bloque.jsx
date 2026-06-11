import { useState } from 'react'

// Renderiza un bloque de contenido según su `tipo`.
// Los tipos vienen de src/data/contenido.js.
// `ir(id)` permite que un bloque enlace a otra sección (p. ej. demo → ejercicio).
export default function Bloque({ bloque, ir }) {
  switch (bloque.tipo) {
    case 'hero':
      return (
        <div className="bloque-hero">
          {bloque.kicker && <span className="kicker">{bloque.kicker}</span>}
          <h2>{bloque.titulo}</h2>
          <p>{bloque.texto}</p>
        </div>
      )

    case 'parrafo':
      return <p className="bloque-parrafo">{bloque.texto}</p>

    case 'frase':
      return <blockquote className="bloque-frase">{bloque.texto}</blockquote>

    case 'destacado':
      return (
        <div className="bloque-destacado">
          <span className="bloque-destacado__icono">{bloque.icono}</span>
          <div>
            <h3>{bloque.titulo}</h3>
            <p>{bloque.texto}</p>
          </div>
        </div>
      )

    case 'demo':
      return (
        <div className="bloque-demo">
          <div className="bloque-demo__cabecera">
            <span className="bloque-demo__n">Demo {bloque.n}</span>
            <h3>{bloque.titulo}</h3>
          </div>
          <p>{bloque.texto}</p>
          {bloque.clave && <p className="bloque-demo__clave">💡 {bloque.clave}</p>}
          {bloque.irA && ir && (
            <button className="bloque-demo__cta" onClick={() => ir(bloque.irA)}>
              {bloque.irTexto || 'Ir al ejercicio'} →
            </button>
          )}
        </div>
      )

    case 'tarjetas':
      return (
        <div className="bloque-tarjetas">
          {bloque.titulo && <h3 className="bloque-titulo">{bloque.titulo}</h3>}
          <div className="grid-tarjetas">
            {bloque.items.map((it, i) => (
              <div className="tarjeta" key={i}>
                <span className="tarjeta__icono">{it.icono}</span>
                <h4>{it.titulo}</h4>
                <p>{it.texto}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'lista':
      return (
        <div className="bloque-lista">
          {bloque.titulo && <h3 className="bloque-titulo">{bloque.titulo}</h3>}
          <ul>
            {bloque.items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>
      )

    case 'dosColumnas':
      return (
        <div className="bloque-dos">
          {bloque.titulo && <h3 className="bloque-titulo">{bloque.titulo}</h3>}
          <div className="bloque-dos__grid">
            {bloque.columnas.map((c, i) => (
              <div className="bloque-dos__col" key={i}>
                <h4>{c.titulo}</h4>
                <p>{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'formula': {
      const cuerpo = (
        <>
          <code className="bloque-formula__eq">{bloque.formula}</code>
          {bloque.items && (
            <ul className="bloque-formula__items">
              {bloque.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          )}
        </>
      )
      // Plegable: el no-técnico lo salta; el ingeniero lo abre.
      if (bloque.plegable) {
        return (
          <details className="bloque-formula bloque-formula--plegable">
            <summary className="bloque-formula__summary">
              🔬 {bloque.titulo || 'El detalle'} · para los más técnicos
            </summary>
            {cuerpo}
          </details>
        )
      }
      return (
        <div className="bloque-formula">
          {bloque.titulo && <h3 className="bloque-titulo">{bloque.titulo}</h3>}
          {cuerpo}
        </div>
      )
    }

    case 'programa':
      return (
        <div className="programa">
          {bloque.items.map((it, i) => (
            <div className="programa__item" key={i}>
              <div className="programa__hora">
                <strong>{it.hora}</strong>
                <span>{it.dur}</span>
              </div>
              <span className="programa__icono">{it.icono}</span>
              <div className="programa__detalle">
                <div className="programa__cabecera">
                  <h4>{it.titulo}</h4>
                </div>
                <p>{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )

    case 'autoevaluacion':
      return <AutoEvaluacion bloque={bloque} />

    case 'descarga':
      return (
        <a
          className="bloque-descarga"
          href={import.meta.env.BASE_URL + bloque.archivo}
          download
        >
          <span className="bloque-descarga__icono">⬇️</span>
          <span>
            <span className="bloque-descarga__tit">{bloque.titulo}</span>
            <span className="bloque-descarga__txt">{bloque.texto}</span>
          </span>
        </a>
      )

    case 'enlaceVideo':
      return (
        <a className="bloque-video" href={bloque.url} target="_blank" rel="noreferrer">
          <span className="bloque-video__play">▶</span>
          <span>
            <span className="bloque-video__tit">{bloque.titulo}</span>
            <span className="bloque-video__txt">{bloque.texto}</span>
          </span>
        </a>
      )

    case 'timeline':
      return (
        <div className="bloque-timeline">
          {bloque.titulo && <h3 className="bloque-titulo">{bloque.titulo}</h3>}
          <div className="timeline">
            {bloque.items.map((it, i) => (
              <div className="timeline__item" key={i}>
                <span className="timeline__año">{it.año}</span>
                <p>{it.texto}</p>
              </div>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}

// Checklist de autoevaluación: el participante marca lo que ya sabría hacer.
// No califica ni guarda nada; solo da una señal honesta de logro.
function AutoEvaluacion({ bloque }) {
  const [marcados, setMarcados] = useState({})
  const n = Object.values(marcados).filter(Boolean).length
  return (
    <div className="autoeval">
      {bloque.titulo && <h3 className="bloque-titulo">{bloque.titulo}</h3>}
      <ul className="autoeval__lista">
        {bloque.items.map((it, i) => (
          <li key={i}>
            <label className="autoeval__item">
              <input
                type="checkbox"
                checked={!!marcados[i]}
                onChange={() => setMarcados((m) => ({ ...m, [i]: !m[i] }))}
              />
              <span>{it}</span>
            </label>
          </li>
        ))}
      </ul>
      {n > 0 && (
        <p className="autoeval__msg">
          {n === bloque.items.length
            ? '🎉 ¡Todas! Estás listo para usarlo en tu trabajo.'
            : `Marcaste ${n} de ${bloque.items.length}. Lo que falte, vuelve al ejercicio — para eso está el Laboratorio.`}
        </p>
      )}
    </div>
  )
}
