

/*---
info: |
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
es5id: 12.14_A16_T10
description: "Catch: \"catch (Identifier ) Block\""
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


try{}
catch(){}
finally{}
