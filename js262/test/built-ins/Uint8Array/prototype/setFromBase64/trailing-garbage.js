

/*---
esid: sec-uint8array.prototype.setfrombase64
description: >
  Trailing garbage is ignored when no more space is left in the output
info: |
  Uint8Array.prototype.setFromBase64 ( string [ , options ] )
  ...
  13. Let byteLength be TypedArrayLength(taRecord).
  14. Let result be FromBase64(string, alphabet, lastChunkHandling, byteLength).
  ...

  FromBase64 ( string, alphabet, lastChunkHandling [ , maxLength ] )
  ...
  10. Repeat,
    ...
    l. If chunkLength = 4, then
      ...
      v. If the number of elements in bytes = maxLength, then
        1. Return the Record { [[Read]]: read, [[Bytes]]: bytes, [[Error]]: none }.

features: [uint8array-base64, TypedArray]
---*/


var u8 = new Uint8Array(3);


for (var invalid of [
  "#",
  "a#",
  "aa#",
  "aaa#",
]) {
  for (var lastChunkHandling of ["loose", "strict", "stop-before-partial"]) {
    assert.throws(SyntaxError, function() {
      u8.setFromBase64(invalid, {lastChunkHandling});
    }, `"${invalid}" is rejected with lastChunkHandling="${lastChunkHandling}"`);
  }
}


for (var valid of [
  "aaaa#",
  "aaaaa#",
  "aaaaaa#",
  "aaaaaaa#",
  "aaaaaaaa#",
]) {
  for (var lastChunkHandling of ["loose", "strict", "stop-before-partial"]) {
    
    u8.fill(0);

    var result = u8.setFromBase64(valid, {lastChunkHandling});
    assert.sameValue(
      result.read,
      4,
      `Read for "${valid}" with lastChunkHandling="${lastChunkHandling}"`
    );
    assert.sameValue(
      result.written,
      3,
      `Write for "${valid}" with lastChunkHandling="${lastChunkHandling}"`
    );
    assert.sameValue(
      u8[0],
      0x69,
      `Index=0 for "${valid}" with lastChunkHandling="${lastChunkHandling}"`
    );
    assert.sameValue(
      u8[1],
      0xa6,
      `Index=1 for "${valid}" with lastChunkHandling="${lastChunkHandling}"`
    );
    assert.sameValue(
      u8[2],
      0x9a,
      `Index=2 for "${valid}" with lastChunkHandling="${lastChunkHandling}"`
    );
  }
}
