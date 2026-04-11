

/*---
es5id: 15.2.3.7-5-b-203
description: >
    Object.defineProperties - 'get' property of 'descObj' is inherited
    accessor property without a get function (8.10.5 step 7.a)
---*/

var obj = {};

var proto = {};

Object.defineProperty(proto, "get", {
  set: function() {}
});

var Con = function() {};
Con.prototype = proto;

var descObj = new Con();

Object.defineProperties(obj, {
  property: descObj
});

assert.sameValue(typeof(obj.property), "undefined", 'typeof (obj.property)');
