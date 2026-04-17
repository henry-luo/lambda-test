

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assert.sameValue((class {}).toString(), "class {}");
assert.sameValue(((class {})).toString(), "class {}");

