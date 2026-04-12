

/*---
es6id: 25.2
description: >
    When invoked via the constructor invocation pattern without arguments, the
    GeneratorFunction intrinsic returns a valid generator with an empty body.
features: [generators]
---*/

var GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;

var g = new GeneratorFunction();
var iter = g();
var result = iter.next();

assert.sameValue(result.value, undefined, 'Result `value`');
assert.sameValue(result.done, true, 'Result `done` flag');
