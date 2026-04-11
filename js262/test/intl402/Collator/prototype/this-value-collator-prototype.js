

/*---
esid: sec-properties-of-the-intl-collator-prototype-object
description: >
    Tests that Intl.Collator.prototype is not an object that has been
    initialized as an Intl.Collator.
---*/


assert.throws(TypeError, () => Intl.Collator.prototype.compare("aаあ아", "aаあ아"),
              "Intl.Collator.prototype is not an object that has been initialized as an Intl.Collator.");
