

/*---
es5id: 15.2.3.5-4-251
description: >
    Object.create - one property in 'Properties' is the Math object
    that uses Object's [[Get]] method to access the 'get' property
    (8.10.5 step 7.a)
---*/

Math.get = function() {
  return "VerifyMathObject";
};

var newObj = Object.create({}, {
  prop: Math
});

assert.sameValue(newObj.prop, "VerifyMathObject", 'newObj.prop');
