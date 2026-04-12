

/*---
es6id: 21.1.4
description: Instances has the own property length
info: |
  21.1.4 Properties of String Instances

  ...

  String instances have a length property, and a set of enumerable properties
  with integer indexed names.
includes: [propertyHelper.js]
---*/

class S extends String {}

var s1 = new S();

verifyProperty(s1, 'length', {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: false,
});

var s2 = new S('test262');

verifyProperty(s2, 'length', {
  value: 7,
  writable: false,
  enumerable: false,
  configurable: false,
});
