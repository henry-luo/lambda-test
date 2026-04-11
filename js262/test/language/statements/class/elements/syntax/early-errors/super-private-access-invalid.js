

/*---
description: It is syntax error if PrivateName IdentifierName is accessed on SuperProperty (class declaration)
esid: prod-ClassElement
features: [class-methods-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassElementName :
      PropertyName
      PrivateName

    PrivateName ::
      # IdentifierName

    SuperProperty:
      super[Expression]
      super.IdentifierName

---*/


$DONOTEVALUATE();

class C extends B
{
  #x() {}

  method() {
    super.#x();
  }
}
