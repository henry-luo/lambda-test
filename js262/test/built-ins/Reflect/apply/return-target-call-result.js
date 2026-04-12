

/*---
es6id: 26.1.1
description: >
  Return target result
info: |
  26.1.1 Reflect.apply ( target, thisArgument, argumentsList )

  ...
  4. Perform PrepareForTailCall().
  5. Return Call(target, thisArgument, args).
features: [Reflect]
---*/

var o = {};

function fn() {
  return o;
}

var result = Reflect.apply(fn, 1, []);

assert.sameValue(result, o);
