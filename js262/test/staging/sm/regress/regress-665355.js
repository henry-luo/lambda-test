

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var x = new ArrayBuffer(2);

var test = function(newProto) {
try {
    x.__proto__ = newProto;
    return false;
} catch(e) {
    return true;
}
}


assert.sameValue(test(x), true);


assert.sameValue(test({}), false);
assert.sameValue(test(null), false);

