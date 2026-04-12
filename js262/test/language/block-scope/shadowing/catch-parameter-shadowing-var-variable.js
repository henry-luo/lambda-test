

/*---
es6id: 13.1
description: >
    catch parameter shadowing var variable
---*/
function fn() {
  var a = 1;
  try {
    throw 'stuff3';
  } catch (a) {
    
    assert.sameValue(a, 'stuff3');
  }
  assert.sameValue(a, 1);
}
fn();

