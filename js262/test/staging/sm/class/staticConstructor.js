

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class testBasic {
    constructor() { }
    static constructor() { }
}

class testWithExtends extends null {
    constructor() { };
    static constructor() { };
}

class testOrder {
    static constructor() { };
    constructor() { };
}

class testOrderWithExtends extends null {
    static constructor() { };
    constructor() { };
}

