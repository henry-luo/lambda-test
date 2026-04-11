

/*---
es5id: 15.2.3.9-2-a-2
description: >
    Object.freeze - 'P' is own data property that overrides an
    inherited data property
includes: [propertyHelper.js]
---*/


var proto = {
  foo: 0
}; 

var Con = function() {};
Con.prototype = proto;

var child = new Con();

child.foo = 10; 

Object.freeze(child);

verifyProperty(child, "foo", {
  value: 10,
  writable: false,
  configurable: false,
});
