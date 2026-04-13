

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


assertThrowsInstanceOf(() => eval('#x'), SyntaxError);


assertThrowsInstanceOf(() => eval('this.#x'), SyntaxError);


assertThrowsInstanceOf(
    () => eval('function foo() { return this.#x'), SyntaxError);

