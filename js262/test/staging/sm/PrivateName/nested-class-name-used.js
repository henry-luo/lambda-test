

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


class A {
  #x = 10;
  f() {
    class B {
      g() {
        return this.#x;  
                         
      }
    };
    this.y = new B;
  }
  constructor() {
    this.f();
  }
  g() {
    return this.y.g();
  }
};

a = new A;
try {
  a.g();
} catch (e) {
  assert.sameValue(e instanceof TypeError, true);
}

