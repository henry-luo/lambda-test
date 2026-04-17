

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class A {
    #x = "hello";
    constructor(o = this.#x) {
        this.value = o;
    }
};

var a = new A;
assert.sameValue(a.value, "hello");


class B extends A {
    constructor() {
        
        super();
        assert.sameValue("value" in this, true);
        assert.sameValue(this.value, "hello");
    }
}

var b = new B;

