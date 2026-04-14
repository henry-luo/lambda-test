

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class foo {
    constructor() { }

    method() {
        return (() => (eval(''), super.toString));
    }
}

assert.sameValue(new foo().method()(), Object.prototype.toString);

