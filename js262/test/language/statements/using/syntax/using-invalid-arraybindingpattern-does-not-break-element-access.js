

/*---
esid: sec-let-const-using-and-await-using-declarations
description: >
    'using' does not break existing element access
features: [explicit-resource-management]
---*/

var using = [], x = 0;

{
  using[x] = null;
}
