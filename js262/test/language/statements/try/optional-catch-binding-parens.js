

/*---
author: Lucas Azzola
esid: pending
description: >
  It is a SyntaxError to have a try/catch statement with an empty CatchParameter
features: [optional-catch-binding]
info: |
  Catch[Yield, Await, Return]:
    catch ( CatchParameter[?Yield, ?Await] ) Block[?Yield, ?Await, ?Return]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

try {} catch () {}

