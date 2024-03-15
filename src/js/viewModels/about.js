/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your about ViewModel code goes here
 */
define([
  "knockout",
  "appController",
  "ojs/ojmodule-element-utils",
  "accUtils",
  "ojs/ojcontext",
], function (ko, app, moduleUtils, accUtils, Context) {
  function AboutViewModel() {
    var self = this;
    console.log("here");

    self.buttonClick = function () {
      var permissions = cordova.plugins.permissions;
      // permissions.requestPermission(permissions.BLUETOOTH, success, error);
      permissions.requestPermission(
        permissions.BLUETOOTH_CONNECT,
        success,
        error,
      );

      function error() {
        console.warn("Camera permission is not turned on");
      }

      function success(status) {
        if (!status.hasPermission) error();

        BTPrinter.list(
          function (data) {
            console.log("Success");
            console.log(data); // paired bluetooth devices array
          },
          function (err) {
            console.log("Error");
            console.log(err);
          },
        );
        BTPrinter.connect(
          function (data) {
            console.log("Success connect");
            console.log(data);

            BTPrinter.printText(
              function (data) {
                console.log("Success print");
                console.log(data);
              },
              function (err) {
                console.log("Error print");
                console.log(err);
              },
              "m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            );
          },

          function (err) {
            console.log("Error connect");
            console.log(err);
          },
          "XP-P323B-57B1",
        );
      }
    };

    // Wait until header show up to resolve
    var resolve = Context.getPageContext()
      .getBusyContext()
      .addBusyState({ description: "wait for header" });
    // Header Config
    self.headerConfig = ko.observable({ view: [], viewModel: null });
    moduleUtils
      .createView({ viewPath: "views/header.html" })
      .then(function (view) {
        self.headerConfig({ view: view, viewModel: app.getHeaderModel() });
        resolve();
      });

    // Below are a set of the ViewModel methods invoked by the oj-module component.
    // Please reference the oj-module jsDoc for additional information.

    /**
     * Optional ViewModel method invoked after the View is inserted into the
     * document DOM.  The application can put logic that requires the DOM being
     * attached here.
     * This method might be called multiple times - after the View is created
     * and inserted into the DOM and after the View is reconnected
     * after being disconnected.
     */
    self.connected = function () {
      accUtils.announce("About page loaded.", "assertive");
      document.title = "About";
      // Implement further logic if needed
    };

    /**
     * Optional ViewModel method invoked after the View is disconnected from the DOM.
     */
    self.disconnected = function () {
      // Implement if needed
    };

    /**
     * Optional ViewModel method invoked after transition to the new View is complete.
     * That includes any possible animation between the old and the new View.
     */
    self.transitionCompleted = function () {
      // Implement if needed
    };
  }

  /*
   * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
   * return a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.
   */
  return AboutViewModel;
});
