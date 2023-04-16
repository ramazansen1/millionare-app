const quizData = [
  {
    question: "What sort of animal is Walt Disney's Dumbo?",
    a: "Dear",
    b: "Elephant",
    c: "Rabbit",
    d: "Donkey",
    correct: "b",
  },
  {
    question:
      "What was the name of the Spanish waiter in the TV sitcom 'Fawlty Towers'?",
    a: "Manuel",
    b: "Pedro",
    c: "Alfonso",
    d: "Javier",
    correct: "a",
  },
  {
    question:
      "Which battles took place between the Royal Houses of York and Lancaster?",
    a: "Thirty Years War",
    b: "Hundred Years War",
    c: "War of the Roses",
    d: "English Civil War",
    correct: "c",
  },
  {
    question:
      "Which former Beatle narrated the TV adventures of Thomas the Tank Engine?",
    a: "John Lennon",
    b: "Paul McCartney",
    c: "George Harrison",
    d: "Ringo Starr",
    correct: "d",
  },
  {
    question: "Queen Anne was the daughter of which Enlish Monarch?",
    a: "James II",
    b: "Henry VIII",
    c: "Victoria",
    d: "William I",
    correct: "a",
  },
];

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  //   console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2> The Quiz is Completed, You got ${score * 20} points! </h2>
        <button class="submit" onClick="location.reload()"> Try Again! </button>
        `;
    }
  }
});
