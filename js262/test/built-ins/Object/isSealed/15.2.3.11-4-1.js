

/*---
es5id: 15.2.3.11-4-1
description: Object.isSealed returns false for all built-in objects (Global)
---*/

assert(!Object.isSealed(this));
