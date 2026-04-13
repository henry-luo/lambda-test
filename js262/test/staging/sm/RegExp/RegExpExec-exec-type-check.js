

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var obj = {
  exec() {
    return function(){};
  }
};

assert.sameValue(RegExp.prototype.test.call(obj, ""), true);

