

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-String-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1801690;
var summary = "indexOf function doesn't work correctly with polish letters";


assert.sameValue("AB".indexOf("Ał"), -1);

