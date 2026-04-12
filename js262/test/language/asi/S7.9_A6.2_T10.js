

/*---
info: |
    Check For Statement for automatic semicolon insertion.
    If automatic insertion semicolon would become one of the two semicolons in the header of a For Statement.
    Use one semicolon
es5id: 7.9_A6.2_T10
description: For header is (\n false \n semicolon)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


for(
    false
;) {
  break;
}
