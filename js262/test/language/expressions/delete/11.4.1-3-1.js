

/*---
esid: sec-delete-operator-runtime-semantics-evaluation
description: >
    delete operator returns true when deleting an unresolvable
    reference
flags: [noStrict]
---*/

assert.sameValue(delete unresolvable, true, 'delete unresolvable === true');
