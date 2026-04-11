

/*---
info: String.prototype.toLowerCase()
es5id: 15.5.4.16_A1_T1
description: Arguments is true, and instance is object
---*/

var __instance = new Object(true);

__instance.toLowerCase = String.prototype.toLowerCase;


if (__instance.toLowerCase() !== "true") {
  throw new Test262Error('#1: __instance = new Object(true); __instance.toLowerCase = String.prototype.toLowerCase;  __instance.toLowerCase() === "true". Actual: ' + __instance.toLowerCase());
}

