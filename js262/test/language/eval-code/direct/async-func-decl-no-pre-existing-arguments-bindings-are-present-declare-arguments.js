

/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when no pre-existing |arguments| bindings are present.)
esid: sec-evaldeclarationinstantiation
features: [globalThis]
flags: [generated, async, noStrict]
---*/

const oldArguments = globalThis.arguments;
async function f(p = eval("var arguments")) {}
f().then($DONE, error => {
  assert(error instanceof SyntaxError);
  assert.sameValue(globalThis.arguments, oldArguments, "globalThis.arguments unchanged");
}).then($DONE, $DONE);
