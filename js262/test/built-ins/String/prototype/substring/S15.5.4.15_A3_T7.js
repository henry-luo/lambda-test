

/*---
info: |
    String.prototype.substring (start, end) can be applied to non String object instance and
    returns a string value(not object)
es5id: 15.5.4.15_A3_T7
description: >
    Apply String.prototype.substring to Object instance. Call
    instance.substring(...).substring(...)
---*/

var __instance = {
  toString: function() {
    return "function(){}";
  }
};

__instance.substring = String.prototype.substring;


if (__instance.substring(-Infinity, 8) !== "function") {
  throw new Test262Error('#1: __instance = function(){}; __instance.substring = String.prototype.substring;  __instance.substring(-Infinity,8) === "function". Actual: ' + __instance.substring(8, Infinity).substring(-Infinity, 1));
}

