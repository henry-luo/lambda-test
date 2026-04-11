

/*---
es6id: 19.1.1
description: Subclassing Object replacing a prototype method
info: |
  19.1.1 The Object Constructor

  The Object constructor is designed to be subclassable. It may be used as the
  value of an extends clause of a class definition.
---*/

class Obj extends Object {
  valueOf() {
    return 42;
  }
}

var obj = new Obj();

assert.sameValue(obj.valueOf(), 42, 'Replaces prototype');
