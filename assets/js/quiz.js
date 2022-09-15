//html elements.
const questionDiv = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const buttonsDiv = document.getElementById('quiz-buttons');
const scoreDiv = document.getElementById('score');
const nextButton = document.getElementById('next-button');
const quizContainer = document.getElementById('quiz-container');
const quizTracker = document.getElementById('quiz-tracker');
const startButton = document.getElementById('start-button');

//quiz variables.
let number = 0;
let score = 0;

//get number of questions from array and adds to results text.
document.getElementById('quiz-length').innerHTML = questions.length;

startButton.addEventListener('click', startQuiz);

/**
 * Runs getQuestion function with number = 0 variable to load first question. 
 */
function startQuiz() {

  getQuestion(number);

}

/**
 * Pulls question from array and creates elements to contain the possible answers.
 */
 function getQuestion(number) {

  //hide start quiz button and shows quiz container div.
  startButton.style.display = 'none';
  quizContainer.style.display = 'block';

  //create a paragraph element to display question text.
  let question = document.createElement('p');
  question.textContent = questions[number].questionText;
  questionDiv.append(question);

  //loop takes possible answers from array and creates a div for each, adds classes and event listener.
  let options = questions[number].options;
  for (let i = 0; i < 4; i++) {
    let option = document.createElement('div');
    option.classList.add('option', 'option-hover');
    option.innerHTML = options[i];
    answersDiv.append(option);
    option.addEventListener('click', checkAnswer);
  }

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