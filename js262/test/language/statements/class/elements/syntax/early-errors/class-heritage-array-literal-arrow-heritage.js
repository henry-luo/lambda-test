

/*---
description: It's a SyntaxError if an array literal evaluated on ClassHeritage uses a private name. (class declaration)
esid: prod-ClassElement
features: [class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassTail : ClassHeritage { ClassBody }

    ClassHeritage :
        extends LeftHandSideExpression

---*/


$DONOTEVALUATE();

class C extends () => {} {
  
}
