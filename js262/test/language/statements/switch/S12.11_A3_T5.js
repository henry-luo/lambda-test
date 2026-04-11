

/*---
info: Syntax constructions of switch statement
es5id: 12.11_A3_T5
description: Introducing statement not followed by "case" keyword
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function SwitchTest(value){
  var result = 0;

  switch(value) {
  	result =2;
    case 0:
      result += 2;
    default:
      result += 32;
      break;
  }

  return result;
}

var x = SwitchTest(0);
