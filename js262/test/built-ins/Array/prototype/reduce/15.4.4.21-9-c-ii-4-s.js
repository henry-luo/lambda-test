

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - undefined passed as thisValue to strict
    callbackfn
flags: [noStrict]
---*/

var innerThisCorrect = false;

function callbackfn(prevVal, curVal, idx, obj)
{
  "use strict";
  innerThisCorrect = this === undefined;
  return true;
}
[0].reduce(callbackfn, true);

assert(innerThisCorrect, 'innerThisCorrect !== true');
