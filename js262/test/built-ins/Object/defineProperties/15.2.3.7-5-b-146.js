

/*---
es5id: 15.2.3.7-5-b-146
description: >
    Object.defineProperties - 'writable' property of 'descObj' is own
    accessor property that overrides an inherited data property
    (8.10.5 step 6.a)
includes: [propertyHelper.js]
---*/

var obj = {};

var proto = {
  writable: true
};

var Con = function() {};
Con.prototype = proto;

var descObj = new Con();

Object.defineProperty(descObj, "writable", {
  get: function() {
    return false;
  }
});

Object.defineProperties(obj, {
  property: descObj
});

verifyProperty(obj, "property", {
  writable: false,
});
