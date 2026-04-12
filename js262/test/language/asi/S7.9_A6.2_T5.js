

/*---
info: |
    Check For Statement for automatic semicolon insertion.
    If automatic insertion semicolon would become one of the two semicolons in the header of a For Statement.
    Use one semicolon
es5id: 7.9_A6.2_T5
description: For header is (false semicolon false\n)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


for(false;false
) {
  break;
}
