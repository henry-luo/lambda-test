

/*---
es5id: 7.8.4-1-s
description: >
    A directive preceding an 'use strict' directive may not contain
    an OctalEscapeSequence
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

(function() {
  "asterisk: \052";
  "use strict";
});
