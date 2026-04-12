

/*---
es6id: 14.2.16
description: >
    Runtime Semantics: Evaluation

flags: [noStrict]
---*/
function f() {
  return (arguments) => arguments;
}

assert.sameValue(f(1)(2), 2);
