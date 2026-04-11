

/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: >
    The inferred class-name is present when executing static field initializers of anonymous class expressions.
info: |
    14.6.13 Runtime Semantics: ClassDefinitionEvaluation

    [...]
    17. Perform MakeClassConstructor(F).
    18. If className is not undefined, then
        a. Perform SetFunctionName(F, className).
    [...]

features: [class-static-fields-public]
---*/

var className;

var C = class {
    static f = (className = this.name);
}

assert.sameValue(className, "C");
