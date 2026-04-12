

/*---
es5id: 14.1-16-s
description: >
    'use strict' directive - not recognized if it follow an empty
    statement
flags: [noStrict]
---*/

  function foo()
  {
    ; 'use strict';
     return (this !== undefined);
  }

assert(foo.call(undefined));
