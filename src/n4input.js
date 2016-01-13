;(function(ng) {
  "use strict";

  ng.module('n4input', [])
    .service('GreetingService', [function GreetingService() {
          this.sayHello = function() {
             return "hello there!";
          };
      }]);
}(angular));
