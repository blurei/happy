define(function(require) {
	"use strict";

	var RouterFactory = require("modules/routers/RouterFactory");
	var HomeView = require("modules/home/HomeView");
	var PageNotFoundView = require("modules/error/PageNotFoundView");
	var ChallengeController = require("modules/challenge/ChallengeController");

	var Router = RouterFactory.create({

		routes : {

			"" : "home",
			"#" : "home",
			"challenge/:id" : "challenge",
			"*undefined" : "pageNotFound"
		},

		home : function() {
			return new HomeView();
		},

		challenge : function(id) {
			return ChallengeController.handle(id);
		},

		pageNotFound : function() {
			return new PageNotFoundView();
		}
	});

	return new Router();
}); 