

/*---
es6id: 13.1
description: >
    try block let declaration only shadows outer parameter value 2
---*/
(function(x) {
  try {
    let x = 'middle';
    {
      let x = 'inner';
      throw 0;
    }
  } catch (e) {
    assert.sameValue(x, 'outer');
  }
})('outer');

