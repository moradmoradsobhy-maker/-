const questions = [
  {
    type: "CHOISIS",
    question: "Quelle est la première étape pour trouver la médiane d'une série de données ?",
    options: [
      "Ranger les données dans l'ordre croissant",
      "Calculer la moyenne",
      "Trouver le maximum"
    ],
    answer: "Ranger les données dans l'ordre croissant",
    supportHint: "Regarde la définition de la médiane : on doit d'abord classer les nombres du plus petit au plus grand.",
    mmarkAdvice: "Astuce M.MARK : C'est une question de règle (CHOISIS). On commence toujours par trier les chiffres !",
    explanation: "On range toujours les données dans l'ordre croissant (ou décroissant) avant de chercher le centre."
  },
  {
    type: "COMPLETE",
    question: "Complète : La valeur qui divise les données ordonnées en deux moitiés égales s'appelle la ________.",
    answer: "médiane",
    supportHint: "Ce mot commence par 'm' et correspond au trait vertical à l'intérieur de la boîte (Q2).",
    mmarkAdvice: "Astuce M.MARK : Écris le mot exact : 'médiane'.",
    explanation: "La médiane se trouve exactement au centre de la série de données."
  },
  {
    type: "CHOISIS",
    question: "Voici les valeurs : 11 ; 7 ; 6 ; 4 ; 9. Quelle est la médiane ? (Utilise la feuille ✍️)",
    options: ["6", "7", "9"],
    answer: "7",
    supportHint: "Ouvre la feuille ✍️ et range dans l'ordre : 4 ; 6 ; 7 ; 9 ; 11. Prends le nombre du milieu.",
    mmarkAdvice: "Astuce M.MARK : Il y a 5 nombres (impair). Le 3ème nombre après le classement est la réponse !",
    explanation: "Ordre croissant : 4 ; 6 ; [7] ; 9 ; 11. La valeur centrale (3ème rang) est 7."
  },
  {
    type: "COMPLETE",
    question: "Données : 12 ; 20 ; 10 ; 6 ; 8 ; 14. Calcule la médiane (écris le nombre).",
    answer: "11",
    supportHint: "Ordre croissant : 6 ; 8 ; 10 ; 12 ; 14 ; 20. Le nombre de valeurs est pair (6). Calcule (10 + 12) ÷ 2.",
    mmarkAdvice: "Astuce M.MARK : Prends les deux nombres du milieu (10 et 12) sur ta feuille et divise leur somme par 2.",
    explanation: "(10 + 12) / 2 = 22 / 2 = 11."
  },
  {
    type: "CHOISIS",
    question: "Dans un diagramme en boîte, comment s'appelle la ligne à gauche qui relie le Minimum à Q1 ?",
    options: [
      "La moustache inférieure",
      "La moustache supérieure",
      "La boîte centrale"
    ],
    answer: "La moustache inférieure",
    supportHint: "Elle est du côté des petites valeurs (entre le Minimum et le premier quartile Q1).",
    mmarkAdvice: "Astuce M.MARK : 'Minimum' = petit = 'inférieure'. Donc c'est la moustache inférieure !",
    explanation: "La moustache inférieure est le segment tracé du minimum au premier quartile (Q1)."
  },
  {
    type: "COMPLETE",
    question: "La ligne tracée à droite de la boîte, du troisième quartile (Q3) jusqu'au maximum, s'appelle la ________.",
    answer: "moustache supérieure",
    supportHint: "À gauche c'est la 'moustache inférieure', donc à droite (vers le maximum) c'est la moustache ________.",
    mmarkAdvice: "Astuce M.MARK : Écris exactement : 'moustache supérieure'.",
    explanation: "La moustache supérieure relie le troisième quartile (Q3) au maximum."
  },
  {
    type: "CHOISIS",
    question: "Pour la série : 5 ; 7 ; 8 ; 12 ; 15 ; 18 ; 21. Quel est le premier quartile (Q1) ?",
    options: ["5", "7", "8"],
    answer: "7",
    supportHint: "La médiane est 12. La moitié inférieure est (5 ; 7 ; 8). Q1 est la médiane de cette moitié.",
    mmarkAdvice: "Astuce M.MARK : Regarde les trois premiers nombres : 5, 7, 8. Le milieu est Q1.",
    explanation: "La moitié inférieure est 5 ; 7 ; 8. La valeur du milieu est 7 (Q1)."
  },
  {
    type: "CHOISIS",
    question: "Observe le schéma ci-dessous. Quelles sont les extrémités de la moustache supérieure ?",
    visual: "Min=10 --- [ Q1=12 | Médiane=18 | Q3=21 ] --- Max=24",
    options: [
      "De 21 à 24",
      "De 10 à 12",
      "De 12 à 21"
    ],
    answer: "De 21 à 24",
    supportHint: "La moustache supérieure va de Q3 jusqu'au Maximum.",
    mmarkAdvice: "Astuce M.MARK : Lis la partie tout à droite du schéma : Q3=21 et Max=24.",
    explanation: "La moustache supérieure va de Q3 (21) jusqu'au maximum (24)."
  },
  {
    type: "COMPLETE",
    question: "Série : 2 ; 3 ; 5 ; 6 ; 7 ; 8 ; 8 ; 9. Calcule le premier quartile (Q1).",
    answer: "4",
    supportHint: "Moitié inférieure : 2 ; 3 ; 5 ; 6. Calcule la moyenne des deux nombres du milieu : (3 + 5) ÷ 2.",
    mmarkAdvice: "Astuce M.MARK : Utilise la feuille ✍️ : (3 + 5) / 2 = 8 / 2 = 4.",
    explanation: "Moitié inférieure : 2 ; 3 ; 5 ; 6. Q1 = (3 + 5) / 2 = 4."
  },
  {
    type: "COMPLETE",
    question: "Pour la même série : 2 ; 3 ; 5 ; 6 ; 7 ; 8 ; 8 ; 9. Calcule le troisième quartile (Q3).",
    answer: "8",
    supportHint: "Moitié supérieure : 7 ; 8 ; 8 ; 9. Calcule (8 + 8) ÷ 2.",
    mmarkAdvice: "Astuce M.MARK : Les deux nombres au milieu de la moitié supérieure sont 8 et 8.",
    explanation: "Moitié supérieure : 7 ; 8 ; 8 ; 9. Q3 = (8 + 8) / 2 = 8."
  },
  {
    type: "CHOISIS",
    question: "Dans un diagramme en boîte, combien de lignes verticales trace-t-on pour former le rectangle (la boîte) ?",
    options: [
      "3 lignes verticales (Q1, Médiane, Q3)",
      "2 lignes verticales (Min et Max)",
      "5 lignes verticales"
    ],
    answer: "3 lignes verticales (Q1, Médiane, Q3)",
    supportHint: "Relis l'étape (2) Tracer le diagramme en boîte : on trace 3 lignes verticales puis on les relie.",
    mmarkAdvice: "Astuce M.MARK : Le rectangle contient Q1 (gauche), la médiane (milieu) et Q3 (droite) = 3 lignes.",
    explanation: "On trace 3 lignes verticales pour Q1, la médiane et Q3, puis on les relie pour former le rectangle."
  },
  {
    type: "COMPLETE",
    question: "Observe le schéma : Min=10 --- [ Q1=12 | Médiane=18 | Q3=21 ] --- Max=24. De quel nombre à quel nombre va la moustache inférieure ?",
    answer: "10 à 12",
    supportHint: "La moustache inférieure relie le Minimum (10) au premier quartile Q1 (12).",
    mmarkAdvice: "Astuce M.MARK : Regarde tout à gauche du schéma : Min=10 et Q1=12.",
    explanation: "La moustache inférieure commence au minimum (10) et s'arrête à Q1 (12)."
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 120;

const quizScreen = document.getElementById("quiz-screen");
const endScreen = document.getElementById("end-screen");
const restartBtn = document.getElementById("restart-btn");
const nextBtn = document.getElementById("next-btn");

const questionCounter = document.getElementById("question-counter");
const timerDisplay = document.getElementById("timer-display");
const scoreDisplay = document.getElementById("score-display");
const qTypeBadge = document.getElementById("q-type");
const questionText = document.getElementById("question-text");
const visualAid = document.getElementById("visual-aid");

const optionsContainer = document.getElementById("options-container");
const inputContainer = document.getElementById("input-container");
const completeInput = document.getElementById("complete-input");
const submitCompleteBtn = document.getElementById("submit-complete-btn");

const supportBtn = document.getElementById("support-btn");
const mmarkBtn = document.getElementById("mmark-btn");
const helpBox = document.getElementById("help-box");

const feedbackOverlay = document.getElementById("feedback-overlay");
const teamBadge = document.getElementById("team-badge");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackExplanation = document.getElementById("feedback-explanation");
const finalScoreText = document.getElementById("final-score-text");

const openScratchpadBtn = document.getElementById("open-scratchpad-btn");
const scratchpadModal = document.getElementById("scratchpad-modal");
const closePadBtn = document.getElementById("close-pad-btn");
const clearPadBtn = document.getElementById("clear-pad-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorBtns = document.querySelectorAll(".pen-color");
const canvas = document.getElementById("scratchpad-canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let currentPenColor = "#1e293b";
let isEraser = false;

const clubLogos = {
  manUtdUrl: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
  manCityUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
  manUtdFallback: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="46" fill="#DA291C" stroke="#FBE122" stroke-width="5"/><path d="M30 32 L70 32 L65 72 L50 82 L35 72 Z" fill="#FBE122" stroke="#111" stroke-width="2"/><text x="50" y="24" font-size="9" font-weight="bold" fill="#FBE122" text-anchor="middle">MANCHESTER</text><text x="50" y="57" font-size="14" font-weight="900" fill="#DA291C" text-anchor="middle">MUFC</text><text x="50" y="92" font-size="9" font-weight="bold" fill="#FBE122" text-anchor="middle">UNITED</text></svg>',
  manCityFallback: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="46" fill="#6CABDD" stroke="#1C2C5B" stroke-width="5"/><circle cx="50" cy="50" r="34" fill="#FFFFFF" stroke="#1C2C5B" stroke-width="2"/><path d="M36 42 L64 42 L60 66 L50 73 L40 66 Z" fill="#6CABDD" stroke="#1C2C5B" stroke-width="2"/><text x="50" y="23" font-size="8.5" font-weight="bold" fill="#1C2C5B" text-anchor="middle">MANCHESTER</text><text x="50" y="58" font-size="11" font-weight="900" fill="#1C2C5B" text-anchor="middle">MCFC</text><text x="50" y="92" font-size="9" font-weight="bold" fill="#1C2C5B" text-anchor="middle">CITY</text></svg>'
};

function renderClubLogo(isManUtd) {
  teamBadge.innerHTML = "";
  const img = document.createElement("img");
  img.src = isManUtd ? clubLogos.manUtdUrl : clubLogos.manCityUrl;
  img.alt = isManUtd ? "Manchester United" : "Manchester City";
  img.onerror = function () {
    teamBadge.innerHTML = isManUtd ? clubLogos.manUtdFallback : clubLogos.manCityFallback;
  };
  teamBadge.appendChild(img);
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 120;
  timerDisplay.classList.remove("warning");
  updateTimerDisplay();

  timerInterval = setInterval(function () {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 20) {
      timerDisplay.classList.add("warning");
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  timerDisplay.textContent = "⏱️ " + String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
}

function handleTimeUp() {
  scratchpadModal.classList.add("hidden");
  const q = questions[currentQuestionIndex];
  feedbackOverlay.classList.remove("hidden");

  teamBadge.className = "team-badge man-city";
  renderClubLogo(false);

  feedbackTitle.textContent = "TEMPS ÉCOULÉ ! (INCORRECT)";
  feedbackTitle.className = "title-incorrect";
  feedbackExplanation.innerHTML = "⏰ <strong>Les 2 minutes sont terminées !</strong><br>Réponse attendue : <strong>" + q.answer + "</strong><br>" + q.explanation;
}

function loadQuestion() {
  const q = questions[currentQuestionIndex];

  questionCounter.textContent = "Question " + (currentQuestionIndex + 1) + " / " + questions.length;
  scoreDisplay.textContent = "Score : " + score;
  qTypeBadge.textContent = q.type;
  questionText.textContent = q.question;

  helpBox.classList.add("hidden");
  feedbackOverlay.classList.add("hidden");
  clearCanvas();

  if (q.visual) {
    visualAid.textContent = q.visual;
    visualAid.classList.remove("hidden");
  } else {
    visualAid.classList.add("hidden");
  }

  if (q.type === "CHOISIS") {
    optionsContainer.classList.remove("hidden");
    inputContainer.classList.add("hidden");
    optionsContainer.innerHTML = "";

    q.options.forEach(function (opt) {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", function () {
        checkAnswer(opt);
      });
      optionsContainer.appendChild(btn);
    });
  } else if (q.type === "COMPLETE") {
    optionsContainer.classList.add("hidden");
    inputContainer.classList.remove("hidden");
    completeInput.value = "";
    completeInput.focus();
  }

  startTimer();
}

submitCompleteBtn.addEventListener("click", function () {
  const userVal = completeInput.value.trim();
  if (userVal !== "") {
    checkAnswer(userVal);
  }
});

completeInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    submitCompleteBtn.click();
  }
});

supportBtn.addEventListener("click", function () {
  const q = questions[currentQuestionIndex];
  helpBox.innerHTML = "<strong>🆘 SUPPORT :</strong> " + q.supportHint;
  helpBox.classList.remove("hidden");
});

mmarkBtn.addEventListener("click", function () {
  const q = questions[currentQuestionIndex];
  helpBox.innerHTML = "<strong>🧠 الاستشارة M.MARK :</strong> " + q.mmarkAdvice;
  helpBox.classList.remove("hidden");
});

// التحقق الصارم: الصح صح والغلط غلط بدون تساهل
function checkAnswer(userAnswer) {
  clearInterval(timerInterval);
  scratchpadModal.classList.add("hidden");

  const q = questions[currentQuestionIndex];
  const cleanUser = userAnswer.trim().toLowerCase();
  const cleanCorrect = q.answer.trim().toLowerCase();
  const isCorrect = cleanUser === cleanCorrect;

  feedbackOverlay.classList.remove("hidden");

  if (isCorrect) {
    score++;
    scoreDisplay.textContent = "Score : " + score;

    teamBadge.className = "team-badge man-utd";
    renderClubLogo(true);

    feedbackTitle.textContent = "CORRECT RÉPONSE";
    feedbackTitle.className = "title-correct";
    feedbackExplanation.textContent = q.explanation;
  } else {
    teamBadge.className = "team-badge man-city";
    renderClubLogo(false);

    feedbackTitle.textContent = "INCORRECT RÉPONSE";
    feedbackTitle.className = "title-incorrect";
    feedbackExplanation.innerHTML = "❌ <strong>Réponse correcte :</strong> " + q.answer + "<br>" + q.explanation;
  }
}

nextBtn.addEventListener("click", function () {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    quizScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    finalScoreText.textContent = "Bravo ! Ton score final est de " + score + " / " + questions.length;
  }
});

restartBtn.addEventListener("click", function () {
  currentQuestionIndex = 0;
  score = 0;
  endScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  loadQuestion();
});

function resizeCanvas() {
  const w = canvas.offsetWidth || 300;
  const h = canvas.offsetHeight || 300;
  const tempImage = canvas.width > 0 && canvas.height > 0 ? ctx.getImageData(0, 0, canvas.width, canvas.height) : null;
  canvas.width = w;
  canvas.height = h;
  if (tempImage) {
    ctx.putImageData(tempImage, 0, 0);
  }
}

function clearCanvas() {
  if (canvas.width > 0 && canvas.height > 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

openScratchpadBtn.addEventListener("click", function () {
  scratchpadModal.classList.remove("hidden");
  resizeCanvas();
});

closePadBtn.addEventListener("click", function () {
  scratchpadModal.classList.add("hidden");
});

clearPadBtn.addEventListener("click", clearCanvas);

colorBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    isEraser = false;
    eraserBtn.style.outline = "none";
    colorBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    currentPenColor = btn.getAttribute("data-color");
  });
});

eraserBtn.addEventListener("click", function () {
  isEraser = true;
  colorBtns.forEach(function (b) {
    b.classList.remove("active");
  });
  eraserBtn.style.outline = "2px solid #fde047";
});

function getPointerPos(e) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;
  return {
    x: clientX - rect.left,
    y: clientY - rect.top
  };
}

function startDraw(e) {
  isDrawing = true;
  const pos = getPointerPos(e);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const pos = getPointerPos(e);

  if (isEraser) {
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 22;
  } else {
    ctx.globalCompositeOperation = "source-over";
    ctx.strokeStyle = currentPenColor;
    ctx.lineWidth = 3;
  }

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function stopDraw() {
  isDrawing = false;
  ctx.closePath();
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

canvas.addEventListener("touchstart", startDraw, { passive: false });
canvas.addEventListener("touchmove", draw, { passive: false });
canvas.addEventListener("touchend", stopDraw);

window.addEventListener("resize", function () {
  if (!scratchpadModal.classList.contains("hidden")) {
    resizeCanvas();
  }
});

loadQuestion();
  
