

/*---
esid: sec-asyncgenerator-prototype-next
description: >
  "return" returns a promise
info: |
  AsyncGenerator.prototype.return ( value )
  1. Let generator be the this value.
  2. Let completion be Completion{[[Type]]: return, [[Value]]: value,
     [[Target]]: empty}.
  3. Return ! AsyncGeneratorEnqueue(generator, completion).

  AsyncGeneratorEnqueue ( generator, completion )
  ...
  2. Let promiseCapability be ! NewPromiseCapability(%Promise%).
  ...
  9. Return promiseCapability.[[Promise]].

features: [async-iteration]
---*/

async function* g() {}
var result = g().return()

assert(result instanceof Promise)
