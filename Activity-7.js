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




