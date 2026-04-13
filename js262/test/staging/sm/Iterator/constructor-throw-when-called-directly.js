

/*---
info: |
  Iterator constructor throws when called directly.

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
assertThrowsInstanceOf(() => new Iterator(), TypeError);

