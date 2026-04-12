

/*---
info: Appearing of "return" without a function body leads to syntax error
es5id: 12.9_A1_T9
description: Checking if execution of "return", placed into a catch Block, fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


try {
    throw 1;
} catch(e){
    return e;
}

