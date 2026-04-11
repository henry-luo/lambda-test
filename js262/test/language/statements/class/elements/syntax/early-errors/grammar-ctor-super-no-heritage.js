

/*---
description: It is a SyntaxError if class has no heritage and constructor has a direct super (class declaration)
esid: prod-ClassElement
features: [class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassTail : ClassHeritageopt { ClassBody }

    It is a Syntax Error if ClassHeritage is not present and the following algorithm evaluates to true:
      1. Let constructor be ConstructorMethod of ClassBody.
      2. If constructor is empty, return false.
      3. Return HasDirectSuper of constructor.

---*/


$DONOTEVALUATE();

class C {
  constructor() {
    super();
  }
}
