

/*---
es5id: 15.2.3.7-6-a-3
description: >
    Object.defineProperties - 'P' is own data property that overrides
    an inherited data property (8.12.9 step 1 )
---*/

var proto = {};
Object.defineProperty(proto, "prop", {
  value: 11,
  configurable: true
});
var Con = function() {};
Con.prototype = proto;

var obj = new Con();
Object.defineProperty(obj, "prop", {
  value: 12,
  configurable: false
});
assert.throws(TypeError, function() {
  Object.defineProperties(obj, {
    prop: {
      value: 13,
      configurable: true
    }
  });
});
