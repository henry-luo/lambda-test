

/*---
es5id: 15.2.3.7-2-11
description: Object.defineProperties - argument 'Properties' is the Math object
---*/

var obj = {};
var result = false;

Object.defineProperty(Math, "prop", {
  get: function() {
    result = (this === Math);
    return {};
  },
  enumerable: true,
  configurable: true
});

Object.defineProperties(obj, Math);

assert(result, 'result !== true');
