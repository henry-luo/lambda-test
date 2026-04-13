

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

class A {
  #x = 14;
  g() {
    return eval('this.#x');
  }
}

a = new A;
assert.sameValue(a.g(), 14);

