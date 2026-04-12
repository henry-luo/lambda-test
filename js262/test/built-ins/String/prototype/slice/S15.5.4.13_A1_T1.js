

/*---
info: String.prototype.slice (start, end)
es5id: 15.5.4.13_A1_T1
description: Arguments are false and true, and instance is object
---*/

var __instance = new Object(true);

__instance.slice = String.prototype.slice;


if (__instance.slice(false, true) !== "t") {
  throw new Test262Error('#1: __instance = new Object(true); __instance.slice = String.prototype.slice;  __instance.slice(false, true) === "t". Actual: ' + __instance.slice(false, true));
}

