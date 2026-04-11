

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - thisArg not passed to strict callbackfn
flags: [noStrict]
---*/

var innerThisCorrect = false;

function callbackfn(val, idx, obj) {
  "use strict";
  innerThisCorrect = this === undefined;
  return true;
}

[1].some(callbackfn);

assert(innerThisCorrect, 'innerThisCorrect !== true');
