

/*---
es6id: 13.1
description: >
    catch parameter shadowing let declaration
---*/
{
  let a = 3;
  try {
    throw 'stuff2';
  } catch (a) {
    assert.sameValue(a, 'stuff2');
    
    a = 4;
    assert.sameValue(a, 4);
  }
  assert.sameValue(a, 3);
}

