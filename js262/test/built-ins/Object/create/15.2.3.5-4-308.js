

/*---
es5id: 15.2.3.5-4-308
description: >
    Object.create - [[Enumerable]] is set as false if it is absent in
    data descriptor of one property in 'Properties' (8.12.9 step 4.a.i)
---*/

var isEnumerable = false;

var newObj = Object.create({}, {
  prop: {
    value: 1001,
    writable: true,
    configurable: true
  }
});

var hasProperty = newObj.hasOwnProperty("prop");

for (var p in newObj) {
  if (p === "prop") {
    isEnumerable = true;
  }
}

assert(hasProperty, 'hasProperty !== true');
assert.sameValue(isEnumerable, false, 'isEnumerable');
