# CLASE_TALLER_ — Taller de Inteligencia Artificial (CONAF / UIA)

Web en **React (Vite)** para apoyar un taller de IA dirigido a funcionarios de CONAF.
Público: funcionarios públicos **no técnicos**. Todo debe ser intuitivo, visual y en
español, sin matemática expuesta. La IA se presenta como **apoyo, no reemplazo**.

## Cómo crear / levantar la app

```bash
npm create vite@latest taller-ia -- --template react
cd taller-ia
npm install
npm run dev   # http://localhost:5173
```

## Líneas del taller (extraídas del material UIA / PPT)

1. **Qué es la IA** — desmitificar: "asistente ultrarrápido que predice", no ciencia ficción.
2. **Prompting** — la habilidad clave: rol + cantidad + foco + formato. Vago vs. preciso.
3. **Herramientas** — ChatGPT, Claude, Gemini (CONAF tiene licencia Gemini Pro), Gamma.
4. **Riesgos** — alucinaciones, privacidad (no subir RUT/datos sensibles), responsabilidad humana final.
5. **IA aplicada a CONAF** — permisos sectoriales, RAG normativo (~1.500 docs con citas).
6. **Gobernanza de datos** — PMG-MEI, madurez "básico", roles y políticas.
7. **Formación / gestión del cambio** — niveles básico/intermedio/avanzado.

## Ejercicio web: EL PERCEPTRÓN (versión "visual de juguete")

> Objetivo pedagógico: que un funcionario **no técnico** entienda en 2 minutos que una
> "neurona artificial" es solo una **línea que separa dos grupos**, y que "aprender" es
> **mover esa línea**. Cero fórmulas a la vista.

**Mecánica:**
- Un plano 2D con puntos de dos colores (🔵 / 🔴).
- Sliders para **w1, w2 y umbral (bias)**. Al moverlos, la **frontera de decisión**
  (la recta) se mueve EN VIVO.
- Contador de "aciertos" para que el usuario, jugando, intente separar bien los colores.
- Botón **"Que aprenda solo"** que ejecuta el algoritmo del perceptrón y mueve la línea
  hasta separar las clases (muestra que la máquina hace lo mismo que el usuario hacía a mano).
- Mensaje final: *"Esto es una neurona. Tu cerebro tiene 86 mil millones. La IA, miles de millones de estas."*

**Reglas de implementación:**
- Render con `<canvas>` o SVG; recalcular la recta `w1·x + w2·y + bias = 0` en cada cambio.
- Sin librerías de ML: el perceptrón se implementa a mano (~20 líneas).
- Textos en español, tono cercano, orientado a CONAF.
- IMPORTANTE (regla del usuario): verificar el resultado **renderizando y mirando** la web,
  no solo confirmando que el código compila.

### 10 ideas/ejemplos de ejercicios de perceptrón (interesantes para el taller)

1. **¿Aprobar o fiscalizar?** — 2 ejes: superficie (ha) y pendiente (%). El perceptrón
   traza la línea entre predios que se aprueban y los que requieren inspección. (Caso CONAF.)
2. **Manzana 🍎 vs. naranja 🍊** — ejes: tamaño y rugosidad. Clásico, muy intuitivo para abrir.
3. **¿Lluvia hoy?** — ejes: humedad y nubosidad. "Sí llueve / No llueve". Cotidiano.
4. **Riesgo de incendio forestal** — ejes: temperatura y humedad. 🟢 bajo / 🔴 alto. Muy CONAF.
5. **Correo: spam vs. legítimo** — ejes: nº de signos "!" y nº de links. Conecta con IA real.
6. **Aprobar crédito** — ejes: ingreso y deuda. Muestra IA en decisiones administrativas.
7. **¿El árbol está sano?** — ejes: nº hojas secas y color del tronco. Temático forestal.
8. **Compuerta lógica AND/OR** — clásico didáctico: muestra qué SÍ puede aprender un perceptrón.
9. **El límite del perceptrón (XOR)** — con XOR la línea NUNCA separa: demuestra por qué se
   necesitan redes neuronales (gran "momento aha" para cerrar el taller).
10. **Gato 🐱 vs. perro 🐶 (juguete)** — ejes: tamaño y "ruido" (ladrido/maullido). Cierre divertido.
