

/*---
info: Check Throw Statement for automatic semicolon insertion
es5id: 7.9_A4
description: Try use Throw \n Expression construction
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


try {
  throw
  1;
} catch(e) {
}
