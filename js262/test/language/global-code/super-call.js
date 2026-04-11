

/*---
esid: sec-scripts-static-semantics-early-errors
es6id: 15.1.1
description: Global code may not contain SuperCall
info: |
  - It is a Syntax Error if StatementList Contains super unless the source code
    containing super is eval code that is being processed by a direct eval that
    is contained in function code that is not the function code of an
    ArrowFunction.
negative:
  phase: parse
  type: SyntaxError
features: [super]
---*/

$DONOTEVALUATE();

super();
