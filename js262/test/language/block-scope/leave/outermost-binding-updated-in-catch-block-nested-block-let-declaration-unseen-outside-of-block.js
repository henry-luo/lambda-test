

/*---
es6id: 13.1
description: >
    outermost binding updated in catch block; nested block let declaration unseen outside of block
---*/
var caught = false;
try {
  {
    let xx = 18;
    throw 25;
  }
} catch (e) {
  caught = true;
  assert.sameValue(e, 25);
  (function () {
    try {
      
      
      assert.sameValue(xx, undefined);
      eval('xx');
      assert(false);  
    } catch (e2) {
      assert(e2 instanceof ReferenceError);
    }
  })();
}
assert(caught);

