

/*---
es5id: 15.2.3.5-4-215
description: >
    Object.create - 'writable' property of one property in
    'Properties' is a non-empty string (8.10.5 step 6.b)
---*/

var newObj = Object.create({}, {
  prop: {
    writable: "abc"
  }
});
var hasProperty = newObj.hasOwnProperty("prop");

newObj.prop = 121;

assert(hasProperty, 'hasProperty !== true');
assert.sameValue(newObj.prop, 121, 'newObj.prop');
