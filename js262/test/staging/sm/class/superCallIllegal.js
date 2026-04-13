

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assertThrowsInstanceOf(() => new Function("super();"), SyntaxError);
assertThrowsInstanceOf(() => eval("super()"), SyntaxError);

