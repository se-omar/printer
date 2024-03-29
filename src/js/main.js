/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */


(function () {
    // The "oj_whenReady" global variable enables a strategy that the busy context whenReady,
    // will implicitly add a busy state, until the application calls applicationBootstrapComplete
    // on the busy state context.
    window["oj_whenReady"] = true;

    requirejs.config(
    {
      baseUrl: 'js',

      // Path mappings for the logical module names
      paths:
      // injector:mainReleasePaths
      {
        'ojs': 'libs/oj/v11.0.1/debug',
        'ojL10n': 'libs/oj/v11.0.1/ojL10n',
        'ojtranslations': 'libs/oj/v11.0.1/resources',
          'knockout': 'libs/knockout/knockout-3.5.1.debug',
  'knockout-mapping': 'libs/knockout/knockout.mapping-latest.debug',
  'jquery': 'libs/jquery/jquery-3.6.0',
  'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1',
  'text': 'libs/require/text',
  'hammerjs': 'libs/hammer/hammer-2.0.8',
  'signals': 'libs/js-signals/signals',
  'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.2',
  'css': 'libs/require-css/css.min',
  'css-builder': 'libs/require-css/css-builder',
  'normalize': 'libs/require-css/normalize',
  'preact': 'libs/preact/dist/preact.umd',
  'preact/hooks': 'libs/preact/hooks/dist/hooks.umd',
  'proj4': 'libs/proj4js/dist/proj4-src',
  'touchr': 'libs/touchr/touchr'
  ,
        'chai': 'libs/chai/chai-4.3.4'
      }
      // endinjector
    }
  );
}());

/**
 * A top-level require call executed by the Application.
 * Although 'knockout' would be loaded in any case (it is specified as a  dependency
 * by some modules), we are listing it explicitly to get the reference to the 'ko'
 * object in the callback
 */
require(['ojs/ojbootstrap', 'knockout', 'appController', 'ojs/ojlogger', 'ojs/ojknockout',
'ojs/ojmodule',  'ojs/ojnavigationlist'],
  function (Bootstrap, ko, app, Logger) { // this callback gets executed when all required modules are loaded

    Bootstrap.whenDocumentReady().then(
      function() {
        function init() {
          // Bind your ViewModel for the content of the whole page body.
          ko.applyBindings(app, document.getElementById('globalBody'));
        }

        // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready
        // event before executing any code that might interact with Cordova APIs or plugins.
        if (document.body.classList.contains('oj-hybrid')) {
          document.addEventListener("deviceready", init);
        } else {
          init();
        }

    });
  }
);
