

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class A {
    "constructor"() { return {}; }
}
assert.sameValue(new A() instanceof A, false);

class B extends class { } {
    "constructor"() { return {}; }
}
assert.sameValue(new B() instanceof B, false);

