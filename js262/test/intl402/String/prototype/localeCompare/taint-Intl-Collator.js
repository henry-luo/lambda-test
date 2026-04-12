

/*---
es5id: 13.1.1_6_2
description: >
    Tests that String.prototype.localeCompare uses the standard
    built-in Intl.Collator constructor.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

taintDataProperty(Intl, "Collator");
"a".localeCompare("b");
