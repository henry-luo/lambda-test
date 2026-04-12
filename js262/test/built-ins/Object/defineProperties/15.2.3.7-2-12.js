

/*---
es5id: 15.2.3.7-2-12
description: Object.defineProperties - argument 'Properties' is a Date object
---*/

var obj = {};
var props = new Date(0);
var result = false;

Object.defineProperty(props, "prop", {
  get: function() {
    result = this instanceof Date;
    return {};
  },
  enumerable: true
});

Object.defineProperties(obj, props);

assert(result, 'result !== true');
