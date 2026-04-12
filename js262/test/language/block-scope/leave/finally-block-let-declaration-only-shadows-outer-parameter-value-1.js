

/*---
es6id: 13.1
description: >
    finally block let declaration only shadows outer parameter value 1
---*/
try {
  (function(x) {
    try {
      let x = 'inner';
      throw 0;
    } finally {
      assert.sameValue(x, 'outer');
    }
  })('outer');
} catch (e) {}

