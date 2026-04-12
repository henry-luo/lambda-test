

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - the Arguments object can be used as
    thisArg
---*/

var result = false;
var arg;

function callbackfn(val, idx, obj) {
  result = (this === arg);
}

(function fun() {
  arg = arguments;
}(1, 2, 3));

[11].forEach(callbackfn, arg);

assert(result, 'result !== true');
