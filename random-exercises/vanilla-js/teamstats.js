const team =  {
    _players: [
                {firstName: 'Neymar', 
                lastName: 'da Silva Santos Junior', 
                age: 29},
                {firstName: 'Cristiano Ronaldo', 
                lastName: 'dos Santos Aveiro', 
                age: 36},
                {firstName: 'Lionel', 
                lastName: 'Andre Messi', 
                age: 33},
              ],
              get playersFirstName() { return this._players.firstName; },
              get playersLastName() { return this._players.lastName; },
              get playersAge() { return this._players.age; },
    addPlayer(firstName, lastName, age){
      let newPlayer = {
                        firstName: firstName, 
                        lastName: lastName, 
                        age: age
                      };
      this._players.push(newPlayer);
    },
    _games: [
              {opponent: 'Barcelona',
              teamPoints: 22,
              opponentPoints: 33},
              {opponent: 'Mexico',
              teamPoints: 55,
              opponentPoints: 23},
              {opponent: 'Argentina',
              teamPoints: 73,
              opponentPoints: 35}
            ],
            get gamesOpponent() { return this._games.opponent; }, 
            get gamesOpponent() { return this._games.teamPoints; },
            get gamesOpponent() { return this._games.opponentPoints; },
    addGame(opponent, teamPoints, opponentPoints){
      let newGame = {
                        opponent: opponent, 
                        teamPoints: teamPoints, 
                        opponentPoints: opponentPoints
                      };
      this._games.push(newGame);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Spain', 55, 40);
  team.addGame('Italy', 75, 10);
  team.addGame('France', 42, 44);
  
  console.log(team._players);
  console.log(team._games);
  