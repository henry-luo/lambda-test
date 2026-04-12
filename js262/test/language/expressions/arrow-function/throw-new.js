

/*---
es6id: 12.3.3.1.1
description: >
    Runtime Semantics: EvaluateNew(constructProduction, arguments)

    ...
    8. If IsConstructor (constructor) is false, throw a TypeError exception.
    ...

---*/

assert.throws(TypeError, function() { new (() => {}); });
