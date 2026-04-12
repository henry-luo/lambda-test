

/*---
es5id: 14.1-4-s
description: >
    'use strict' directive - not recognized if contains Line
    Continuation
flags: [noStrict]
---*/

  function foo()
  {
    'use str\
ict';
     return (this !== undefined);
  }

assert(foo.call(undefined));
