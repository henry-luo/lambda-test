

/*---
es5id: 14.1-8-s
description: "'use strict' directive - may follow other directives"
flags: [noStrict]
---*/

  function foo()
  {
     "bogus directive";
     "use strict";
     return (this === undefined);
  }

assert(foo.call(undefined));
