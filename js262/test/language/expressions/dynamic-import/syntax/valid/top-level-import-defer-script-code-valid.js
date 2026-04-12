

/*---
description: import.defer() can be used in script code (top level syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [import-defer, dynamic-import]
flags: [generated]
info: |
    ImportCall :
        import( AssignmentExpression )

---*/

import.defer('./empty_FIXTURE.js');
