

/*---
info: Check For Statement for automatic semicolon insertion
es5id: 7.9_A6.4_T2
description: >
    Three semicolons. For header is (false semicolon false two
    semicolons false)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


for(false;false;;false) {
  break;
}
