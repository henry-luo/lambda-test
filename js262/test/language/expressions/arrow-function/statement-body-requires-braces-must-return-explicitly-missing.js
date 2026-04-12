

/*---
es6id: 14.2
description: >
    Statement body needs braces, must use 'return' explicitly if not void
---*/
var plusOne = v => {
  v + 1;
};

assert.sameValue(plusOne(1), undefined);
