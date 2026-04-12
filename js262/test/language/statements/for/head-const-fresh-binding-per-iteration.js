

/*---
es6id: 13.6.4.13
description: >
    const ForDeclaration: creates a fresh binding per iteration
---*/

let z = 1;
let s = 0;
for (const x = 1; z < 2; z++) {
  s += x + z;
}
assert.sameValue(s, 2, "The value of `s` is `2`");
