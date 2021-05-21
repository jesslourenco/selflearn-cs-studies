const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    return userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ? userInput : console.log('Please provide a valid input.');
  }
  
  const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 4);
    if (choice === 0) {
      return 'rock';
    }
    else if (choice === 1) {
      return 'paper';
    }  
    else {
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {  
    if (userChoice === computerChoice){
      return "tie";
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
            return 'computer';
      } else{
          return 'user';
      }
    } else if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
            return 'computer';
      } else{
          return 'user';
      } 
    } else if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
            return 'computer';
      } else{
          return 'user'; 
      }   
    } else if (userChoice === 'bomb'){
      return 'user';
    }
  }
  
  const playRound = () => {
    const promptChoice = prompt("Do you pick Rock, Paper or Scissors?");
    const userChoice = getUserChoice(promptChoice);
    const computerChoice = getComputerChoice();
    console.log(`Player: ${userChoice}`);
    console.log(`PC: ${computerChoice}`);
    const winner = (determineWinner(userChoice, computerChoice));
    if (winner === 'user' | winner === 'computer'){
      console.log(`${winner} wins!`);
    } 
    else{
      console.log(`${winner}!`);
    }
    
    return winner;
  }

  const main = () => {
    let i = userWins = pcWins = ties = 0;
    console.log("Welcome to Rock, Paper and Scissors!");

    while (i < 5){
      console.log('Round' + ' ' + i);
      let roundWinner = playRound();
      if (roundWinner === 'user'){
        userWins++;
      }
      else if (roundWinner === 'computer'){
        pcWins++;
      }
      else{
        ties++;
      }
      i++;
    }
  
    if (userWins > pcWins){
      console.log(`\n The player won the game with ${userWins} victories! Congrats!`);
    }
    else if (userWins < pcWins){
      console.log(`\n The computer won the game with ${pcWins} victories! The machine prevails once again!`);
    }
    else{
      console.log(`\n Game ends in a tie with ${userWins} victories for the player and ${pcWins} victories for the computer!`);
    }; 
  }
 
main();
  