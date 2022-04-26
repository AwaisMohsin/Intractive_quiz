const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form'); ///////////////To select the quiz form

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers =   ////////////Value/Answer by user
    [
      e.target.q1.value,
      e.target.q2.value,
      e.target.q3.value
    ]; 

  /////////////////To check Answer
  userAnswers.forEach((answer,index) => {  //////////////////// To match eatch user answer with right answer
    if (answer === correctAnswers[index])      ////////////Comparing////Answer are userAnswer where correct Answers every value is in correctAnswers[index]
{
      score += 25;
    }
  });
    console.log(score);
});
