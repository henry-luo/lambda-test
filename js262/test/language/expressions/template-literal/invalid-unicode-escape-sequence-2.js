

/*---
esid: sec-template-literal-lexical-components
description: Invalid unicode escape sequence
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

`\u0g`;
