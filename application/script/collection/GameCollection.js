// Filename: collection/GameCollection

define([
    'underscore',
    'backbone',
    'model/StartNewGameModel'
], function(_, Backbone, StartNewGameModel){
    var GameCollection = Backbone.Collection.extend({
        model: StartNewGameModel
    });
    // You don't usually return a collection instantiated
    return GameCollection;
});