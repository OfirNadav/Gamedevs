angular.module('gamedevs.factories', [])

    .factory('GamedevsFactory', function ($http, $q) {

    var games = [
        {
            "id": "1",
            "name": "Simon's Piano",
            "description": "Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison,[1] with software programming by Lenny Cope, The original version was manufactured and distributed by Milton Bradley but now the game is currently manufactured by Hasbro. Much of the assembly language was written by Dr. Charles Kapps[citation needed], who taught computer science at Temple University and also wrote one of the first books on the theory of computer programming. Simon was launched in 1978 at Studio 54 in New York City and was an immediate success, becoming a pop culture symbol of the 1970s and 1980s.",
            "url": "pages/games/simonsPiano/simonsPiano.html",
            "picture": "simonPiano.jpg",
            "rate": 5,
            "raters": 18,
            "publishedAt": 1448693940000,
            "developer": "Ofir Nadav"
        },
        {
            "id": "2",
            "name": "Minesweeper",
            "description": "The goal of the game is to uncover all the squares that do not contain mines (with the left mouse button) without being blown up by clicking on a square with a mine underneath. The location of the mines is discovered by a process of logic. Clicking on the game board will reveal what is hidden underneath the chosen square or squares (a large number of blank squares may be revealed in one go if they are adjacent to each other). Some squares are blank but some contain numbers (1 to 8), each number being the number of mines adjacent to the uncovered square. To help avoid hitting a mine, the location of a suspected mine can be marked by flagging it with the right mouse button. The game is won once all blank squares have been uncovered without hitting a mine, any remaining mines not identified by flags being automatically flagged by the computer. However, in the event that a game is lost and the player mistakenly flags a safe square, that square will either appear with a red X covering the mine (denoting it as safe), or just a red X (also denoting it as safe).",
            "url": "pages/games/mineSweeper/mineSweeper.html",
            "picture": "minesweeper.jpg",
            "rate": 4,
            "raters": 18,
            "publishedAt": 1442543940000,
            "developer": "Ofir Nadav"
        },
        {
            "id": "3",
            "name": "Pop Those Balloons",
            "description": "A balloon fetishist is also referred to as a looner. Some balloon fetishists revel in the popping of balloons and [others] may become anxious and tearful at the very thought of popping balloons. Others enjoy blowing up balloons or sitting and lying on them.",
            "url": "pages/games/popThoseBalloons/balloons.html",
            "picture": "pop-the-baloon.jpg",
            "rate": 3,
            "raters": 18,
            "publishedAt": 1423493940000,
            "developer": "Ofir Nadav"
        },
        {
            "id": "4",
            "name": "Guess the Number",
            "description": "Guess the Number is a fun educational game that challenges kids to find a number based on greater than or less than feedback. With every correct guess the level increase and the range of numbers is grow.",
            "url": "pages/games/guessTheNumber/guessTheNumber.html",
            "picture": "guessTheNumber.jpg",
            "rate": 3,
            "raters": 18,
            "publishedAt": 144865670000,
            "developer": "Ofir Nadav"
        },
        {
            "id": "5",
            "name": "Touch the Numbers",
            "description": "Touch the Numbers is a simple game for training your reflexes and peripheral vision. Peripheral vision is an essential skill for playing baseball, football, basketball, and various sports.",
            "url": "pages/games/touchTheNumbers/touchTheNumbers.html",
            "picture": "touchTheNums.jpg",
            "rate": 5,
            "raters": 18,
            "publishedAt": 144865671000,
            "developer": "Ofir Nadav"
        }
    ];

    return {
        query: function () {
            //return $http.get('data/games.json');
            return $q(function(resolve, reject) {
                setTimeout(function() {
                    console.log('Resolving: ', games);
                    resolve(angular.copy(games));
                }, 10);
            });
        },
        getGame: function (gameId) {
            var matches = games.filter(function (game) {
                return game.id == gameId;
            })
            return matches[0];
        },
        editGame: function (game) {
            if (game.id) {
                var index = games.indexOf(game);
                games[index] = game;
            } else {
                game.id = games[games.length-1].id + 1;
                games.push(game);
            }
        },

        deleteGame : function (gameToDelete) {
            games = games.filter(function (game) {
                return game.id !== gameToDelete.id;
            });
        }

    }

});










