

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapping works when property is non-configurable, arguments property
    is changed with [[Set]].
flags: [noStrict]
---*/

function argumentsAndSet(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  arguments[0] = 2;
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndSet(1);
