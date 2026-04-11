

/*---
es5id: 12.10-2-2
description: with - expression being Boolean
flags: [noStrict]
---*/

  var o = true;
  var foo = 1;
    with (o) {
      foo = 42;
    }

assert.sameValue(foo, 42);
