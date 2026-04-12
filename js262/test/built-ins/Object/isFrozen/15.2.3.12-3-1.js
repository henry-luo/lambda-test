

/*---
es5id: 15.2.3.12-3-1
description: Object.isFrozen returns false for all built-in objects (Global)
---*/

assert(!Object.isFrozen(this));
