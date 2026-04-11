

/*---
es5id: 15.2.3.7-2-13
description: Object.defineProperties - argument 'Properties' is a RegExp object
---*/

var obj = {};
var props = new RegExp();
var result = false;

Object.defineProperty(props, "prop", {
  get: function() {
    result = this instanceof RegExp;
    return {};
  },
  enumerable: true
});

Object.defineProperties(obj, props);

assert(result, 'result !== true');
