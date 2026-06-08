import { useState } from 'react'
import './App.css'
import { secciones } from './data/contenido'
import Bloque from './components/Bloque'
import Perceptron from './components/Perceptron'
import PromptBuilder from './components/PromptBuilder'

function App() {
  const [activa, setActiva] = useState(secciones[0].id)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const seccion = secciones.find((s) => s.id === activa) ?? secciones[0]

  function ir(id) {
    setActiva(id)
    setMenuAbierto(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="layout">
      <header className="topbar">
        <button
          className="topbar__burger"
          onClick={() => setMenuAbierto((v) => !v)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
        <div className="topbar__marca">
          <span className="topbar__logo">🌲</span>
          <div>
            <strong>Taller de IA</strong>
            <span className="topbar__sub">UIA · CONAF</span>
          </div>
        </div>
      </header>

      <aside className={'nav' + (menuAbierto ? ' nav--abierto' : '')}>
        <nav>
          {secciones.map((s, i) => (
            <button
              key={s.id}
              className={'nav__item' + (s.id === activa ? ' nav__item--activa' : '')}
              onClick={() => ir(s.id)}
            >
              <span className="nav__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="nav__icono">{s.icono}</span>
              <span className="nav__txt">{s.titulo}</span>
            </button>
          ))}
        </nav>
        <p className="nav__pie">UIA · CONAF · 2026</p>
      </aside>

      {menuAbierto && <div className="overlay" onClick={() => setMenuAbierto(false)} />}

      <main className="contenido">
        <div className="seccion">
          <header className="seccion__cabecera">
            <span className="seccion__icono-grande">{seccion.icono}</span>
            <div>
              <h1>{seccion.titulo}</h1>
              {seccion.subtitulo && <p className="seccion__sub">{seccion.subtitulo}</p>}
            </div>
          </header>

          {seccion.bloques.map((b, i) => (
            <Bloque key={i} bloque={b} />
          ))}

          {seccion.interactivo === 'perceptron' && <Perceptron />}
          {seccion.interactivo === 'prompt' && <PromptBuilder />}

          <Navegacion activa={activa} ir={ir} />
        </div>
      </main>
    </div>
  )
}

// Botones anterior / siguiente al pie de cada sección.
function Navegacion({ activa, ir }) {
  const idx = secciones.findIndex((s) => s.id === activa)
  const prev = secciones[idx - 1]
  const next = secciones[idx + 1]
  return (
    <div className="seccion__nav">
      {prev ? (
        <button className="btn" onClick={() => ir(prev.id)}>
          ← {prev.titulo}
        </button>
      ) : (
        <span />
      )}
      {next ? (
        <button className="btn btn--primary" onClick={() => ir(next.id)}>
          {next.titulo} →
        </button>
      ) : (
        <span />
      )}
    </div>
  )
}

export default App
