

/*---
author: Michael Saboff
description: Invalid exotic named group names in non-Unicode RegExps
esid: prod-GroupSpecifier
features: [regexp-named-groups]
---*/


assert.throws(SyntaxError, function() {
    return new RegExp("(?<🦊>fox)");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\u{1f98a}>fox)");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\ud83e\udd8a>fox)");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<🐕>dog)");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\u{1f415}>dog)");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\ud83d \udc15>dog)");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<𝟚the>the)");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\u{1d7da}the>the)");
});

assert.throws(SyntaxError, function() {
    return new RegExp("(?<\ud835\udfdathe>the)");
});
