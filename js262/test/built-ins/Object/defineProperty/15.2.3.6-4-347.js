

/*---
es5id: 15.2.3.6-4-347
description: >
    ES5 Attributes - property ([[Writable]] is true, [[Enumerable]] is
    false, [[Configurable]] is false) is writable
---*/

var obj = {};

Object.defineProperty(obj, "prop", {
  value: 2010,
  writable: true,
  enumerable: false,
  configurable: false
});
var propertyDefineCorrect = (obj.prop === 2010);
obj.prop = 1001;

assert(propertyDefineCorrect, 'propertyDefineCorrect !== true');
assert.sameValue(obj.prop, 1001, 'obj.prop');
