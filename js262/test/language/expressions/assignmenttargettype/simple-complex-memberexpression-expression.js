

/*---
description: Static Semantics AssignmentTargetType, Return simple (Simple Direct assignment)
flags: [generated]
info: |
    MemberExpression [ Expression ]
    Static Semantics AssignmentTargetType, Return simple

---*/


let v = 'v';
let o = { [v]: 1, f() {} };
let f = () => o;

o[v] = 1;
