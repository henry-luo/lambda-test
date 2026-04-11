

/*---
es6id: 13.1
description: >
    const: global use before initialization in declaration statement.
    (TDZ, Temporal Dead Zone)
negative:
  phase: runtime
  type: ReferenceError
---*/
const x = x + 1;
