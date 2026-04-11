

/*---
es5id: 14.1-5-s
description: >
    'use strict' directive - not recognized if contains a
    EscapeSequence
flags: [noStrict]
---*/

  function foo()
  {
    'use\u0020strict';
     return(this !== undefined);
  }

assert(foo.call(undefined));
