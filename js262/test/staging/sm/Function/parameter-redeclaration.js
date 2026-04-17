

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

function f1(a = 0) {
  var a;
}


assertThrowsInstanceOf(() => {
  eval(`function f2(a = 0) {
    let a;
  }`);
}, SyntaxError);
assertThrowsInstanceOf(() => {
  eval(`function f3(a = 0) {
    const a;
  }`);
}, SyntaxError);

