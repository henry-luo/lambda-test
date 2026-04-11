

/*---
es5id: 15.2.3.5-4-310
description: >
    Object.create - [[Get]] is set as undefined if it is absent in
    accessor descriptor of one property in 'Properties' (8.12.9 step
    4.b)
---*/

var newObj = Object.create({}, {
  prop: {
    set: function() {},
    enumerable: true,
    configurable: true
  }
});

assert(newObj.hasOwnProperty("prop"), 'newObj.hasOwnProperty("prop") !== true');
assert.sameValue(newObj.prop, undefined, 'newObj.prop');
