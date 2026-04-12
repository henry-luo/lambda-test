

/*---
es5id: 15.2.3.6-4-584
description: ES5 Attributes - Failed to add property into object (Date instance)
---*/

var data = "data";

Object.defineProperty(Date.prototype, "prop", {
  get: function() {
    return data;
  },
  set: function(value) {
    data = value;
  },
  enumerable: true,
  configurable: true
});
var dateObj = new Date();
dateObj.prop = "myOwnProperty";

assert.sameValue(dateObj.hasOwnProperty("prop"), false, 'dateObj.hasOwnProperty("prop")');
assert.sameValue(dateObj.prop, "myOwnProperty", 'dateObj.prop');
assert.sameValue(data, "myOwnProperty", 'data');
