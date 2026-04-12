

/*---
es5id: 15.2.3.3-3-4
description: >
    Object.getOwnPropertyDescriptor - 'P' is own data property that
    overrides an inherited accessor property
---*/

var proto = {};
Object.defineProperty(proto, "property", {
  get: function() {
    return "inheritedDataProperty";
  },
  configurable: true
});

var Con = function() {};
Con.ptototype = proto;

var child = new Con();
Object.defineProperty(child, "property", {
  value: "ownDataProperty",
  configurable: true
});

var desc = Object.getOwnPropertyDescriptor(child, "property");

assert.sameValue(desc.value, "ownDataProperty", 'desc.value');
