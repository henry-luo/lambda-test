

/*---
es6id: 13.1
description: >
    return from block
---*/
function fn() {
  let x = 3;
  {
    let y = 6;
    return x + y;
  }
}
assert.sameValue(fn(), 9);

