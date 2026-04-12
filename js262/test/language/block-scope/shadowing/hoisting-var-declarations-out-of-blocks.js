

/*---
es6id: 13.1
description: >
    hoisting var declarations out of blocks
---*/
function fn() {
  {
    var x = 1;
    var y;
  }
  assert.sameValue(x, 1);
  assert.sameValue(y, undefined);
}
fn();

