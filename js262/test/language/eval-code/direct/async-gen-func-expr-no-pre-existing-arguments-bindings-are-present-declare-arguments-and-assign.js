

/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when no pre-existing |arguments| bindings are present.)
esid: sec-evaldeclarationinstantiation
features: [globalThis]
flags: [generated, noStrict]
---*/

const oldArguments = globalThis.arguments;
let f = async function * (p = eval("var arguments = 'param'")) {}

assert.throws(SyntaxError, f);
assert.sameValue(globalThis.arguments, oldArguments, "globalThis.arguments unchanged");
