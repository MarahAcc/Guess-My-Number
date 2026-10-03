'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNuber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore =0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No nomber!';
    } else if (guess === secretNuber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNuber;

      if(score > highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
      }
    } else if (guess > secretNuber) {
      document.querySelector('.message').textContent = '📉 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < secretNuber) {
      document.querySelector('.message').textContent = '📈 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '👎 You lose the game!';
    document.querySelector('body').style.backgroundColor = '#f93737bd';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNuber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
