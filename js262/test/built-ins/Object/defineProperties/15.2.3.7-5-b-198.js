

/*---
es5id: 15.2.3.7-5-b-198
description: >
    Object.defineProperties - 'get' property of 'descObj' is inherited
    accessor property (8.10.5 step 7.a)
---*/

var obj = {};

var proto = {};

Object.defineProperty(proto, "get", {
  get: function() {
    return function() {
      return "inheritedAccessorProperty";
    };
  }
});

var Con = function() {};
Con.prototype = proto;

var descObj = new Con();

Object.defineProperties(obj, {
  property: descObj
});

assert.sameValue(obj.property, "inheritedAccessorProperty", 'obj.property');
