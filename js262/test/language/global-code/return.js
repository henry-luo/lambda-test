

/*---
esid: sec-scripts
es6id: 15.1
description: ReturnStatement may not be used directly within global code
info: |
  Syntax

  Script :
    ScriptBodyopt

  ScriptBody :
    StatementList[~Yield, ~Return]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

return;
