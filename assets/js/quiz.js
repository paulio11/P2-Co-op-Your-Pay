const questionDiv = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const buttonsDiv = document.getElementById('quiz-buttons');
const scoreDiv = document.getElementById('score');
const nextButton = document.getElementById('next-button');
const quizContainer = document.getElementById('quiz-container');
const quizTracker = document.getElementById('quiz-tracker');
const startButton = document.getElementById('start-button');

let number = 0;
let score = 0;

document.getElementById('quiz-length').innerHTML = questions.length;
startButton.addEventListener('click', startQuiz);

function startQuiz() {

  getQuestion(number);

}

function checkAnswer(event) {

  const options = document.getElementsByClassName('option');
  let resultSquare = document.createElement('div');

  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove('option-hover');
    options[i].removeEventListener('click', checkAnswer);
  }

  for (let i = 0; i < options.length; i++) {
    if (event.target.textContent === options[i].textContent) {
      let answer = questions[number].answer;
      if (event.target.textContent === answer) {
        options[i].classList.add('correct-answer');
        resultSquare.classList.add('score-box', 'score-box-correct');
        quizTracker.append(resultSquare);
        score++;
      } else {
        options[i].classList.add('incorrect-answer');
        resultSquare.classList.add('score-box', 'score-box-incorrect');
        quizTracker.append(resultSquare);
      }
    }
  }

  if (document.getElementsByClassName('correct-answer') || document.getElementById('incorrect-answer')) {
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', continueQuiz);
  }

  if (number >= (questions.length - 1)) {
    nextButton.textContent = 'Check your score!';
    nextButton.removeEventListener('click', continueQuiz);
    nextButton.addEventListener('click', endQuiz);
  }

  number++;

}