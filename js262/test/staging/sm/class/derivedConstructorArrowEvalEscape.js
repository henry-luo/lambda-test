

/*---
description: |
  pending
esid: pending
---*/
let arrow;

class foo extends class { } {
    constructor() {
        arrow = () => this;
        super();
    }
}

assert.sameValue(new foo(), arrow());

