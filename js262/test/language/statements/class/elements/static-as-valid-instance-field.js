

/*---
description: static is a valid name of an instance field (field definitions in a class declaration)
esid: prod-FieldDefinition
features: [class-fields-public, class]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/


class C {
  static;
}

let c = new C();

verifyProperty(c, "static", {
  value: undefined,
  enumerable: true,
  writable: true,
  configurable: true
});

