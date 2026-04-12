

/*---
es5id: 11.1.5_4-4-b-2
description: >
    Object literal - No SyntaxError if a data property definition is
    followed by set accessor definition with the same name
---*/

void {
  foo: 1,
  set foo(x) {}
};
