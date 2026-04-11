

/*---
esid: sec-json.israwjson
description: Basic functionality of JSON.isRawJSON()
info: |
  JSON.isRawJSON ( O )

  1. If Type(O) is Object and O has an [[IsRawJSON]] internal slot, return true.
  2. Return false.

features: [json-parse-with-source]
---*/

const values = [1, 1.1, null, false, true, '123'];
for (const value of values) {
  assert(!JSON.isRawJSON(value));
  assert(JSON.isRawJSON(JSON.rawJSON(value)));
}
assert(!JSON.isRawJSON(undefined));
assert(!JSON.isRawJSON(Symbol('123')));
assert(!JSON.isRawJSON([]));
assert(!JSON.isRawJSON({}));
assert(!JSON.isRawJSON({ rawJSON: '123' }));
