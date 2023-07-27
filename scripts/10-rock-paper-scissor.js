
  let score = JSON.parse(localStorage.getItem('score')) || {
   wins: 0,
   loses: 0,
   ties: 0
  };

  updateScoreElement();

  function playGame(playerMove) {
   const computerMove = pickComputerMove();
   let result = '';
   if (playerMove === 'SCISSOR') {
    if (computerMove === 'ROCK') {
     result = 'YOU LOSE';
    }
    else if (computerMove === 'PAPER') {
     result = 'YOU WIN';
    }
    else if(computerMove==='SCISSOR') {
     result = 'TIE';
    }
   }
   else if (playerMove === 'PAPER') {
    if (computerMove === 'ROCK') {
     result = 'YOU WIN';
    }
    else if (computerMove === 'PAPER') {
     result = 'TIE';
    }
    else if(computerMove === 'SCISSOR') {
     result = 'YOU LOSE';
    }
   }
   else if(playerMove==='ROCK') {
    if (computerMove === 'ROCK') {
     result = 'TIE';
    }
    else if (computerMove === 'PAPER') {
     result = 'YOU LOSE';
    }
    else if (computerMove === 'SCISSOR') {
     result = 'YOU WIN';
    }
   }
   if (result === 'YOU WIN') {
    score.wins += 1;
   }
   else if (result === 'YOU LOSE') {
    score.loses += 1;
   }
   else {
    score.ties += 1;
   }
   localStorage.setItem('score', JSON.stringify(score));
   
   updateScoreElement();

   document.querySelector('.js-result').innerHTML = result;
   document.querySelector('.js-moves').innerHTML = `You
  <img src="/images/${playerMove}-emoji.png" class="move-icon" >
  <img src="/images/${computerMove}-emoji.png" class="move-icon">
  Computer`;
   }


  function updateScoreElement() {
    document.querySelector('.js-score')
     .innerHTML = `Wins:${score.wins}, Losses:${score.loses}, Ties:${score.ties}`;
   }

  function pickComputerMove() {
   const randomNum = Math.random();
   let computerMove = '';
   if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = 'ROCK';
   }
   else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = 'PAPER';
   }
   else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = 'SCISSOR';
   }
   return computerMove;
  }