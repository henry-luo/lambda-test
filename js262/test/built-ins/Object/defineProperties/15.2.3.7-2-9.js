

/*---
es5id: 15.2.3.7-2-9
description: >
    Object.defineProperties - argument 'Properties' is a Function
    object
---*/

var obj = {};
var props = function() {};
var result = false;

Object.defineProperty(props, "prop", {
  get: function() {
    result = this instanceof Function;
    return {};
  },
  enumerable: true
});

Object.defineProperties(obj, props);

assert(result, 'result !== true');
