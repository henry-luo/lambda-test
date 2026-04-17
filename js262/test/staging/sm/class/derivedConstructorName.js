

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class A {
    constructor() { }
}

class B extends A { }

var b = new B();
assert.sameValue(b.constructor.name, "B");

