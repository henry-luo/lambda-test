

/*---
es6id: 13.1
description: >
    let: global use before initialization in prior statement.
    (TDZ, Temporal Dead Zone)
negative:
  phase: runtime
  type: ReferenceError
---*/
x; let x;
