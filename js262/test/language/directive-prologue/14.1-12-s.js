

/*---
es5id: 14.1-12-s
description: comments may follow 'use strict' directive
flags: [noStrict]
---*/

  function foo()
  {
     "use strict";       

     return (this === undefined);
  }

assert(foo.call(undefined));
