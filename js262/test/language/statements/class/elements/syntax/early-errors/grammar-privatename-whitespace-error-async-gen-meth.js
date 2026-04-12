

/*---
description: No space allowed between sigil and IdentifierName (Async Generator Method) (class declaration)
esid: prod-ClassElement
features: [async-iteration, class-methods-private, class]
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
  async * # m() {}
}
