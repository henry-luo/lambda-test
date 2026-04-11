

/*---
esid: sec-scripts
es6id: 15.1
description: >
  The `yield` token is interpreted as an Identifier when it appears in global
  code (strict mode)
info: |
  Syntax

  Script :
    ScriptBodyopt

  ScriptBody :
    StatementList[~Yield, ~Return]
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

yield;
