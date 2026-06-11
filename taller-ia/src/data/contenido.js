// Contenido del Taller de IA — UIA / CONAF
// Extraído del material del repositorio (PPT en /ppt y /MATERIAL_UIA).
// Cada entrada de `secciones` es una pestaña navegable de la web.
// `grupo` agrupa las secciones en el menú: 'inicio', 'gobernanza', 'taller',
// 'lab' (ejercicios de IA) y 'final' (dolencias + cierre).

export const secciones = [
  // ===================== INICIO =====================
  {
    id: 'inicio',
    grupo: 'inicio',
    icono: '🌲',
    titulo: 'Bienvenida',
    subtitulo: 'Unidad de Información y Análisis · CONAF',
    bloques: [
      {
        tipo: 'hero',
        kicker: 'JORNADA DE DATOS E INTELIGENCIA ARTIFICIAL · UIA CONAF',
        titulo: 'Hoy vas a perderle el miedo a la IA',
        texto:
          'Nada de ciencia ficción. Primero vamos a poner los cimientos —los datos y cómo ' +
          'gobernarlos—, después vas a entender qué es realmente la IA, verla resolver casos ' +
          'reales de CONAF y practicar tú mismo en 15 actividades interactivas. Al final, la IA ' +
          'dejará de ser una caja negra: será una herramienta más en tu escritorio.',
      },
      {
        tipo: 'tarjetas',
        titulo: 'El recorrido de hoy',
        items: [
          { icono: '🗂️', titulo: '1 · Gobernanza de datos', texto: 'Los cimientos: 3 actividades para entender por qué los datos importan (15–20 min).' },
          { icono: '📖', titulo: '2 · El Taller de IA', texto: 'Qué es la IA, demos en vivo, sus riesgos y cómo la usa la UIA.' },
          { icono: '🧪', titulo: '3 · El Laboratorio', texto: '12 ejercicios interactivos de IA para practicar tú mismo.' },
          { icono: '🗣️', titulo: '4 · Tus dolencias', texto: 'Levantamos las fricciones reales de tu área y cerramos con compromisos.' },
        ],
      },
      {
        tipo: 'tarjetas',
        titulo: 'Lo que vas a practicar hoy',
        items: [
          { icono: '🔍', titulo: 'Cuidar los datos', texto: 'Detectar inconsistencias y saber quién responde por cada dato.' },
          { icono: '✍️', titulo: 'Escribir prompts', texto: 'La habilidad #1: pedirle bien a la IA.' },
          { icono: '🕵️', titulo: 'Cazar mentiras', texto: 'Detectar cuándo la IA inventa datos.' },
          { icono: '🔒', titulo: 'Proteger datos', texto: 'Qué nunca debes pegar en una IA.' },
        ],
      },
    ],
  },

  {
    id: 'programa',
    grupo: 'inicio',
    icono: '🗓️',
    titulo: 'Programa del día',
    subtitulo: 'Media jornada · horario referencial',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Así se organiza la sesión. Los horarios son referenciales y se ajustan según la ' +
          'dinámica de cada gerencia; lo importante es el orden: primero los datos, después la ' +
          'IA, y al final las dolencias de tu área.',
      },
      {
        tipo: 'programa',
        items: [
          { hora: '09:00', dur: '15 min', icono: '👋', titulo: 'Bienvenida y presentación de la jornada', quien: 'Rodrigo', desc: 'Apertura, contexto institucional y qué esperamos de la sesión.' },
          { hora: '09:15', dur: '30 min', icono: '🎤', titulo: 'Charla: datos y transformación digital en el Estado', quien: 'Patricio', desc: 'El marco general: por qué el Estado —y CONAF— está moviéndose hacia la gestión de datos.' },
          { hora: '09:45', dur: '20 min', icono: '🗂️', titulo: 'Gobernanza de datos', quien: 'Luis', desc: 'Los cimientos antes de la IA: 3 actividades prácticas — detectar datos inconsistentes, roles del dato y autodiagnóstico de madurez.' },
          { hora: '10:05', dur: '40 min', icono: '🧠', titulo: 'Taller de IA', quien: 'Luis', desc: 'Qué es (y qué no es) la IA, demos en vivo con casos CONAF y los tres riesgos clave.' },
          { hora: '10:45', dur: '15 min', icono: '☕', titulo: 'Pausa', quien: '', desc: 'Café y conversación.' },
          { hora: '11:00', dur: '50 min', icono: '🧪', titulo: 'Laboratorio interactivo', quien: 'Luis + todos', desc: 'Ejercicios guiados: prompts, alucinaciones, privacidad, perceptrón y cómo funciona un LLM.' },
          { hora: '11:50', dur: '25 min', icono: '🗣️', titulo: 'Levantamiento de dolencias', quien: 'Todos', desc: 'Las fricciones reales del área: qué procesos duelen y dónde los datos o la IA podrían ayudar.' },
          { hora: '12:15', dur: '15 min', icono: '🏁', titulo: 'Cierre y compromisos', quien: 'Luis y Rodrigo', desc: 'Síntesis, kit para llevar y un compromiso concreto por participante.' },
        ],
      },
      {
        tipo: 'descarga',
        archivo: 'programa-jornada.pdf',
        titulo: 'Programa en PDF',
        texto: 'Descarga el programa de la jornada para imprimir o compartir.',
      },
      {
        tipo: 'destacado',
        icono: '💡',
        titulo: 'Para quien facilita',
        texto:
          'La sección de gobernanza usa las 3 actividades del bloque "Gobernanza de datos" de ' +
          'este sitio; el taller y el laboratorio usan las secciones siguientes en orden. La ' +
          'sección "Levantamiento de dolencias" tiene su propia pantalla para proyectar y anotar ' +
          'en vivo.',
      },
    ],
  },

  // ===================== GOBERNANZA DE DATOS (antes de la IA) =====================
  {
    id: 'gobernanza',
    grupo: 'gobernanza',
    icono: '📊',
    titulo: 'Por qué gobernanza, por qué ahora',
    subtitulo: 'PMG-MEI 2025 · meta: nivel "básico" a diciembre de 2026',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Antes de hablar de inteligencia artificial, hablemos de su alimento: los datos. Una ' +
          'IA entrenada o alimentada con datos inconsistentes produce resultados inconsistentes ' +
          '— con más confianza y a más velocidad. Por eso la gobernanza de datos no es un trámite ' +
          'administrativo: es el cimiento de todo lo que viene después en esta jornada.',
      },
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
          'Organismos candidatos para alianzas: SAG, MMA, SENAPRED, INE, MOP. Ahora, a practicar: ' +
          'las tres actividades que siguen muestran en carne propia por qué esto importa.',
      },
    ],
  },

  {
    id: 'detective-datos',
    grupo: 'gobernanza',
    icono: '🔍',
    titulo: 'Detective de datos',
    subtitulo: 'Actividad 1 · ~7 min · el mismo predio, tres versiones',
    interactivo: 'detectiveDatos',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'El mismo predio aparece registrado en tres sistemas distintos de CONAF. Algunas ' +
          'diferencias son solo de formato; otras son conflictos reales que impiden decidir. ' +
          'Marca las filas donde los datos de verdad se contradicen.',
      },
    ],
  },

  {
    id: 'roles-datos',
    grupo: 'gobernanza',
    icono: '🧑‍⚖️',
    titulo: '¿Quién responde por este dato?',
    subtitulo: 'Actividad 2 · ~5 min · los roles de la gobernanza',
    interactivo: 'rolesDatos',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'La gobernanza de datos se sostiene en roles claros. El PMG-MEI exige a CONAF ' +
          'formalizar al menos dos. Conócelos y luego decide: en cada situación, ¿a quién le ' +
          'toca actuar?',
      },
    ],
  },

  {
    id: 'madurez-datos',
    grupo: 'gobernanza',
    icono: '📏',
    titulo: '¿Qué tan maduros son tus datos?',
    subtitulo: 'Actividad 3 · ~5 min · autodiagnóstico exprés',
    interactivo: 'madurezDatos',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Cinco preguntas de sí o no sobre TU área. Es la versión de bolsillo del diagnóstico ' +
          'de madurez que CONAF debe rendir a fin de 2026. Responde con honestidad: nadie más ve ' +
          'tu resultado.',
      },
    ],
  },

  // ===================== TALLER DE IA (contenido) =====================
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
          'de documentos. No piensa, no siente. Predice, palabra a palabra, la continuación más ' +
          'probable de lo que lee — lo más probable, no necesariamente lo verdadero (a eso ' +
          'volveremos al hablar de alucinaciones).',
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
        clave: 'El prompt es el factor que TÚ controlas, y el que más cambia el resultado. Esa habilidad —escribir buenas instrucciones— es la más importante que vamos a desarrollar juntos.',
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

  // ===================== LABORATORIO (ejercicios de IA) =====================
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
    id: 'perceptron',
    grupo: 'lab',
    icono: '🔵',
    titulo: 'El perceptrón',
    subtitulo: 'Mira bajo el capó: la neurona artificial',
    interactivo: 'perceptron',
    bloques: [
      {
        tipo: 'destacado',
        icono: '🔧',
        titulo: 'Ya sabes USARLA; ahora, 2 minutos para mirar qué hay dentro',
        texto:
          'Una neurona artificial pondera unas pocas señales, las suma y, si pasan un umbral, ' +
          'dice sí o no — como un evaluador que pesa criterios y decide aprobar o rechazar. Eso ' +
          'es todo. Abajo puedes jugar con una sin leer una sola fórmula; el detalle técnico ' +
          'queda plegado para quien lo quiera.',
      },
      {
        tipo: 'parrafo',
        texto:
          'El perceptrón es la primera "neurona artificial", propuesta por Frank Rosenblatt en ' +
          '1958. Toma varias entradas, calcula una suma ponderada y la pasa por una función de ' +
          'activación tipo escalón. Geométricamente, eso equivale a trazar una recta que separa ' +
          'dos grupos.',
      },
      {
        tipo: 'formula',
        plegable: true,
        titulo: 'Cómo decide',
        formula: 'z = w₁·x₁ + w₂·x₂ + b      →      ŷ = +1 si z ≥ 0,  si no −1',
        items: [
          'x₁, x₂ — entradas (las características del dato).',
          'w₁, w₂ — pesos: cuánto influye cada entrada.',
          'b — sesgo (bias): desplaza la frontera de decisión.',
          'función escalón — convierte la suma z en una salida de dos clases (+1 / −1).',
        ],
      },
      {
        tipo: 'formula',
        plegable: true,
        titulo: 'Cómo aprende (regla de Rosenblatt)',
        formula: 'wᵢ ← wᵢ + η · yᵢ · xᵢ      (solo en los puntos mal clasificados)',
        items: [
          'Por cada dato mal clasificado, empuja los pesos hacia su clase correcta yᵢ ∈ {−1, +1}.',
          'η (eta) es la tasa de aprendizaje: el tamaño del paso.',
          'Si los dos grupos se pueden separar con una recta, el algoritmo siempre converge.',
          'Si NO son separables, el perceptrón nunca se detiene — y esa limitación es justo la que motivó las redes multicapa.',
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
    id: 'attention',
    grupo: 'lab',
    icono: '🎯',
    titulo: 'Attention',
    subtitulo: 'Cómo el modelo decide a qué palabras prestar atención',
    interactivo: 'attention',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Ya viste cómo un perceptrón decide con una suma ponderada y cómo una red apila muchos ' +
          'de esos perceptrones. Falta una pieza para entender un LLM: el significado de una ' +
          'palabra depende de las que la rodean. "Corta" no es lo mismo en "corta el árbol" que ' +
          'en "la corta del expediente". Attention es el mecanismo que deja que cada palabra mire ' +
          'a todas las demás de la frase y decida a cuáles prestar atención —repartiendo un 100% ' +
          'de atención, como un fiscalizador que pesa más unos documentos que otros— para ' +
          'recargarse con lo relevante. Y por debajo no hay magia nueva: es el mismo producto ' +
          'punto y la misma suma ponderada del perceptrón, solo que ahora los pesos se calculan ' +
          'al vuelo según lo que dice la frase.',
      },
      {
        tipo: 'formula',
        plegable: true,
        titulo: 'Cómo funciona (self-attention)',
        formula: 'A = softmax( Q·Kᵀ / √d ) ·V        Q = X·Wq   K = X·Wk   V = X·Wv',
        items: [
          'Q "qué busco", K "qué ofrezco", V "qué aporto" — tres versiones de cada token, con pesos aprendidos (como las w).',
          'Q·Kᵀ — producto punto: mide cuánto le importa cada otro token (es el mismo w·x).',
          'softmax — reparte el 100% de la atención: cada fila suma 1.',
          'A·V — suma ponderada de los Value, igual que Σ wᵢ·xᵢ, pero con pesos dinámicos.',
          'predecir la siguiente palabra: logits = salida·W + b → softmax sobre el vocabulario → elegir.',
        ],
      },
      {
        tipo: 'destacado',
        icono: '📂',
        titulo: 'Cómo un fiscalizador arma un caso',
        texto:
          'Tienes una pregunta concreta (la Query: "¿esta corta requiere plan de manejo?") y ' +
          'repasas el expediente; cada documento se anuncia con su encabezado (la Key). No lees ' +
          'todo con la misma intensidad: das 60% de tu atención al artículo y al informe, 10% al ' +
          'resto — eso es el softmax. La conclusión que escribes (el Value ponderado) es la mezcla ' +
          'de cada documento pesada por su relevancia. Cambia la pregunta y cambias a qué papeles ' +
          'atiendes: el mismo expediente, otra mirada.',
      },
    ],
  },

  {
    id: 'alucina',
    grupo: 'lab',
    icono: '🎲',
    titulo: 'Por qué sabe pero alucina',
    subtitulo: 'Optimizado para sonar plausible, no para decir verdad',
    interactivo: 'alucina',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Ya sabes cómo el LLM elige la siguiente palabra. Ahora la pregunta que de verdad ' +
          'importa para tu trabajo: ¿por qué sabe tanto y, aun así, a veces inventa con total ' +
          'seguridad? La respuesta está en lo único que se le pidió al entrenarlo: dar la palabra ' +
          'siguiente más plausible. Plausible, no verdadera. Por eso recuerda bien lo que aparecía ' +
          'mucho en sus textos, pero cuando le pides un artículo exacto o una cifra que casi no ' +
          'vio, no tiene un botón "no sé": rellena con algo que suena a ley chilena. El ' +
          'fine-tuning y el entrenamiento con retroalimentación humana (RLHF) lo hacen más útil y ' +
          'honesto, pero no le enseñan datos nuevos —solo cambian cómo prioriza lo que ya tenía—. ' +
          'Por eso el modelo sigue pudiendo equivocarse, y por eso la firma sigue siendo tuya.',
      },
      {
        tipo: 'formula',
        plegable: true,
        titulo: 'Lo que el entrenamiento minimizó',
        formula: 'L = −log p(palabra_siguiente)        w ← w − η · ∂L/∂w',
        items: [
          'Premia PLAUSIBILIDAD, nunca VERDAD → sabe lo frecuente; ante lo ausente, rellena con lo más plausible = alucinación.',
          'Ronda 2 — misma actualización de pesos (el gesto de Rosenblatt), otra señal de error:',
          'Fine-tuning: pares "instrucción → buena respuesta" escritos por humanos.',
          'RLHF: humanos comparan respuestas A vs B → un modelo de recompensa R → subir R.',
          'No añade hechos nuevos; redistribuye probabilidad. Por eso: verificar siempre.',
        ],
      },
      {
        tipo: 'destacado',
        icono: '🎓',
        titulo: 'El practicante brillante, otra vez',
        texto:
          'Leyó toda la biblioteca, pero su único hábito es "terminar la frase como suena mejor". ' +
          'Le preguntas "¿en qué artículo está la franja de glaciares?" y, en vez de "no lo tengo ' +
          'a mano", te suelta "Art. 17" con aplomo: inventó un número con forma creíble —igual que ' +
          'en el ejercicio Detective la ley aparecía "derogada en 2020". No te quiere engañar: ' +
          'completó el patrón más probable. El fine-tuning es un coaching con casos resueltos por ' +
          'expertos; el RLHF es el jefe que le dice "esta sí, esta no, y cuando no estés seguro, ' +
          'dilo". Responde mejor, pero no leyó documentos nuevos: solo cambió cómo prioriza.',
      },
    ],
  },

  // ===================== PARA CERRAR =====================
  {
    id: 'dolencias',
    grupo: 'final',
    icono: '🗣️',
    titulo: 'Levantamiento de dolencias',
    subtitulo: 'Las fricciones reales de tu área, anotadas en vivo',
    interactivo: 'dolencias',
    bloques: [
      {
        tipo: 'parrafo',
        texto:
          'Ya viste qué pueden hacer los datos bien gobernados y la IA bien usada. Ahora el paso ' +
          'más importante de la jornada: ¿dónde duele en TU área? Anotemos las fricciones ' +
          'concretas — esa planilla que se rellena a mano, ese informe que toma días, ese dato ' +
          'que nadie sabe dónde está. La UIA trabajará sobre esta lista.',
      },
      {
        tipo: 'tarjetas',
        titulo: 'Preguntas para destrabar la conversación',
        items: [
          { icono: '⏱️', titulo: '¿Qué te quita más tiempo?', texto: 'Esa tarea repetitiva que haces cada semana y que una máquina debería hacer.' },
          { icono: '📊', titulo: '¿Qué dato buscas y no encuentras?', texto: 'Información que existe en CONAF pero nunca está donde la necesitas.' },
          { icono: '📄', titulo: '¿Qué documento nadie quiere redactar?', texto: 'Informes, oficios o respuestas que se postergan porque dan lata.' },
          { icono: '🔁', titulo: '¿Dónde se copia a mano?', texto: 'Datos que se traspasan de un sistema (o planilla) a otro, a pulso.' },
        ],
      },
    ],
  },

  {
    id: 'cierre',
    grupo: 'final',
    icono: '🚀',
    titulo: 'Y ahora, ¿qué?',
    subtitulo: 'Lo que te llevas de esta jornada',
    bloques: [
      {
        tipo: 'hero',
        kicker: 'LO LOGRASTE',
        titulo: 'La IA dejó de ser una caja negra',
        texto:
          'Recorriste la gobernanza de datos, qué es la IA, sus riesgos y quince actividades ' +
          'prácticas. Ahora tienes cinco herramientas que antes no usabas: detectar datos ' +
          'inconsistentes, escribir prompts con estructura, cazar alucinaciones, proteger datos ' +
          'sensibles y entender qué hay bajo el capó.',
      },
      {
        tipo: 'destacado',
        icono: '🔗',
        titulo: 'Atando todo: eso era un LLM',
        texto:
          'Ese asistente que comparaste —ChatGPT, Claude, Gemini— y que "predice la mejor ' +
          'respuesta" es exactamente esto: una red neuronal gigantesca, hecha de millones de ' +
          'neuronas como las que moviste, que usa attention para mirar el contexto y fue entrenada ' +
          'con millones de textos para predecir la siguiente palabra. A esa familia se le llama ' +
          'modelo de lenguaje (LLM). Ya no es magia: ahora sabes cómo funciona por dentro.',
      },
      {
        tipo: 'autoevaluacion',
        titulo: '¿Te lo llevas claro? Marca lo que ya sabrías hacer hoy',
        items: [
          'Detectar un dato inconsistente antes de usarlo (o de dárselo a una IA).',
          'Escribir un prompt con rol + cantidad + foco + formato.',
          'Detectar una alucinación antes de que llegue a un documento oficial.',
          'Saber qué datos NO pegar nunca en una IA pública.',
          'Explicar, a grandes rasgos, por qué un LLM a veces inventa.',
        ],
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
  { id: 'rol', etiqueta: 'Rol', icono: '🎭', pista: 'Dile QUIÉN debe ser ("Actúa como un evaluador de CONAF…").' },
  { id: 'cantidad', etiqueta: 'Cantidad', icono: '🔢', pista: 'Acota el TAMAÑO ("en 5 puntos", "máximo 1 página").' },
  { id: 'foco', etiqueta: 'Foco', icono: '🎯', pista: 'Di SOBRE QUÉ exactamente ("…centrado en las obligaciones de fiscalización").' },
  { id: 'formato', etiqueta: 'Formato', icono: '📐', pista: 'Pide la FORMA ("en una tabla", "tono ejecutivo", "como checklist").' },
]

// Prompt débil con el que arranca el ejercicio (el funcionario lo mejora).
export const promptVago = 'Hazme un resumen de la Ley 20.283.'

// Ejemplo de un prompt fuerte (se muestra como pista al final).
export const promptEjemplo =
  'Actúa como evaluador de CONAF. Resume la Ley 20.283 en 5 viñetas, centrado en las ' +
  'obligaciones de fiscalización municipal, en tono ejecutivo y como checklist.'

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
// Cada token tiene un rol: 'relleno' (no clicable), 'sensible' (debe ocultarse)
// o 'senuelo' (clicable y parece dato, pero es público → NO hay que ocultarlo).
export const privacidad = {
  intro: 'Marca SOLO los datos que NO deberías pegar en una IA pública (ojo: no todo lo que parece dato es sensible):',
  tokens: [
    { t: 'Estimado ', rol: 'relleno' },
    { t: 'Juan Pérez Soto', rol: 'sensible', tipo: 'Nombre' },
    { t: ', RUT ', rol: 'relleno' },
    { t: '12.345.678-9', rol: 'sensible', tipo: 'RUT' },
    { t: ', se le notifica que el predio ', rol: 'relleno' },
    { t: 'Rol 245-17', rol: 'sensible', tipo: 'Rol del predio' },
    { t: ' de la comuna de ', rol: 'relleno' },
    { t: 'Curacautín', rol: 'senuelo', tipo: 'Comuna (dato público)' },
    { t: ' fue fiscalizado. Se detectó una corta no autorizada según la ', rol: 'relleno' },
    { t: 'Ley 20.283', rol: 'senuelo', tipo: 'Norma pública' },
    { t: '. Contacto: ', rol: 'relleno' },
    { t: 'jperez@gmail.com', rol: 'sensible', tipo: 'Correo personal' },
    { t: ' / ', rol: 'relleno' },
    { t: '+56 9 8765 4321', rol: 'sensible', tipo: 'Teléfono' },
    { t: '. Favor regularizar en ', rol: 'relleno' },
    { t: '10 días hábiles', rol: 'senuelo', tipo: 'Plazo (no identifica a nadie)' },
    { t: '.', rol: 'relleno' },
  ],
  leccion:
    'Lo sensible (nombre, RUT, rol del predio, correo, teléfono) identifica a una persona y debe ' +
    'ocultarse con marcadores como [NOMBRE] o [RUT]. Pero "Curacautín", "Ley 20.283" o "10 días ' +
    'hábiles" son información pública: tacharlo de más vuelve el texto inútil. El criterio no es ' +
    '"¿parece un dato?", sino "¿identifica a una persona o es reservado?".',
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

// CONCEPTO LLM 1 — "Attention": heatmap de atención + predicción de la siguiente palabra.
// Pesos precalculados (fieles a la idea, sin modelo real; cada fila suma ~1 = 100%).
export const attention = {
  tokens: ['la', 'corta', 'de', 'bosque', 'nativo', 'requiere', 'plan', 'de', 'manejo'],
  // Cada "cabeza" resalta relaciones distintas. matriz[i][j] = atención de i hacia j (0..1).
  cabezas: [
    {
      nombre: 'Cabeza 1 · sintáctica',
      descripcion: 'Conecta el verbo y su objeto: "corta → requiere → plan / manejo".',
      // filas = desde, columnas = hacia (orden de tokens)
      matriz: [
        [0.55, 0.20, 0.05, 0.05, 0.03, 0.04, 0.03, 0.02, 0.03],
        [0.08, 0.40, 0.04, 0.06, 0.04, 0.22, 0.08, 0.02, 0.06],
        [0.05, 0.30, 0.30, 0.20, 0.05, 0.03, 0.03, 0.02, 0.02],
        [0.04, 0.10, 0.10, 0.40, 0.28, 0.03, 0.02, 0.01, 0.02],
        [0.03, 0.08, 0.06, 0.45, 0.30, 0.03, 0.02, 0.01, 0.02],
        [0.03, 0.30, 0.03, 0.05, 0.04, 0.30, 0.15, 0.03, 0.07],
        [0.02, 0.10, 0.03, 0.04, 0.03, 0.18, 0.35, 0.05, 0.20],
        [0.03, 0.05, 0.10, 0.05, 0.04, 0.06, 0.25, 0.22, 0.20],
        [0.02, 0.08, 0.03, 0.04, 0.03, 0.12, 0.30, 0.08, 0.30],
      ],
    },
    {
      nombre: 'Cabeza 2 · semántica',
      descripcion: 'Agrupa el sujeto: "bosque ↔ nativo" se miran fuertemente entre sí.',
      matriz: [
        [0.50, 0.10, 0.10, 0.10, 0.08, 0.04, 0.03, 0.02, 0.03],
        [0.10, 0.45, 0.05, 0.15, 0.10, 0.06, 0.04, 0.02, 0.03],
        [0.08, 0.08, 0.40, 0.22, 0.14, 0.03, 0.02, 0.01, 0.02],
        [0.03, 0.06, 0.06, 0.45, 0.36, 0.02, 0.01, 0.005, 0.005],
        [0.03, 0.05, 0.05, 0.44, 0.40, 0.01, 0.01, 0.005, 0.005],
        [0.05, 0.10, 0.05, 0.18, 0.15, 0.32, 0.08, 0.03, 0.04],
        [0.04, 0.06, 0.04, 0.12, 0.10, 0.10, 0.40, 0.04, 0.10],
        [0.04, 0.05, 0.10, 0.10, 0.08, 0.05, 0.20, 0.28, 0.10],
        [0.03, 0.05, 0.04, 0.14, 0.12, 0.08, 0.24, 0.06, 0.24],
      ],
    },
  ],
  // Predicción de la siguiente palabra tras "...plan de manejo".
  prediccion: [
    { palabra: 'aprobado', prob: 0.62 },
    { palabra: 'forestal', prob: 0.21 },
    { palabra: 'previo', prob: 0.11 },
    { palabra: 'vigente', prob: 0.06 },
  ],
  leccion:
    'Cada palabra repartió un 100% de atención entre las demás y se "recargó" con las relevantes. ' +
    'Apila esto muchas veces y tienes un Transformer — la arquitectura detrás de ChatGPT, Claude y ' +
    'Gemini. Predecir la siguiente palabra vuelve a ser, al final, una suma ponderada y un softmax: ' +
    'el mismo z = w·x + b del perceptrón, a una escala enorme.',
}

// CONCEPTO LLM 2 — "Por qué sabe pero alucina": comparación pre-entrenado vs RLHF + paso de recompensa.
export const alucina = {
  prompt: '¿Qué exige la Ley 20.283 para cortar bosque nativo?',
  antes: {
    etiqueta: 'Antes · solo pre-entrenado',
    descripcion: 'Autocompleta lo más plausible. Suena bien… pero cuela un dato falso.',
    // fragmentos; alucinacion:true se resalta en rojo
    partes: [
      { t: 'Para cortar bosque nativo, la Ley 20.283 exige un plan de manejo aprobado por CONAF. ' },
      { t: 'Además, según el Art. 14 bis, se debe pagar una tasa del 3% del valor del predio.', alucinacion: true },
    ],
  },
  despues: {
    etiqueta: 'Después · fine-tuning + RLHF',
    descripcion: 'Más estructurada y honesta: marca lo que conviene verificar.',
    partes: [
      { t: 'La Ley 20.283 exige, antes de cualquier corta de bosque nativo, un Plan de Manejo aprobado por CONAF. ' },
      { t: 'Existen además restricciones de protección (suelos, aguas, glaciares) y un fondo de incentivos. ' },
      { t: '(Verifica los artículos y montos exactos en el texto oficial.)', honesto: true },
    ],
  },
  rlhf: {
    pregunta: 'Eres el humano que entrena al modelo. ¿Cuál respuesta es mejor?',
    opciones: ['La de la izquierda (Antes)', 'La de la derecha (Después)'],
    correcta: 1,
    feedbackOk: '✅ Subiste la recompensa R. Así, repetido millones de veces, el modelo aprende a preferir respuestas útiles y honestas. Tú eres la señal de error.',
    feedbackMal: '🤔 La de la izquierda inventa un "Art. 14 bis" y una tasa que no existen. Premiarla le enseñaría a alucinar con más seguridad.',
  },
  leccion:
    'Ni el fine-tuning ni el RLHF garantizan verdad: redistribuyen probabilidad sobre lo que el ' +
    'modelo ya tenía. Por eso incluso la respuesta pulida puede traer un dato falso plausible —y ' +
    'por eso "la IA propone, tú confirmas". ¿Te suena? Es exactamente el ejercicio Detective.',
}

// ===================== Actividades de GOBERNANZA DE DATOS =====================

// ACTIVIDAD G1 — "Detective de datos": el mismo predio en 3 sistemas.
// El usuario marca las filas con conflicto REAL (no solo diferencias de formato).
export const detectiveDatos = {
  pregunta: 'Marca las filas donde los datos DE VERDAD se contradicen (no solo cambian de formato):',
  sistemas: ['Sistema de Planes de Manejo', 'Planilla regional (Excel)', 'Registro SAG'],
  campos: [
    {
      campo: 'Propietario',
      valores: ['Juan Pérez Soto', 'J. Pérez', 'JUAN PEREZ S.'],
      conflicto: false,
      explica:
        'Es la misma persona escrita de tres formas. No es un conflicto real, pero sin un estándar ' +
        'de escritura los sistemas no pueden cruzarse automáticamente: alguien termina haciéndolo a mano.',
    },
    {
      campo: 'RUT',
      valores: ['12.345.678-9', '12345678-9', '12.345.678-9'],
      conflicto: false,
      explica:
        'Mismo RUT, formato distinto. Otra vez: no es contradicción, es falta de estandarización — ' +
        'y basta para que un cruce automático falle.',
    },
    {
      campo: 'Superficie',
      valores: ['45,2 ha', '52,4 ha', '45,2 ha'],
      conflicto: true,
      explica:
        '¿45,2 o 52,4 hectáreas? Con 7 ha de diferencia cambia la bonificación, la multa y el plan ' +
        'de manejo. Conflicto real: alguien tiene que definir cuál es la fuente oficial.',
    },
    {
      campo: 'Comuna',
      valores: ['Curacautín', 'Curacautín', 'Lonquimay'],
      conflicto: true,
      explica:
        '¿Curacautín o Lonquimay? Cambia la oficina provincial responsable de fiscalizar. ' +
        'Conflicto real, y de los caros.',
    },
  ],
  leccion:
    'Esto es exactamente la brecha "datos inconsistentes para decidir" del diagnóstico UIA. La ' +
    'gobernanza la resuelve con dos herramientas: una FUENTE OFICIAL única por dato y ESTÁNDARES ' +
    'de registro. Y ojo con lo que viene en esta jornada: si le das estas tres tablas a una IA, ' +
    'aprenderá la basura con total confianza. La calidad de los datos viene ANTES que la IA.',
}

// ACTIVIDAD G2 — "¿Quién responde por este dato?": asignar el rol correcto.
export const rolesDatos = {
  roles: [
    { id: 'dueno', nombre: 'Dueño del dato', icono: '👑', desc: 'Del negocio: define qué significa el dato, quién accede y responde por su calidad.' },
    { id: 'custodio', nombre: 'Custodio técnico', icono: '🛠️', desc: 'De informática: administra los sistemas, respaldos y seguridad donde vive el dato.' },
    { id: 'usuario', nombre: 'Usuario del dato', icono: '🙋', desc: 'Lo usa para trabajar: debe usarlo bien y reportar errores cuando los detecta.' },
  ],
  situaciones: [
    {
      texto: 'Otra gerencia pide acceso al registro de Planes de Manejo. ¿Quién autoriza?',
      correcto: 'dueno',
      explica: 'El acceso lo decide quien responde por el dato (el negocio), no informática. Informática lo implementa.',
    },
    {
      texto: 'Hay que respaldar la base de datos y migrar el servidor. ¿Quién lo ejecuta?',
      correcto: 'custodio',
      explica: 'La infraestructura es del custodio técnico. El dueño define requisitos (cada cuánto respaldar); el custodio ejecuta.',
    },
    {
      texto: 'Preparando un informe, detectas un predio con superficie negativa. ¿A quién le toca reportarlo?',
      correcto: 'usuario',
      explica: 'Quien usa el dato y detecta el error, lo reporta. La calidad del dato es tarea de todos, no solo del dueño.',
    },
    {
      texto: 'Se decide que "superficie afectada" se medirá en hectáreas con un decimal en TODOS los sistemas. ¿Quién define eso?',
      correcto: 'dueno',
      explica: 'Definir el significado y el estándar de un dato es la esencia del rol de dueño del dato.',
    },
  ],
  leccion:
    'El PMG-MEI exige a CONAF formalizar al menos 2 roles de datos este año. No es burocracia: ' +
    'cuando el dato de superficie está malo y nadie es "dueño", nadie lo corrige — y todos lo sufren. ' +
    'Rol claro = dato confiable.',
}

// ACTIVIDAD G3 — "¿Qué tan maduros son tus datos?": autodiagnóstico exprés.
export const madurezDatos = {
  preguntas: [
    '¿Tu área tiene claro quién es el responsable de cada dato que produce?',
    '¿Existe UNA fuente oficial para los datos que usas (y no varias planillas paralelas)?',
    '¿Hay reglas escritas sobre quién puede ver y quién puede modificar los datos?',
    '¿Cuando un dato está malo, existe un procedimiento conocido para corregirlo?',
    '¿Los datos de tu área se cruzan con otros sistemas sin retipearlos a mano?',
  ],
  niveles: [
    { min: 0, max: 1, nombre: 'Inicial', icono: '🌱', texto: 'Los datos dependen de personas, no de procesos. Es el punto de partida de la mayoría — y justo lo que el plan PMG-MEI viene a ordenar.' },
    { min: 2, max: 3, nombre: 'En desarrollo', icono: '🌿', texto: 'Hay prácticas buenas pero parciales. Formalizar roles y fuentes oficiales te llevaría al siguiente nivel.' },
    { min: 4, max: 5, nombre: 'Básico logrado', icono: '🌳', texto: 'Tu área ya opera como el PMG-MEI pide para fines de 2026. Ahora el desafío es sostenerlo y cruzar datos con otros.' },
  ],
  leccion:
    'Este mini-test es la versión de bolsillo de la autoevaluación de madurez (MGDE) que CONAF ' +
    'debe rendir en diciembre de 2026 con nivel "básico". Si tu área respondió "no" en algo, esa ' +
    'es exactamente la conversación que la UIA quiere tener contigo en el levantamiento de dolencias.',
}

// SECCIÓN FINAL — "Levantamiento de dolencias": lista en vivo para proyectar.
export const dolencias = {
  categorias: [
    { id: 'datos', etiqueta: 'Datos', icono: '📊' },
    { id: 'documentos', etiqueta: 'Documentos', icono: '📄' },
    { id: 'procesos', etiqueta: 'Procesos repetitivos', icono: '🔁' },
    { id: 'otra', etiqueta: 'Otra', icono: '💬' },
  ],
  placeholder: 'Ej.: cada mes copio a mano los datos de incendios desde 3 planillas distintas…',
  leccion:
    'Esta lista es el insumo más valioso de la jornada: con ella la UIA prioriza qué resolver ' +
    'primero. Copia la lista al portapapeles y envíala a la UIA antes de cerrar la sesión.',
}
