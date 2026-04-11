

/*---
es5id: 12.14-10
description: catch introduces scope - name lookup finds function parameter
---*/

  function f(o) {

    function innerf(o, x) {
      try {
        throw o;
      }
      catch (e) {
        return x;
      }
    }

    return innerf(o, 42);
  }

assert.sameValue(f({}), 42);
