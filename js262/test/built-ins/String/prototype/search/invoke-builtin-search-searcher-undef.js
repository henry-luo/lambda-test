

/*---
description: >
    Invocation of @@search property of internally-created RegExps when `this` value has an `undefined` @@search property
es6id: 21.1.3.15
info: |
    [...]
    3. If regexp is neither undefined nor null, then
       a. Let searcher be GetMethod(regexp, @@search).
       b. ReturnIfAbrupt(searcher).
       c. If searcher is not undefined , then
          [...]
    [...]
    6. Let rx be RegExpCreate(regexp, undefined) (see 21.2.3.2.3).
    7. ReturnIfAbrupt(rx).
    8. Return Invoke(rx, @@search, «S»).
features: [Symbol.search]
---*/

var target = new String('target');
var originalSearch = RegExp.prototype[Symbol.search];
var returnVal = {};
var result, thisVal, args;

target[Symbol.search] = undefined;


assert.notSameValue(originalSearch, undefined);

RegExp.prototype[Symbol.search] = function() {
  thisVal = this;
  args = arguments;
  return returnVal;
};

try {
  result = target.search('string source');

  assert(thisVal instanceof RegExp);
  assert.sameValue(thisVal.source, 'string source');
  assert.sameValue(thisVal.flags, '');
  assert.sameValue(args.length, 1);
  assert.sameValue(args[0], 'target');
  assert.sameValue(result, returnVal);
} finally {
  RegExp.prototype[Symbol.search] = originalSearch;
}
