

/*---
esid: sec-generatorfunction
description: Definition of instance `length` property
info: |
    [...]
    3. Return CreateDynamicFunction(C, NewTarget, "generator", args).

    19.2.1.1.1 Runtime Semantics: CreateDynamicFunction

    [...]
    20. If kind is "generator", then
        a. If parameters Contains YieldExpression is true, throw a SyntaxError
           exception.
features: [generators]
---*/

var GeneratorFunction = Object.getPrototypeOf(function*() {}).constructor;


GeneratorFunction('x = yield');

assert.throws(SyntaxError, function() {
  GeneratorFunction('x = yield', '');
}, 'YieldExpression not permitted generally');

var withinGenerator = function*() {
  GeneratorFunction('x = yield', '');
};

assert.throws(SyntaxError, function() {
  withinGenerator().next();
}, 'YieldExpression not permitted when calling context is a generator');
