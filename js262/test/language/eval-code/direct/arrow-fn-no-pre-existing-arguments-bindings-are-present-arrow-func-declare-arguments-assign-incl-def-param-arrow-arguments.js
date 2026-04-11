

/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when no pre-existing |arguments| bindings are present.)
esid: sec-evaldeclarationinstantiation
flags: [generated, noStrict]
---*/

const oldArguments = globalThis.arguments;
let count = 0;
const f = (p = eval("var arguments = 'param'"), q = () => arguments) => {
  assert.sameValue(arguments, "param");
  count++;
}
f();
assert.sameValue(count, 1);
assert.sameValue(globalThis.arguments, oldArguments, "globalThis.arguments unchanged");
