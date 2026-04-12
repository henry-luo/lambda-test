

/*---
es6id: 13.1
description: >
    global and block scope let
---*/
let x;
let y = 2;


{
  let y;
  let x = 3;
}

assert.sameValue(x, undefined);
assert.sameValue(y, 2);

if (true) {
  let y;
  assert.sameValue(y, undefined);
}

