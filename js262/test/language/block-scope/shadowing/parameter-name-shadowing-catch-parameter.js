

/*---
es6id: 13.1
description: >
    parameter name shadowing catch parameter
---*/
function fn() {
  var c = 1;
  try {
    throw 'stuff3';
  } catch (c) {
    (function(c) {
      
      c = 3;
      assert.sameValue(c, 3);
    })();
    assert.sameValue(c, 'stuff3');
  }
  assert.sameValue(c, 1);
}
fn();

