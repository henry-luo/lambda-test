

/*---
description: The pound signal in the private method cannot be escaped (class expression)
esid: prod-ClassElement
features: [class-methods-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    PrivateName::
      # IdentifierName

    U+0023 is the escape sequence for #

---*/


$DONOTEVALUATE();

var C = class {
  \u0023m() { return 42; }
};
