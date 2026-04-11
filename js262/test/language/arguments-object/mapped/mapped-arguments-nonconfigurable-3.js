

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapping works when property is non-configurable, arguments property
    is changed with [[DefineOwnProperty]].
flags: [noStrict]
---*/

function argumentsAndDefineOwnProperty(a) {
  Object.defineProperty(arguments, "0", {configurable: false});

  Object.defineProperty(arguments, "0", {value: 2});
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 2);
}
argumentsAndDefineOwnProperty(1);
