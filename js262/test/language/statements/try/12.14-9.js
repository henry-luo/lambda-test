

/*---
es5id: 12.14-9
description: catch introduces scope - name lookup finds outer variable
---*/

  function f(o) {
    var x = 42;

    function innerf(o) {
      try {
        throw o;
      }
      catch (e) {
        return x;
      }
    }

    return innerf(o);
  }

assert.sameValue(f({}), 42);
