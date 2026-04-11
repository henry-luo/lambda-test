

/*---
info: String.prototype.replace (searchValue, replaceValue)
es5id: 15.5.4.11_A1_T2
description: >
    Argument is function that return boolean, and instance is Boolean
    object
---*/

var __instance = new Boolean;

__instance.replace = String.prototype.replace;


if (__instance.replace(function() {
    return false;
  }(), x) !== "undefined") {
  throw new Test262Error('#1: var x; __instance = new Boolean; __instance.replace = String.prototype.replace;  __instance.replace(function(){return false;}(),x) === "undefined". Actual: ' + __instance.replace(function() {
    return false;
  }(), x));
}


var x;
