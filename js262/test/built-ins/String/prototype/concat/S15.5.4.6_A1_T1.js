

/*---
info: String.prototype.concat([,[...]])
es5id: 15.5.4.6_A1_T1
description: Arguments are false and true, and instance is object
---*/

var __instance = new Object(42);

__instance.concat = String.prototype.concat;


if (__instance.concat(false, true) !== "42falsetrue") {
  throw new Test262Error('#1: __instance = new Object(42); __instance.concat = String.prototype.concat;  __instance.concat(false,true) === "42falsetrue". Actual: ' + __instance.concat(false, true));
}

