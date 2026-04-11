

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - undefined will be returned when 'len' is
    0
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
}

var result = [].forEach(callbackfn);

assert.sameValue(typeof result, "undefined", 'typeof result');
assert.sameValue(accessed, false, 'accessed');
