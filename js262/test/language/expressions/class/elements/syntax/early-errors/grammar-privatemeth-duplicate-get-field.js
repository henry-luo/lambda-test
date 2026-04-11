

/*---
description: It's a SyntaxError if a class contains a private getter and a private field with the same name (class expression)
esid: prod-ClassElement
features: [class-methods-private, class-fields-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Static Semantics: Early Errors

    ClassBody : ClassElementList
        It is a Syntax Error if PrivateBoundNames of ClassBody contains any duplicate entries, unless the name is used once for a getter and once for a setter and in no other entries.

---*/


$DONOTEVALUATE();

var C = class {
  #m;
  get #m() {}
};
