

/*---
es5id: 15.2.3.7-3-1
description: >
    Object.defineProperties - enumerable own data property of
    'Properties' is defined in 'O'
---*/

var obj = {};
var props = {};
Object.defineProperty(props, "prop", {
  value: {},
  enumerable: true
});

Object.defineProperties(obj, props);

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
