

/*---
esid: sec-ecmascript-function-objects-construct-argumentslist-newtarget
description: >
  TypeError from `return 0` is not catchable with `super` in catch block.
---*/

class C extends class {} {
  constructor() {
    try {
      return 0;
    } catch(e) {
      super();
    }
  }
}

assert.throws(TypeError, function() {
  new C();
});
