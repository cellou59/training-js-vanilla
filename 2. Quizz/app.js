const responses = ["c", "a", "b", "a", "c"];
const reponsesQuizz = [`ð Peut mieux faire ! ð`,"ð­ Peut mieux faire ! ð­","ð Il reste quelques erreurs. ð­","â¨ Encore un effort ... ð","â¨ Vous y Ãªtes presque ! â¨","âï¸ Bravo, c'est un sans faute ! âï¸",];

const quizzButton = document.querySelector(".quizz-button");
const quizzForm = document.querySelector(".quizz-form");

const correctResponses = 0;

function getQuizzAnswer() {
  const selectedResponses = document.querySelectorAll("input:checked");

  const anwsers = Object.values(selectedResponses).map(
    (anwser) => anwser.defaultValue
  );
  makeCorrection(anwsers);
}

function makeCorrection(anwsers) {
  const goodAnswersIndex = [];
  anwsers.forEach((anwser, index) => {
    if (anwser === responses[index]) {
      goodAnswersIndex.push(index);
    }
  });
  renderResult(goodAnswersIndex);
}

function renderResult(goodAnswersIndex){
    const responseContainers = document.querySelectorAll(".question-container");
    for( i=0; i< responseContainers.length;i++) responseContainers[i].style.backgroundColor = 'red' 
    goodAnswersIndex.forEach(i => responseContainers[i].style.backgroundColor = 'green' )
   
    const answerContainer = document.querySelector(".answer-container");
    
    const answerEl = document.querySelector(".answer");
    const scoreEl = document.querySelector(".score");
    const commentEl = document.querySelector(".comment");

    scoreEl.innerText = `${goodAnswersIndex.length}/5`
    answerEl.innerText = reponsesQuizz[goodAnswersIndex.length];
    if(goodAnswersIndex.length !== 5){
        commentEl.innerText = "Retentez une autre rÃ©ponse dans les cases rouges, puis re-validez !";
    }else{
        commentEl.innerText = "Quelle culture ...";
    }
    answerContainer.style.visibility='unset'
}

quizzForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getQuizzAnswer();
});
