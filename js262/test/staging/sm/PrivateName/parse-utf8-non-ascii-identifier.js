

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


class NonAscii {
  
  #ׯ;
}


class NonAsciiUnicodeEscape1 {
  
  #\u05ef;
}

class NonAsciiUnicodeEscape2 {
  
  #\u{5ef};
}

