

/*---
info: If string.charAt(k) not equal "%", return this char
esid: sec-decodeuricomponent-encodeduricomponent
description: Complex tests
includes: [decimalToHexString.js]
---*/

for (var indexI = 0; indexI <= 65535; indexI++) {
  if (indexI !== 0x25) {
    try {
      var str = String.fromCharCode(indexI);
      var differs = decodeURIComponent(str) !== str;
    } catch (e) {
      throw new Test262Error('#' + decimalToHexString(indexI) + ' throws');
    }
    if (differs) {
      throw new Test262Error('#' + decimalToHexString(indexI) + ' differs');
    }
  }
}
