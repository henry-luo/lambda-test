

/*---
esid: sec-ecmascript-function-objects-construct-argumentslist-newtarget
description: >
  TypeError from `return 0` is not catchable.
---*/

class C extends class {} {
  constructor() {
    super();

    try {
      return 0;
    } catch(e) {
      return;
    }
  }
}

assert.throws(TypeError, function() {
  new C();
});
