

/*---
esid: sec-strict-mode-of-ecmascript
description: >
    It is a SyntaxError if a CatchParameter occurs within strict mode code and BoundNames of CatchParameter contains either eval or arguments (13.15.1).
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

try { } catch (arguments) { }
