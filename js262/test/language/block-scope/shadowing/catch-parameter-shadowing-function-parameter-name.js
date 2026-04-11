

/*---
es6id: 13.1
description: >
    catch parameter shadowing function parameter name
---*/
function fn(a) {
  try {
    throw 'stuff1';
  } catch (a) {
    assert.sameValue(a, 'stuff1');
    
    a = 2;
    assert.sameValue(a, 2);
  }
}
fn(1);

