

/*---
info: Appearing of "return" without a function body leads to syntax error
es5id: 12.9_A1_T3
description: Checking if execution of "return" within "try" statement fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


try {
    return 1;
} catch(e){
    return 1;
}

