

/*---
info: NonEscapeSequence is not EscapeCharacter
es5id: 7.8.4_A4.3_T7
description: "EscapeCharacter :: SingleEscapeCharacter :: one of b f n r t v"
---*/


if ("b" === "\b") {
  throw new Test262Error('#b');
}

if ("f" === "\f") {
  throw new Test262Error('#f');
}

if ("n" === "\n") {
  throw new Test262Error('#n');
}

if ("r" === "\r") {
  throw new Test262Error('#r');
}

if ("t" === "\t") {
  throw new Test262Error('#t');
}

if ("v" === "\v") {
  throw new Test262Error('#v');
}
