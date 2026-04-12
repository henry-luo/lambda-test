

/*---
esid: sec-continue-statement
description: IterationStatement search does not traverse static initialization block boundaries (label specified)
info: |
  4.1.1 Static Semantics: Early Errors
    ContinueStatement : continue ;
    ContinueStatement : continue LabelIdentifier ;

    - It is a Syntax Error if this ContinueStatement is not nested, directly or
      indirectly (but not crossing function or static initialization block
      boundaries), within an IterationStatement.
negative:
  phase: parse
  type: SyntaxError
features: [class-static-block]
---*/

$DONOTEVALUATE();

label: while(false) {
  class C {
    static {
      continue label;
    }
  }
}
