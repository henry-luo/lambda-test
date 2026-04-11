

/*---
description: Acessing private field from object destructuring pattern is not a valid syntax (class declaration)
esid: prod-ClassElement
features: [class-fields-private, destructuring-binding, class]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Updated Productions

    ObjectAssignmentPattern[Yield, Await]:
       {}
       {AssignmentRestProperty[?Yield, ?Await]}
       {AssignmentPropertyList[?Yield, ?Await]}
       {AssignmentPropertyList[?Yield, ?Await],AssignmentRestProperty[?Yield, ?Await]opt}

---*/


$DONOTEVALUATE();

class C {
  #x = 1;

  destructureX() {
    const { #x: x } = this;
  }
}
