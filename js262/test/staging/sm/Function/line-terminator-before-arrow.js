

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
assertThrowsInstanceOf(() => eval("() \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("a \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a) /*\n*/ => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, b) \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, b = 1) \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, ...b) \n => {}"), SyntaxError);
assertThrowsInstanceOf(() => eval("(a, b = 1, ...c) \n => {}"), SyntaxError);

