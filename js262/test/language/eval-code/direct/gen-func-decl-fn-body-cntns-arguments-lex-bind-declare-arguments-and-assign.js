

/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when the function body contains an |arguments| lexical binding.)
esid: sec-evaldeclarationinstantiation
flags: [generated, noStrict]
---*/


assert.sameValue("arguments" in this, false, "No global 'arguments' binding");

function * f(p = eval("var arguments = 'param'")) {
  let arguments;
}
assert.throws(SyntaxError, f);

assert.sameValue("arguments" in this, false, "No global 'arguments' binding");
