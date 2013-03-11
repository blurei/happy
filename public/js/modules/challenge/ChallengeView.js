define(function(require) {
    "use strict";

    var BaseView = require("modules/base/BaseView");
    var challengeTemplate = require("text!templates/challenge/challenge.html");

    var ChallengeView = BaseView.extend({    	
  	
        template: challengeTemplate,
        
        onClose: function() {
        	//close subviews
        }
    });

    return ChallengeView;
});