

/*---
description: >
    The BindingIdentifier of a SingleNameBinding witihn the FormalParameters of
    a non-generator MethodDefinition may be the `yield` keyword.
es6id: 14.3
flags: [noStrict]
---*/

var obj = {
  method(yield) {
    return yield;
  }
};


assert.sameValue(obj.method('arg'), 'arg');
