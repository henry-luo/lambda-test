

/*---
es6id: 13.1
description: >
    x before continue
---*/
do {
  let x = 4;
  assert.sameValue(x, 4);
  {
    let x = 5;
    assert.sameValue(x, 5);
    continue;
    assert(false);
  }
} while (false);

