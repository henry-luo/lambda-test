

/*---
flags:
  - noStrict
description: |
  Eval always has a lexical environment
info: bugzilla.mozilla.org/show_bug.cgi?id=1193583
esid: pending
---*/

eval(`
let foo = 42;
const kay = foo;
var bar = 84;
function f() {
  return foo + kay;
}
     `);

(1, eval)(`
let foo2 = 42;
const kay2 = foo2;
`);


assert.sameValue(typeof foo, "undefined");
assert.sameValue(typeof kay, "undefined");
assert.sameValue(typeof foo2, "undefined");
assert.sameValue(typeof kay2, "undefined");


assert.sameValue(f(), 84);


assert.sameValue(bar, 84);
