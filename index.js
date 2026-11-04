function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


const game = gameObject();

//Function to find a player by name on either team
function findPlayer(playerName) {
    const teams = Object.values(game);
    for (const team of teams) {
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
    return null;
}

//Points scored by a player
function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    let points = 0;
    if (player) {
        points = player.points;
    }
    return points;
}

//Player's shoe size
function shoeSize(playerName) {
    const player = findPlayer(playerName);
    let size = 0;
    if (player) {
        size = player.shoe;
    }
    return size;
}

//Team colors
function teamColors(teamName) {
    const teams = Object.values(game);
    for (const team of teams) {
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
    return null;
}

//Array of both teams' names
function teamNames() {
    const teams = Object.values(game);
    const names = teams.map(team => team.teamName);
    return names;
}

//Array of team jersey numbers
function playerNumbers(teamName) {
    const teams = Object.values(game);
    const team = teams.find(team => team.teamName === teamName);

    let numbers = [];
    if (team) {
        numbers = Object.values(team.players).map(player => player.number);
    }
    return numbers;
}

//stats for a player
function playerStats(playerName) {
    const player = findPlayer(playerName);
    return player || null;
}

//Player with the largest shoe size and their rebounds
function bigShoeRebounds() {
    const teams = Object.values(game);
    let players = [];
    for (const team of teams) {
        players = players.concat(Object.values(team.players));
    }

    const playerWithLargestShoe = players.reduce((largest, player) => {
        let result = largest;
        if (player.shoe > largest.shoe) {
            result = player;
        }
        return result;
    });

    return playerWithLargestShoe.rebounds;
}




console.log(numPointsScored("Ben Gordon")); // Output: 33
console.log(shoeSize("Ben Gordon")); // Output: 15
console.log(teamColors("Golden State Warriors")); // Output: ["Warrior Blue", "Golden Yellow"]
console.log(teamNames()); // Output: ["Golden State Warriors", "Charlotte Hornets"]
console.log(playerNumbers("Golden State Warriors")); // Output: [1, 2, 3, 4, 5]
console.log(playerStats("Ben Gordon")); // Output: { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 }
console.log(bigShoeRebounds()); // Output: 12