

/*---
es6id: 23.3.1
description: Super need to be called to initialize internals
info: |
  23.3.1 The WeakMap Constructor

  ...

  The WeakMap constructor is designed to be subclassable. It may be used as the
  value in an extends clause of a class definition. Subclass constructors that
  intend to inherit the specified WeakMap behaviour must include a super call to
  the WeakMap constructor to create and initialize the subclass instance with
  the internal state necessary to support the WeakMap.prototype built-in
  methods.
features: [WeakMap]
---*/

class M1 extends WeakMap {
  constructor() {}
}

assert.throws(ReferenceError, function() {
  new M1();
});

class M2 extends WeakMap {
  constructor() {
    super();
  }
}

new M2();
