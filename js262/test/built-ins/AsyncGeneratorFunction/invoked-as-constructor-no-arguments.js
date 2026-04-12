

/*---
esid: sec-asyncgeneratorfunction
description: >
    When invoked via the constructor invocation pattern without arguments, the
    GeneratorFunction intrinsic returns a valid async generator with an empty body.
features: [async-iteration]
flags: [async]
---*/

var AsyncGeneratorFunction = Object.getPrototypeOf(async function* () {}).constructor;

var g = new AsyncGeneratorFunction();
var iter = g();

iter.next().then(function(result) {
  assert.sameValue(result.value, undefined, 'Result `value`');
  assert.sameValue(result.done, true, 'Result `done` flag');
}).then($DONE, $DONE)

