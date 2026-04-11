

/*---
es6id: 13.1
description: >
    In a normal for statement the iteration variable is freshly allocated for each iteration. Single let binding
---*/
let a = [];
for (let i = 0; i < 5; ++i) {
  a.push(function () { return i; });
}
for (let j = 0; j < 5; ++j) {
  assert.sameValue(j, a[j]());
}
