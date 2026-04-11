

/*---
es6id: 13.1
description: >
    verify context in labelled block 1
---*/
function f() {}

(function(x) {
  label: {
    let x = 'inner';
    break label;
  }
  f();  
  assert.sameValue(x, 'outer');
})('outer');

