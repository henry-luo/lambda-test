

/*---
es6id: 13.1
description: >
    verify context in finally block 1
---*/
function f() {}

(function(x) {
  try {
    let x = 'inner';
    throw 0;
  } catch(e) {

  } finally {
    f();
    assert.sameValue(x, 'outer');
  }
})('outer');
