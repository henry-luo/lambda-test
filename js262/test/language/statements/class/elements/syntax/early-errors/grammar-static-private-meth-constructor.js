

/*---
description: Static Private Methods cannot be named constructor (class declaration)
esid: prod-ClassElement
features: [class-static-methods-private, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElementName : PrivateName ;
        It is a Syntax Error if StringValue of PrivateName is "#constructor"

---*/


$DONOTEVALUATE();

class C {
  static #constructor() {}
}
