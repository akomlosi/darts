Chronos.namespace('Darts.view');
define([
    // Core View
    'core/View'
], function(View) {
    Darts.view.MainMenuView = View.extend({
        initialize: function(config) {
            this.constructor.__super__.initialize.call(this, config);
        }
    });
    return Darts.view.MainMenuView;
});
