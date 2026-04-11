

/*---
es5id: 15.3.4.5-8-2
description: >
    Function.prototype.bind, [[Class]] of bound function must be
    'Function'
---*/

function foo() {}
var o = {};

var bf = foo.bind(o);
var s = Object.prototype.toString.call(bf);

assert.sameValue(s, '[object Function]', 's');
