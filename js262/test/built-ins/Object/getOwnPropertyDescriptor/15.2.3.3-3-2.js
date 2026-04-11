

/*---
es5id: 15.2.3.3-3-2
description: Object.getOwnPropertyDescriptor - 'P' is inherited data property
---*/

var proto = {
  property: "inheritedDataProperty"
};

var Con = function() {};
Con.ptototype = proto;

var child = new Con();

var desc = Object.getOwnPropertyDescriptor(child, "property");

assert.sameValue(typeof desc, "undefined", 'typeof desc');
