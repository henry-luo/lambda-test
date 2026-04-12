

/*---
info: |
    Object.getOwnProperties and Object.prototype.hasOwnProperty should
    agree on what the own properties are.
es5id: 15.2.3.4_A1_T1
description: >
    Check that all the own property names reported by
    Object.getOwnPropertyNames on a strict function are names that
    hasOwnProperty agrees are own properties.
---*/

function foo() {}

var names = Object.getOwnPropertyNames(foo);
for (var i = 0, len = names.length; i < len; i++) {
  assert(!!foo.hasOwnProperty(names[i]), 'The value of !!foo.hasOwnProperty(names[i]) is expected to be true');
}
