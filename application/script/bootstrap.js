// Filename: bootstrap.js
require.config({
    paths: {
        jquery     : 'libs/jquery/jquery',
        underscore : 'libs/underscore/underscore',
        backbone   : 'libs/backbone/backbone'
    }
});

require([
    'jquery',
    'underscore',
    'backbone',
    'application'
], function($, _, Backbone, Application) {
    Application.initialize();
});