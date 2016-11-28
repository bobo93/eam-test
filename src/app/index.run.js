(function() {
  'use strict';

  angular
    .module('praca')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
