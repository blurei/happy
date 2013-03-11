define(function(require) {
	"use strict";

	var $ = require("jquery");
	var Backbone = require("Backbone");
	var MainContentRenderer = require("modules/site/MainContentRenderer");
	var ShellView = require("modules/site/ShellView");
	var ChallengesHolder = require("modules/challenge/ChallengesHolder");
	
	function readySite() {		
		ShellView.render.apply(ShellView, null);
		//importing this creates a router ready to listen to routes
		require("modules/routers/Router");
		Backbone.history.start({});
	}

	var Application = {

		initialize: function() {				
			MainContentRenderer.init();
			//TODO: handle fail
			ChallengesHolder.init().then(readySite);		
		}

	};

	return Application;
});
