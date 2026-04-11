

/*---
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    delete operator returns false when deleting a direct reference to
    a function argument
flags: [noStrict]
---*/

function foo(a, b) {
  
  
  var d = delete a;
  return d === false && a === 1;
}

assert(foo(1, 2), 'foo(1,2) !== true');
