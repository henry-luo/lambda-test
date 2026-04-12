

/*---
es5id: 15.2.3.7-5-b-151
description: >
    Object.defineProperties - 'descObj' is a Function object which
    implements its own [[Get]] method to get 'writable' property
    (8.10.5 step 6.a)
includes: [propertyHelper.js]
---*/

var obj = {};

var func = function(a, b) {
  return a + b;
};

func.writable = false;

Object.defineProperties(obj, {
  property: func
});

verifyProperty(obj, "property", {
  writable: false,
});
