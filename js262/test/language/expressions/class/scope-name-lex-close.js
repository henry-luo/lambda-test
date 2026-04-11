

/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: Removal of lexical environment for class "name"
info: |
    [...]
    22. Set the running execution context's LexicalEnvironment to lex.
    [...]
---*/

var C = 'outside';

var cls = class C {
  method() {
    return C;
  }
};

assert.sameValue(cls.prototype.method(), cls, 'from instance method');
assert.sameValue(C, 'outside');
