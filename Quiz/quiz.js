const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "London", "Rome"],
    answer: 1
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Bill Gates", "Steve Jobs", "Elon Musk", "Mark Zuckerberg"],
    answer: 0
  },
  {
    question: "Which HTML tag is used for a paragraph?",
    options: ["<head>", "<p>", "<h1>", "<div>"],
    answer: 1
  },
  {
    question: "CSS stands for?",
    options: ["Colorful Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet"],
    answer: 1
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Manager", "Digital Output Method", "None"],
    answer: 0
  },
  {
    question: "Which year was JavaScript created?",
    options: ["1995", "2000", "1990", "1998"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let startTime;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const retryBtn = document.getElementById('retry-btn');

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  startTime = new Date();
  resultEl.classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';

  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.classList.add('option');
    btn.textContent = option;
    btn.addEventListener('click', () => handleAnswer(index, btn));
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(selectedIndex, selectedButton) {
  const q = quizData[currentQuestion];
  const buttons = document.querySelectorAll('.option');

  // Disable all buttons
  buttons.forEach(btn => btn.disabled = true);

  // Highlight correct and incorrect answers
  if (selectedIndex === q.answer) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('wrong');
    buttons[q.answer].classList.add('correct');
  }

  // Move to next question after short delay
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  const endTime = new Date();
  const timeTaken = Math.floor((endTime - startTime) / 1000);
  document.getElementById('quiz').classList.add('hidden');
  resultEl.classList.remove('hidden');
  scoreEl.textContent = `You scored ${score} out of ${quizData.length}`;
  timeEl.textContent = `Time taken: ${timeTaken} seconds`;
}

retryBtn.addEventListener('click', startQuiz);

// Start quiz on page load
startQuiz();
