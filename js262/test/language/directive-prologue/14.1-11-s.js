

/*---
es5id: 14.1-11-s
description: comments may precede 'use strict' directive
flags: [noStrict]
---*/

  function foo()
  {
     
      "use strict";

   return(this === undefined);

  }

assert(foo.call(undefined));
