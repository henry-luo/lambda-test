

/*---
es5id: 12.2.1-9-s
description: >
    an indirect eval declaring a var named 'eval' does not throw
---*/

  var s = eval;
  s('var eval;');
