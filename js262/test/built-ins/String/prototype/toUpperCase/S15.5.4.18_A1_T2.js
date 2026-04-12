

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T2
description: Instance is Boolean object
---*/

var __instance = new Boolean;

__instance.toUpperCase = String.prototype.toUpperCase;


if (__instance.toUpperCase() !== "FALSE") {
  throw new Test262Error('#1: __instance = new Boolean; __instance.toUpperCase = String.prototype.toUpperCase;  __instance.toUpperCase() === "FALSE". Actual: ' + __instance.toUpperCase());
}

