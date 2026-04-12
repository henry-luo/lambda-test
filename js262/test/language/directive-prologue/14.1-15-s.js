

/*---
es5id: 14.1-15-s
description: blank lines may come before 'use strict' directive
flags: [noStrict]
---*/

  function foo()
  {


    "use strict" ;
    return (this === undefined);
  }

assert(foo.call(undefined));
