

/*---
description: await using should be allowed in top-level module.
flags: [module]
features: [explicit-resource-management]
---*/

await using x = {
    [Symbol.asyncDispose]() {
      return 42;
    },
};
