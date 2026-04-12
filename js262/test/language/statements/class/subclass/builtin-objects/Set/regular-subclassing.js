

/*---
es6id: 23.2.1
description: Subclassing the Set object
info: |
  23.2.1 The Set Constructor

  ...

  The Set constructor is designed to be subclassable. It may be used as the
  value in an extends clause of a class definition. Subclass constructors that
  intend to inherit the specified Set behaviour must include a super call to the
  Set constructor to create and initialize the subclass instance with the
  internal state necessary to support the Set.prototype built-in methods.
---*/

class S extends Set {}

var set = new S([{}, {}]);

assert.sameValue(set.size, 2);

set.add({});

assert.sameValue(set.size, 3);
