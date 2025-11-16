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

// --- Iniciar examen ---
function startExam(type) {
  if (type === "tarot") currentQuestions = tarotQuestions;
  if (type === "numerologia") currentQuestions = numerologiaQuestions;
  if (type === "astrologia") currentQuestions = astrologiaQuestions;

  // Mezcla y selecciona 20 preguntas
  currentQuestions = shuffle([...currentQuestions]).slice(0, 20);

  currentIndex = 0;
  score = 0;

  // Mostrar icono y nombre
  document.getElementById("category-icon").textContent = categoryIcons[type];
  document.getElementById("category-name").textContent = categoryNames[type];

  document.getElementById("menu").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("exam").style.display = "block";

  loadQuestion(true);
}

// --- Cargar pregunta (con fade opcional) ---
function loadQuestion(first = false) {
  const q = currentQuestions[currentIndex];

  const qt = document.getElementById("question-text");
  const optDiv = document.getElementById("options");
  const progressText = document.getElementById("progress-text");

  if (!q) {
    console.error("Pregunta indefinida en index:", currentIndex);
    endExam();
    return;
  }

  // Actualizar progreso
  progressText.textContent = `Pregunta ${currentIndex + 1} / ${currentQuestions.length}`;

  // Fade out (si no es la primera vez)
  if (!first) {
    qt.classList.remove("fade-in");
    optDiv.classList.remove("fade-in");
  }

  // Pequeña espera para la transición
  setTimeout(() => {
    // Contenido
    qt.textContent = q.q;
    optDiv.innerHTML = "";

    // Mezclar opciones sin perder cuál es correcta
    const mixedOptions = q.options.map((optText, idx) => ({
      text: optText,
      isCorrect: idx === q.answer
    }));
    shuffle(mixedOptions);

    mixedOptions.forEach((opt) => {
      const div = document.createElement("div");
      div.className = "option";
      div.textContent = opt.text;

      div.onclick = () => {
        // Bloquear clics
        Array.from(optDiv.children).forEach(c => (c.onclick = null));

        // Marcar la opción seleccionada
        if (opt.isCorrect) {
          div.classList.add("correct");
          score++;
        } else {
          div.classList.add("incorrect");
          // revelar cuál era la correcta
          Array.from(optDiv.children).forEach(child => {
            if (child.textContent === mixedOptions.find(o => o.isCorrect).text) {
              child.classList.add("correct");
            }
          });
        }
      };

      optDiv.appendChild(div);
    });

    // Fade in
    qt.classList.add("fade-in");
    optDiv.classList.add("fade-in");

  }, 120);
}

// --- Siguiente pregunta ---
function nextQuestion() {
  // Evitar pasar si no hay preguntas
  if (!currentQuestions || currentQuestions.length === 0) return;

  currentIndex++;
  if (currentIndex >= currentQuestions.length) {
    endExam();
  } else {
    loadQuestion();
  }
}

// --- Finalizar examen ---
function endExam() {
  document.getElementById("exam").style.display = "none";
  document.getElementById("result
