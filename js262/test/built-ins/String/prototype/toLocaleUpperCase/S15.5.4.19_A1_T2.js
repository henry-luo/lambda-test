

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T2
description: Instance is Boolean object
---*/

var __instance = new Boolean;

__instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;


if (__instance.toLocaleUpperCase() !== "FALSE") {
  throw new Test262Error('#1: __instance = new Boolean; __instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;  __instance.toLocaleUpperCase() === "FALSE". Actual: ' + __instance.toLocaleUpperCase());
}

