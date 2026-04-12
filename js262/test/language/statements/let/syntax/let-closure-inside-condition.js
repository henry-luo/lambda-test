

/*---
es6id: 13.1
description: >
    let: closure inside for loop condition
---*/
let a = [];
for (let i = 0; a.push(function () { return i; }), i < 5; ++i) { }
for (let k = 0; k < 5; ++k) {
  assert.sameValue(k, a[k]());
}
