

/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when the function body contains an |arguments| lexical binding.)
esid: sec-evaldeclarationinstantiation
flags: [generated, noStrict]
---*/


assert.sameValue("arguments" in this, false, "No global 'arguments' binding");

let o = { * f(p = eval("var arguments")) {
  let arguments;
}};
assert.throws(SyntaxError, o.f);

assert.sameValue("arguments" in this, false, "No global 'arguments' binding");
