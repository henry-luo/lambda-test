

/*---
info: String.prototype.charAt(pos)
es5id: 15.5.4.4_A1_T1
description: pos is false and true, and instance is object
---*/

var __instance = new Object(42);

__instance.charAt = String.prototype.charAt;


if (__instance.charAt(false) + __instance.charAt(true) !== "42") {
  throw new Test262Error('#1: __instance = new Object(42); __instance.charAt = String.prototype.charAt;  __instance = new Object(42); __instance.charAt = String.prototype.charAt; __instance.charAt(false)+__instance.charAt(true) === "42". Actual: ' + __instance.charAt(false) + __instance.charAt(true));
}

