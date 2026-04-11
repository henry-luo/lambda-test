

/*---
es5id: 12.14-11
description: catch introduces scope - name lookup finds inner variable
---*/

  function f(o) {

    function innerf(o) {
      var x = 42;

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
