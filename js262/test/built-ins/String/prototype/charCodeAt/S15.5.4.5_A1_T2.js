

/*---
info: String.prototype.charCodeAt(pos)
es5id: 15.5.4.5_A1_T2
description: pos is equation with false and true, and instance is Boolean object
---*/

var __instance = new Boolean;

__instance.charCodeAt = String.prototype.charCodeAt;


if (__instance.charCodeAt(false) !== 0x66) {
  throw new Test262Error('#1: __instance = new Boolean; __instance.charCodeAt = String.prototype.charCodeAt; __instance.charCodeAt(false)===0x66. Actual: ' + __instance.charCodeAt(false));
}


if (__instance.charCodeAt(true) !== 0x61) {
  throw new Test262Error('#2: __instance = new Boolean; __instance.charCodeAt = String.prototype.charCodeAt; __instance.charCodeAt(true)===0x61. Actual: ' + __instance.charCodeAt(true));
}


if (__instance.charCodeAt(true + 1) !== 0x6C) {
  throw new Test262Error('#3: __instance = new Boolean; __instance.charCodeAt = String.prototype.charCodeAt; __instance.charCodeAt(true+1) === 0x6C. Actual: ' + __instance.charCodeAt(true + 1));
}

