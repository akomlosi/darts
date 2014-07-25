// Filename: bootstrap.js
require.config({
    paths: {
        jquery     : 'libs/jquery/jquery',
        underscore : 'libs/underscore/underscore',
        backbone   : 'libs/backbone/backbone'
//    },
//    shim: {
//        'backbone': {
//            deps: ['jquery','underscore'],
//            exports: 'Backbone'
//        }
    }
});

require([
    'application',
], function(Application) {
    Application.initialize();
});