

/*---
info: String.prototype.toLocaleUpperCase()
es5id: 15.5.4.19_A1_T14
description: Call toLocaleUpperCase() function for RegExp object
---*/

var __reg = new RegExp("abc");
__reg.toLocaleUpperCase = String.prototype.toLocaleUpperCase;


if (__reg.toLocaleUpperCase() !== "/ABC/") {
  throw new Test262Error('#1: var __reg = new RegExp("abc"); __reg.toLocaleUpperCase = String.prototype.toLocaleUpperCase; __reg.toLocaleUpperCase() === "/ABC/". Actual: ' + __reg.toLocaleUpperCase());
}

