

/*---
description: String.prototype.search behavior with duplicate named capture groups
esid: prod-GroupSpecifier
features: [regexp-duplicate-named-groups]
---*/

assert.sameValue("xab".search(/(?<x>a)|(?<x>b)/), 1);
assert.sameValue("xba".search(/(?<x>a)|(?<x>b)/), 1);
