let currentQuestions = [];
let currentIndex = 0;
let score = 0;

function startExam(type) {
  if (type === "tarot") currentQuestions = tarotQuestions;
  if (type === "numerologia") currentQuestions = numerologiaQuestions;
  if (type === "astrologia") currentQuestions = astrologiaQuestions;

  currentQuestions = shuffle([...currentQuestions]).slice(0, 20);

  currentIndex = 0;
  score = 0;

  document.getElementById("menu").style.display = "none";
  document.getElementById("exam").style.display = "block";

  loadQuestion();
}

function loadQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById("question-text").textContent = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  // Mezclar opciones manteniendo cuál es correcta
  const indexedOptions = q.options.map((opt, i) => ({ opt, index: i }));
  const shuffled = shuffle(indexedOptions);

  shuffled.forEach(item => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = item.opt;

    div.onclick = () => {
      if (item.index === q.answer) {
        div.classList.add("correct");
        score++;
      } else {
        div.classList.add("incorrect");
      }

      Array.from(optionsDiv.children).forEach(c => (c.onclick = null));
    };

    optionsDiv.appendChild(div);
  });
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= currentQuestions.length) {
    endExam();
  } else {
    loadQuestion();
  }
}

function endExam() {
  document.getElementById("exam").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("score").textContent = `Tu puntuación: ${score} / ${currentQuestions.length}`;
}

function resetApp() {
  document.getElementById("menu").style.display = "block";
  document.getElementById("exam").style.display = "none";
  document.getElementById("result").style.display = "none";
}

function goBackToMenu() {
  resetApp();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
