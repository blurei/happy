define(function(require) {
	"use strict";

	var BaseView = require("modules/base/BaseView");
	var ChallengeItemView = require("modules/challenge/ChallengeItemView");
	var challengeListTemplate = require("text!templates/challenge/challenge-list.html");

	var ChallengeListView = BaseView.extend({

		template: challengeListTemplate,
		
		onClose: function() {
			//TODO: keep track of item subviews and close them here
		},

		$challengeList: function() {
			return this.$el.find(".challenge-list");
		},
		
		afterRender: function() {			
			this.$challengeList().empty();
			
			this.model.models.forEach(function(challenge) {
				this.$challengeList().append(new ChallengeItemView({
					model : challenge
				}).render().el);
			}, this);
			
		}
		
	});

	return ChallengeListView;
});