

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapped arguments property is changed to non-writable and
    non-configurable. Perform property attribute changes with two
    consecutive [[DefineOwnProperty]] calls. Mapped values are
    unchanged, mapping itself is removed.
flags: [noStrict]
---*/

function argumentsNonWritableThenNonConfigurable(a) {
  Object.defineProperty(arguments, "0", {writable: false});
  Object.defineProperty(arguments, "0", {configurable: false});
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);
}
argumentsNonWritableThenNonConfigurable(1);
