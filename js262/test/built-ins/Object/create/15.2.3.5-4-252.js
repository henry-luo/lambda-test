

/*---
es5id: 15.2.3.5-4-252
description: >
    Object.create - one property in 'Properties' is the JSON object
    that uses Object's [[Get]] method to access the 'get' property
    (8.10.5 step 7.a)
---*/

JSON.get = function() {
  return "VerifyJSONObject";
};

var newObj = Object.create({}, {
  prop: JSON
});

assert.sameValue(newObj.prop, "VerifyJSONObject", 'newObj.prop');
