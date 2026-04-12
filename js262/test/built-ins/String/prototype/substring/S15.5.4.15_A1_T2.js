

/*---
info: String.prototype.substring (start, end)
es5id: 15.5.4.15_A1_T2
description: >
    Arguments are function call and x, and instance is Boolean. x is
    undefined variable
---*/

var __instance = new Boolean;

__instance.substring = String.prototype.substring;


if (__instance.substring(function() {
    return true;
  }(), x) !== "alse") {
  throw new Test262Error('#1: var x; __instance = new Boolean; __instance.substring = String.prototype.substring;  __instance.substring(function(){return true;}(),x) === "alse". Actual: ' + __instance.substring(function() {
    return true;
  }(), x));
}


var x;
