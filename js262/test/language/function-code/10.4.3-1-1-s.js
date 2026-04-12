

/*---
es5id: 10.4.3-1-1-s
description: this is not coerced to an object in strict mode (Number)
flags: [noStrict]
---*/

function foo()
{
  'use strict';
  return typeof(this);
}

function bar()
{
  return typeof(this);
}

assert.sameValue(foo.call(1), 'number', 'foo.call(1)');
assert.sameValue(bar.call(1), 'object', 'bar.call(1)');
