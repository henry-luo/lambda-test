

/*---
description: Valid multi-line, multi-field (class expression)
esid: prod-ClassElement
features: [class-fields-public, class]
flags: [generated]
info: |
    ClassElement :
      MethodDefinition
      static MethodDefinition
      FieldDefinition ;
      ;

    FieldDefinition :
      ClassElementName Initializer _opt

    ClassElementName :
      PropertyName
      PrivateName

---*/


var C = class {
  x
  y
};
