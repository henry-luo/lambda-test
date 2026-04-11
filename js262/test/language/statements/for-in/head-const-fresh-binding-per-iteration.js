

/*---
es6id: 13.6.4.13
description: >
    const ForDeclaration: creates a fresh binding per iteration
---*/

let s = '';
for (const x of [1, 2, 3]) {
  s += x;
}
assert.sameValue(s, '123', "The value of `s` is `'123'`");

