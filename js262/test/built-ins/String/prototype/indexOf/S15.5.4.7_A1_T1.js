

/*---
info: String.prototype.indexOf(searchString, position)
es5id: 15.5.4.7_A1_T1
description: Arguments are false and true, and instance is object
---*/

var __instance = new Object(true);

__instance.indexOf = String.prototype.indexOf;


if (__instance.indexOf(true, false) !== 0) {
  throw new Test262Error('#1: __instance = new Object(true); __instance.indexOf = String.prototype.indexOf;  __instance.indexOf(true, false) === 0. Actual: ' + __instance.indexOf(true, false));
}

