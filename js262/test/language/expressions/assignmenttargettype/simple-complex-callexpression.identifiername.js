

/*---
description: Static Semantics AssignmentTargetType, Return simple (Simple Direct assignment)
flags: [generated]
info: |
    CallExpression . IdentifierName
    Static Semantics AssignmentTargetType, Return simple

---*/


let v = 'v';
let o = { [v]: 1, f() {} };
let f = () => o;

f().IdentifierName = 1;
