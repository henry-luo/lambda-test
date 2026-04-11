

/*---
esid: sec-declarative-environment-records-initializebinding-n-v
description: >
    Redeclaration error within strict mode function inside non-strict code.
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
features: [explicit-resource-management]
---*/

$DONOTEVALUATE();
(function() { 'use strict'; { using f = null; var f; } })
