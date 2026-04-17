

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
class base {
    method() { return 1; }
    *gen() { return 2; }
    static sMethod() { return 3; }
    get answer() { return 42; }
}


assert.sameValue(Object.getPrototypeOf(new base()), base.prototype);
assert.sameValue(new base().method(), 1);
assert.sameValue(new base().gen().next().value, 2);
assert.sameValue(base.sMethod(), 3);
assert.sameValue(new base().answer, 42);

