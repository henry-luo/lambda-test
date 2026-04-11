

/*---
description: ImportCall is a CallExpression can be nested in other import calls (top level syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [dynamic-import]
flags: [generated]
info: |
    ImportCall :
        import( AssignmentExpression )

---*/

import(import(import('./empty_FIXTURE.js')));
