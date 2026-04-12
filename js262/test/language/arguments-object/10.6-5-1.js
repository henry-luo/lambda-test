

/*---
es5id: 10.6-5-1
description: >
    [[Prototype]] property of Arguments is set to Object prototype
    object
---*/

function testcase() {
  assert.sameValue(Object.getPrototypeOf(arguments), Object.getPrototypeOf({}));
}
testcase();
