import { useEffect, useMemo, useState } from 'react'

// Red neuronal animada (decorativa pero correcta): capas de neuronas conectadas,
// con un "forward pass" que ilumina capa por capa al pulsar el botón.
const CAPAS = [4, 6, 6, 2] // nº de neuronas por capa
const W = 620
const H = 360
const RADIO = 13

export default function RedNeuronal() {
  const [activa, setActiva] = useState(-1) // capa iluminada (-1 = ninguna)
  const [corriendo, setCorriendo] = useState(false)

  // Posiciones (x,y) de cada neurona, por capa.
  const nodos = useMemo(() => {
    const margenX = 70
    const anchoUtil = W - margenX * 2
    return CAPAS.map((n, c) => {
      const x = margenX + (anchoUtil * c) / (CAPAS.length - 1)
      const sep = H / (n + 1)
      return Array.from({ length: n }, (_, i) => ({ x, y: sep * (i + 1) }))
    })
  }, [])

  // Conexiones entre capa c y c+1 (todas con todas).
  const conexiones = useMemo(() => {
    const arr = []
    for (let c = 0; c < nodos.length - 1; c++) {
      nodos[c].forEach((a, i) => {
        nodos[c + 1].forEach((b, j) => {
          arr.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, capa: c, key: `${c}-${i}-${j}` })
        })
      })
    }
    return arr
  }, [nodos])

  // Forward pass: ilumina una capa cada 450 ms.
  useEffect(() => {
    if (!corriendo) return
    let capa = 0
    setActiva(0)
    const id = setInterval(() => {
      capa += 1
      if (capa >= CAPAS.length) {
        clearInterval(id)
        setCorriendo(false)
        setTimeout(() => setActiva(-1), 700)
      } else {
        setActiva(capa)
      }
    }, 450)
    return () => clearInterval(id)
  }, [corriendo])

  return (
    <div className="red">
      <div className="red__lienzo">
        <svg viewBox={`0 0 ${W} ${H}`} className="red__svg" role="img" aria-label="Red neuronal con cuatro capas">
          {/* Conexiones */}
          {conexiones.map((c) => {
            const iluminada = activa === c.capa + 1 || activa === c.capa
            return (
              <line
                key={c.key}
                x1={c.x1}
                y1={c.y1}
                x2={c.x2}
                y2={c.y2}
                className={'red__conexion' + (iluminada ? ' red__conexion--on' : '')}
              />
            )
          })}

          {/* Neuronas */}
          {nodos.map((capa, c) =>
            capa.map((nodo, i) => {
              const on = activa === c
              const esEntrada = c === 0
              const esSalida = c === nodos.length - 1
              return (
                <circle
                  key={`${c}-${i}`}
                  cx={nodo.x}
                  cy={nodo.y}
                  r={RADIO}
                  className={
                    'red__neurona' +
                    (on ? ' red__neurona--on' : '') +
                    (esEntrada ? ' red__neurona--entrada' : '') +
                    (esSalida ? ' red__neurona--salida' : '')
                  }
                />
              )
            })
          )}

          {/* Etiquetas de capas */}
          <text x={nodos[0][0].x} y={H - 12} className="red__etiqueta">Entrada</text>
          <text x={(nodos[1][0].x + nodos[2][0].x) / 2} y={H - 12} className="red__etiqueta" textAnchor="middle">
            Capas ocultas
          </text>
          <text x={nodos[nodos.length - 1][0].x} y={H - 12} className="red__etiqueta" textAnchor="end">
            Salida
          </text>
        </svg>
      </div>

      <div className="red__controles">
        <button
          className="btn btn--primary"
          onClick={() => setCorriendo(true)}
          disabled={corriendo}
        >
          {corriendo ? 'Procesando…' : '▶ Ver el forward pass'}
        </button>
        <div className="red__leyenda">
          <span><i className="red__punto red__punto--entrada" /> Entradas (los datos)</span>
          <span><i className="red__punto" /> Neuronas ocultas (extraen patrones)</span>
          <span><i className="red__punto red__punto--salida" /> Salida (la decisión)</span>
        </div>
      </div>

      <p className="red__leccion">
        💡 Cada neurona es un perceptrón como el del ejercicio anterior. Apiladas en capas y
        entrenadas con millones de ejemplos, dejan de trazar una simple recta y aprenden a
        distinguir un incendio de una sombra, o un expediente completo de uno incompleto.
      </p>
    </div>
  )
}
