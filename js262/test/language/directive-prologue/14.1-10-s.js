

/*---
es5id: 14.1-10-s
description: other directives - may follow 'use strict' directive
flags: [noStrict]
---*/

  function foo()
  {
     "use strict";
     "bogus directive";
     return (this === undefined);
  }

assert(foo.call(undefined));
