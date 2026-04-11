

/*---
esid: sec-generator-function-definitions-static-semantics-early-errors
description: >
  A SyntaxError is thrown if a generator method contains a non-simple parameter list and a UseStrict directive.
info: |
  Static Semantics: Early Errors

  It is a Syntax Error if ContainsUseStrict of GeneratorBody is true and IsSimpleParameterList of StrictFormalParameters is false.
negative:
  phase: parse
  type: SyntaxError
features: [generators]
---*/

$DONOTEVALUATE();

var o = {
  *m(a = 0) {
    "use strict";
  }
};
