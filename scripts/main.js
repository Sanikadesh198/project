(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-user-login="form"]';

    var App = window.App;

    var FormHandler = App.FormHandler;
    var Validation = App.Validation;

    var Formhandler = new FormHandler(FORM_SELECTOR);

    Formhandler.CheckCredentialsUserName(Validation.isValidUsername);
    Formhandler.CheckCredentialsPassword(Validation.isValidPass);
    Formhandler.addCredentials1(Validation.isValidFirstName);
    Formhandler.addCredentials2(Validation.isValidLastName);

})(window);
