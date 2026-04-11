

/*---
es6id: 13.1
description: >
    let: global use before initialization in declaration statement.
    (TDZ, Temporal Dead Zone)
negative:
  phase: runtime
  type: ReferenceError
---*/
let x = x + 1;
