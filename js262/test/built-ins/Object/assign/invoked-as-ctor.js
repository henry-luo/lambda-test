

/*---
es6id: 19.1.2.1
description: Invoked as a constructor
info: |
    ES6 Section 9.3:

    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified in
    the description of a particular function.
---*/

assert.throws(TypeError, function() {
  new Object.assign({});
});
