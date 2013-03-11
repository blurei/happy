define(function(require) {
	"use strict";

	var BaseView = require("modules/base/BaseView");
	var homeTemplate = require("text!templates/home/home.html");

	var HomeView = BaseView.extend({
		
		template : homeTemplate,
		
		onClose: function() {
			//unbind events and close subviews here
		}
		
	});

	return HomeView;
}); 