

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue(0x10000000000000000n % 0x10000000000000000n, 0n);
assert.sameValue(-0x10000000000000000n % -0x10000000000000000n, 0n);

