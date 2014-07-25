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

        name: 'StartNewGameView',

        /**
         * @constructor
         */
        initialize: function() {
            console.log('StartNewGameView.init done.');
        },

        /**
         * Main element
         */
        el: $('#container'),

        /**
         * Events
         */
        events: {
            'click .start_new_game_button' : 'onStartNewGameButtonClick'
        },

        /**
         * Model layer instance
         */
        model : StartNewGameModel,

        /**
         * Renders the new game template
         *
         * @method render
         * @public
         *
         * @return void
         */
        render: function() {
            var data = {};
            var compiledTemplate = _.template( startNewGameTemplate, data );
            this.$el.append( compiledTemplate );
        },

        /**
         * Handles a click event on a start new game button.
         *
         * @method onStartNewGameButtonClick
         * @param {String} ev   Event object
         * @return void
         */
        onStartNewGameButtonClick: function(ev) {
            ev.preventDefault();
            this.render();
            this.trigger('start-new-game-view-render-done', [this, this.name]);
        }
    });
    return StartNewGameView;
});