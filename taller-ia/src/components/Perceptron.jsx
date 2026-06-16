import { useEffect, useRef, useState } from 'react'

// Perceptrón simplificado: 1 peso (w) + sesgo (b).
// w2 = 1 fijo internamente, el usuario solo mueve w (w1) y b.
// Frontera: w·x + y + b = 0  →  y = -w·x - b

const N = 14
const SIZE = 360

function generarPuntos() {
  let seed = 12345
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  const pts = []
  for (let i = 0; i < N; i++) {
    pts.push({ x: rnd() * 0.8 - 0.9, y: rnd() * 0.8 - 0.9, label: -1 })
    pts.push({ x: rnd() * 0.8 + 0.1, y: rnd() * 0.8 + 0.1, label: 1 })
  }
  return pts
}

const PUNTOS = generarPuntos()

function predecir(p, w, b) {
  return w * p.x + p.y + b >= 0 ? 1 : -1
}

export default function Perceptron() {
  const canvasRef = useRef(null)
  const [w, setW] = useState(0.6)
  const [b, setB] = useState(0.1)
  const [entrenando, setEntrenando] = useState(false)

  const aciertos = PUNTOS.filter((p) => predecir(p, w, b) === p.label).length
  const perfecto = aciertos === PUNTOS.length

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const S = SIZE
    const px = (x) => ((x + 1) / 2) * S
    const py = (y) => S - ((y + 1) / 2) * S

    ctx.clearRect(0, 0, S, S)

    // Fondo: dos semiplanos
    const img = ctx.createImageData(S, S)
    for (let i = 0; i < S; i++) {
      for (let j = 0; j < S; j++) {
        const x = (i / S) * 2 - 1
        const y = (1 - j / S) * 2 - 1
        const lado = w * x + y + b >= 0
        const idx = (j * S + i) * 4
        img.data[idx]     = lado ? 254 : 235
        img.data[idx + 1] = lado ? 226 : 240
        img.data[idx + 2] = lado ? 226 : 252
        img.data[idx + 3] = 255
      }
    }
    ctx.putImageData(img, 0, 0)

    // Recta: w·x + y + b = 0  →  y = -w·x - b
    ctx.strokeStyle = '#1b5e20'
    ctx.lineWidth = 3
    ctx.beginPath()
    const yAt = (x) => -w * x - b
    ctx.moveTo(px(-1), py(yAt(-1)))
    ctx.lineTo(px(1), py(yAt(1)))
    ctx.stroke()

    // Puntos
    for (const p of PUNTOS) {
      const ok = predecir(p, w, b) === p.label
      ctx.beginPath()
      ctx.arc(px(p.x), py(p.y), 8, 0, Math.PI * 2)
      ctx.fillStyle = p.label === 1 ? '#e53935' : '#1e88e5'
      ctx.fill()
      ctx.lineWidth = 3
      ctx.strokeStyle = ok ? '#2e7d32' : '#9e9e9e'
      ctx.stroke()
    }
  }, [w, b])

  // Aprendizaje automático
  useEffect(() => {
    if (!entrenando) return
    let cancelado = false
    let cw = w, cw2 = 1, cb = b
    const tasa = 0.05

    let rafId
    function paso() {
      if (cancelado) return
      let corrigio = false
      for (const p of PUNTOS) {
        const pred = cw * p.x + cw2 * p.y + cb >= 0 ? 1 : -1
        if (pred !== p.label) {
          cw  += tasa * p.label * p.x
          cw2 += tasa * p.label * p.y
          cb  += tasa * p.label
          corrigio = true
          break
        }
      }
      setW(cw)
      setB(cb)
      if (corrigio) rafId = requestAnimationFrame(paso)
      else setEntrenando(false)
    }
    rafId = requestAnimationFrame(paso)
    return () => { cancelado = true; cancelAnimationFrame(rafId) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entrenando])

  function reiniciar() {
    setEntrenando(false)
    setW(0.6)
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
        <Slider label="Peso w (inclina la frontera)" value={w} onChange={setW} />
        <Slider label="Sesgo b (desplaza la frontera)" value={b} onChange={setB} />

        <div className="perceptron__eq">
          <code>
            z = ({w.toFixed(2)})·x + (1.00)·y + ({b.toFixed(2)})
          </code>
          <span className="perceptron__eq-nota">
            Si z ≥ 0 → <strong>clase roja</strong>. Si z &lt; 0 → <strong>clase azul</strong>.
            La recta verde es donde z = 0.
          </span>
        </div>

        <div className="perceptron__botones">
          <button
            className="btn btn--primary"
            onClick={() => setEntrenando(true)}
            disabled={entrenando || perfecto}
            title={perfecto ? 'Ya están separados: la máquina no tiene nada que aprender' : undefined}
          >
            {entrenando ? 'Aprendiendo…' : '▶ Aplicar regla de aprendizaje'}
          </button>
          <button className="btn" onClick={reiniciar}>↺ Reiniciar sliders</button>
        </div>
        {perfecto && (
          <p className="perceptron__nota" style={{ color: '#2e7d32', fontWeight: 600 }}>
            ✅ Ya están separados — la máquina no tiene nada que corregir. Usa ↺ para volver a empezar.
          </p>
        )}

        <p className="perceptron__nota">
          Mueve <strong>w</strong> para inclinar la recta y <strong>b</strong> para desplazarla,
          o deja que el algoritmo aplique la regla de Rosenblatt:{' '}
          <code>w ← w + η·y·x</code> en cada punto mal clasificado, hasta converger.
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
