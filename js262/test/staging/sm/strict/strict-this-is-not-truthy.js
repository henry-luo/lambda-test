

/*---
description: |
  pending
esid: pending
---*/


function f() {
    "use strict";
    return !this;
}
assert.sameValue(f.call(null), true);

