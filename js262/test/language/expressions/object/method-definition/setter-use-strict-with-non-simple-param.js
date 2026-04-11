

/*---
esid: sec-method-definitions-static-semantics-early-errors
description: >
  A SyntaxError is thrown if a setter method contains a non-simple parameter list and a UseStrict directive.
info: |
  Static Semantics: Early Errors

  It is a Syntax Error if ContainsUseStrict of FunctionBody is true and IsSimpleParameterList of PropertySetParameterList is false.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var o = {
  set m(a = 0) {
    "use strict";
  }
};
