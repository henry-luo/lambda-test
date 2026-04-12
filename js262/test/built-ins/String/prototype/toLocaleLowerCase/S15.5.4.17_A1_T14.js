

/*---
info: String.prototype.toLocaleLowerCase()
es5id: 15.5.4.17_A1_T14
description: Call toLocaleLowerCase() function for RegExp object
---*/

var __reg = new RegExp("ABC");
__reg.toLocaleLowerCase = String.prototype.toLocaleLowerCase;


if (__reg.toLocaleLowerCase() !== "/abc/") {
  throw new Test262Error('#1: var __reg = new RegExp("ABC"); __reg.toLocaleLowerCase = String.prototype.toLocaleLowerCase; __reg.toLocaleLowerCase() === "/abc/". Actual: ' + __reg.toLocaleLowerCase());
}

