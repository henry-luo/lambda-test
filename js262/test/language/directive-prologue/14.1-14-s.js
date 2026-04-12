

/*---
es5id: 14.1-14-s
description: semicolon insertion may come before 'use strict' directive
flags: [noStrict]
---*/

  function foo()
  {
    "another directive"
    "use strict" ;
    return (this === undefined);
  }

assert(foo.call(undefined));
