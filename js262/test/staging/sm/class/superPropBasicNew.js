

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class Base {
    constructor() {}
}
class Mid extends Base {
    constructor() { super(); }
    f() { return new super.constructor(); }
}
class Derived extends Mid {
    constructor() { super(); }
}

let d = new Derived();
var df = d.f();
assert.sameValue(df.constructor, Base);

