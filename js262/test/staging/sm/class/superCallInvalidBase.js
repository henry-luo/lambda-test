

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class instance extends null {
    constructor() { super(); }
}

assertThrowsInstanceOf(() => new instance(), TypeError);
assertThrowsInstanceOf(() => new class extends null { }(), TypeError);

