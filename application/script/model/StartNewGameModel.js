// Filename: models/StartNewGameModel

define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var StartNewGameModel = Backbone.Model.extend({
        defaults: {
            name: "StartNewGameModel"
        }
    });
    return StartNewGameModel;
});