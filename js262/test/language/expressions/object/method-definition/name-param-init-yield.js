

/*---
description: >
    When the `yield` keyword occurs within the Initializer of a
    SingleNameBinding within the FormalParameters of a non-generator
    MethodDefinition, it behaves as an Identifier.
es6id: 14.3
flags: [noStrict]
---*/

var yield = 'default';
var obj = {
  method(x = yield) {
    return x;
  }
};


assert.sameValue(obj.method(), 'default');
