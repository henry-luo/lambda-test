

/*---
es5id: 14.1-2-s
description: "\"use strict\" directive - correct usage double quotes"
flags: [noStrict]
---*/

  function foo()
  {
    "use strict";
     return (this === undefined);
  }

assert(foo.call(undefined));
