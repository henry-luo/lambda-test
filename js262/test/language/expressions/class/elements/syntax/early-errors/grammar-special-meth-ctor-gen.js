

/*---
description: Generator Methods cannot be named "constructor" (class expression)
esid: prod-ClassElement
features: [generators, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : MethodDefinition
        It is a Syntax Error if PropName of MethodDefinition is "constructor" and SpecialMethod of MethodDefinition is true.

---*/


$DONOTEVALUATE();

var C = class {
  * constructor() {}
};
