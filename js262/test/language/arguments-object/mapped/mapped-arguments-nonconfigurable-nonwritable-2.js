

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapped arguments property is changed to non-configurable and
    non-writable. Perform property attribute changes with two
    consecutive [[DefineOwnProperty]] calls. Mapped values are
    unchanged, mapping itself is removed.
flags: [noStrict]
---*/

function argumentsNonConfigurableThenNonWritable(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  Object.defineProperty(arguments, "0", {writable: false});
  assert.sameValue(a, 1);
  assert.sameValue(arguments[0], 1);

  
  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurableThenNonWritable(1);
