

/*---
esid: sec-class-definitions
description: >
  `await` is a valid class-name identifier.
info: |
  12.1.1 Static Semantics: Early Errors

  IdentifierReference : await

  It is a Syntax Error if the goal symbol of the syntactic grammar is Module.
negative:
  phase: parse
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

class await {}
