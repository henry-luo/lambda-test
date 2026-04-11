

/*---
description: Requested modules that produce an early SyntaxError
esid: sec-moduledeclarationinstantiation
info: |
    [...]
    8. For each String required that is an element of
       module.[[RequestedModules]] do,
       [...]
       b. Let requiredModule be ? HostResolveImportedModule(module, required).
    [...]
negative:
  phase: resolution
  type: SyntaxError
flags: [module]
---*/

$DONOTEVALUATE();

import './instn-resolve-err-syntax-1_FIXTURE.js';
