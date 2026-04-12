

/*---
es5id: 14.1-13-s
description: semicolon insertion works for'use strict' directive
flags: [noStrict]
---*/

  function foo()
  {
    "use strict"
     return (this === undefined);
  }

assert(foo.call(undefined));
