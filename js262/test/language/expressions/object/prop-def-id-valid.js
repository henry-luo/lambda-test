

/*---
es6id: 12.2.5.9
description: >
    When a valid IdentifierReference appears in an object initializer, a new
    data property is created. The property name is the string value of the
    identifier, the property value is the value of the identifier, and the
    property is enumerable, writable, and configurable.
includes: [propertyHelper.js]
---*/

var attr = 23;
var obj;

obj = { attr };

verifyProperty(obj, "attr", {
  value: 23,
  writable: true,
  enumerable: true,
  configurable: true,
});
