

/*---
description: No space allowed between sigil and IdentifierName (Async Method) (class expression)
esid: prod-ClassElement
features: [async-functions, class-methods-private, class]
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

var C = class {
  async # m() {}
};
