

/*---
es5id: 15.2.3.5-4-223
description: >
    Object.create - 'writable' property of one property in
    'Properties' is a RegExp object (8.10.5 step 6.b)
---*/

var newObj = Object.create({}, {
  prop: {
    writable: new RegExp()
  }
});
var hasProperty = newObj.hasOwnProperty("prop");

newObj.prop = 121;

assert(hasProperty, 'hasProperty !== true');
assert.sameValue(newObj.prop, 121, 'newObj.prop');
