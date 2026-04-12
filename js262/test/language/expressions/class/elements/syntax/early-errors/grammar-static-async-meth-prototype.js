

/*---
description: Static Async Methods cannot be named prototype (class expression)
esid: prod-ClassElement
features: [async-functions, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : static MethodDefinition
        It is a Syntax Error if PropName of MethodDefinition is "prototype"

---*/


$DONOTEVALUATE();

var C = class {
  static async prototype() {}
};
