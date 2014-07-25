// Filename: application.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'view/StartNewGameView'
], function($, _, Backbone, Router, StartNewGameView) {
    var initialize = function() {
        console.log('application.init done.');
        Router.initialize();
        var _startNewGameView = new StartNewGameView;
    }

    return {
        initialize: initialize
    };
});