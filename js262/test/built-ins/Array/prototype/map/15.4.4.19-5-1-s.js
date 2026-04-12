

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - thisArg not passed to strict callbackfn
flags: [noStrict]
---*/

var innerThisCorrect = false;

function callbackfn(val, idx, obj) {
  "use strict";
  innerThisCorrect = this === undefined;
  return true;
}

[1].map(callbackfn);

assert(innerThisCorrect, 'innerThisCorrect !== true');
