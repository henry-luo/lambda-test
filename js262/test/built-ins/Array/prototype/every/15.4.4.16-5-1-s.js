

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-5-1-s
description: Array.prototype.every - thisArg not passed to strict callbackfn
flags: [noStrict]
---*/

var innerThisCorrect = false;

function callbackfn(val, idx, obj) {
  "use strict";
  innerThisCorrect = this === undefined;
  return true;
}

[1].every(callbackfn);

assert(innerThisCorrect, 'innerThisCorrect !== true');
