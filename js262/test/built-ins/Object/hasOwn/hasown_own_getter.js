

/*---
esid: sec-object.hasown
description: Properties - [[HasOwnProperty]] (literal own getter property)
author: Jamie Kyle
features: [Object.hasOwn]
---*/

var o = {
  get foo() {
    return 42;
  }
};

assert.sameValue(Object.hasOwn(o, "foo"), true, 'Object.hasOwn(o, "foo") !== true');
