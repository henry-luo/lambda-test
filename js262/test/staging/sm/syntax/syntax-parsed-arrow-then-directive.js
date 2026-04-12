

/*---
description: |
  Properly apply a directive comment that's only tokenized by a syntax parser (because the directive comment appears immediately after an arrow function with expression body)
info: bugzilla.mozilla.org/show_bug.cgi?id=1596706
esid: pending
---*/

Object.defineProperty(this, "detectSourceURL", {
  get() {
    return 17;
  }
});


assert.sameValue(eval(`x=>{};
//# sourceURL=http://example.com/foo.js
detectSourceURL`), 17);


assert.sameValue(eval(`x=>{}
//# sourceURL=http://example.com/bar.js
detectSourceURL`), 17);


assert.sameValue(eval(`x=>y;
//# sourceURL=http://example.com/baz.js
detectSourceURL`), 17);


assert.sameValue(eval(`x=>y
//# sourceURL=http://example.com/quux.js
detectSourceURL`), 17);
