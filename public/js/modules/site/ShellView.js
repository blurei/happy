define(function(require) {
	"use strict";

	var Backbone = require("Backbone");
	var ChallengesHolder = require("modules/challenge/ChallengesHolder");
	var ChallengeListView = require("modules/challenge/ChallengeListView");

	var ShellView = Backbone.View.extend({

		el: "body .shell",
		
		renderSiteNav: function() {
			var challengeListView = new ChallengeListView({
				model : ChallengesHolder.current()
			});
			
			this.$el.find("nav").append(challengeListView.render().el);
		},

		render: function() {
			this.renderSiteNav();
			return this;
		}
		
	});

	return new ShellView();
}); 