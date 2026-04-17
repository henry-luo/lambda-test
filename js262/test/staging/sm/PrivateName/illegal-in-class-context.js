

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

assertThrowsInstanceOf(() => eval(`class A { #x; #x; }`), SyntaxError);


assertThrowsInstanceOf(
    () => eval(`var x = "foo"; class A { #[x] = 20; }`), SyntaxError);

assertThrowsInstanceOfWithMessage(() => eval(`class A { #x; h(o) { return !#x; }}`),
    SyntaxError,
    "invalid use of private name in unary expression without object reference");
assertThrowsInstanceOfWithMessage(() => eval(`class A { #x; h(o) { return 1 + #x in o; }}`),
    SyntaxError,
    "invalid use of private name due to operator precedence");

