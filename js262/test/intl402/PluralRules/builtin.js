

/*---
esid: sec-Intl.PluralRules
description: >
    Tests that Intl.PluralRules meets the requirements for
    built-in objects defined by the introduction of chapter 17 of the
    ECMAScript Language Specification.
author: Zibi Braniecki
---*/

assert.sameValue(Object.prototype.toString.call(Intl.PluralRules), "[object Function]",
                 "The [[Class]] internal property of a built-in function must be " +
                 "\"Function\".");

assert(Object.isExtensible(Intl.PluralRules), "Built-in objects must be extensible.");

assert.sameValue(Object.getPrototypeOf(Intl.PluralRules), Function.prototype);
