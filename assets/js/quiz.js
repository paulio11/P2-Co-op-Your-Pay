//html elements.
const questionDiv = document.getElementById('question');
const answersDiv = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const quizContainer = document.getElementById('quiz-container');
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

/**
 * Checks selected answer and either continues quiz or ends quiz.
 */
function checkAnswer(event) {

  const options = document.getElementsByClassName('option');
  const quizTracker = document.getElementById('quiz-tracker');
  let resultSquare = document.createElement('div');

  //removes hover class and event listener from each option div.
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove('option-hover');
    options[i].removeEventListener('click', checkAnswer);
  }

  for (let i = 0; i < options.length; i++) {
    if (event.target.textContent === options[i].textContent) {
      //define answer using questions array.
      let answer = questions[number].answer;
      if (event.target.textContent === answer) {
        //if answer correct - add to score, add correct class, add green score box.
        options[i].classList.add('correct-answer');
        resultSquare.classList.add('score-box', 'score-box-correct');
        quizTracker.append(resultSquare);
        score++;
      } else {
        //if answer is wrong - add incorrect class, add red score box.
        options[i].classList.add('incorrect-answer');
        resultSquare.classList.add('score-box', 'score-box-incorrect');
        quizTracker.append(resultSquare);
      }
    }
  }

  //if an answer has been chosen - display button that loads next question.
  if (document.getElementsByClassName('correct-answer') || document.getElementById('incorrect-answer')) {
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', continueQuiz);
  }

  //if question number is last number - display check score button.
  if (number >= (questions.length - 1)) {
    nextButton.textContent = 'Check your score!';
    nextButton.removeEventListener('click', continueQuiz);
    nextButton.addEventListener('click', endQuiz);
  }

  //add to number so next question loads.
  number++;

}

/**
 * Clears previous question and loads the next.
 */
function continueQuiz() {

  //hide next question button.
  nextButton.style.display = 'none';
  //clear previous question and answers.
  questionDiv.innerHTML = '';
  answersDiv.innerHTML = '';
  //load next question.
  getQuestion(number);

}

/**
 * Ends quiz, displays results and if not 100% a restart button.
 */
function endQuiz() {

  //hide quiz container and buttons.
  document.getElementById('quiz-buttons').style.display = 'none';
  quizContainer.style.display = 'none';
  //show score.
  document.getElementById('score').style.display = 'block';

  //populates score-span with score variable.
  let scoreSpan = document.getElementById('score-span');
  scoreSpan.innerText = score;

  //define score feedback span.
  let scoreFeedback = document.getElementById('score-feedback');

  if (score < 7) {
    //if not all correct - show restart button, change results text.
    let restartButton = document.getElementById('restart-button');
    scoreFeedback.innerText = 'Try to get all the questions correct - click Restart Quiz below and try again.';
    restartButton.style.display = 'block';
    restartButton.addEventListener('click', restartQuiz);
  } else {
    //if all correct - doesn't show results button, change results text.
    scoreFeedback.innerText = 'Congratulations you passed the quiz!';
  }

}

/**
 * Restarts quiz by reloading page.
 */
function restartQuiz() {
  
  location.href = 'quiz.html';

}