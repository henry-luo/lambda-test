

/*---
info: |
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    delete operator throws TypeError when deleting a non-configurable
    data property in strict mode
flags: [onlyStrict]
---*/

var o = {};
var desc = {
  value: 1,
}; 
Object.defineProperty(o, 'foo', desc);


assert.throws(TypeError, function() {
  delete o.foo;
});
