

/*---
es6id: 12.14.4
description: >
    Assignment of function `name` attribute (CoverParenthesizedExpression)
info: |
    AssignmentExpression[In, Yield] :
        LeftHandSideExpression[?Yield] = AssignmentExpression[?In, ?Yield]

    1. If LeftHandSideExpression is neither an ObjectLiteral nor an
       ArrayLiteral, then
       [...]
       e. If IsAnonymousFunctionDefinition(AssignmentExpression) and
          IsIdentifierRef of LeftHandSideExpression are both true, then

          i. Let hasNameProperty be HasOwnProperty(rval, "name").
          ii. ReturnIfAbrupt(hasNameProperty).
          iii. If hasNameProperty is false, perform SetFunctionName(rval,
               GetReferencedName(lref)).
includes: [propertyHelper.js]
---*/

var xCover, cover;

xCover = (0, function() {});
cover = (function() {});

assert(xCover.name !== 'xCover');

verifyProperty(cover, 'name', {
  value: 'cover',
  writable: false,
  enumerable: false,
  configurable: true,
});
