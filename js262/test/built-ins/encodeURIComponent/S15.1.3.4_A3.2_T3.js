

/*---
info: |
    unescapedURIComponentSet containing one instance of each character valid
    in uriUnescaped
esid: sec-encodeuricomponent-uricomponent
description: "Complex tests, uriUnescaped :: uriMark"
---*/

var uriMark = ["-", "_", ".", "!", "~", "*", "'", "(", ")"];
for (var indexC = 0; indexC < uriMark.length; indexC++) {
  var str = uriMark[indexC];
  if (encodeURIComponent(str) !== str) {
    throw new Test262Error('#' + (indexC + 1) + ': unescapedURISet containing' + str);
  }
}
