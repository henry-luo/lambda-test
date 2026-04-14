

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-object-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
[1, "", true, Symbol(), undefined].forEach(props => {
    assert.sameValue(Object.getPrototypeOf(Object.create(null, props)), null);
});

assertThrowsInstanceOf(() => Object.create(null, null), TypeError);

