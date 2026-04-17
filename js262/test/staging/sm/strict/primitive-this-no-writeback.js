

/*---
includes: [sm/non262.js, sm/non262-strict-shell.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var f = String.prototype.m = function () {
    "use strict";
    assert.sameValue(this, "s");
    
    return [this.m, this];
};
var a = "s".m();
assert.sameValue(a[0], f);
assert.sameValue(a[1], "s");

