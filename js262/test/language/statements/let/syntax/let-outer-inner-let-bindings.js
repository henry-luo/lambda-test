

/*---
es6id: 13.1
description: >
    outer let binding unchanged by for-loop let binding
---*/


let x = "outer_x";
let y = "outer_y";

for (let x = "inner_x", i = 0; i < 1; i++) {
  let y = "inner_y";

  assert.sameValue(x, "inner_x");
  assert.sameValue(y, "inner_y");
}
assert.sameValue(x, "outer_x");
assert.sameValue(y, "outer_y");

