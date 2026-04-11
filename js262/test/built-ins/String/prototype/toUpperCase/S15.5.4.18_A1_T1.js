

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T1
description: Arguments is true, and instance is object
---*/

var __instance = new Object(true);

__instance.toUpperCase = String.prototype.toUpperCase;


if (__instance.toUpperCase() !== "TRUE") {
  throw new Test262Error('#1: __instance = new Object(true); __instance.toUpperCase = String.prototype.toUpperCase;  __instance.toUpperCase() === "TRUE". Actual: ' + __instance.toUpperCase());
}

