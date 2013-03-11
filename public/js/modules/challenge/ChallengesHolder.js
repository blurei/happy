define(function(require) {
    "use strict";

    var Challenges = require("modules/challenge/Challenges");

    var challenges = null;

    var ChallengesHolder =  {

        init: function() {
            challenges = new Challenges();
            return challenges.fetch();
        },

        current: function() {
            return challenges;
        }
    };

    return ChallengesHolder;
});
