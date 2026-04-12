

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T1
description: Arguments is true, and instance is object
---*/

var __instance = new Object(true);

__instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;


if (__instance.toLocaleUpperCase() !== "TRUE") {
  throw new Test262Error('#1: __instance = new Object(true); __instance.toLocaleUpperCase = String.prototype.toLocaleUpperCase;  __instance.toLocaleUpperCase() === "TRUE". Actual: ' + __instance.toLocaleUpperCase());
}

