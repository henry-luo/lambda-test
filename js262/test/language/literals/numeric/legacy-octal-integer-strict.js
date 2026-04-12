

/*---
esid: sec-literals-numeric-literals
description: LegacyOctalIntegerLiteral is not enabled in strict mode code
info: |
    NumericLiteral ::
      DecimalLiteral
      BinaryIntegerLiteral
      OctalIntegerLiteral
      HexIntegerLiteral
      LegacyOctalIntegerLiteral

    LegacyOctalIntegerLiteral ::
      0 OctalDigit
      LegacyOctalIntegerLiteral OctalDigit

    ## 12.8.3.1 Static Semantics: Early Errors

    NumericLiteral :: LegacyOctalIntegerLiteral
    DecimalIntegerLiteral :: NonOctalDecimalIntegerLiteral

    - It is a Syntax Error if the source code matching this production is
      strict mode code.
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

00;
