import { useState } from 'react'
import './App.css'
import { secciones } from './data/contenido'
import Bloque from './components/Bloque'
import Perceptron from './components/Perceptron'
import PromptBuilder from './components/PromptBuilder'
import AnalisisLey from './components/AnalisisLey'
import CompararIA from './components/CompararIA'
import SubeNivel from './components/SubeNivel'
import Detective from './components/Detective'
import Publicos from './components/Publicos'
import Privacidad from './components/Privacidad'
import DocAccion from './components/DocAccion'
import RedNeuronal from './components/RedNeuronal'
import Attention from './components/Attention'
import Alucina from './components/Alucina'
import DetectiveDatos from './components/DetectiveDatos'
import RolesDatos from './components/RolesDatos'
import MadurezDatos from './components/MadurezDatos'
import Dolencias from './components/Dolencias'

// Mapa de id de interactivo → componente.
const INTERACTIVOS = {
  perceptron: Perceptron,
  prompt: PromptBuilder,
  analisisLey: AnalisisLey,
  compararIA: CompararIA,
  subeNivel: SubeNivel,
  detective: Detective,
  publicos: Publicos,
  privacidad: Privacidad,
  docAccion: DocAccion,
  redNeuronal: RedNeuronal,
  attention: Attention,
  alucina: Alucina,
  detectiveDatos: DetectiveDatos,
  rolesDatos: RolesDatos,
  madurezDatos: MadurezDatos,
  dolencias: Dolencias,
}

const GRUPOS = [
  { id: 'inicio', etiqueta: 'Inicio', icono: '🌲' },
  { id: 'gobernanza', etiqueta: 'Gobernanza de datos', icono: '🗂️' },
  { id: 'taller', etiqueta: 'El Taller de IA', icono: '📖' },
  { id: 'lab', etiqueta: 'El Laboratorio', icono: '🧪' },
  { id: 'final', etiqueta: 'Para cerrar', icono: '🏁' },
]

// Badge mostrado bajo la cabecera según el grupo de la sección.
const BADGES = {
  gobernanza: '🗂️ Actividad de gobernanza',
  lab: '🧪 Laboratorio',
}

function App() {
  const [activa, setActiva] = useState(secciones[0].id)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const seccion = secciones.find((s) => s.id === activa) ?? secciones[0]

  function ir(id) {
    setActiva(id)
    setMenuAbierto(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const Interactivo = seccion.interactivo ? INTERACTIVOS[seccion.interactivo] : null

  // Progreso dentro del Laboratorio (para la barra divulgativa).
  const lab = secciones.filter((s) => s.grupo === 'lab')
  const labIdx = lab.findIndex((s) => s.id === activa)
  const enLab = labIdx >= 0

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
          {GRUPOS.map((g) => {
            const items = secciones.filter((s) => (s.grupo ?? 'taller') === g.id)
            if (!items.length) return null
            return (
              <div className="nav__grupo" key={g.id}>
                <p className="nav__grupo-tit">
                  <span>{g.icono}</span> {g.etiqueta}
                </p>
                {items.map((s) => (
                  <button
                    key={s.id}
                    className={'nav__item' + (s.id === activa ? ' nav__item--activa' : '')}
                    onClick={() => ir(s.id)}
                  >
                    <span className="nav__icono">{s.icono}</span>
                    <span className="nav__txt">{s.titulo}</span>
                  </button>
                ))}
              </div>
            )
          })}
        </nav>
        <p className="nav__pie">UIA · CONAF · 2026</p>
      </aside>

      {menuAbierto && <div className="overlay" onClick={() => setMenuAbierto(false)} />}

      <main className="contenido">
        <div className="seccion">
          <header className="seccion__cabecera">
            <span className="seccion__icono-grande">{seccion.icono}</span>
            <div>
              {seccion.interactivo && BADGES[seccion.grupo] && (
                <span className="seccion__badge">{BADGES[seccion.grupo]}</span>
              )}
              <h1>{seccion.titulo}</h1>
              {seccion.subtitulo && <p className="seccion__sub">{seccion.subtitulo}</p>}
            </div>
          </header>

          {enLab && (
            <div className="progreso">
              <div className="progreso__barra">
                <div
                  className="progreso__relleno"
                  style={{ width: `${((labIdx + 1) / lab.length) * 100}%` }}
                />
              </div>
              <span className="progreso__txt">
                Laboratorio · {labIdx + 1} de {lab.length}
              </span>
            </div>
          )}

          {seccion.bloques.map((b, i) => (
            <Bloque key={i} bloque={b} ir={ir} />
          ))}

          {Interactivo && <Interactivo />}

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
