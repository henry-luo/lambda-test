

/*---
es5id: 10.1.1_20
description: Tests that the option sensitivity is processed correctly.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/


testOption(Intl.Collator, "sensitivity", "string", ["base", "accent", "case", "variant"], "variant");
