

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - thisArg not passed to strict callbackfn
flags: [noStrict]
---*/

var innerThisCorrect = false;

function callbackfn(val, idx, obj) {
  "use strict";
  innerThisCorrect = this === undefined;
  return true;
}

[1].filter(callbackfn);

assert(innerThisCorrect, 'innerThisCorrect !== true');
