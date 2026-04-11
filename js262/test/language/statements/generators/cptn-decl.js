

/*---
esid: sec-statement-semantics-runtime-semantics-evaluation
description: Generator declaration completion value is empty.
info: |
    GeneratorDeclaration[Yield, Await, Default]:

        function * BindingIdentifier[?Yield, ?Await] ( FormalParameters[+Yield, ~Await] ) { GeneratorBody }

    HoistableDeclaration : GeneratorDeclaration

    1. Return NormalCompletion(empty).
features: [generators]
---*/

assert.sameValue(eval('function* f() {}'), undefined);
assert.sameValue(eval('1; function* f() {}'), 1);
