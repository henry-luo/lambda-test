

/*---
description: Named backreferences in Unicode RegExps
esid: sec-atomescape
info: |
  The production AtomEscape :: [+N] k GroupName evaluates as follows:

    1. Search the enclosing RegExp for an instance of a GroupSpecifier for an
       RegExpIdentifierName which has a StringValue equal to the StringValue
       of the RegExpIdentifierName contained in GroupName.
    2. Assert: A unique such GroupSpecifier is found.
    3. Let parenIndex be the number of left capturing parentheses in the entire
       regular expression that occur to the left of the located GroupSpecifier.
       This is the total number of times the Atom::(GroupSpecifierDisjunction)
       production is expanded prior to that production's Term plus the total
       number of Atom :: (GroupSpecifierDisjunction) productions enclosing this Term.
    4. Call BackreferenceMatcher(parenIndex) and return its Matcher result.
features: [regexp-named-groups]
includes: [compareArray.js]
---*/


assert.compareArray(["bab", "b"], "bab".match(/(?<b>.).\k<b>/u));
assert.sameValue(null, "baa".match(/(?<b>.).\k<b>/u));


assert.compareArray(["bab", "b"], "bab".match(/(?<a>\k<a>\w)../u));
assert.sameValue("b", "bab".match(/(?<a>\k<a>\w)../u).groups.a);


assert.compareArray(["bab", "b"], "bab".match(/\k<a>(?<a>b)\w\k<a>/u));
assert.sameValue("b", "bab".match(/\k<a>(?<a>b)\w\k<a>/u).groups.a);
assert.compareArray(["bab", "b", "a"], "bab".match(/(?<b>b)\k<a>(?<a>a)\k<b>/u));
let {a, b} = "bab".match(/(?<b>b)\k<a>(?<a>a)\k<b>/u).groups;
assert.sameValue(a, "a");
assert.sameValue(b, "b");

assert.compareArray(["bab", "b"], "bab".match(/\k<a>(?<a>b)\w\k<a>/));
assert.compareArray(["bab", "b", "a"], "bab".match(/(?<b>b)\k<a>(?<a>a)\k<b>/));


assert.sameValue("a", /(?<a>a)(?<b>b)\k<a>/u.exec("aba").groups.a);
assert.sameValue("b", /(?<a>a)(?<b>b)\k<a>/u.exec("aba").groups.b);
assert.sameValue(undefined, /(?<a>a)(?<b>b)\k<a>/u.exec("aba").groups.c);
assert.sameValue(undefined, /(?<a>a)(?<b>b)\k<a>|(?<c>c)/u.exec("aba").groups.c);
