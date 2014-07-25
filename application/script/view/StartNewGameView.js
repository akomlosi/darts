// Filename: view/game/NewGameView
define([
    'jquery',
    'underscore',
    'backbone',
    '../model/StartNewGameModel',
    // primary template for this view
    'text! /../../templates/game/startnewgame.html'

], function($, _, Backbone, StartNewGameModel, startNewGameTemplate) {
    var StartNewGameView = Backbone.View.extend({

        initialize: function()
        {
            console.log('StartNewGameView.init done.');
        },

        el: $('#container'),

        events: {
            'click a' : 'onStartNewGameClick'
        },

        model : StartNewGameModel,

        render: function()
        {
            var data = {};
            var compiledTemplate = _.template( startNewGameTemplate, data );
            this.$el.append( compiledTemplate );
        },

        onStartNewGameClick: function(ev)
        {
            ev.preventDefault();
        }
    });
    return StartNewGameView;
});