// Filename: models/StartNewGameModel

define([
    'underscore',
    'backbone'
], function(_, Backbone){
    var StartNewGameModel = Backbone.Model.extend({
        defaults: {
            name: "StartNewGameModel"
        },
        initialize: function() {
            console.log('start new game model construction done.')
        }
    });
    return StartNewGameModel;
});