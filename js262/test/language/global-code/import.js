

/*---
description: The `import` declaration may not appear within a ScriptBody
esid: sec-scripts
negative:
  phase: parse
  type: SyntaxError
info: |
     A.5 Scripts and Modules

     Script:
         ScriptBodyopt

     ScriptBody:
         StatementList
---*/

$DONOTEVALUATE();

import v from './import.js';
