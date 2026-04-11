

/*---
description: SyntaxError (class declaration)
esid: prod-ClassElement
features: [class-fields-public, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
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


$DONOTEVALUATE();

class C {
  x y
}
