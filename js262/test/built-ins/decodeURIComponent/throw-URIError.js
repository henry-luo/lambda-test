

/*---
description: Verify decodeURIComponent throws URIError for various invalid UTF-8 sequences
esid: sec-decodeuricomponent-encodeduricomponent
info: |
    Invalid sequences include:
    - Surrogate pair encoding
    - Overlong encoding
    - Invalid continuation bytes
    - Incomplete sequences
    - Out-of-range code points
    Reference: https://stackoverflow.com/a/1319229/172999
---*/


assert.throws(URIError, function CHECK1() {
    decodeURIComponent('%ED%BF%BF');
}, '#1: %ED%BF%BF (surrogate pair) should throw URIError');
  

assert.throws(URIError, function CHECK2() {
    decodeURIComponent('%C0%AF');
}, '#2: %C0%AF (overlong encoding) should throw URIError');
  

assert.throws(URIError, function CHECK3() {
    decodeURIComponent('%ED%7F%BF');
}, '#3: %ED%7F%BF (invalid continuation) should throw URIError');
  

assert.throws(URIError, function CHECK4() {
    decodeURIComponent('%ED%BF');
}, '#4: %ED%BF (incomplete sequence) should throw URIError');
  

assert.throws(URIError, function CHECK5() {
    decodeURIComponent('%F4%90%80%80');
},'#5: %F4%90%80%80 (out-of-range) should throw URIError');
