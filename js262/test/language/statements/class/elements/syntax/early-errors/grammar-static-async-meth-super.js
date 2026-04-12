

/*---
description: Static Async Methods cannot contain direct super (class declaration)
esid: prod-ClassElement
features: [async-functions, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Class Definitions / Static Semantics: Early Errors

    ClassElement : static MethodDefinition
        It is a Syntax Error if HasDirectSuper of MethodDefinition is true.

---*/


$DONOTEVALUATE();

class C extends Function{
  static async method() {
      super();
  }
}
