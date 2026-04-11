

/*---
es5id: 14.1-7-s
description: "'use strict' directive - not recognized if upper case"
flags: [noStrict]
---*/

  function foo()
  {
    'Use Strict';
     return (this !== undefined);
  }

assert(foo.call(undefined));
