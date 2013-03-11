define(function(require) {
	"use strict";

	var ChallengesHolder = require("modules/challenge/ChallengesHolder");
	var ChallengeView = require("modules/challenge/ChallengeView");
	
	var ChallengeController = {

		fetchChallenge : function(id) {
			var challenge = ChallengesHolder.current().get(id);
			return challenge.fetch();
		},

		handle : function(id) {
		    return this.fetchChallenge(id).then(function(challenge) {
				return new ChallengeView({
					model: challenge
				});
			});

		}
		
	}
	
	return ChallengeController;
});
