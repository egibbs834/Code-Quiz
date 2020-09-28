// global variables
var startButton = document.getElementById("startButton");
var time = 100;
var timerStart = false;
var timerArea = document.getElementById("timerArea");
var landingPage = document.getElementById("landingPage");
var quizDiv = document.getElementById("quizDiv");
var questionText = document.getElementById("questionText");
var userChoiceA = document.getElementById("userChoiceA");
var userChoiceB = document.getElementById("userChoiceB");
var userChoiceC = document.getElementById("userChoiceC");
var correctAnswer = document.getElementById("correctAnswer");
var highScores = [];
var output = "";
var score = 0;
let i = 0;

const myQuestions = [
  {
    question: "Question 01: Which Question is this?",
    answers: ["A: CORRECT ANSWER", "B: Question 0", "C: Question 1"],
    correctAnswer: 2,
  },
  {
    question: "Question 2: Which was the correct answer to Question 01?",
    answers: ["A: B", "B: C", "C: D"],
    correctAnswer: 1,
  },
  {
    question: "Question 3: What is the tallest building in the world?",
    answers: ["A: Burj Khalifa", "B: Shanghai Tower", "C: A regular house"],
    correctAnswer: 0,
  },
  {
    question: "How many legs does a spider have?",
    answers: [
      "A: Too many to count",
      "B: Around 8, give or take 1 or 2 legs",
      "C: Did you know horseshoe crabs are in the Arachnid family? Creepy fish-spiders...",
    ],
    correctAnswer: 1,
  },
  {
    question: "Who would win in a fight?",
    answers: [
      "A: Bill Gates",
      "B: Jeff Bezos",
      "C: Elon Musk in a mech suit he built for $1 billion",
    ],
    correctAnswer: 2,
  },
  {
    question: "In what year did the War of 1812 start?",
    answers: ["A: 1812", "B: 1912", "C: 2077"],
    correctAnswer: 0,
  },
  {
    question: "How many years did the 100 Years War last?",
    answers: ["A: 100 years", "B: 116 years", "C: 2.5 months?"],
    correctAnswer: 1,
  },
  {
    question: "Who will be our next president?",
    answers: [
      "A: Donald Trump",
      "B: Joe Biden",
      "C: Elon Musk in a mech suit he built for $1 billion",
    ],
    correctAnswer: 2,
  },
];

// timer function
var timerInterval = setInterval(timer, 1000);

function timer() {
  if (timerStart) time--;
  if (time <= 0) {
    endQuiz();
    time = 0;
  }
  document.getElementById("timer").innerHTML = time;
}

// event listener when Start button is clicked
startButton.addEventListener("click", function () {
  quizDiv.style.display = "block";
  landingPage.style.display = "none";
  timerArea.style.display = "block";
  document.getElementById("keepScore").style.display = "block";
  document.getElementById("score").innerHTML = score;
  timer();
  setQuizQuestions();
  timerStart = true;
});

// renders question and answers
function setQuizQuestions() {
  questionText.textContent = myQuestions[i].question;
  userChoiceA.textContent = myQuestions[i].answers[0];
  userChoiceB.textContent = myQuestions[i].answers[1];
  userChoiceC.textContent = myQuestions[i].answers[2];
}

// user selects A
userChoiceA.addEventListener("click", function (event) {
  event.stopPropagation();
  correctAnswer = myQuestions[i].correctAnswer;
  console.log("correctAnswer " + correctAnswer);
  // check answer
  if (0 === correctAnswer) {
    // display message to user for 1  second stating if the answer is correct or incorrect
    document.getElementById("userAnswer").innerHTML = "Correct!";
    setTimeout(function () {
      document.getElementById("userAnswer").innerHTML = "";
    }, 1000);
    score++;
    // show score total
    document.getElementById("score").innerHTML = score;
  } else {
    time -= 10;
    // time penalty on wrong answer
    document.getElementById("userAnswer").innerHTML = "Incorrect!";
    setTimeout(function () {
      document.getElementById("userAnswer").innerHTML = "";
    }, 1000);
  }
//   end game if no questions left
  if (i >= myQuestions.length - 1) {
    endQuiz();
  } else {
    i++;
    setQuizQuestions();
  }
});

// user selects B
userChoiceB.addEventListener("click", function (event) {
  event.stopPropagation();
  correctAnswer = myQuestions[i].correctAnswer;
  console.log(correctAnswer);
  if (1 === correctAnswer) {
    document.getElementById("userAnswer").innerHTML = "Correct!";
    setTimeout(function () {
      document.getElementById("userAnswer").innerHTML = "";
    }, 1000);
    score++;
    document.getElementById("score").innerHTML = score;
  } else {
    time -= 10;
    document.getElementById("userAnswer").innerHTML = "Incorrect!";
    setTimeout(function () {
      document.getElementById("userAnswer").innerHTML = "";
    }, 1000);
  }
  if (i >= myQuestions.length - 1) {
    endQuiz();
  } else {
    i++;
    setQuizQuestions();
  }
});

// user selects C
userChoiceC.addEventListener("click", function (event) {
  event.stopPropagation();
  correctAnswer = myQuestions[i].correctAnswer;
  console.log(correctAnswer);
  if (2 === correctAnswer) {
    document.getElementById("userAnswer").innerHTML = "Correct!";
    setTimeout(function () {
      document.getElementById("userAnswer").innerHTML = "";
    }, 1000);
    score++;
    document.getElementById("score").innerHTML = score;
  } else {
    time -= 10;
    document.getElementById("userAnswer").innerHTML = "Incorrect!";
    setTimeout(function () {
      document.getElementById("userAnswer").innerHTML = "";
    }, 1000);
  }
  if (i >= myQuestions.length - 1) {
    endQuiz();
  } else {
    i++;
    setQuizQuestions();
  }
});

//end quiz
function endQuiz() {
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("quizDiv").style.display = "none";
  document.getElementById("timerArea").style.display = "none";
  document.getElementById("keepScore").style.display = "none";
  document.getElementById("userAnswer").innerHTML = "";
  document.getElementById("endScore").innerHTML = score;
  console.log("score: ", score);
}

//submit score and initals
function submitInitials() {
  highScores.push(document.getElementById("initials").value + ": " + score);
  showHighScores();
}

function showHighScores() {
  document.getElementById("quizDiv").style.display = "none";
  document.getElementById("gameOver").style.display = "none";
  document.getElementById("highScores").style.display = "block";

  output = "";
  for (let k = 0; k < highScores.length; k++) {
    output = output + "  " + highScores[k];
  }
  document.getElementById("displayScore").innerHTML = output;  
}

// refresh the site to the home container page
function startOver() {
  document.getElementById("highScores").style.display = "none";
  document.getElementById("landingPage").style.display = "block";
  refresh();
}

// refresh settings for new game
function refresh() {
  time = 100;
  timerStart = false;
  i = 0;
  score = 0;
}
