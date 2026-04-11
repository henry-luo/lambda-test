

/*---
info: String.prototype.toUpperCase()
es5id: 15.5.4.18_A1_T14
description: Call toUpperCase() function of RegExp object
---*/

var __reg = new RegExp("abc");
__reg.toUpperCase = String.prototype.toUpperCase;


if (__reg.toUpperCase() !== "/ABC/") {
  throw new Test262Error('#1: var __reg = new RegExp("abc"); __reg.toUpperCase = String.prototype.toUpperCase; __reg.toUpperCase() === "/ABC/". Actual: ' + __reg.toUpperCase());
}

