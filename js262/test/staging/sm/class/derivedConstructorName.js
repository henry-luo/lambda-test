

/*---
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

