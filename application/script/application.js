// Filename: application.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'collection/MainMenuCollection'
], function($, _, Backbone, Router, MainMenuCollection) {
    var initialize = function() {
        console.log('application.init done.');
        Router.initialize();
        var _mainMenuCollection = new MainMenuCollection;
    }

    return {
        initialize: initialize
    };
});