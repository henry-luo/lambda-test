

/*---
es6id: 13.1
description: >
    catch parameter shadowing catch parameter
---*/
function fn() {
  var c = 1;
  try {
    throw 'stuff3';
  } catch (c) {
    try {
      throw 'stuff4';
    } catch(c) {
      assert.sameValue(c,'stuff4');
      
      c = 3;
      assert.sameValue(c, 3);
    }
    assert.sameValue(c, 'stuff3');
  }
  assert.sameValue(c, 1);
}
fn(1);

