

/*---
description: IdentityEscape for Unicode RegExp
info: |
    IdentityEscape for Unicode RegExps is restricted to SyntaxCharacter and U+002F (SOLIDUS)
es6id: 21.1.2
---*/


assert(/\^/u.test("^"), "IdentityEscape in AtomEscape: /\\^/");
assert(/\$/u.test("$"), "IdentityEscape in AtomEscape: /\\$/");
assert(/\\/u.test("\\"), "IdentityEscape in AtomEscape: /\\\\/");
assert(/\./u.test("."), "IdentityEscape in AtomEscape: /\\./");
assert(/\*/u.test("*"), "IdentityEscape in AtomEscape: /\\*/");
assert(/\+/u.test("+"), "IdentityEscape in AtomEscape: /\\+/");
assert(/\?/u.test("?"), "IdentityEscape in AtomEscape: /\\?/");
assert(/\(/u.test("("), "IdentityEscape in AtomEscape: /\\(/");
assert(/\)/u.test(")"), "IdentityEscape in AtomEscape: /\\)/");
assert(/\[/u.test("["), "IdentityEscape in AtomEscape: /\\[/");
assert(/\]/u.test("]"), "IdentityEscape in AtomEscape: /\\]/");
assert(/\{/u.test("{"), "IdentityEscape in AtomEscape: /\\{/");
assert(/\}/u.test("}"), "IdentityEscape in AtomEscape: /\\}/");
assert(/\|/u.test("|"), "IdentityEscape in AtomEscape: /\\|/");
assert(/\//u.test("/"), "IdentityEscape in AtomEscape: /\\//");


assert(/[\^]/u.test("^"), "IdentityEscape in ClassEscape: /[\\^]/");
assert(/[\$]/u.test("$"), "IdentityEscape in ClassEscape: /[\\$]/");
assert(/[\\]/u.test("\\"), "IdentityEscape in ClassEscape: /[\\\\]/");
assert(/[\.]/u.test("."), "IdentityEscape in ClassEscape: /[\\.]/");
assert(/[\*]/u.test("*"), "IdentityEscape in ClassEscape: /[\\*]/");
assert(/[\+]/u.test("+"), "IdentityEscape in ClassEscape: /[\\+]/");
assert(/[\?]/u.test("?"), "IdentityEscape in ClassEscape: /[\\?]/");
assert(/[\(]/u.test("("), "IdentityEscape in ClassEscape: /[\\(]/");
assert(/[\)]/u.test(")"), "IdentityEscape in ClassEscape: /[\\)]/");
assert(/[\[]/u.test("["), "IdentityEscape in ClassEscape: /[\\[]/");
assert(/[\]]/u.test("]"), "IdentityEscape in ClassEscape: /[\\]]/");
assert(/[\{]/u.test("{"), "IdentityEscape in ClassEscape: /[\\{]/");
assert(/[\}]/u.test("}"), "IdentityEscape in ClassEscape: /[\\}]/");
assert(/[\|]/u.test("|"), "IdentityEscape in ClassEscape: /[\\|]/");
assert(/[\/]/u.test("/"), "IdentityEscape in ClassEscape: /[\\/]/");
