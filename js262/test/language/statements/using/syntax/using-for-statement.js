

/*---
esid: sec-for-statement
description: >
    using: 'for (using x = ' and 'for (using of =' are interpreted as for loop
features: [explicit-resource-management]
---*/

for (using x = null;;) break;


for (using of = null;;) break;
