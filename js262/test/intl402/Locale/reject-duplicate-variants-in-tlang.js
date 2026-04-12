

/*---
esid: sec-isstructurallyvalidlanguagetag
description: >
  Verifies that just as duplicate variants in a tag ("en-emodeng-emodeng") make
  the tag structurally invalid, so too do duplicate variants in the tlang
  component of an otherwise structurally valid tag ("de-t-emodeng-emodeng"),
  make it structurally invalid.
info: |
  if a `transformed_extensions` component that contains a `tlang` component is
  present, then
    the `tlang` component contains no duplicate `unicode_variant_subtag`
    subtags.
features: [Intl.Locale]
---*/

assert.sameValue(typeof Intl.Locale, "function");

function mustReject(tag) {
  assert.throws(RangeError, () => {
    
    new Intl.Locale(tag);
  }, `tag "${tag}" must be considered structurally invalid`);
}


mustReject("de-t-en-emodeng-emodeng");

mustReject("de-t-en-Emodeng-emodeng");

mustReject("de-t-en-emodeng-Emodeng");


mustReject("de-t-en-variant-emodeng-emodeng");
mustReject("de-t-en-variant-Emodeng-emodeng");
mustReject("de-t-en-variant-emodeng-Emodeng");
mustReject("de-t-en-emodeng-variant-emodeng");
mustReject("de-t-en-Emodeng-variant-emodeng");
mustReject("de-t-en-emodeng-variant-Emodeng");
mustReject("de-t-en-emodeng-emodeng-variant");
mustReject("de-t-en-Emodeng-emodeng-variant");
mustReject("de-t-en-emodeng-Emodeng-variant");
