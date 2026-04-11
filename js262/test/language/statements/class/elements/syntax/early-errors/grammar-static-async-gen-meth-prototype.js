

/*---
description: Static Async Generator Methods cannot be named prototype (class declaration)
esid: prod-ClassElement
features: [async-iteration, class]
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

class C {
  static async * prototype() {}
}
