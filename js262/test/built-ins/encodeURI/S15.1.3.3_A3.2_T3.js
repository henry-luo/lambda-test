

/*---
info: |
    unescapedURISet containing one instance of each character valid in
    uriUnescaped
esid: sec-encodeuri-uri
description: "Complex tests, uriUnescaped :: uriMark"
---*/

var uriMark = ["-", "_", ".", "!", "~", "*", "'", "(", ")"];
for (var indexC = 0; indexC < uriMark.length; indexC++) {
  var str = uriMark[indexC];
  if (encodeURI(str) !== str) {
    throw new Test262Error('#' + (indexC + 1) + ': unescapedURISet containing' + str);
  }
}
