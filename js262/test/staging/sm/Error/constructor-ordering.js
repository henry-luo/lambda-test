

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var order = 0;
function assertOrdering(ordering) {
    assert.sameValue(order, ordering);
    order++;
}


var handler = { get() { assertOrdering(0); return Error.prototype } };
var errorProxy = new Proxy(Error, handler);

var toStringable = { toString() { assertOrdering(1); return "Argument"; } };

new errorProxy(toStringable);

