

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


Array.prototype[Symbol.iterator] = function*() {
    throw new Error("unexpected call");
};

class Base {
    constructor(a, b) {
        assert.sameValue(a, 1);
        assert.sameValue(b, 2);
    }
};
class Derived extends Base {};

new Derived(1, 2);

