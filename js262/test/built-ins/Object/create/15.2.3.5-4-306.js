

/*---
es5id: 15.2.3.5-4-306
description: >
    Object.create - [[Value]] is set as undefined if it is absent in
    data descriptor of one property in 'Properties' (8.12.9 step 4.a.i)
---*/

var newObj = Object.create({}, {
  prop: {
    writable: true,
    configurable: true,
    enumerable: true
  }
});

assert(newObj.hasOwnProperty("prop"), 'newObj.hasOwnProperty("prop") !== true');
assert.sameValue(newObj.prop, undefined, 'newObj.prop');
