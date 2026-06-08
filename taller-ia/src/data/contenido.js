// Contenido del Taller de IA — UIA / CONAF
// Extraído del material del repositorio (PPT en /ppt y /MATERIAL_UIA).
// Cada entrada de `secciones` es una pestaña navegable de la web.

export const secciones = [
  {
    id: 'inicio',
    icono: '🌲',
    titulo: 'Bienvenida',
    subtitulo: 'Unidad de Información y Análisis · CONAF',
    bloques: [
      {
        tipo: 'hero',
        kicker: 'PRESENTACIÓN DE LA UNIDAD',
        titulo: 'Un mes dentro de CONAF',
        texto:
          'No venimos a hacer una presentación institucional aburrida — venimos a mostrarles ' +
          'algo en vivo que va a cambiar la forma en que trabajamos. Datos, sistemas e ' +
          'inteligencia artificial al servicio de CONAF.',
      },
      {
        tipo: 'tarjetas',
        titulo: 'Cómo recorrer este taller',
        items: [
          { icono: '🧠', titulo: '¿Qué es la IA?', texto: 'Desmitificamos: qué hace y qué no hace.' },
          { icono: '🛠️', titulo: 'Demos prácticas', texto: 'Casos reales del día a día en CONAF.' },
          { icono: '⚠️', titulo: 'Riesgos', texto: 'Alucinaciones, privacidad y responsabilidad.' },
          { icono: '🔵', titulo: 'Ejercicio', texto: 'Juega con una "neurona" y entiéndela.' },
        ],
      },
    ],
  },

  {
    id: 'que-es-ia',
    icono: '🧠',
    titulo: '¿Qué es la IA?',
    subtitulo: 'Olviden la ciencia ficción',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'La IA que usaremos es, en esencia, un asistente ultrarrápido que ha leído millones ' +
          'de documentos. No piensa, no siente. Predice cuál es la mejor respuesta basándose en ' +
          'todo lo que ha procesado.',
      },
      {
        tipo: 'destacado',
        icono: '🎓',
        titulo: 'Piénsenla como un practicante brillante',
        texto:
          '"Toma estas 50 páginas y hazme un resumen." Te lo devuelve en 5 segundos. Ustedes son ' +
          'los expertos en CONAF; la IA es experta en procesar texto, resumir, redactar y ' +
          'detectar patrones.',
      },
      {
        tipo: 'frase',
        texto: 'No es un reemplazo — es un apoyo.',
      },
    ],
  },

  {
    id: 'demos',
    icono: '🛠️',
    titulo: 'Demos',
    subtitulo: 'La IA aplicada al día a día',
    bloques: [
      {
        tipo: 'demo',
        n: '1',
        titulo: 'Distintos modelos, distintas respuestas',
        texto:
          'ChatGPT, Claude y Gemini reciben el mismo prompt: "Escribe un correo a un proveedor ' +
          'que no entregó a tiempo." El resultado: estructura, tono y longitud distintos. Las tres ' +
          'respuestas son válidas de formas diferentes.',
        clave: 'La IA no es una bola de cristal con una única respuesta mágica. Es una herramienta con la que hay que aprender a dialogar. CONAF tiene licencia paga para Gemini Pro.',
      },
      {
        tipo: 'demo',
        n: '2',
        titulo: 'El prompt lo cambia todo',
        texto:
          'Un prompt genérico ("hazme una presentación sobre presupuestos") entrega algo vago. ' +
          'Un prompt preciso —rol + cantidad + foco + formato— entrega algo que sí se puede usar.',
        clave: 'La calidad del resultado depende 100% de las instrucciones que damos. Eso se llama prompt, y es la habilidad más importante que vamos a desarrollar juntos.',
      },
      {
        tipo: 'demo',
        n: '3 · 4',
        titulo: 'Aliviar la fricción del día a día',
        texto:
          'Armar una presentación desde cero toma ~3 horas; con Gamma, en 15 segundos tienes ' +
          'estructura, colores e imágenes. ¿Te llegó un PDF de 50 páginas un viernes a las 4? ' +
          'Pide "5 puntos clave y 3 riesgos" y en 10 segundos sabes si leerlo completo.',
        clave: 'Menos tiempo en formato, menos ansiedad frente a documentos largos. El tiempo que ganan vuelve a lo que sí requiere su criterio.',
      },
      {
        tipo: 'demo',
        n: '5 · 6',
        titulo: 'El correo difícil y la traducción con contexto',
        texto:
          'Cuando tienes que dar una mala noticia y miras la pantalla en blanco, la IA entrega un ' +
          'borrador con empatía y claridad. Y al traducir, un buen prompt adapta el lenguaje ' +
          'técnico al contexto de una institución pública chilena.',
        clave: 'El profesional sigue al mando: la IA propone el borrador, ustedes deciden qué se queda.',
      },
    ],
  },

  {
    id: 'prompt',
    icono: '✍️',
    titulo: 'El prompt',
    subtitulo: 'La habilidad más importante',
    interactivo: 'prompt',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Un buen prompt combina cuatro ingredientes. Activa cada uno abajo y observa cómo una ' +
          'instrucción vaga se transforma en una instrucción precisa y útil.',
      },
    ],
  },

  {
    id: 'riesgos',
    icono: '⚠️',
    titulo: 'Riesgos',
    subtitulo: 'Esto también tiene riesgos',
    bloques: [
      {
        tipo: 'tarjetas',
        items: [
          {
            icono: '⚠️',
            titulo: 'Alucinaciones',
            texto:
              'La IA puede mentir con seguridad: inventa datos, leyes y cifras que suenan reales. ' +
              'Siempre verifiquen antes de usar cualquier dato en un documento oficial.',
          },
          {
            icono: '🔒',
            titulo: 'Privacidad de datos',
            texto:
              'No suban datos sensibles: nombres, RUT, información reservada. Traten la IA como un ' +
              'conocido de la calle: no le darían los datos de su cuenta bancaria.',
          },
          {
            icono: '✍️',
            titulo: 'Responsabilidad final',
            texto:
              'La IA genera borradores. Quien firma y se hace cargo del contenido son ustedes. ' +
              'El criterio profesional no se delega.',
          },
        ],
      },
      {
        tipo: 'frase',
        texto: 'La IA es un apoyo, no un reemplazo. Las decisiones, la verificación y la firma siguen siendo suyas.',
      },
    ],
  },

  {
    id: 'unidad',
    icono: '🤝',
    titulo: 'La UIA',
    subtitulo: '¿Para qué sirve nuestra Unidad?',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'No venimos a decirles cómo hacer su trabajo. Ustedes son los expertos en fiscalización, ' +
          'bosques y presupuestos. Nosotros somos el puente hacia las herramientas.',
      },
      {
        tipo: 'tarjetas',
        items: [
          { icono: '🔎', titulo: 'Evaluar herramientas', texto: 'Identificamos qué solución se adapta a su equipo y proceso.' },
          { icono: '💬', titulo: 'Estructurar prompts', texto: 'Cómo pedirle a la IA exactamente lo que necesitan.' },
          { icono: '⚙️', titulo: 'Integrar IA en procesos', texto: 'Incorporarla operativamente, sin saltarse la seguridad.' },
        ],
      },
      {
        tipo: 'dosColumnas',
        titulo: 'El modelo de colaboración',
        columnas: [
          { titulo: 'Ustedes aportan', texto: 'El conocimiento del negocio: fiscalización, territorio, presupuestos, procesos operativos de CONAF.' },
          { titulo: 'Nosotros aportamos', texto: 'El conocimiento de las herramientas: qué IA usar, cómo usarla bien y con seguridad.' },
        ],
      },
    ],
  },

  {
    id: 'plan',
    icono: '🗺️',
    titulo: 'Plan UIA 2026–2030',
    subtitulo: 'Datos, sistemas e IA al servicio de CONAF',
    bloques: [
      {
        tipo: 'lista',
        titulo: 'Cinco brechas que CONAF no puede seguir cargando',
        items: [
          'Inexistencia de gobernanza de datos — sin tuición técnica, decisiones no alineadas.',
          'Deuda técnica y obsolescencia — alta dependencia de proveedores.',
          'Brechas en información estratégica — duplicidad de esfuerzos y datos inconsistentes.',
          'Demoras en evaluación sectorial — plazos altos e inconsistencias entre áreas.',
          'Ausencia de estandarización — sin protocolos oficiales entre gerencias.',
        ],
      },
      {
        tipo: 'destacado',
        icono: '🎯',
        titulo: 'Misión',
        texto:
          'Consolidar la gestión del conocimiento institucional de CONAF, asegurando datos íntegros, ' +
          'accesibles y comparables, y sistemas que respondan con agilidad. La UIA actúa como órgano ' +
          'rector de la gobernanza de datos (Resolución Nº 333/2017).',
      },
      {
        tipo: 'tarjetas',
        titulo: 'Tres líneas de acción',
        items: [
          { icono: '🗂️', titulo: '3.1 Gobernanza de datos', texto: 'Validar, estandarizar, mantener y articular con el Estado la información oficial.' },
          { icono: '🚀', titulo: '3.2 Desarrollo e innovación', texto: 'Automatización e IA aplicadas a procesos sustantivos.' },
          { icono: '🎓', titulo: '3.3 Formación y cambio', texto: 'Acompañar la adopción priorizando la comprensión por sobre la imposición.' },
        ],
      },
      {
        tipo: 'tarjetas',
        titulo: 'Servicios sustantivos asistidos por IA',
        items: [
          { icono: '📄', titulo: 'Permisos sectoriales', texto: 'IA para agilizar Planes de Manejo: pre-revisión, extracción, apoyo al evaluador. Decisión final siempre humana.' },
          { icono: '📚', titulo: 'Normativa forestal', texto: 'Chatbot RAG sobre ~1.500 documentos normativos, con citas verificables a la fuente.' },
        ],
      },
      {
        tipo: 'timeline',
        titulo: 'Horizonte 2026 — 2030',
        items: [
          { año: '2026', texto: 'Instalación y primeros resultados visibles. Que se note que la UIA está.' },
          { año: '2027–2028', texto: 'Construcción de capacidades y productos sustantivos. Que produzca cosas que se usen.' },
          { año: '2029–2030', texto: 'Consolidación y proyección al SERNAFOR. Capacidad instalada.' },
        ],
      },
    ],
  },

  {
    id: 'gobernanza',
    icono: '📊',
    titulo: 'Gobernanza de datos',
    subtitulo: 'PMG-MEI 2025 · Horizonte 2026–2028',
    bloques: [
      {
        tipo: 'destacado',
        icono: '📅',
        titulo: 'Objetivo: nivel de madurez "BÁSICO"',
        texto:
          'CONAF debe alcanzar el nivel básico en gestión de datos como parte del PMG-MEI 2025. ' +
          'Plazo máximo: 31 de diciembre de 2026 (con 2 meses de holgura para validación).',
      },
      {
        tipo: 'lista',
        titulo: 'Las 5 actividades del plan',
        items: [
          'A1 · Talleres directivos — exposición de beneficios al equipo directivo.',
          'A2 · Personas clave — identificar y designar para capacitación en MGDE.',
          'A3 · Alianza interinstitucional — intercambio de datos con otro órgano del Estado.',
          'A4 · Métricas de éxito — definir indicadores SMART.',
          'A5 · Capacitación en gobernanza — seminarios para toda la institución.',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'Métricas SMART: Específicas · Medibles · Alcanzables · Relevantes · con Tiempo definido. ' +
          'Organismos candidatos para alianzas: SAG, MMA, SENAPRED, INE, MOP.',
      },
    ],
  },

  {
    id: 'perceptron',
    icono: '🔵',
    titulo: 'Ejercicio: el perceptrón',
    subtitulo: 'Juega con una "neurona artificial"',
    interactivo: 'perceptron',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Una "neurona artificial" no es magia: es simplemente una línea que separa dos grupos. ' +
          '"Aprender" es mover esa línea hasta que separe bien los colores. Prueba moviendo los ' +
          'controles, o deja que la máquina aprenda sola.',
      },
    ],
  },
]

// Los cuatro ingredientes de un buen prompt (sección interactiva "prompt").
export const ingredientesPrompt = [
  { id: 'rol', etiqueta: 'Rol', icono: '🎭', texto: 'Eres un experto en finanzas públicas.' },
  { id: 'cantidad', etiqueta: 'Cantidad', icono: '🔢', texto: 'Crea 5 diapositivas' },
  { id: 'foco', etiqueta: 'Foco', icono: '🎯', texto: 'sobre control del gasto en la segunda mitad del año' },
  { id: 'formato', etiqueta: 'Formato', icono: '📐', texto: 'con tono ejecutivo y una tabla de seguimiento.' },
]

export const promptVago = 'Hazme una presentación sobre la gestión de presupuestos.'
