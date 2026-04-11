

/*---
es6id: 14.5
description: >
    class strict mode: `with` disallowed
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class C extends (function B() { with ({}); return B; }()) {}

