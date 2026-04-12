

/*---
es5id: 15.2.3.5-4-19
description: >
    Object.create -  own enumerable accessor property in 'Properties'
    is defined in 'obj' (15.2.3.7 step 3)
---*/

var props = {};

Object.defineProperty(props, "prop", {
  get: function() {
    return {};
  },
  enumerable: true
});

var newObj = Object.create({}, props);

assert(newObj.hasOwnProperty("prop"), 'newObj.hasOwnProperty("prop") !== true');
