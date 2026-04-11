

/*---
info: |
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
es5id: 12.14_A16_T13
description: >
    Catch: "catch (Identifier ) Block". Checking if execution of "22"
    passes at the place of Identifier of "catch"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


try
{
}
catch("22")
{
}
