

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


Object.defineProperty(Object.prototype, "prop", { writable: false });

class strictAssignmentTest {
    constructor() {
        
        super.prop = 14;
    }
}

assertThrowsInstanceOf(()=>new strictAssignmentTest(), TypeError);


({ test() { super.prop = 14; } }).test();

assert.sameValue(Object.prototype.prop, undefined);

