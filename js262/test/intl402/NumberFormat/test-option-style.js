

/*---
es5id: 11.1.1_15
description: Tests that the option style is processed correctly.
author: Norbert Lindenberg
includes: [testIntl.js]
---*/

testOption(Intl.NumberFormat, "style", "string", ["decimal", "percent", "currency"], "decimal",
        {extra: {"currency": {currency: "CNY"}}});
