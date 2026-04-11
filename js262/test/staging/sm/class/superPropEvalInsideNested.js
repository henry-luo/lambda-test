

/*---
description: |
  pending
esid: pending
---*/


assert.throws(SyntaxError, () =>
({
    method() {
        (function () {
            eval('super.toString');
        })();
    }
}).method());

