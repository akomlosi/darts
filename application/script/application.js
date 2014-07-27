// Filename: application.js

define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'layout/Layout'
], function($, _, Backbone, Router, Layout) {
    var initialize = function() {

        // Setting the main namespace
        Chronos.namespace('Darts');

        Router.initialize();

        Darts.Layout = new Layout;
        console.log('Application.init done.');
    };

    return {
        initialize: initialize
    };
});