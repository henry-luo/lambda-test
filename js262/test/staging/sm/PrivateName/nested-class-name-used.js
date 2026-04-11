

/*---
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

var a = new A;
assert.throws(TypeError, function() {
  a.g();
});
