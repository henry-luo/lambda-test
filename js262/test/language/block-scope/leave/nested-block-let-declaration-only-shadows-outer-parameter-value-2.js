

/*---
es6id: 13.1
description: >
    nested block let declaration only shadows outer parameter value 2
---*/
(function(x) {
  label: {
    let x = 'middle';
    {
      let x = 'inner';
      break label;
    }
  }
  assert.sameValue(x, 'outer');
})('outer');

