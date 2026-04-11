

/*---
info: |
 GeneratorMethod can reference SuperProperty in body
features: [generators]
es6id: 14.4.1
author: Sam Mikes
description: GeneratorMethod body uses SuperProperty (allowed)
---*/

var obj;

var obj = {
  *foo() {
    return super.toString;
  }
};

obj.toString = null;

assert.sameValue(obj.foo().next().value, Object.prototype.toString);
