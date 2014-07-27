var ChronosCore = (function () {
    var _instance;
    function initialize() {
        return {

            ver: '1.0',

            /**
             * Sets namespaces recursively.
             * @returns {Object}
             */
            namespace: function () {
                var o = {}, d;
                $.each(arguments, function () {
                    d = arguments[1].split(".");
                    o = window[d[0]] = window[d[0]] || {};
                    $.each(d.slice(1), function () {
                        o = o[arguments[1]] = o[arguments[1]] || {};
                    });
                });
                return o;
            }
        };
    }
    return {
        getInstance: function () {
            if ( !_instance ) {
                _instance = initialize();
            }
            return _instance;
        }

    };

})();

var Chronos = ChronosCore.getInstance();