

/*---
es6id: 12.2.5
description: >
    In non-strict mode, let is a valid Identifier.
flags: [noStrict]
---*/
var let = 1;
var object = {let};

assert.sameValue(object.let, 1, "The value of `object.let` is `1`");
