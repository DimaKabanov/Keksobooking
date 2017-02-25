'use strict';

window.utils = (function () {
  var KEY_CODE_ENTER = 13;
  var KEY_CODE_ESCAPE = 27;

  return {
    pressingEnter: function (evt) {
      return evt.keyCode && evt.keyCode === KEY_CODE_ENTER;
    },
    pressingEscape: function (evt) {
      return evt.keyCode && evt.keyCode === KEY_CODE_ESCAPE;
    },
    syncValues: function (element, value) {
      element.value = value;
    },
    syncValueWithMin: function (element, value) {
      element.min = value;
    },
    hideElementsArray: function (array, className) {
      array.forEach(function (item) {
        item.classList.add(className);
      });
    },
    showElementsArray: function (array, className) {
      array.forEach(function (item) {
        item.classList.remove(className);
      });
    },
    findElementInArrayByClass: function (array, className) {
      var result = false;
      array.forEach(function (item) {
        if (item.classList.contains(className)) {
          result = true;
        }
      });
      return result;
    }
  };
})();

