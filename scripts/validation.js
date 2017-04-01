(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {
alert("validation");

        isValidUsername: function(user1) {

            if (user1.length > 8) {
                return false;
            }
            return true;
        },

        isValidPass: function(p1, p2) {
            if (p1 == p2) {
                return true;
            }
            return false;
        }

    };


    App.Validation = Validation;
    window.App = App;
})(window);
