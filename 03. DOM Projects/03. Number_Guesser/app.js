/* 
GAME FUNCTION:
- Player must guess a number between a min and max
- Player get a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max);
    guessesLeft = 3;

// UI Elements
const game    = document.querySelector('#game');
      minNum  = document.querySelector('.min-num');
      maxNum  = document.querySelector('.max-num');
      guessInput = document.querySelector('#guess-input');
      guessBtn = document.querySelector('#guess-btn');
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
  if (e.target.className === 'play-again'){
    location.reload();
  } 


});

// Listen for guess
  guessBtn.addEventListener('click', function(){
    // console.log(guessInput.value);
    let guess = parseInt(guessInput.value);
    // console.log(guess);
  // Validate
  if (isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a value between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum){
    //Game over - won
    
    gameOver(true, `${winningNum} is correct...YOU WIN!`);
  } else {
    // Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
      
    } else {
      //Game Continues - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';

      // Set text color
      message.style.color = 'red';

      // Clear Input
      guessInput.value = '';

      // Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`);

    }
  }

  });

  


  // Game over
  function gameOver(won, msg){
    let color;

    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    
    // Change border color
    guessInput.style.borderColor = color;

    // Set text color
    message.style.color = color;

    // Set Message for the palyer
    setMessage(msg);

    // Play Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

  }

  // Get Random Number
  function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Set Message
  function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
  }
  