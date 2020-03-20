var friends = require('../data/friends');

module.exports = function (app) {
    // display the friends database
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function (req, res) {

        // Receive user details (name, scores)
        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        // get just the scores from the user object
        userScoresInts = userScores.map(function (nums) {
            return parseInt(nums, 10);
        })

        // total all of the users scores into a total score
        userTotScore = userScoresInts.reduce(function (acc, userScoresInts) {
            return acc + userScoresInts;
        }, 0)

        // create a best friend object to hold their info
        // set to 41 since the greatest possible difference for the survey is 40
        bfMatch = {
            name: '',
            photo: '',
            scoreDif: 41
        }

        // loop through all the friends in the database
        for (i = 0; i < friends.length; i++) {
            totScoreDifs = 0;

            var friendScores = friends[i].scores;
            // get the i-th friends total score
            friendTotScore = friendScores.reduce(function (acc, friendScores) {
                return acc + friendScores;
            }, 0)

            // get the absolute differenct in the user and i-th friends score
            totScoreDifs += Math.abs(userTotScore - friendTotScore);

            // if the i-th friends score difference is less than the current bf match, become the new match
            if (totScoreDifs < bfMatch.scoreDif) {
                bfMatch.name = friends[i].name;
                bfMatch.photo = friends[i].photo;
                bfMatch.scoreDif = totScoreDifs;
            }
        }

        // pass the bfMatch as the response
        res.json(bfMatch);
    })
}