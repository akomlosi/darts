Chronos.namespace('Darts');

define(function() {
    Darts.View = Backbone.View.extend({

        name: 'View',

        /**
         * @Constructor
         * @param {Object} config   Configurables
         *
         * @return void
         */
        initialize: function(config) {
            var _el = 'body';
            if (config.el) {
                _el = config.el;
            }
            this.setElement(_el);
        },

        /**
         * Applies the given data to the given template and appends to the current element.
         *
         * @param {String} tpl    HTML fragment to append
         * @param {Object} data   Template data to apply the template
         *
         * @return void
         */
        render: function(tpl, data) {
            var compiledTemplate = _.template( tpl, data );
            this.$el.append( compiledTemplate );
        }
    });
    return Darts.View;
});
