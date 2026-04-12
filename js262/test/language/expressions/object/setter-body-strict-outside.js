

/*---
es5id: 11.1.5_7-2-1-s
description: >
    Strict Mode - SyntaxError is thrown when an assignment to a
    reserved word is contained in strict code
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

void {
  set x(value) {
    public = 42;
  }
};
