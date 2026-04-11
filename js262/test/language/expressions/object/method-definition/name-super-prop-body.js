

/*---
description: >
    The HomeObject of Functions declared as methods is the Object prototype.
es6id: 14.3.8
features: [super]
---*/

var obj = {
  method() {
    return super.toString;
  }
};

obj.toString = null;

assert.sameValue(obj.method(), Object.prototype.toString);
