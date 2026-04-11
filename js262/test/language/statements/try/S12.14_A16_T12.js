

/*---
info: |
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
es5id: 12.14_A16_T12
description: Embedded "try" statements followed by two "catch" statements
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


try
{
  try
  {
  }
}
catch(e1){}
catch(e2){}
