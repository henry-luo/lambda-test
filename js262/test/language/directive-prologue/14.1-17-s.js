

/*---
es5id: 14.1-17-s
description: >
    'use strict' directive - not recognized if it follow some other
    statment empty statement
flags: [noStrict]
---*/

  function foo()
  {
    var x;
    'use strict';
    return (this !== undefined);
  }

assert(foo.call(undefined));
