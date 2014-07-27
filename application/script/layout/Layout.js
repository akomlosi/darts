// Filename: Layout.js

define([
    "collection/MainMenuCollection"
], function(MainMenuCollection) {
    /**
     * @constructor
     */
    var Layout = function() {
        this.initialize();
    };
    Layout.prototype = {
        initialize: function() {
            new MainMenuCollection;
            console.log('Layout.init done.');
        }
    };
    return Layout;
});
