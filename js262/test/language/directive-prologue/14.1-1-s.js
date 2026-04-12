

/*---
es5id: 14.1-1-s
description: "'use strict' directive - correct usage"
flags: [noStrict]
---*/

  function foo()
  {
    'use strict';
     return(this === undefined);
  }

assert(foo.call(undefined));
