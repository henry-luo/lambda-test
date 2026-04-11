

/*---
es6id: 12.2.5
description: >
    In non-strict mode, yield is a valid Identifier.
flags: [noStrict]
---*/
var yield = 1;
var object = {yield};

assert.sameValue(object.yield, 1, "The value of `object.yield` is `1`");
