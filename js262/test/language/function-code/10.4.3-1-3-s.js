

/*---
es5id: 10.4.3-1-3-s
description: this is not coerced to an object in strict mode (undefined)
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

assert.sameValue(foo.call(undefined), 'undefined', 'foo.call(undefined)');
assert.sameValue(bar.call(), 'object', 'bar.call()');
