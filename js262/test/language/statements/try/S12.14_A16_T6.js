

/*---
info: |
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
es5id: 12.14_A16_T6
description: >
    Block: "{ StatementList }". Checking if execution of "try{
    catch{}{}" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


try{
catch(){}
