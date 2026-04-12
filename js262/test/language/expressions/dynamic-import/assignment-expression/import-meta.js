

/*---
description: >
    Dynamic Import receives an AssignmentExpression (ImportMeta)
esid: prod-ImportCall
info: |
    ImportCall [Yield]:
        import ( AssignmentExpression[+In, ?Yield] )

    Runtime Semantics: Evaluation

    ImportCall : import ( AssignmentExpression )

    ...
    5. Let specifierString be ToString(specifier).
    6. IfAbruptRejectPromise(specifierString, promiseCapability).
features: [dynamic-import, import.meta]
flags: [module, async]
---*/

const p = import(import.meta);


assert.sameValue(Promise.resolve(p), p, 'Assert that p is a promise');


if (!Object.prototype.hasOwnProperty.call(import.meta, 'toString') &&
        !Object.prototype.hasOwnProperty.call(import.meta, 'valueOf') &&
        !Object.prototype.hasOwnProperty.call(import.meta, Symbol.toPrimitive)) {
    p.catch(error => assert.sameValue(error.constructor, TypeError, 'import() cannot resolve import.meta')).then($DONE, $DONE);
} else {
    $DONE();
}
