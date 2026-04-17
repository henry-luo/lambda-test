

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
for (let j = 0; j < 4; ++j) {
  function g() { j; }
  g();
}

