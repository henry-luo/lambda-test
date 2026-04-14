

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

class C {
    128 = class {};
}
assert.sameValue(new C()[128].name, "128");


class D {
    128n = class {};
}
assert.sameValue(new D()[128].name, "128");

