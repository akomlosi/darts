// Filename: collection/GameCollection
Chronos.namespace('Darts.collection');

define([
    'underscore',
    'backbone',

    // Core Collection
    'core/Collection',

    // Main Menu View
    'view/MainMenuView'

], function(
    _,
    Backbone,
    Collection,
    MainMenuView
    )
{
    Darts.collection.MainMenuCollection = Darts.Collection.extend({

        /** @var {String}   name of the collection */
        name: 'MainMenuCollection',
        /** @var {Object}   views */
        views : {},

        /**
         * @constructor
         */
        initialize: function() {
            this.constructor.__super__.initialize.call(this);
            console.log('Darts.Collection.init done.');
            this.views.MainMenuView = new MainMenuView({el: '#container'});
//            this.views.StartNewGameView.on('start-new-game-view-render-done', this.onStartNewGameViewRenderDone, this);
//        },
//
//        /**
//         * Handles a view's render-done event.
//         * @param {Object} ev   Event Object
//         */
//        onStartNewGameViewRenderDone: function(ev) {
//            console.log('test done! ', ev[0].target, this.name);
        }
    });
    return Darts.collection.MainMenuCollection;
});