

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
new class extends class { } {
    constructor() {
        super();
        assert.sameValue(this, (()=>this)());
        assert.sameValue(this, eval("this"));
    }
}();

