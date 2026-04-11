

/*---
es5id: 15.2.3.7-2-6
description: >
    Object.defineProperties - argument 'Properties' is a Number object
    whose primitive value is any interesting number
---*/

var obj = {};
var props = new Number(-12);
var result = false;

Object.defineProperty(props, "prop", {
  get: function() {
    result = this instanceof Number;
    return {};
  },
  enumerable: true
});

Object.defineProperties(obj, props);

assert(result, 'result !== true');
