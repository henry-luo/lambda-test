

/*---
es5id: 12.10-7-1
description: with introduces scope - restores the earlier environment on exit
flags: [noStrict]
---*/

  var a = 1;

  var o = {a : 2};
  try {
    with (o) {
      a = 3;
      throw 1;
      a = 4;
    }
  } catch (e) {
    
  }

assert.sameValue(a, 1, 'a');
assert.sameValue(o.a, 3, 'o.a');
