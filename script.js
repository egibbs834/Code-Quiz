(function(){
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });

      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Question 01: Which Question is this?",
        answers: {
          a: "CORRECT ANSWER",
          b: "Question 0",
          c: "Question 1"
        },
        correctAnswer: "c"
      },
      {
        question: "Question 2: Which was the correct answer to Question 01?",
        answers: {
          a: "b:",
          b: "c:",
          c: "d:"
        },
        correctAnswer: "b"
      },
      {
        question: "Question 3: What is the tallest building in the world?",
        answers: {
          a: "Burj Khalifa",
          b: "Shanghai Tower",
          c: "A regular house"
        },
        correctAnswer: "a"
      },
      {
        question: "How many legs does a spider have?",
        answers: {
            a: "Too many to count",
            b: "Aounrd 8, give or take 1 or 2 legs",
            c: "Did you know horseshoe crabs are in the Arachnida family? Creepy fish-spiders...",            
        },
        correctAnswer: "b"
      },
      {
        question: "Who would win in a fight?",
        answers: {
            a: "Bill Gates",
            b: "Jeff Bezos",
            c: "Elon Musk in a mech suit he built for $1 billion",
        },
        correctAnswer: "c"
      },
      {
        question: "In what year did the War of 1812 start?",
        answers: {
            a: "1812",
            b: "1912",
            c: "CyberPunk2077",
        },
        correctAnswer: "a"
      },
      {
        question: "How many years did the 100 Years War last?",
        answers: {
            a: "100 years",
            b: "116 years",
            c: "2.5 months?",
        },
        correctAnswer: "b"
      },
      {
        question: "Who will be our next president?",
        answers: {
            a: "Donald Trump",
            b: "Joe Biden",
            c: "Elon Musk in a mech suit he built for $1 billion"            
        },
        correctAnswer: "c"
      },
    
    ];
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

  })();

//  I wish this was a working countdown clock 
var a = 0;
a++;
var b = 0;
b++
var c = 100;

function timer() {
    c = c - 1;
    if (c < 100) {
        time.innerHTML = c;
    }
    if (c < 1) {
        window.clearInterval(update);
    }
}

update = setInterval("timer001", 1000);