

/*---
es6id: 13.1
description: >
    const declaration shadowing catch parameter
---*/
function fn() {
  var a = 1;
  try {
    throw 'stuff3';
  } catch (a) {
    {
      
      const a = 3;
      assert.sameValue(a, 3);
    }
    assert.sameValue(a, 'stuff3');
  }
  assert.sameValue(a, 1);
}
fn();

