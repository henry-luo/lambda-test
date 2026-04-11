

/*---
description: No space allowed between sigil and IdentifierName (CallExpression) (class expression)
esid: prod-ClassElement
features: [class-fields-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Updated Productions

    MemberExpression :
      MemberExpression . PrivateName

    CallExpression :
      CallExpression . PrivateName

    PrivateName ::
      # IdentifierName

---*/


$DONOTEVALUATE();

var C = class {
  #x;

  f() {
    return this;
  }

  m() {
    this.f().# x;
  }
};
