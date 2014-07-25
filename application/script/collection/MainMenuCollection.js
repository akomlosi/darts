// Filename: collection/GameCollection

define([
    'underscore',
    'backbone',

    // Start new game
    'model/StartNewGameModel',
    'view/StartNewGameView'

], function(_, Backbone, StartNewGameModel, StartNewGameView) {
    var GameCollection = Backbone.Collection.extend({
        name: 'MainMenuCollection',
        models: {
            'StartNewGameModel' : new StartNewGameModel
        },
        views : {
            'StartNewGameView'  : new StartNewGameView
        },

        initialize: function(){
            console.log('colleciton init ', this.models, this.views)
            this.views.StartNewGameView.on('start-new-game-view-render-done', this.onStartNewGameViewRenderDone, this);
        },

        onStartNewGameViewRenderDone: function(ev) {
            console.log('test done! ', ev, this.name)
        }
    });
    // You don't usually return a collection instantiated
    return GameCollection;
});