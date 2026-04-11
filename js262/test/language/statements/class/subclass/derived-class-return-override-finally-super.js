

/*---
esid: sec-ecmascript-function-objects-construct-argumentslist-newtarget
description: >
  `super()` in finally block is executed before checking for missing `super()`
  call when `return` is in a try block.
---*/

class C extends class {} {
  constructor() {
    try {
      return;
    } finally {
      super();
    }
  }
}

var o = new C();
assert.sameValue(typeof o, "object");
