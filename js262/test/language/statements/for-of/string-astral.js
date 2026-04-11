

/*---
description: String traversal using for..of (astral symbols)
info: |
    String literals should be able to be traversed using a `for...of` loop. The
    loop body should execute once for each astral symbol.
es6id: 13.6.4
---*/

var string = 'a\ud801\udc28b\ud801\udc28';
var first = 'a';
var second = '𐐨';
var third = 'b';
var fourth = '𐐨';

var iterationCount = 0;

for (var value of string) {
  assert.sameValue(value, first);
  first = second;
  second = third;
  third = fourth;
  fourth = null;
  iterationCount += 1;
}

assert.sameValue(iterationCount, 4);
