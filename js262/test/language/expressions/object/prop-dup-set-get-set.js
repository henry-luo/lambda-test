

/*---
es5id: 11.1.5_4-4-d-4
description: >
    Object literal - No SyntaxError for duplicate property name
    (set,get,set)
---*/

void {
  set foo(arg) {},
  get foo() {},
  set foo(arg1) {}
};
