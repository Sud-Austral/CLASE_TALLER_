import { useEffect, useMemo, useState } from 'react'

// Red neuronal con contexto CONAF: detecta riesgo de incendio a partir de
// 4 entradas (temperatura, humedad, viento, pendiente).
const CAPAS = [4, 6, 6, 2]
const W = 620
const H = 360
const RADIO = 13

const ENTRADAS = ['Temperatura', 'Humedad', 'Viento', 'Pendiente']
const SALIDAS  = ['🟢 Sin riesgo', '🔴 Con riesgo']

const PASOS = [
  'La red recibe los datos del área: temperatura, humedad, viento y pendiente.',
  'Las primeras neuronas ocultas detectan patrones simples: "hace calor y hay viento".',
  'La segunda capa combina esos patrones: "calor + viento + sin humedad = peligro".',
  '¡Decisión! La neurona de salida más activa gana: sin riesgo o con riesgo.',
]

export default function RedNeuronal() {
  const [activa, setActiva] = useState(-1)
  const [corriendo, setCorriendo] = useState(false)
  const [paso, setPaso] = useState(-1)

  const nodos = useMemo(() => {
    const margenX = 80
    const anchoUtil = W - margenX * 2
    return CAPAS.map((n, c) => {
      const x = margenX + (anchoUtil * c) / (CAPAS.length - 1)
      const sep = H / (n + 1)
      return Array.from({ length: n }, (_, i) => ({ x, y: sep * (i + 1) }))
    })
  }, [])

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

  useEffect(() => {
    if (!corriendo) return
    let capa = 0
    setActiva(0)
    setPaso(0)
    let tid
    const id = setInterval(() => {
      capa += 1
      if (capa >= CAPAS.length) {
        clearInterval(id)
        setCorriendo(false)
        tid = setTimeout(() => { setActiva(-1); setPaso(-1) }, 1200)
      } else {
        setActiva(capa)
        setPaso(capa)
      }
    }, 600)
    return () => { clearInterval(id); clearTimeout(tid) }
  }, [corriendo])

  return (
    <div className="red">
      {/* Panel de paso actual */}
      <div className={'red__paso' + (paso >= 0 ? ' red__paso--on' : '')}>
        {paso >= 0 ? PASOS[paso] : 'Pulsa "Ver cómo piensa la red" para ver cómo fluye la información.'}
      </div>

      <div className="red__lienzo">
        <svg viewBox={`0 0 ${W} ${H}`} className="red__svg" role="img" aria-label="Red neuronal con cuatro capas">
          {/* Conexiones */}
          {conexiones.map((c) => (
            <line
              key={c.key}
              x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
              className={'red__conexion' + (activa === c.capa + 1 || activa === c.capa ? ' red__conexion--on' : '')}
            />
          ))}

          {/* Neuronas */}
          {nodos.map((capa, c) =>
            capa.map((nodo, i) => {
              const on = activa === c
              const esEntrada = c === 0
              const esSalida = c === nodos.length - 1
              const esGanadora = esSalida && on && i === 1
              return (
                <circle
                  key={`${c}-${i}`}
                  cx={nodo.x} cy={nodo.y} r={RADIO}
                  className={
                    'red__neurona' +
                    (on ? ' red__neurona--on' : '') +
                    (esEntrada ? ' red__neurona--entrada' : '') +
                    (esSalida ? ' red__neurona--salida' : '') +
                    (esGanadora ? ' red__neurona--ganadora' : '')
                  }
                />
              )
            })
          )}

          {/* Etiquetas entrada */}
          {nodos[0].map((n, i) => (
            <text key={i} x={n.x - 18} y={n.y + 4} className="red__label red__label--entrada" textAnchor="end">
              {ENTRADAS[i]}
            </text>
          ))}

          {/* Etiquetas salida */}
          {nodos[CAPAS.length - 1].map((n, i) => (
            <text key={i} x={n.x + 18} y={n.y + 4} className="red__label red__label--salida">
              {SALIDAS[i]}
            </text>
          ))}

          {/* Títulos de capa */}
          <text x={nodos[0][0].x} y={H - 8} className="red__etiqueta" textAnchor="middle">Entrada</text>
          <text x={(nodos[1][0].x + nodos[2][0].x) / 2} y={H - 8} className="red__etiqueta" textAnchor="middle">Capas ocultas</text>
          <text x={nodos[CAPAS.length - 1][0].x} y={H - 8} className="red__etiqueta" textAnchor="middle">Salida</text>
        </svg>
      </div>

      <div className="red__controles">
        <button
          className="btn btn--primary"
          onClick={() => setCorriendo(true)}
          disabled={corriendo}
        >
          {corriendo ? 'Procesando…' : '▶ Ver cómo piensa la red'}
        </button>
        <div className="red__leyenda">
          <span><i className="red__punto red__punto--entrada" /> Entradas (datos del área)</span>
          <span><i className="red__punto" /> Neuronas ocultas (detectan patrones)</span>
          <span><i className="red__punto red__punto--salida" /> Salida (la decisión)</span>
        </div>
      </div>

      <p className="red__leccion">
        💡 Cada neurona es un perceptrón como el del ejercicio anterior: suma sus entradas con
        distintos pesos y decide si "se activa". La red aprende ajustando <strong>millones</strong> de
        esos pesos a la vez — eso es el entrenamiento. El resultado: distingue un incendio de una sombra,
        o un expediente completo de uno incompleto, con mucha más precisión que una sola recta.
      </p>
    </div>
  )
}
