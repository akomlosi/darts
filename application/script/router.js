// Filename: router.js

define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var ApplicationRouter = Backbone.Router.extend({
        routes: {
//            // Default
//            '*actions': 'defaultAction'
        }
    });

    var initialize = function() {
        var _applicationRouter = new ApplicationRouter;
//        _applicationRouter.on('route:startNewGame', function() {
//            var _startNewGameView = new StartNewGameView();
//            _startNewGameView.render();
//        });
//        _applicationRouter.on('defaultAction', function(actions){
//            // We have no matching route, lets just log what the URL was
//            console.log('No route:', actions);
//        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});