

/*---
esid: sec-for-in-and-for-of-statements
description: >
    await using: 'for (await using of of' interpreted as 'await using'
features: [explicit-resource-management]
---*/

async function f() {
  for (await using of of []) { }
}
