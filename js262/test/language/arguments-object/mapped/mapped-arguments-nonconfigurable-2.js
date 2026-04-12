

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapping works when property is non-configurable, variable is
    changed with SetMutableBinding.
flags: [noStrict]
---*/

function argumentsAndSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  a = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndSetMutableBinding(1);
