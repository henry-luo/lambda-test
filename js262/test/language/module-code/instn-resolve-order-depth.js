

/*---
description: Module dependencies are resolved following a depth-first strategy
esid: sec-moduledeclarationinstantiation
negative:
  phase: resolution
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

import './instn-resolve-order-depth-child_FIXTURE.js';
import './instn-resolve-order-depth-syntax_FIXTURE.js';
