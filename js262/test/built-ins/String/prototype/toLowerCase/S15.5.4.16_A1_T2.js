

/*---
info: String.prototype.toLowerCase()
es5id: 15.5.4.16_A1_T2
description: Instance is Boolean object
---*/

var __instance = new Boolean;

__instance.toLowerCase = String.prototype.toLowerCase;


if (__instance.toLowerCase() !== "false") {
  throw new Test262Error('#1: __instance = new Boolean; __instance.toLowerCase = String.prototype.toLowerCase;  __instance.toLowerCase() === "false". Actual: ' + __instance.toLowerCase());
}

