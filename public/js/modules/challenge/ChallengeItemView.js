define(function(require) {
    "use strict";

    var BaseView = require("modules/base/BaseView");
    var challengeItemTemplate = require("text!templates/challenge/challenge-item.html");

    var ChallengeListView = BaseView.extend({    	
    	tagName: "li",    	
        template: challengeItemTemplate
    });

    return ChallengeListView;
});