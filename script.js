// script.js - versión corregida y más robusta

// Variables globales
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// Iconos y nombres (usados en encabezado)
const categoryIcons = {
  tarot: "🔮",
  numerologia: "🔢",
  astrologia: "🌙"
};
const categoryNames = {
  tarot: "Tarot",
  numerologia: "Numerología",
  astrologia: "Astrología"
};

// Util: mezclador (Fisher-Yates)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// --- Iniciar examen ---
function startExam(type) {
  // Asegurarse de que las preguntas están definidas
  if (type === "tarot" && typeof tarotQuestions !== "undefined") {
    currentQuestions = tarotQuestions;
  } else if (type === "numerologia" && typeof numerologiaQuestions !== "undefined") {
    currentQuestions = numerologiaQuestions;
  } else if (type === "astrologia" && typeof astrologiaQuestions !== "undefined") {
    currentQuestions = astrologiaQuestions;
  } else {
    console.error("No hay preguntas cargadas para:", type);
    alert("Error: No se encontraron preguntas para esta categoría. Revisa que los archivos questions_*.js estén cargados (Network tab).");
    return;
  }

  // Mezclar y limitar (si hay menos de 20 se usan todas)
  currentQuestions = shuffle([...currentQuestions]).slice(0, Math.min(20, currentQuestions.length));

  currentIndex = 0;
  score = 0;

  // Mostrar icono y nombre (asegurar elementos)
  const iconEl = document.getElementById("category-icon");
  const nameEl = document.getElementById("category-name");
  if (iconEl) iconEl.textContent = categoryIcons[type] || "";
  if (nameEl) nameEl.textContent = categoryNames[type] || "";

  // Mostrar/ocultar secciones
  const menu = document.getElementById("menu");
  const exam = document.getElementById("exam");
  const result = document.getElementById("result");
  if (menu) menu.style.display = "none";
  if (result) result.style.display = "none";
  if (exam) exam.style.display = "block";

  loadQuestion(true);
}

// --- Cargar pregunta (con fade opcional) ---
function loadQuestion(first = false) {
  if (!currentQuestions || currentQuestions.length === 0) {
    console.warn("No hay preguntas para cargar.");
    endExam();
    return;
  }

  const q = currentQuestions[currentIndex];
  if (!q) {
    console.error("Pregunta indefinida en index:", currentIndex);
    endExam();
    return;
  }

  const qt = document.getElementById("question-text");
  const optDiv = document.getElementById("options");
  const progressText = document.getElementById("progress-text");

  if (progressText) progressText.textContent = `Pregunta ${currentIndex + 1} / ${currentQuestions.length}`;

  if (!first) {
    if (qt) qt.classList.remove("fade-in");
    if (optDiv) optDiv.classList.remove("fade-in");
  }

  setTimeout(() => {
    if (qt) qt.textContent = q.q || "Pregunta sin texto";
    if (optDiv) optDiv.innerHTML = "";

    // Construir opciones manteniendo cuál es la correcta
    const mixedOptions = (q.options || []).map((optText, idx) => ({
      text: optText,
      isCorrect: idx === q.answer
    }));
    shuffle(mixedOptions);

    mixedOptions.forEach((opt) => {
      const div = document.createElement("div");
      div.className = "option";
      div.textContent = opt.text;

      div.onclick = () => {
        // bloquear clics posteriores
        Array.from(optDiv.children).forEach(c => (c.onclick = null));

        // marcar selección
        if (opt.isCorrect) {
          div.classList.add("correct");
          score++;
        } else {
          div.classList.add("incorrect");
          // revelar cuál era la correcta
          const correct = mixedOptions.find(o => o.isCorrect);
          Array.from(optDiv.children).forEach(child => {
            if (child.textContent === (correct && correct.text)) {
              child.classList.add("correct");
            }
          });
        }
      };

      optDiv.appendChild(div);
    });

    if (qt) qt.classList.add("fade-in");
    if (optDiv) optDiv.classList.add("fade-in");
  }, 120);
}

// --- Siguiente pregunta ---
function nextQuestion() {
  // Evitar pasar si no hay preguntas
  if (!currentQuestions || currentQuestions.length === 0) return;

  // Si quedan opciones por seleccionar, no forzar avanzar
  const optDiv = document.getElementById("options");
  // (opcional) permitir avanzar aunque no haya seleccionado nada: se avanza de todas formas
  currentIndex++;
  if (currentIndex >= currentQuestions.length) {
    endExam();
  } else {
    loadQuestion();
  }
}

// --- Finalizar examen ---
function endExam() {
  const exam = document.getElementById("exam");
  const menu = document.getElementById("menu");
  const resultDiv = document.getElementById("result");

  if (exam) exam.style.display = "none";
  if (menu) menu.style.display = "none";
  if (resultDiv) resultDiv.style.display = "block";

  const scoreEl = document.getElementById("score-text");
  if (scoreEl) {
    scoreEl.textContent = `Tu puntaje final es: ${score} / ${currentQuestions.length}`;
  } else {
    console.warn("Elemento #score-text no encontrado en el DOM.");
  }
}

// --- Reset / volver al menú ---
function resetApp() {
  const exam = document.getElementById("exam");
  const result = document.getElementById("result");
  const menu = document.getElementById("menu");

  if (exam) exam.style.display = "none";
  if (result) result.style.display = "none";
  if (menu) menu.style.display = "block";

  currentQuestions = [];
  currentIndex = 0;
  score = 0;

  const qt = document.getElementById("question-text");
  const optDiv = document.getElementById("options");
  const progressText = document.getElementById("progress-text");
  if (qt) qt.textContent = "";
  if (optDiv) optDiv.innerHTML = "";
  if (progressText) progressText.textContent = "";
}

// Exponer funciones en window para que los onclick inline las encuentren
window.startExam = startExam;
window.nextQuestion = nextQuestion;
window.resetApp = resetApp;
window.endExam = endExam;
