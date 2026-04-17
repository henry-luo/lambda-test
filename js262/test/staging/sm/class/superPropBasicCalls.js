

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


class toStringTest {
    constructor() {
        
        this.foo = "rhinoceros";
    }

    test() {
        assert.sameValue(super.toString(), super["toString"]());
        assert.sameValue(super.toString(), this.toString());
    }
}

new toStringTest().test();

let toStrOL = {
    test() {
        assert.sameValue(super.toString(), super["toString"]());
        assert.sameValue(super.toString(), this.toString());
    }
}

toStrOL.test();

