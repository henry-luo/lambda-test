

/*---
es6id: 13.1
description: >
    let declaration shadowing catch parameter
---*/
try {
  throw 'stuff1';
} catch (a) {
  {
    
    let a = 3;
    assert.sameValue(a, 3);
  }
  assert.sameValue(a, 'stuff1');
}

