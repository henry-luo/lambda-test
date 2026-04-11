

/*---
info: Check Function Expression for automatic semicolon insertion
es5id: 7.9_A5.5_T4
description: Insert some LineTerminators into function body
---*/


var x =
1 + (function (t){return {a:t
}
})
(2 + 3).
a

if (x !== 6) {
  throw new Test262Error('#1: Check Function Expression for automatic semicolon insertion');
}
