

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


class foo extends null {
    constructor() {
        
        
    }
}

function intermediate() {
    new foo();
}

for (let i = 0; i < 1100; i++)
    assertThrownErrorContains(intermediate, "this");

