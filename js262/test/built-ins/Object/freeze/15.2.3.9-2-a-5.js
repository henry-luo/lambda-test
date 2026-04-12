

/*---
es5id: 15.2.3.9-2-a-5
description: >
    Object.freeze - 'P' is own accessor property that overrides an
    inherited data property
includes: [propertyHelper.js]
---*/


var proto = {};

proto.foo = 0; 

var Con = function() {};
Con.prototype = proto;

var child = new Con();

Object.defineProperty(child, "foo", {
  get: function() {
    return 10;
  },
  configurable: true
});

Object.freeze(child);

verifyProperty(child, "foo", {
  configurable: false,
});

assert.sameValue(child.foo, 10);
