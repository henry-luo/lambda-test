

/*---
description: If this IdentifierReference is contained in strict mode code and StringValue of Identifier is "eval" or "arguments", return invalid. (Direct assignment)
flags: [generated, onlyStrict]
negative:
  phase: parse
  type: SyntaxError
info: |
    Direct assignment
---*/

$DONOTEVALUATE();

arguments = 1;
