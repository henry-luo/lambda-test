

/*---
description: SyntaxError (class expression)
esid: prod-ClassElement
features: [class-fields-private, class]
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

    PrivateName ::
      # IdentifierName

---*/


var C = class {
  #x
  m() {}
};
