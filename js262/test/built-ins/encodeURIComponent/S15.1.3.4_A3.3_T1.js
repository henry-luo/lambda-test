

/*---
info: unescapedURIComponentSet not containing "#"
esid: sec-encodeuricomponent-uricomponent
description: encodeURIComponent("#") === "%23"
---*/

if (encodeURIComponent("#") !== "%23") {
  throw new Test262Error('#1: unescapedURIComponentSet not containing "%23"');
}
