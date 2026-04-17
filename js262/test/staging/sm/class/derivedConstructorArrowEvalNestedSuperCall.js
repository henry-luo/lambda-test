

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
        (()=>eval("super()"))();
        assert.sameValue(this, eval("this"));
        assert.sameValue(this, (()=>this)());
    }
}();

new class extends class { } {
    constructor() {
        (()=>(()=>super())())();
        assert.sameValue(this, eval("this"));
        assert.sameValue(this, (()=>this)());
    }
}();

new class extends class { } {
    constructor() {
        eval("(()=>super())()");
        assert.sameValue(this, eval("this"));
        assert.sameValue(this, (()=>this)());
    }
}();

new class extends class { } {
    constructor() {
        eval("eval('super()')");
        assert.sameValue(this, eval("this"));
        assert.sameValue(this, (()=>this)());
    }
}();

