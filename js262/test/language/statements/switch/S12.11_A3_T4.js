

/*---
info: Syntax constructions of switch statement
es5id: 12.11_A3_T4
description: >
    Using "case" that has no Expresson after it. "CaseClause: case
    Expression : [StatementList]"
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function SwitchTest(value){
  var result = 0;

  switch(value) {
    case:
      result += 2;
    default:
      result += 32;
      break;
  }

  return result;
}

var x = SwitchTest(0);
