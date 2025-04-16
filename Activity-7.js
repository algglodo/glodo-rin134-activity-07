class Player {
  constructor(name, team) {
      this.name = name;
      this.team = team;
      this.score = 0;
  }

  shoot(attempts = 5) {
      this.score = Array.from({ length: attempts }, () => Math.random() > 0.5).filter(Boolean).length;
  }
}

let players = [
  new Player("Anthony", "Timberwolves"),
  new Player("Embiid", "Philadelphia"),
  new Player("Lebron", "Lakers"),
  new Player("Tatum", "Boston"),
  new Player("Gilgeous-Alexander", "Oklahoma"),
  new Player("Irving", "Dallas"),
  new Player("Luka", "Lakers")
];

document.getElementById("player-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const playerName = document.getElementById("player-name").value;
  const teamName = document.getElementById("team-name").value;
  
  const newPlayer = new Player(playerName, teamName);
  players.push(newPlayer);
  
  document.getElementById("player-name").value = "";
  document.getElementById("team-name").value = "";

  displayPlayers();
});

function displayPlayers() {
  const playerList = document.getElementById("players");
  playerList.innerHTML = "";  // Clear existing player list
  players.forEach(player => {
      const playerItem = document.createElement("li");
      playerItem.textContent = `${player.name} - ${player.team}`;
      playerList.appendChild(playerItem);
  });
}

function Rankingsofplayers(players) {
  players.sort((a, b) => b.score - a.score);
  const rankingsDiv = document.getElementById("rankings");
  rankingsDiv.innerHTML = "<h3>🏆 Rankings:</h3>";  // Reset rankings
  players.forEach((p, i) => {
      const rankItem = document.createElement("p");
      rankItem.textContent = `${i + 1}. ${p.name} - ${p.score} points`;
      rankingsDiv.appendChild(rankItem);
  });
}

function Champion(players) {
  let highestScore = players[0].score;
  let finalists = players.filter(p => p.score === highestScore);

  while (finalists.length > 1) {
      console.log(`🔥 Tiebreaker for: ${finalists.map(p => p.name).join(", ")}`);
      finalists.forEach(p => p.shoot());

      highestScore = Math.max(...finalists.map(p => p.score));
      finalists = finalists.filter(p => p.score === highestScore);
  }

  const championDiv = document.getElementById("champion");
  championDiv.innerHTML = `<h3>🏆 The Champion is ${finalists[0].name} with ${finalists[0].score} points!</h3>`;
}

document.getElementById("start-game").addEventListener("click", function() {
  players.forEach(player => player.shoot());
  Rankingsofplayers(players);
  Champion(players);
});
