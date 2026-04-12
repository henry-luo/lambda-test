

/*---
description: >
    When the `yield` keyword occurs within the PropertyName of a
    GeneratorMethod outside of a generator function, it behaves as an
    Identifier.
es6id: 14.4
features: [generators]
flags: [noStrict]
---*/

var yield = 'propName';
var obj = {
  *[yield]() {}
};

assert(
  Object.prototype.hasOwnProperty.call(obj, 'propName'),
  "The property name is taken from the 'yield' variable"
);
