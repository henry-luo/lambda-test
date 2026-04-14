

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assertThrowsInstanceOf(() => new ""(...Array()), TypeError);

assertThrowsInstanceOf(() => new ""(), TypeError);
assertThrowsInstanceOf(() => new ""(1), TypeError);

