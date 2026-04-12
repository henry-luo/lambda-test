

/*---
es6id: 13.1
description: >
    global and block scope const
---*/
const z = 4;


{
  const z = 5;
}

assert.sameValue(z, 4);

if (true) {
  const z = 1;
  assert.sameValue(z, 1);
}

