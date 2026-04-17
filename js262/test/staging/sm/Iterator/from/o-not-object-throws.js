

/*---
info: |
  Iterator.from throws when called with a non-object.

  Iterator is not enabled unconditionally
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
features:
  - iterator-helpers
description: |
  pending
esid: pending
---*/
assertThrowsInstanceOf(() => Iterator.from(undefined), TypeError);
assertThrowsInstanceOf(() => Iterator.from(null), TypeError);
assertThrowsInstanceOf(() => Iterator.from(0), TypeError);
assertThrowsInstanceOf(() => Iterator.from(false), TypeError);
assertThrowsInstanceOf(() => Iterator.from(Symbol('')), TypeError);

