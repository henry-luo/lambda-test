

/*---
esid: sec-for-in-and-for-of-statements
description: >
    using: 'for (using of' is always interpreted as identifier 
features: [explicit-resource-management]
---*/

var using, of = [[9], [8], [7]], result = [];
for (using of of [0, 1, 2]) {
  
  
  result.push(using);
}

assert.sameValue(result.length, 1);
assert.sameValue(result[0], 7);
