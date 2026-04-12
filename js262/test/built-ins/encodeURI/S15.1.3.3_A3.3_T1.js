

/*---
info: unescapedURISet containing "#"
esid: sec-encodeuri-uri
description: encodeURI("#") === "#"
---*/

if (encodeURI("#") !== "#") {
  throw new Test262Error('#1: unescapedURISet containing "#"');
}
