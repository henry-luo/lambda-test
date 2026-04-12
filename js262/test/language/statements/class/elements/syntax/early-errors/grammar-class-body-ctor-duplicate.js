

/*---
description: It is a SyntaxError if the class body has more than one constructor (class declaration)
esid: prod-ClassElement
features: [class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassBody : ClassElementList
        It is a Syntax Error if PrototypePropertyNameList of ClassElementList contains more
        than one occurrence of "constructor".

---*/


$DONOTEVALUATE();

class C {
  constructor() {}
  constructor() {}
}
