

/*---
es6id: 19.2.1
description: Subclassing Function
info: |
  19.2.1 The Function Constructor

  ...

  The Function constructor is designed to be subclassable. It may be used as the
  value of an extends clause of a class definition.
  ...
---*/

class Fn extends Function {}

var fn = new Fn('a', 'return a * 2');

assert.sameValue(fn(42), 84);
