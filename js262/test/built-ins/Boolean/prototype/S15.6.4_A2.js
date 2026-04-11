

/*---
info: |
    The value of the internal [[Prototype]] property of the Boolean
    prototype object is the Object prototype object
esid: sec-properties-of-the-boolean-prototype-object
description: Checking Object.prototype.isPrototypeOf(Boolean.prototype)
---*/

assert(
  Object.prototype.isPrototypeOf(Boolean.prototype),
  'Object.prototype.isPrototypeOf(Boolean.prototype) must return true'
);
