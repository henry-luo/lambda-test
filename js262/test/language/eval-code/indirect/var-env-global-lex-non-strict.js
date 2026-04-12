

/*---
esid: sec-evaldeclarationinstantiation
description: Variable collision with global lexical binding
info: |
    [...]
    5. If strict is false, then
       a. If varEnvRec is a global Environment Record, then
          i. For each name in varNames, do
             1. If varEnvRec.HasLexicalDeclaration(name) is true, throw a
                SyntaxError exception.
             2. NOTE: eval will not create a global var declaration that would
                be shadowed by a global lexical declaration.
       [...]
features: [let]
---*/

let x;
var caught;


try {
  (0,eval)('var x;');
} catch (err) {
  caught = err;
}

assert.notSameValue(caught, undefined);
assert.sameValue(caught.constructor, SyntaxError);
