// Contenido del Taller de IA — UIA / CONAF
// Extraído del material del repositorio (PPT en /ppt y /MATERIAL_UIA).
// Cada entrada de `secciones` es una pestaña navegable de la web.
// `grupo` agrupa las secciones en el menú: 'taller' (contenido) y 'lab' (ejercicios).

export const secciones = [
  // ===================== TALLER (contenido) =====================
  {
    id: 'inicio',
    grupo: 'taller',
    icono: '🌲',
    titulo: 'Bienvenida',
    subtitulo: 'Unidad de Información y Análisis · CONAF',
    bloques: [
      {
        tipo: 'hero',
        kicker: 'TALLER DE INTELIGENCIA ARTIFICIAL · UIA CONAF',
        titulo: 'En los próximos 20 minutos vas a perderle el miedo a la IA',
        texto:
          'Nada de ciencia ficción ni tecnicismos. Vas a entender qué es realmente la IA, vas a ' +
          'verla resolver casos reales de CONAF y vas a practicar tú mismo en 9 ejercicios ' +
          'interactivos. Al final, la IA dejará de ser una caja negra: será una herramienta más ' +
          'en tu escritorio.',
      },
      {
        tipo: 'tarjetas',
        titulo: 'Este taller tiene dos partes',
        items: [
          { icono: '📖', titulo: 'El Taller', texto: 'Qué es la IA, sus riesgos y cómo la usa la UIA en CONAF.' },
          { icono: '🧪', titulo: 'El Laboratorio', texto: '7 ejercicios interactivos para practicar tú mismo.' },
        ],
      },
      {
        tipo: 'tarjetas',
        titulo: 'Lo que vas a practicar en el Laboratorio',
        items: [
          { icono: '✍️', titulo: 'Escribir prompts', texto: 'La habilidad #1: pedirle bien a la IA.' },
          { icono: '🕵️', titulo: 'Cazar mentiras', texto: 'Detectar cuándo la IA inventa datos.' },
          { icono: '🤖', titulo: 'Comparar modelos', texto: 'ChatGPT vs Claude vs Gemini, mismo caso real.' },
          { icono: '🔒', titulo: 'Proteger datos', texto: 'Qué nunca debes pegar en una IA.' },
        ],
      },
    ],
  },

  {
    id: 'que-es-ia',
    grupo: 'taller',
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
    grupo: 'taller',
    icono: '🛠️',
    titulo: 'Demos',
    subtitulo: 'La IA aplicada al día a día',
    bloques: [
      {
        tipo: 'demo',
        n: '1',
        titulo: 'Distintos modelos, distintas respuestas',
        texto:
          'ChatGPT, Claude y Gemini reciben el mismo prompt. El resultado: estructura, tono y ' +
          'longitud distintos. Las tres respuestas son válidas de formas diferentes.',
        clave: 'La IA no es una bola de cristal con una única respuesta mágica. Es una herramienta con la que hay que aprender a dialogar. CONAF tiene licencia paga para Gemini Pro.',
         irA: 'comparar-ia',
        irTexto: 'Pruébalo con la Ley 20.283',
      },
      {
        tipo: 'demo',
        n: '2',
        titulo: 'El prompt lo cambia todo',
        texto:
          'Un prompt genérico ("hazme una presentación sobre presupuestos") entrega algo vago. ' +
          'Un prompt preciso —rol + cantidad + foco + formato— entrega algo que sí se puede usar.',
        clave: 'La calidad del resultado depende 100% de las instrucciones que damos. Eso se llama prompt, y es la habilidad más importante que vamos a desarrollar juntos.',
        irA: 'prompt',
        irTexto: 'Arma tu propio prompt',
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
    id: 'riesgos',
    grupo: 'taller',
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
    grupo: 'taller',
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
    grupo: 'taller',
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
    grupo: 'taller',
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

  // ===================== LABORATORIO (ejercicios) =====================
  {
    id: 'prompt',
    grupo: 'lab',
    icono: '✍️',
    titulo: 'Arma tu prompt',
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
    id: 'sube-nivel',
    grupo: 'lab',
    icono: '📈',
    titulo: 'Sube el nivel del prompt',
    subtitulo: 'Del prompt flojo al prompt experto',
    interactivo: 'subeNivel',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'El mismo encargo, pedido en tres niveles de detalle. Mueve el deslizador y observa ' +
          'cómo, a más precisión en la instrucción, más útil es la respuesta que entrega la IA.',
      },
    ],
  },

  {
    id: 'detective',
    grupo: 'lab',
    icono: '🕵️',
    titulo: 'Detective de alucinaciones',
    subtitulo: 'Caza los datos que la IA inventó',
    interactivo: 'detective',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'La IA puede mentir con total seguridad. Abajo hay un "análisis" de la Ley 20.283 ' +
          'generado por IA: la mayoría es correcto, pero algunas frases tienen datos inventados. ' +
          'Haz clic en las que creas FALSAS. Luego comprueba tu olfato de fiscalizador.',
      },
    ],
  },

  {
    id: 'comparar-ia',
    grupo: 'lab',
    icono: '🤖',
    titulo: 'Distintos modelos',
    subtitulo: 'Mismo prompt, tres IA, tres respuestas',
    interactivo: 'compararIA',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Le hicimos exactamente la misma petición —"Realiza un análisis de la Ley N.º 20.283"— ' +
          'a tres IA distintas, con el mismo PDF. Las tres respuestas son válidas… y muy ' +
          'diferentes. Recórrelas en las pestañas y fíjate en qué se distingue cada una.',
      },
    ],
  },

  {
    id: 'analisis-ley',
    grupo: 'lab',
    icono: '⚖️',
    titulo: 'Una palabra lo cambia todo',
    subtitulo: 'Caso real: la Ley 20.283 del Bosque Nativo',
    interactivo: 'analisisLey',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Le pasamos a una IA el PDF de la Ley N.º 20.283 (Recuperación del Bosque Nativo y ' +
          'Fomento Forestal) y le pedimos un análisis. Luego repetimos exactamente la misma ' +
          'petición, agregando una sola palabra: "crítico". Observa cómo cambia por completo el ' +
          'resultado.',
      },
    ],
  },

  {
    id: 'publicos',
    grupo: 'lab',
    icono: '👥',
    titulo: 'Misma ley, distintos públicos',
    subtitulo: 'La IA adapta el lenguaje a quien escucha',
    interactivo: 'publicos',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'La misma Ley 20.283, explicada para cuatro audiencias distintas. Elige a quién le ' +
          'hablas y mira cómo la IA cambia el tono, el vocabulario y el nivel de detalle — sin ' +
          'cambiar los hechos.',
      },
    ],
  },

  {
    id: 'privacidad',
    grupo: 'lab',
    icono: '🔒',
    titulo: 'Qué NO contarle a la IA',
    subtitulo: 'Limpia los datos sensibles antes de pegar',
    interactivo: 'privacidad',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Vas a pegar este correo de fiscalización en una IA para mejorar su redacción. Pero ' +
          'antes: marca todos los datos sensibles que hay que ocultar. Trata a la IA como a un ' +
          'conocido de la calle.',
      },
    ],
  },

  {
    id: 'doc-accion',
    grupo: 'lab',
    icono: '⚙️',
    titulo: 'De documento a acción',
    subtitulo: 'De texto legal a checklist accionable',
    interactivo: 'docAccion',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'La IA no solo resume: transforma. Toma un párrafo denso de la ley y, con el prompt ' +
          'correcto, lo convierte en una lista de tareas concretas para ti como evaluador. ' +
          'Pulsa el botón y mira la transformación.',
      },
    ],
  },

  {
    id: 'red-neuronal',
    grupo: 'lab',
    icono: '🧠',
    titulo: 'Red neuronal',
    subtitulo: 'De una neurona a muchas, en capas',
    interactivo: 'redNeuronal',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Un perceptrón solo traza una recta. Pero si conectamos muchas neuronas en capas, la ' +
          'red puede aprender fronteras curvas y patrones complejos: así reconoce imágenes, ' +
          'entiende texto o clasifica expedientes. Cada conexión tiene un peso; la información ' +
          'fluye de izquierda a derecha (forward pass). Pulsa para verla "pensar".',
      },
    ],
  },

  {
    id: 'perceptron',
    grupo: 'lab',
    icono: '🔵',
    titulo: 'El perceptrón',
    subtitulo: 'La neurona artificial de Rosenblatt (1958)',
    interactivo: 'perceptron',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'El perceptrón es la unidad básica de inferencia: la primera "neurona artificial", ' +
          'propuesta por Frank Rosenblatt en 1958. Toma varias entradas, calcula una combinación ' +
          'lineal ponderada y la pasa por una función de activación tipo escalón. Geométricamente, ' +
          'eso equivale a trazar una recta (un hiperplano) que separa dos clases.',
      },
      {
        tipo: 'formula',
        titulo: 'Cómo decide',
        formula: 'z = w₁·x₁ + w₂·x₂ + b      →      ŷ = 1 si z ≥ 0,  si no 0',
        items: [
          'x₁, x₂ — entradas (las características del dato).',
          'w₁, w₂ — pesos: cuánto influye cada entrada.',
          'b — sesgo (bias): desplaza la frontera de decisión.',
          'función escalón — convierte la suma z en una salida binaria (clase A / clase B).',
        ],
      },
      {
        tipo: 'formula',
        titulo: 'Cómo aprende (regla de Rosenblatt)',
        formula: 'wᵢ ← wᵢ + η · (y − ŷ) · xᵢ        b ← b + η · (y − ŷ)',
        items: [
          'Por cada dato mal clasificado, ajusta los pesos en la dirección del error.',
          'η (eta) es la tasa de aprendizaje: el tamaño del paso.',
          'Si las clases son linealmente separables, el algoritmo converge (lo prueba el teorema de convergencia del perceptrón).',
        ],
      },
      {
        tipo: 'enlaceVideo',
        titulo: 'Video de referencia',
        texto: 'Perceptrón — Machine Learning | aprendizaje automático',
        url: 'https://www.youtube.com/watch?v=e9JYMng977Q',
      },
      {
        tipo: 'parrafo',
        texto:
          'Abajo lo tienes en vivo: mueve los pesos y el sesgo para inclinar y desplazar la ' +
          'frontera, observa el valor de z, o deja que aplique la regla de aprendizaje y converja solo.',
      },
    ],
  },

  // ===================== CIERRE =====================
  {
    id: 'cierre',
    grupo: 'lab',
    icono: '🚀',
    titulo: 'Y ahora, ¿qué?',
    subtitulo: 'Lo que te llevas de este taller',
    bloques: [
      {
        tipo: 'hero',
        kicker: 'LO LOGRASTE',
        titulo: 'La IA dejó de ser una caja negra',
        texto:
          'Recorriste qué es la IA, sus riesgos y nueve ejercicios prácticos. Ya sabes escribir un ' +
          'buen prompt, cazar una alucinación, proteger datos sensibles y reconocer cómo "piensa" ' +
          'una red neuronal. Eso ya te pone por delante de la mayoría.',
      },
      {
        tipo: 'tarjetas',
        titulo: 'Tres pasos para empezar mañana mismo',
        items: [
          { icono: '1️⃣', titulo: 'Conózcannos', texto: 'Vengan a preguntarnos, sin protocolo. La UIA está para eso.' },
          { icono: '2️⃣', titulo: 'Identifiquen una fricción', texto: 'Ese proceso que da lata. Ese documento que nadie quiere redactar.' },
          { icono: '3️⃣', titulo: 'Trabajemos juntos', texto: 'Les acompañamos a resolverla con las herramientas correctas.' },
        ],
      },
      {
        tipo: 'frase',
        texto: 'Su trabajo tiene fricciones que parecen inevitables. Sí hay otra forma — eso es exactamente lo que vinimos a demostrar.',
      },
      {
        tipo: 'destacado',
        icono: '✉️',
        titulo: 'La UIA es tu puente hacia las herramientas',
        texto:
          'Somos la Unidad de Información y Análisis Institucional de CONAF. Estamos aquí para ' +
          'reducir la fricción y multiplicar el impacto de tu trabajo. Muchas gracias. ¿Preguntas?',
      },
    ],
  },
]

// ===================== Datos de los ejercicios =====================

// Ejercicio "una palabra lo cambia todo" — análisis de la Ley 20.283.
export const analisisLey = {
  promptBase: 'Realiza un análisis',
  palabra: ' crítico',
  promptCola: ' de la Ley N.º 20.283 sobre Recuperación del Bosque Nativo.',

  neutral: {
    titulo: 'Análisis (neutral)',
    tono: 'Descriptivo y equilibrado: explica qué dice la ley.',
    puntos: [
      { icono: '🎯', texto: 'Objetivo: proteger, recuperar y manejar de forma sustentable el bosque nativo.' },
      { icono: '🌳', texto: 'Clasifica los bosques: preservación, conservación/protección y uso múltiple.' },
      { icono: '📋', texto: 'Eje central: toda corta requiere un Plan de Manejo aprobado por CONAF.' },
      { icono: '💧', texto: 'Protege suelos, aguas, glaciares (franja de 500 m) y especies amenazadas.' },
      { icono: '💰', texto: 'Crea un Fondo concursable de incentivos económicos a la conservación.' },
      { icono: '👥', texto: 'Gobernanza: Consejo Consultivo del Bosque Nativo; fiscalización por CONAF.' },
    ],
    conclusion:
      'La ley es un instrumento que combina protección ambiental, manejo sustentable e ' +
      'incentivos económicos, reconociendo el bosque nativo como patrimonio estratégico.',
  },

  critico: {
    titulo: 'Análisis CRÍTICO',
    tono: 'Mismo documento, pero ahora evalúa fortalezas Y debilidades.',
    puntos: [
      { icono: '🎯', texto: 'Mantiene el reconocimiento del valor ecológico y los planes de manejo.' },
      { icono: '✅', texto: 'Fortalezas: incentivos, protección de especies, investigación y participación.' },
      { icono: '⚠️', nuevo: true, texto: 'Financiamiento insuficiente: el Fondo recibió mucho menos de lo proyectado.' },
      { icono: '⚠️', nuevo: true, texto: 'Excesiva burocracia: los planes de manejo son una barrera para pequeños propietarios.' },
      { icono: '⚠️', nuevo: true, texto: 'No paga por resultados ambientales (captura de carbono, servicios ecosistémicos).' },
      { icono: '⚠️', nuevo: true, texto: 'Débil frente al cambio climático: diseñada antes de que fuera prioridad.' },
      { icono: '⚠️', nuevo: true, texto: 'Fiscalización limitada: pocos fiscalizadores para una enorme superficie.' },
    ],
    conclusion:
      'Tras 15 años, su debilidad no está en los objetivos sino en la implementación: ' +
      'fondos insuficientes, complejidad administrativa y falta de herramientas climáticas. ' +
      'Requiere modernización.',
  },

  leccion:
    'La misma IA, el mismo documento, casi el mismo prompt. Una sola palabra —"crítico"— ' +
    'reorientó por completo el análisis: de describir, a evaluar y cuestionar. Así de ' +
    'determinante es cómo formulamos la instrucción.',
}

// Ejercicio "distintos modelos, distintas respuestas" — comparador de IA.
export const compararIA = {
  prompt: 'Realiza un análisis de la Ley N.º 20.283 sobre Recuperación del Bosque Nativo y Fomento Forestal de Chile.',
  modelos: [
    {
      id: 'chatgpt',
      nombre: 'ChatGPT',
      icono: '💬',
      estilo: 'Pedagógico y accesible',
      color: '#10a37f',
      ideal: 'Entender la ley desde cero y explicarla a otros.',
      rasgos: [
        'Estructura clara por temas: objetivo, clasificación, plan de manejo, sanciones.',
        'Separa fortalezas y desafíos en secciones propias.',
        'Lenguaje cercano, sin tecnicismos jurídicos pesados.',
        'Cierra con una conclusión equilibrada y fácil de citar.',
      ],
    },
    {
      id: 'claude',
      nombre: 'Claude',
      icono: '📚',
      estilo: 'Jurídico y exhaustivo',
      color: '#d97757',
      ideal: 'Un análisis técnico-legal profundo, con respaldo en el articulado.',
      rasgos: [
        'Cita artículos concretos (Art. 2, 5, 17, 19, 21, 23, 40…).',
        'Detecta modificaciones recientes: Ley 21.770 (2025), Ley 21.600 (SBAP).',
        'Incluye tablas de montos (UTM/há) y umbrales de pequeño propietario.',
        'Plantea tensiones finas: acreditadores, delegación al reglamento, Convenio 169 OIT.',
        'Es, con diferencia, la respuesta más larga y detallada.',
      ],
    },
    {
      id: 'gemini',
      nombre: 'Gemini',
      icono: '✨',
      estilo: 'Conciso y al grano',
      color: '#4285f4',
      ideal: 'Una lectura rápida y ordenada, ceñida al documento.',
      rasgos: [
        'Va directo a lo esencial: objetivos, categorías, fondo, sanciones.',
        'Usa tablas limpias para las categorías de bosque y los montos.',
        'Se apega a lo que dice el PDF, sin extenderse en análisis crítico.',
        'Termina ofreciendo profundizar en algún aspecto (interacción).',
      ],
    },
  ],
  leccion:
    'Ninguna de las tres es "la respuesta correcta": son tres formas válidas y útiles de ' +
    'responder lo mismo. La IA no es una bola de cristal con una única respuesta mágica — es ' +
    'una herramienta con la que hay que aprender a dialogar, y conviene elegir el modelo (y el ' +
    'prompt) según lo que necesitas. CONAF tiene licencia paga para Gemini Pro.',
}

// Los cuatro ingredientes de un buen prompt (sección interactiva "prompt").
export const ingredientesPrompt = [
  { id: 'rol', etiqueta: 'Rol', icono: '🎭', texto: 'Eres un experto en finanzas públicas.' },
  { id: 'cantidad', etiqueta: 'Cantidad', icono: '🔢', texto: 'Crea 5 diapositivas' },
  { id: 'foco', etiqueta: 'Foco', icono: '🎯', texto: 'sobre control del gasto en la segunda mitad del año' },
  { id: 'formato', etiqueta: 'Formato', icono: '📐', texto: 'con tono ejecutivo y una tabla de seguimiento.' },
]

export const promptVago = 'Hazme una presentación sobre la gestión de presupuestos.'

// EJERCICIO 1 — "Sube el nivel del prompt": mismo encargo, tres niveles de detalle.
export const subeNivel = {
  niveles: [
    {
      etiqueta: 'Nivel 1 · Flojo',
      prompt: 'Resume la Ley 20.283.',
      tono: '#e53935',
      respuesta:
        'La Ley 20.283 trata sobre el bosque nativo en Chile. Busca protegerlo y permite su ' +
        'uso sustentable. Establece reglas y un fondo de incentivos.',
      critica: 'Genérico. No sé para quién es, ni qué destacar. Sirve de poco.',
    },
    {
      etiqueta: 'Nivel 2 · Mejor',
      prompt: 'Resume la Ley 20.283 para un alcalde, en lenguaje simple.',
      tono: '#fb8c00',
      respuesta:
        'Alcalde: la Ley 20.283 protege el bosque nativo de su comuna. Toda corta necesita un ' +
        'permiso (Plan de Manejo) aprobado por CONAF, y existe un fondo estatal que financia a ' +
        'propietarios que conserven o manejen bien su bosque.',
      critica: 'Ya tiene audiencia y tono. Mejor, pero aún falta foco y formato.',
    },
    {
      etiqueta: 'Nivel 3 · Experto',
      prompt:
        'Resume la Ley 20.283 para un alcalde, en 4 viñetas de máximo una línea, destacando las ' +
        'obligaciones de fiscalización municipal y los incentivos disponibles para vecinos.',
      tono: '#2e7d32',
      respuesta:
        '• Toda corta de bosque nativo requiere Plan de Manejo aprobado por CONAF.\n' +
        '• El municipio puede denunciar cortas ilegales: multa hasta el doble del valor cortado.\n' +
        '• Vecinos propietarios acceden a un fondo concursable (hasta 10 UTM/há).\n' +
        '• Pequeños propietarios tienen un concurso exclusivo y +15% de bonificación.',
      critica: 'Audiencia + cantidad + foco + formato. Esto se puede usar tal cual. ✅',
    },
  ],
  leccion:
    'No cambió la ley ni la IA: cambió cómo pediste. A más rol, cantidad, foco y formato en tu ' +
    'instrucción, más cerca queda la respuesta de lo que de verdad necesitas.',
}

// EJERCICIO 2 — "Detective de alucinaciones": frases verdaderas y falsas mezcladas.
// El usuario debe identificar las FALSAS (falsa: true).
export const detective = {
  intro: 'Análisis de la Ley 20.283 — generado por IA. ¿Cuáles frases son inventadas?',
  frases: [
    { texto: 'Toda corta de bosque nativo requiere un Plan de Manejo aprobado por CONAF.', falsa: false },
    { texto: 'Se prohíbe cortar árboles nativos en una franja de 500 metros alrededor de los glaciares.', falsa: false },
    {
      texto: 'La ley obliga a plantar exactamente 3 árboles nuevos por cada árbol nativo cortado.',
      falsa: true,
      porque: 'Inventado. La ley exige programas de reforestación con el mismo tipo forestal, pero NO fija una proporción de "3 por 1".',
    },
    { texto: 'Crea un Fondo concursable que bonifica la conservación y el manejo sustentable.', falsa: false },
    {
      texto: 'El incumplimiento puede llevar pena de cárcel de hasta 20 años para el propietario.',
      falsa: true,
      porque: 'Falso. Hay sanciones penales por antecedentes falsos, pero no existe una pena de "20 años" en esta ley.',
    },
    { texto: 'Los pequeños propietarios reciben hasta un 15% más de bonificación.', falsa: false },
    {
      texto: 'La Ley 20.283 fue derogada en 2020 y reemplazada por la Ley del Clima.',
      falsa: true,
      porque: 'Falso. La ley sigue vigente; solo ha tenido modificaciones puntuales, no fue derogada.',
    },
    { texto: 'Prohíbe alterar el hábitat de especies clasificadas en peligro o vulnerables.', falsa: false },
  ],
  leccion:
    'Las frases falsas sonaban totalmente creíbles — ese es justo el peligro de las ' +
    'alucinaciones. Por eso, ante cualquier dato que vaya a un documento oficial: verificar ' +
    'siempre contra la fuente. La IA propone; tú confirmas.',
}

// EJERCICIO 3 — "Misma ley, distintos públicos": la IA adapta el registro.
export const publicos = {
  audiencias: [
    {
      id: 'funcionario',
      etiqueta: 'Funcionario CONAF',
      icono: '🪖',
      respuesta:
        'La Ley 20.283 establece el marco para autorizar y fiscalizar intervenciones en bosque ' +
        'nativo. Como evaluador, verifica que cada Plan de Manejo cumpla las categorías del Art. 2, ' +
        'las restricciones del Art. 17 (glaciares) y Art. 19 (especies amenazadas) antes de aprobar.',
    },
    {
      id: 'propietario',
      etiqueta: 'Pequeño propietario',
      icono: '🧑‍🌾',
      respuesta:
        'Si tiene bosque nativo y quiere cortar, primero necesita un permiso (Plan de Manejo) de ' +
        'CONAF. La buena noticia: hay un fondo que le paga por cuidar o manejar bien su bosque, y ' +
        'como pequeño propietario tiene un concurso solo para usted y un 15% más de bono.',
    },
    {
      id: 'nino',
      etiqueta: 'Estudiante de colegio',
      icono: '🎒',
      respuesta:
        'Imagina que el bosque nativo es un tesoro de Chile lleno de árboles, animales y agua ' +
        'limpia. Esta ley es como un reglamento que dice: nadie puede cortar esos árboles sin ' +
        'permiso, y si alguien cuida bien el bosque, el Estado le da un premio.',
    },
    {
      id: 'abogado',
      etiqueta: 'Abogado',
      icono: '⚖️',
      respuesta:
        'La Ley 20.283 articula un régimen de planificación (Plan de Manejo, Art. 5), restricciones ' +
        'ambientales absolutas (Art. 17, 19), fomento vía fondo concursable (Título IV) y un régimen ' +
        'sancionatorio administrativo-penal (Título VII), con remisión al Art. 193 del Código Penal.',
    },
  ],
  leccion:
    'Los hechos son los mismos; cambia el registro. Decirle a la IA PARA QUIÉN es el texto es ' +
    'tan importante como el contenido — es lo que separa un borrador genérico de uno que tu ' +
    'audiencia entiende a la primera.',
}

// EJERCICIO 4 — "Qué NO contarle a la IA": marcar datos sensibles.
// El texto se parte en tokens; los `sensible: true` deben marcarse.
export const privacidad = {
  intro: 'Marca cada dato que NO deberías pegar en una IA pública:',
  // Cada item es un fragmento del correo; algunos son sensibles.
  tokens: [
    { t: 'Estimado ', sensible: false },
    { t: 'Juan Pérez Soto', sensible: true, tipo: 'Nombre' },
    { t: ', RUT ', sensible: false },
    { t: '12.345.678-9', sensible: true, tipo: 'RUT' },
    { t: ', se le notifica que el predio ', sensible: false },
    { t: 'Rol 245-17 de Curacautín', sensible: true, tipo: 'Identificador de predio' },
    { t: ' fue fiscalizado. Se detectó una corta no autorizada. Contacto: ', sensible: false },
    { t: 'jperez@gmail.com', sensible: true, tipo: 'Correo personal' },
    { t: ' / ', sensible: false },
    { t: '+56 9 8765 4321', sensible: true, tipo: 'Teléfono' },
    { t: '. Favor regularizar en 10 días hábiles.', sensible: false },
  ],
  leccion:
    'Todo lo que marcaste (nombre, RUT, rol del predio, correo y teléfono) identifica a una ' +
    'persona real. Para mejorar la redacción con IA, reemplázalo por marcadores como [NOMBRE] o ' +
    '[RUT] y recién ahí pega el texto. La IA mejora la forma; los datos sensibles se quedan contigo.',
}

// EJERCICIO 5 — "De documento a acción": texto legal denso → checklist accionable.
export const docAccion = {
  promptUsado:
    'Convierte este artículo de la Ley 20.283 en una checklist de pasos concretos para mí, ' +
    'que soy evaluador de CONAF revisando un Plan de Manejo.',
  textoLegal:
    '"El plan de manejo deberá contemplar las medidas de protección de los suelos y de los ' +
    'cuerpos y cursos naturales de agua, evitando que las intervenciones provoquen erosión ' +
    'manifiesta. Tratándose de bosques de preservación, sólo se admitirá su manejo con fines de ' +
    'conservación de la diversidad biológica, requiriéndose informe del Servicio de Biodiversidad."',
  checklist: [
    '¿El plan incluye medidas explícitas de protección de suelos?',
    '¿Identifica los cursos y cuerpos de agua del predio y cómo se protegen?',
    '¿Justifica que la intervención no provocará erosión manifiesta?',
    '¿El bosque es de preservación? Si es así, ¿el manejo es solo de conservación?',
    '¿Se adjunta el informe del Servicio de Biodiversidad y Áreas Protegidas?',
  ],
  leccion:
    'En segundos, un párrafo legal denso se volvió una lista verificable que puedes usar tal ' +
    'cual en tu trabajo. La IA no reemplaza tu criterio de evaluador: te ahorra el trabajo ' +
    'mecánico de traducir la norma en pasos, para que tú te concentres en decidir.',
}
