

/*---
esid: sec-globaldeclarationinstantiation
description: Let binding collision with existing var declaration that was created for hoisted function.
info: |
  [...]
  3. For each element name of lexNames, do
    a. If env.HasVarDeclaration(name) is true, throw a SyntaxError exception.
flags: [noStrict]
---*/

if (true) {
  function test262Fn() {}
}

assert.throws(SyntaxError, function() {
  $262.evalScript('var x; let test262Fn;');
});

assert.throws(ReferenceError, function() {
  x;
}, 'no bindings created');
