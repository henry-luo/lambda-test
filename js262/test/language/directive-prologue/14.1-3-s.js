

/*---
es5id: 14.1-3-s
description: >
    'use strict' directive - not recognized if it contains extra
    whitespace
flags: [noStrict]
---*/

  function foo()
  {
    '  use    strict   ';
     return (this !== undefined);
  }

assert(foo.call(undefined));
