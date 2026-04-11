

/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when no pre-existing |arguments| bindings are present.)
esid: sec-evaldeclarationinstantiation
flags: [generated, noStrict]
---*/


assert.sameValue("arguments" in this, false, "No global 'arguments' binding");

let f = function * (p = eval("var arguments")) {}
assert.throws(SyntaxError, f);

assert.sameValue("arguments" in this, false, "No global 'arguments' binding");
