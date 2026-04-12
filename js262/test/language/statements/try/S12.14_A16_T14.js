

/*---
info: |
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
es5id: 12.14_A16_T14
description: Checking if passing argument to "try" statement fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


try(e1){
}
catch(e){}
