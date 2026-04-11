

/*---
info: String.prototype.match (regexp)
es5id: 15.5.4.10_A1_T1
description: Arguments is true, and instance is object
---*/

var __instance = new Object(true);

__instance.match = String.prototype.match;


if (__instance.match(true)[0] !== "true") {
  throw new Test262Error('#1: __instance = new Object(true); __instance.match = String.prototype.match;  __instance.match(true)[0] === "true". Actual: ' + __instance.match(true)[0]);
}

