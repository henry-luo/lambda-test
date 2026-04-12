

/*---
info: |
    String.prototype.substring (start, end) can be applied to non String object instance and
    returns a string value(not object)
es5id: 15.5.4.15_A3_T10
description: >
    Checknig if applying String.prototype.substring to Function object
    instance passes
---*/

__FACTORY.prototype.substring = String.prototype.substring;

var __instance = new __FACTORY(void 0);


if (__instance.substring(0, 100) !== "undefined") {
  throw new Test262Error('#1: __instance.substring(0, 100) === "undefined". Actual: ' + __instance.substring(0, 100));
}


function __FACTORY(value) {
  this.value = value;
  this.toString = function() {
    return this.value + '';
  }
}
