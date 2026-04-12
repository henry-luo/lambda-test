

/*---
description: |
  pending
esid: pending
---*/


new class extends class { } {
    constructor() {
        let arrow = () => this;
        assert.throws(ReferenceError, arrow);
        super();
        assert.sameValue(arrow(), this);
    }
}();

