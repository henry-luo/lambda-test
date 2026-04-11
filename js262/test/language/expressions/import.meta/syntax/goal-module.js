

/*---
esid: sec-left-hand-side-expressions-static-semantics-early-errors
description: >
  No early Syntax Error is thrown when the syntactic goal symbol is Module.
info: |
  It is an early Syntax Error if Module is not the syntactic goal symbol.
flags: [module]
features: [import.meta]
---*/

import.meta;
