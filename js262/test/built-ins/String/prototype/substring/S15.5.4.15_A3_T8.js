

/*---
info: |
    String.prototype.substring (start, end) can be applied to non String object instance and
    returns a string value(not object)
es5id: 15.5.4.15_A3_T8
description: >
    Apply String.prototype.substring to Number instance. Start is
    Infinity, end is NaN
---*/

var __instance = new Number(NaN);

__instance.substring = String.prototype.substring;


if (__instance.substring(Infinity, NaN) !== "NaN") {
  throw new Test262Error('#1: __instance = new Number(NaN); __instance.substring = String.prototype.substring;  __instance.substring(Infinity, NaN) === "NaN". Actual: ' + __instance.substring(Infinity, NaN));
}

