var friends = require('../data/friends');

module.exports = function (app) {
    app.get('/api/survey', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function (req, res) {
        

        // Receive user details (name, photo, scores)
        var user = req.body;

        // parseInt for scores
        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }


    })
}