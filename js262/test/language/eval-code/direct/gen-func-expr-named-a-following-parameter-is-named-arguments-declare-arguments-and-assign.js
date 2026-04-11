

/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when a following parameter is named |arguments|.)
esid: sec-evaldeclarationinstantiation
flags: [generated, noStrict]
---*/


assert.sameValue("arguments" in this, false, "No global 'arguments' binding");

let f = function * f(p = eval("var arguments = 'param'"), arguments) {
  
}
assert.throws(SyntaxError, f);

assert.sameValue("arguments" in this, false, "No global 'arguments' binding");
