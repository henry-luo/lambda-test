

/*---
es5id: 12.2.1-21-s
description: >
    Strict Mode: an indirect eval assigning into 'arguments' does not
    throw
---*/

  var s = eval;
  s('arguments = 42;');
