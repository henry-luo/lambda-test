

/*---
es5id: 15.2.3.9-2-a-3
description: >
    Object.freeze - 'P' is own data property that overrides an
    inherited accessor property
includes: [propertyHelper.js]
---*/

var proto = {};

Object.defineProperty(proto, "foo", {
  get: function() {
    return 0;
  },
  configurable: true
});

var Con = function() {};
Con.prototype = proto;

var child = new Con();
Object.defineProperty(child, "foo", {
  value: 10,
  configurable: true
});

Object.freeze(child);

verifyProperty(child, "foo", {
  value: 10,
  writable: false,
  configurable: false,
});
