

/*---
info: "CharacterEscapeSequnce :: SingleEscapeSequence"
es5id: 7.8.4_A4.1_T2
description: "SingleEscapeSequence :: one of ' \" \\"
---*/


if (String.fromCharCode(0x0027) !== "\'") {
  throw new Test262Error('#1: String.fromCharCode(0x0027) === "\\\'"');
}


if (String.fromCharCode(0x0022) !== '\"') {
  throw new Test262Error('#2: String.fromCharCode(0x0027) === \'\\\"\'');
}


if (String.fromCharCode(0x005C) !== "\\") {
  throw new Test262Error('#3: String.fromCharCode(0x005C) === "\\\"');
}


if ("\'" !== "'") {
  throw new Test262Error('#4: "\'" === "\\\'"');
}


if ('\"' !== '"') {
  throw new Test262Error('#5: \'\"\' === \'\\\"\'');
}
