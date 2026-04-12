

/*---
es5id: 15.2.3.5-4-175
description: >
    Object.create - one property in 'Properties' is an Arguments
    object which implements its own [[Get]] method to access the
    'value' property (8.10.5 step 5.a)
---*/

var argObj = (function() {
  return arguments;
})();

argObj.value = "ArgValue";

var newObj = Object.create({}, {
  prop: argObj
});

assert.sameValue(newObj.prop, "ArgValue", 'newObj.prop');
