

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: sec-strict-mode-of-ecmascript
description: >
  It is a SyntaxError if FormalParameters contains eval in strict mode.
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
features: [async-iteration]
---*/

$DONOTEVALUATE();

(async function*(eval) { });
