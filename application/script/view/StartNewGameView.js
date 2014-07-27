// Filename: view/game/NewGameView

Backbone.namespace('Darts.View');

define([
    'jquery',
    'underscore',
    'backbone',
    '../model/StartNewGameModel'
//    // primary template for this view
//    'text! /../../templates/game/startnewgame.html'

], function($, _, Backbone, StartNewGameModel) {
    Darts.View.StartNewGameView = Darts.View.extend({

        name: 'StartNewGameView',

        /**
         * @constructor
         */
        initialize: function(el) {
            Darts.View.prototype.initialize.call(this, el);
            console.log('StartNewGameView.init done.');
        },

        /**
         * Events
         */
        events: {
            'click .start_new_game_button'   : 'onStartNewGameButtonClick',
            'click .select_game_type_button' : 'onSelectGameTypeButtonClick'
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
            Darts.View.render.call(this, startNewGameTemplate, data);
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
            this.trigger('start-new-game-view-render-done', [ev, this, this.name]);
        }
    });
    return StartNewGameView;
});