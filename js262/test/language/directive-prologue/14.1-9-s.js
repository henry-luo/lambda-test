

/*---
es5id: 14.1-9-s
description: "'use strict' directive - may occur multiple times"
flags: [noStrict]
---*/

  function foo()
  {
     'use strict';
     "use strict";
     return (this === undefined);
  }

assert(foo.call(undefined));
