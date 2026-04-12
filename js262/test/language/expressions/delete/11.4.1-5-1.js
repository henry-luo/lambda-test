

/*---
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    delete operator returns false when deleting a direct reference to
    a var
flags: [noStrict]
---*/

var x = 1;


var d = delete x;

assert.sameValue(d, false, 'd');
assert.sameValue(x, 1, 'x');
