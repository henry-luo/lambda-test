

/*---
es5id: 15.2.3.7-5-a-1
description: >
    Object.defineProperties - 'P' is own data property that overrides
    enumerable inherited data property of 'Properties' is defined in
    'O'
---*/

var obj = {};

var proto = {};

Object.defineProperty(proto, "prop", {
  value: {
    value: 9
  },
  enumerable: true
});

var Con = function() {};
Con.prototype = proto;

var child = new Con();
Object.defineProperty(child, "prop", {
  value: {
    value: 12
  },
  enumerable: true
});

Object.defineProperties(obj, child);

assert(obj.hasOwnProperty("prop"), 'obj.hasOwnProperty("prop") !== true');
assert.sameValue(obj.prop, 12, 'obj.prop');
