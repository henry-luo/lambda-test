

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapped arguments property is changed to non-writable and
    non-configurable. Perform property attribute changes with two
    [[DefineOwnProperty]] calls. Add intervening call to
    SetMutableBinding.
flags: [noStrict]
---*/

function argumentsNonWritableThenNonConfigurableWithInterveningSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {writable: false});
  a = 2;
  Object.defineProperty(arguments, "0", {configurable: false});
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);

  
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 1);
}
argumentsNonWritableThenNonConfigurableWithInterveningSetMutableBinding(1);
