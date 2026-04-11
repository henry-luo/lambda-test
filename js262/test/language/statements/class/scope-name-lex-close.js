

/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: Removal of lexical environment for class "name"
info: |
    [...]
    22. Set the running execution context's LexicalEnvironment to lex.
    [...]
---*/

class C {
  method() {
    return C;
  }
}

var cls = C;
assert.sameValue(typeof C, 'function');
C = null;
assert.sameValue(C, null);
assert.sameValue(cls.prototype.method(), cls, 'from instance method');
