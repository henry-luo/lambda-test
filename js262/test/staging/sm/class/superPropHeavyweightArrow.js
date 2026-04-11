

/*---
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

