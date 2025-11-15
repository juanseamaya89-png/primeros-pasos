let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// --- Iniciar examen ---
function startExam(type) {
  if (type === "tarot") currentQuestions = tarotQuestions;
  if (type === "numerologia") currentQuestions = numerologiaQuestions;
  if (type === "astrologia") currentQuestions = astrologiaQuestions;

  // Mezcla y selecciona 20 preguntas
  currentQuestions = shuffle([...currentQuestions]).slice(0, 20);

  currentIndex = 0;
  score = 0;

  document.getElementById("menu").style.display = "none";
  document.getElementById("exam").style.display = "block";

  loadQuestion();
}

// --- Cargar pregunta ---
function loadQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById("question-text").textContent = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  // Mezclar opciones sin cambiar la respuesta real
  const mixedOptions = q.options.map((opt, index) => ({
    text: opt,
    isCorrect: index === q.answer
  }));

  shuffle(mixedOptions);

  mixedOptions.forEach((opt) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt.text;

    div.onclick = () => {
      // Bloquear clics
      Array.from(optionsDiv.children).forEach(c => (c.onclick = null));

      if (opt.isCorrect) {
        div.style.background = "lightgreen";
        div.style.borderColor = "green";
        score++;
      } else {
        div.style.background = "salmon";
        div.style.borderColor = "red";
      }
    };

    optionsDiv.appendChild(div);
  });
}


// --- Botón siguiente ---
function nextQuestion() {
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
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent =
    `Tu puntuación: ${score} / ${currentQuestions.length}`;
}

// --- Regresar al menú desde el examen ---
function goBackToMenu() {
  document.getElementById("exam").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

// --- Reiniciar ---
function resetApp() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("exam").style.display = "none";
  document.getElementById("result").style.display = "none";
}

// --- Mezclador universal ---
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
