

/*---
es5id: 12.2.1-20-s
description: >
    Strict Mode: an indirect eval declaring a var named 'arguments'
    does not throw
---*/

  var s = eval;
  s('var arguments;');
