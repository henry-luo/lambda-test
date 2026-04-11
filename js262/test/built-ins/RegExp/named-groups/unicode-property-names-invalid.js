

/*---
author: Michael Saboff
description: Invalid exotic named group names in Unicode RegExps
esid: prod-GroupSpecifier
features: [regexp-named-groups]
---*/


assert.throws(SyntaxError, function() {
    return new RegExp("(?<🦊>fox)", "u");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\u{1f98a}>fox)", "u");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\ud83e\udd8a>fox)", "u");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<🐕>dog)", "u");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\u{1f415}>dog)", "u");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\ud83d \udc15>dog)", "u");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<𝟚the>the)", "u");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\u{1d7da}the>the)", "u");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\ud835\udfdathe>the)", "u");
});
