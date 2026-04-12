

/*---
info: |
    When String.prototype.charAt(pos) calls if ToInteger(pos) not less than
    ToString(this value) the empty string returns
es5id: 15.5.4.4_A3
description: pos is bigger of string length
---*/

var __instance = new String("ABC");


if (__instance.charAt(3) !== "") {
  throw new Test262Error('#1: __instance = new String("ABC"); __instance.charAt(3) === "". Actual: __instance.charAt(3) ===' + __instance.charAt(3));
}

