

/*---
info: |
    String.prototype.substring (start, end) can be applied to non String object instance and
    returns a string value(not object)
es5id: 15.5.4.15_A3_T6
description: >
    Apply String.prototype.substring to Object instance. Start is 8,
    end is length of object.toString
---*/

var __instance = new Object();
__instance.substring = String.prototype.substring;


if (__instance.substring(8, __instance.toString().length) !== "Object]") {
  throw new Test262Error('#1: __instance = new Object(); __instance.substring = String.prototype.substring; __instance.substring(8, __instance.toString().length) === "Object]". Actual: ' + __instance.substring(8, __instance.toString().length));
}

