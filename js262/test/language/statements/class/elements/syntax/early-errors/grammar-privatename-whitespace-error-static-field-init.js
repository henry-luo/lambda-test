

/*---
description: No space allowed between sigil and IdentifierName (Static Field with Initializer) (class declaration)
esid: prod-ClassElement
features: [class-static-fields-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Updated Productions

    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

---*/


$DONOTEVALUATE();

class C {
  static # x = 1;
}
