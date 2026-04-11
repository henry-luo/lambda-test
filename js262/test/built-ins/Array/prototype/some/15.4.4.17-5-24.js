

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - string primitive can be used as thisArg
---*/

function callbackfn(val, idx, obj) {
  return this.valueOf() === "abc";
}

assert([11].some(callbackfn, "abc"), '[11].some(callbackfn, "abc") !== true');
