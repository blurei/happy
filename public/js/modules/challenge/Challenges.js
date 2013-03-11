define(function(require) {
    "use strict";

    var Backbone = require("Backbone");
    var Challenge = require("modules/challenge/Challenge");
    
    var Challenges = Backbone.Collection.extend({

        model: Challenge,
        
        url: "http://happify-test-api.herokuapp.com/api/challenges",
            
        parse: function(data) {
          return data;
        }
    });
    
    return Challenges;
});