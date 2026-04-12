

/*---
info: Operator "void" uses GetValue
es5id: 11.4.2_A2_T2
description: If GetBase(x) is null, throw ReferenceError
---*/

assert.throws(ReferenceError, function() {
  void x;
});
