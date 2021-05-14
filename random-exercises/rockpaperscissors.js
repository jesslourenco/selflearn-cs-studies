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
      return "It's a tie!";
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
            return 'Computer wins!';
      } else{
          return 'User wins!';
      }
    } else if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
            return 'Computer wins!';
      } else{
          return 'User wins!';
      } 
    } else if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
            return 'Computer wins!';
      } else{
          return 'User wins!'; 
      }   
    } else if (userChoice === 'bomb'){
      return 'BOOOM! User wins!';
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`User: ${userChoice}`);
    console.log(`PC: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  