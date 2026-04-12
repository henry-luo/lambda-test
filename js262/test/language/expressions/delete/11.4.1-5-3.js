

/*---
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    delete operator returns false when deleting a direct reference to
    a function name
flags: [noStrict]
---*/

var foo = function() {};


var d = delete foo;

assert.sameValue(d, false, 'd');
assert.sameValue(typeof foo, 'function', 'typeof foo');
