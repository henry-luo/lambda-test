

/*---
esid: sec-isstructurallyvalidlanguagetag
description: >
  Verifies that duplicate variants in a tag ("en-emodeng-emodeng") make the tag
  structurally invalid.
info: |
  the `unicode_language_id` within _locale_ contains no duplicate
  `unicode_variant_subtag` subtags
features: [Intl.Locale]
---*/

assert.sameValue(typeof Intl.Locale, "function");

function mustReject(tag) {
  assert.throws(RangeError, () => {
    
    new Intl.Locale(tag);
  }, `tag "${tag}" must be considered structurally invalid`);
}


mustReject("en-emodeng-emodeng");

mustReject("en-Emodeng-emodeng");

mustReject("en-emodeng-Emodeng");


mustReject("en-variant-emodeng-emodeng");
mustReject("en-variant-Emodeng-emodeng");
mustReject("en-variant-emodeng-Emodeng");
mustReject("en-emodeng-variant-emodeng");
mustReject("en-Emodeng-variant-emodeng");
mustReject("en-emodeng-variant-Emodeng");
mustReject("en-emodeng-emodeng-variant");
mustReject("en-Emodeng-emodeng-variant");
mustReject("en-emodeng-Emodeng-variant");
