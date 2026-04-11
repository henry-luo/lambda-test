

/*---
info: |
    Check For Statement for automatic semicolon insertion.
    If automatic insertion semicolon would become one of the two semicolons in the header of a For Statement.
    Don`t use semicolons
es5id: 7.9_A6.3_T5
description: For header is (false \n false \n)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


for(false
    false
) {
  break;
}
