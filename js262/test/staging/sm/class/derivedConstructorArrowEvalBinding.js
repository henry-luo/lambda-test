

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
        let arrow = () => this;
        assertThrowsInstanceOf(arrow, ReferenceError);
        super();
        assert.sameValue(arrow(), this);
    }
}();

