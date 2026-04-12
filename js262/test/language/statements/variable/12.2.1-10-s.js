

/*---
es5id: 12.2.1-10-s
description: "Strict Mode: an indirect eval assigning into 'eval' does not throw"
---*/

  var s = eval;
  s('eval = 42;');
