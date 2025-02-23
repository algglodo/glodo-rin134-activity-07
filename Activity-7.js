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

const players = [
    new Player("Anthony", "Timberwolves"),
    new Player("Embiid", "Philadelphia"),
    new Player("Lebron", "Lakers"),
    new Player("Tatum", "Boston"),
    new Player("Gilgeous-Alexander", "Oklahoma"),
    new Player("Irving", "Dallas"),
    new Player("Luka", "Lakers")
];


function Rankingsofplayers(players) {
    players.sort((a, b) => b.score - a.score);
    console.log("🏆 Rankings:");
    players.forEach((p, i) => console.log(`${i + 1}. ${p.name} - ${p.score} points`));
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

    console.log(`🏆 The Champion is ${finalists[0].name} with ${finalists[0].score} points!`);
}






