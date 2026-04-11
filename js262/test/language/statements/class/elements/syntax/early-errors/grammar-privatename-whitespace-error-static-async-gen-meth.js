

/*---
description: No space allowed between sigil and IdentifierName (Static Async Generator Method) (class declaration)
esid: prod-ClassElement
features: [async-iteration, class-static-methods-private, class]
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
  static async * # m() {}
}
