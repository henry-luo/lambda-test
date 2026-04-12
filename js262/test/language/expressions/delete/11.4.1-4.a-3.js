

/*---
info: |
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    delete operator returns false when deleting a non-configurable
    data property
flags: [noStrict]
---*/

var o = {};
var desc = {
  value: 1,
  configurable: false,
}; 
Object.defineProperty(o, 'foo', desc);


var d = delete o.foo;

assert.sameValue(d, false, 'd');
assert.sameValue(o.hasOwnProperty('foo'), true, 'o.hasOwnProperty("foo")');
