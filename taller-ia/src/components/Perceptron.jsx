import { useEffect, useRef, useState } from 'react'

// Perceptrón interactivo "visual de juguete".
// El usuario mueve los pesos (w1, w2) y el umbral (bias) y ve cómo la recta
// w1*x + w2*y + bias = 0 separa dos grupos de puntos. También puede pedir que
// "aprenda solo" (algoritmo del perceptrón clásico, implementado a mano).

const N = 14            // puntos por clase
const SIZE = 360        // lado del canvas en px (cuadrado)

// Genera dos nubes de puntos separables, en coordenadas [-1, 1].
// Usa un generador pseudoaleatorio con semilla fija (Math.random no se usa
// para que el resultado sea estable entre renders).
function generarPuntos() {
  let seed = 12345
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  const pts = []
  for (let i = 0; i < N; i++) {
    // Clase azul (etiqueta -1), agrupada abajo-izquierda
    pts.push({ x: rnd() * 0.8 - 0.9, y: rnd() * 0.8 - 0.9, label: -1 })
    // Clase roja (etiqueta +1), agrupada arriba-derecha
    pts.push({ x: rnd() * 0.8 + 0.1, y: rnd() * 0.8 + 0.1, label: 1 })
  }
  return pts
}

const PUNTOS = generarPuntos()

// Salida del perceptrón para un punto: +1 si w1*x + w2*y + b >= 0, si no -1.
function predecir(p, w1, w2, b) {
  return w1 * p.x + w2 * p.y + b >= 0 ? 1 : -1
}

export default function Perceptron() {
  const canvasRef = useRef(null)
  const [w1, setW1] = useState(0.6)
  const [w2, setW2] = useState(-0.3)
  const [b, setB] = useState(0.1)
  const [entrenando, setEntrenando] = useState(false)

  // Cuántos puntos quedan bien clasificados con los pesos actuales.
  const aciertos = PUNTOS.filter((p) => predecir(p, w1, w2, b) === p.label).length
  const perfecto = aciertos === PUNTOS.length

  // Dibuja el plano, los puntos y la recta de decisión cada vez que cambian los pesos.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const S = SIZE
    // mapea coordenada [-1,1] a pixel [0,S]
    const px = (x) => ((x + 1) / 2) * S
    const py = (y) => S - ((y + 1) / 2) * S // y invertida (canvas crece hacia abajo)

    ctx.clearRect(0, 0, S, S)

    // Fondo: dos semiplanos coloreados según la decisión del perceptrón.
    const img = ctx.createImageData(S, S)
    for (let i = 0; i < S; i += 1) {
      for (let j = 0; j < S; j += 1) {
        const x = (i / S) * 2 - 1
        const y = (1 - j / S) * 2 - 1
        const lado = w1 * x + w2 * y + b >= 0
        const idx = (j * S + i) * 4
        // rojo tenue vs azul tenue
        img.data[idx] = lado ? 254 : 235
        img.data[idx + 1] = lado ? 226 : 240
        img.data[idx + 2] = lado ? 226 : 252
        img.data[idx + 3] = 255
      }
    }
    ctx.putImageData(img, 0, 0)

    // Recta de decisión: w1*x + w2*y + b = 0.
    ctx.strokeStyle = '#1b5e20'
    ctx.lineWidth = 3
    ctx.beginPath()
    if (Math.abs(w2) > 1e-6) {
      const yAt = (x) => -(w1 * x + b) / w2
      ctx.moveTo(px(-1), py(yAt(-1)))
      ctx.lineTo(px(1), py(yAt(1)))
    } else if (Math.abs(w1) > 1e-6) {
      const xAt = -b / w1
      ctx.moveTo(px(xAt), py(-1))
      ctx.lineTo(px(xAt), py(1))
    }
    ctx.stroke()

    // Puntos. Borde verde si están bien clasificados, gris si no.
    for (const p of PUNTOS) {
      const ok = predecir(p, w1, w2, b) === p.label
      ctx.beginPath()
      ctx.arc(px(p.x), py(p.y), 8, 0, Math.PI * 2)
      ctx.fillStyle = p.label === 1 ? '#e53935' : '#1e88e5'
      ctx.fill()
      ctx.lineWidth = 3
      ctx.strokeStyle = ok ? '#2e7d32' : '#9e9e9e'
      ctx.stroke()
    }
  }, [w1, w2, b])

  // "Aprende solo": un paso del perceptrón por cada frame, animado.
  useEffect(() => {
    if (!entrenando) return
    let cancelado = false
    let cw1 = w1, cw2 = w2, cb = b
    const tasa = 0.05

    function paso() {
      if (cancelado) return
      // Busca el primer punto mal clasificado y corrige los pesos hacia él.
      let corrigio = false
      for (const p of PUNTOS) {
        const pred = cw1 * p.x + cw2 * p.y + cb >= 0 ? 1 : -1
        if (pred !== p.label) {
          cw1 += tasa * p.label * p.x
          cw2 += tasa * p.label * p.y
          cb += tasa * p.label
          corrigio = true
          break
        }
      }
      setW1(cw1)
      setW2(cw2)
      setB(cb)
      if (corrigio) {
        requestAnimationFrame(paso)
      } else {
        setEntrenando(false) // ya separó todo
      }
    }
    const id = requestAnimationFrame(paso)
    return () => {
      cancelado = true
      cancelAnimationFrame(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrenando])

  function reiniciar() {
    setEntrenando(false)
    setW1(0.6)
    setW2(-0.3)
    setB(0.1)
  }

  return (
    <div className="perceptron">
      <div className="perceptron__canvas-wrap">
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          className="perceptron__canvas"
          aria-label="Plano con puntos azules y rojos y la recta que los separa"
        />
        <div className={'perceptron__marcador' + (perfecto ? ' perceptron__marcador--ok' : '')}>
          {perfecto ? '✅ ¡Separados!' : `Aciertos: ${aciertos} / ${PUNTOS.length}`}
        </div>
      </div>

      <div className="perceptron__controles">
        <Slider label="Peso w₁ (entrada x₁)" value={w1} onChange={setW1} />
        <Slider label="Peso w₂ (entrada x₂)" value={w2} onChange={setW2} />
        <Slider label="Sesgo b (bias)" value={b} onChange={setB} />

        <div className="perceptron__eq">
          <code>
            z = ({w1.toFixed(2)})·x₁ + ({w2.toFixed(2)})·x₂ + ({b.toFixed(2)})
          </code>
          <span className="perceptron__eq-nota">
            La función escalón devuelve <strong>clase roja</strong> si z ≥ 0, y{' '}
            <strong>clase azul</strong> si z &lt; 0. La recta verde es el lugar donde z = 0.
          </span>
        </div>

        <div className="perceptron__botones">
          <button
            className="btn btn--primary"
            onClick={() => setEntrenando(true)}
            disabled={entrenando || perfecto}
          >
            {entrenando ? 'Aprendiendo…' : '▶ Aplicar regla de aprendizaje'}
          </button>
          <button className="btn" onClick={reiniciar}>↺ Reiniciar</button>
        </div>

        <p className="perceptron__nota">
          Ajusta los pesos para inclinar la frontera y el sesgo para desplazarla, o deja que el
          algoritmo aplique <code>wᵢ ← wᵢ + η·(y − ŷ)·xᵢ</code> hasta converger. Como las clases
          son linealmente separables, el perceptrón siempre encuentra una solución.
        </p>
      </div>
    </div>
  )
}

function Slider({ label, value, onChange }) {
  return (
    <label className="slider">
      <span className="slider__label">
        {label} <span className="slider__val">{value.toFixed(2)}</span>
      </span>
      <input
        type="range"
        min="-1"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  )
}
