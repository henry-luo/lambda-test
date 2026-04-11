

/*---
info: |
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    delete operator returns false when deleting a non-configurable
    data property (NaN)
flags: [noStrict]
---*/


var d = delete NaN;

assert.sameValue(d, false, 'd');
