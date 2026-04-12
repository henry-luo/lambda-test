

/*---
esid: sec-arguments-exotic-objects
description: arguments.caller does not exist
---*/

function getArguments() {
  return arguments;
}
assert.sameValue(Object.getOwnPropertyDescriptor(getArguments(), 'caller'), undefined, 'arguments.caller does not exist');
