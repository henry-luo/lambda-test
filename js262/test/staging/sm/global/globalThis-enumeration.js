

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
assert.sameValue(Object.getOwnPropertyNames(this).includes('globalThis'), true);

if (typeof assert.sameValue === "function") {
}
