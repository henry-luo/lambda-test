

/*---
description: static is a valid name of a static field (field definitions in a class expression)
esid: prod-FieldDefinition
features: [class-static-fields-public, class]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      static FieldDefinition ;

---*/


var C = class {
  static static;
}

verifyProperty(C, "static", {
  value: undefined,
  enumerable: true,
  writable: true,
  configurable: true
});

