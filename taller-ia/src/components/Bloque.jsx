// Renderiza un bloque de contenido según su `tipo`.
// Los tipos vienen de src/data/contenido.js.
export default function Bloque({ bloque }) {
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
