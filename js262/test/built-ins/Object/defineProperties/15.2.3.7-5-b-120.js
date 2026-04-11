

/*---
es5id: 15.2.3.7-5-b-120
description: >
    Object.defineProperties - 'value' property of 'descObj' is own
    accessor property that overrides an inherited data property
    (8.10.5 step 5.a)
---*/

var obj = {};

var proto = {
  value: "inheritedDataProperty"
};

var Con = function() {};
Con.prototype = proto;

var descObj = new Con();

Object.defineProperty(descObj, "value", {
  get: function() {
    return "ownAccessorProperty";
  }
});


Object.defineProperties(obj, {
  property: descObj
});

assert.sameValue(obj.property, "ownAccessorProperty", 'obj.property');
