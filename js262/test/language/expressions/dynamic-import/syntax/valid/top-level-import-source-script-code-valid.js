

/*---
description: import.source() can be used in script code (top level syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [source-phase-imports, source-phase-imports-module-source, dynamic-import]
flags: [generated]
info: |
    ImportCall :
        import( AssignmentExpression )

---*/


var smoosh; function smoosh() {}


import.source('<module source>');
