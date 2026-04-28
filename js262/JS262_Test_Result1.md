# Test262 ES2020 Compliance Analysis

**Date**: 2026-04-27
**Baseline**: `test262_baseline.txt` (commit ec62ac2d9)

## Historical Snapshot (2026-04-23, commit `fa4cf1889`)

Retained for trend reference. The detailed per-category drill-downs below reflect the older baseline (25,272 passing / 8,822 failing).

## Non-Passing Tests by Category

Non-passing includes both truly failing tests and tests skipped by unsupported feature flags.

| Category                                 | Total  | Pass  | NonPass | Pass% |
| ---------------------------------------- | ------ | ----- | ------- | ----- |
| language/expressions                     | 11,038 | 6,606 | 4,432   | 59.8% |
| language/statements                      | 9,337  | 5,148 | 4,189   | 55.1% |
| built-ins/RegExp                         | 1,879  | 662   | 1,217   | 35.2% |
| built-ins/TypedArray                     | 1,438  | 554   | 884     | 38.5% |
| built-ins/Array                          | 3,081  | 2,262 | 819     | 73.4% |
| built-ins/Promise                        | 677    | 86    | 591     | 12.7% |
| built-ins/Object                         | 3,411  | 2,881 | 530     | 84.5% |
| built-ins/TypedArrayConstructors         | 736    | 207   | 529     | 28.1% |
| built-ins/Iterator                       | 510    | 0     | 510     | 0.0%  |
| built-ins/DataView                       | 561    | 165   | 396     | 29.4% |
| built-ins/Atomics                        | 382    | 112   | 270     | 29.3% |
| built-ins/String                         | 1,223  | 1,006 | 217     | 82.3% |
| annexB-language/eval-code                | 469    | 281   | 188     | 59.9% |
| built-ins/Function                       | 509    | 324   | 185     | 63.7% |
| built-ins/ArrayBuffer                    | 196    | 49    | 147     | 25.0% |
| language/arguments-object                | 263    | 123   | 140     | 46.8% |
| built-ins/Date                           | 594    | 461   | 133     | 77.6% |
| language/literals                        | 534    | 417   | 117     | 78.1% |
| built-ins/Set                            | 383    | 285   | 98      | 74.4% |
| annexB-language/global-code              | 153    | 61    | 92      | 39.9% |
| built-ins/SharedArrayBuffer              | 104    | 21    | 83      | 20.2% |
| built-ins/Proxy                          | 311    | 229   | 82      | 73.6% |
| built-ins/Map                            | 204    | 135   | 69      | 66.2% |
| language/function-code                   | 217    | 149   | 68      | 68.7% |
| built-ins/Uint8Array                     | 68     | 0     | 68      | 0.0%  |
| annexB-language/function-code            | 159    | 94    | 65      | 59.1% |
| built-ins/WeakMap                        | 141    | 84    | 57      | 59.6% |
| built-ins/JSON                           | 165    | 109   | 56      | 66.1% |
| built-ins/Symbol                         | 98     | 50    | 48      | 51.0% |
| built-ins/Reflect                        | 153    | 105   | 48      | 68.6% |
| built-ins/BigInt                         | 77     | 30    | 47      | 39.0% |
| built-ins/AsyncGeneratorPrototype        | 48     | 2     | 46      | 4.2%  |
| annexB-built-ins/RegExp                  | 62     | 21    | 41      | 33.9% |
| built-ins/AsyncFromSyncIteratorPrototype | 38     | 1     | 37      | 2.6%  |
| built-ins/GeneratorPrototype             | 61     | 27    | 34      | 44.3% |
| language/directive-prologue              | 62     | 32    | 30      | 51.6% |
| language/comments                        | 52     | 24    | 28      | 46.2% |
| built-ins/AggregateError                 | 25     | 0     | 25      | 0.0%  |
| annexB-language/expressions              | 26     | 1     | 25      | 3.8%  |
| built-ins/Error                          | 58     | 35    | 23      | 60.3% |
| annexB-built-ins/Date                    | 24     | 1     | 23      | 4.2%  |
| language/global-code                     | 42     | 21    | 21      | 50.0% |
| built-ins/Math                           | 327    | 308   | 19      | 94.2% |
| language/computed-property-names         | 48     | 29    | 19      | 60.4% |
| built-ins/RegExpStringIteratorPrototype  | 17     | 0     | 17      | 0.0%  |
| annexB-language/statements               | 22     | 7     | 15      | 31.8% |
| built-ins/AsyncGeneratorFunction         | 23     | 9     | 14      | 39.1% |
| built-ins/ThrowTypeError                 | 14     | 0     | 14      | 0.0%  |
| language/types                           | 113    | 100   | 13      | 88.5% |
| built-ins/Number                         | 338    | 325   | 13      | 96.2% |
| built-ins/GeneratorFunction              | 23     | 10    | 13      | 43.5% |
| built-ins/AsyncIteratorPrototype         | 13     | 0     | 13      | 0.0%  |
| built-ins/WeakSet                        | 85     | 74    | 11      | 87.1% |
| built-ins/ArrayIteratorPrototype         | 27     | 16    | 11      | 59.3% |
| annexB-built-ins/String                  | 111    | 101   | 10      | 91.0% |
| built-ins/NativeErrors                   | 94     | 85    | 9       | 90.4% |
| built-ins/AsyncFunction                  | 18     | 9     | 9       | 50.0% |
| built-ins/MapIteratorPrototype           | 11     | 2     | 9       | 18.2% |
| built-ins/SetIteratorPrototype           | 11     | 2     | 9       | 18.2% |
| language/identifiers                     | 268    | 260   | 8       | 97.0% |
| annexB-language/literals                 | 8      | 1     | 7       | 12.5% |
| language/identifier-resolution           | 14     | 8     | 6       | 57.1% |
| built-ins/Boolean                        | 51     | 45    | 6       | 88.2% |
| language/statementList                   | 80     | 75    | 5       | 93.8% |
| built-ins/StringIteratorPrototype        | 7      | 2     | 5       | 28.6% |
| built-ins/undefined                      | 8      | 5     | 3       | 62.5% |
| annexB-language/comments                 | 8      | 5     | 3       | 62.5% |
| language/destructuring                   | 19     | 17    | 2       | 89.5% |
| built-ins/global                         | 29     | 27    | 2       | 93.1% |
| annexB-built-ins/escape                  | 16     | 14    | 2       | 87.5% |
| annexB-built-ins/unescape                | 19     | 17    | 2       | 89.5% |
| language/rest-parameters                 | 11     | 10    | 1       | 90.9% |
| language/white-space                     | 67     | 66    | 1       | 98.5% |
| language/reserved-words                  | 27     | 26    | 1       | 96.3% |
| built-ins/eval                           | 10     | 9     | 1       | 90.0% |
| annexB-built-ins/Array                   | 1      | 0     | 1       | 0.0%  |
| annexB-built-ins/Function                | 6      | 5     | 1       | 83.3% |
| annexB-built-ins/Object                  | 1      | 0     | 1       | 0.0%  |
| annexB-built-ins/TypedArrayConstructors  | 1      | 0     | 1       | 0.0%  |

## Drill-Down: language/expressions (4,432 non-passing)

| Sub-category | Total | Pass | Fail | Pass% |
|---|---|---|---|---|
| class | 4,059 | 2,334 | 1,725 | 57.5% |
| dynamic-import | 941 | 156 | 785 | 16.6% |
| async-generator | 623 | 89 | 534 | 14.3% |
| object | 1,170 | 725 | 445 | 62.0% |
| assignment | 485 | 351 | 134 | 72.4% |
| compound-assignment | 454 | 322 | 132 | 70.9% |
| generators | 290 | 190 | 100 | 65.5% |
| async-function | 93 | 38 | 55 | 40.9% |
| super | 94 | 50 | 44 | 53.2% |
| yield | 63 | 19 | 44 | 30.2% |
| function | 264 | 221 | 43 | 83.7% |
| logical-assignment | 78 | 35 | 43 | 44.9% |
| arrow-function | 343 | 302 | 41 | 88.0% |
| new | 59 | 30 | 29 | 50.8% |
| async-arrow-function | 60 | 33 | 27 | 55.0% |
| call | 92 | 66 | 26 | 71.7% |
| import.meta | 22 | 1 | 21 | 4.5% |
| await | 22 | 3 | 19 | 13.6% |
| assignmenttargettype | 324 | 306 | 18 | 94.4% |
| tagged-template | 27 | 15 | 12 | 55.6% |
| in | 36 | 25 | 11 | 69.4% |
| delete | 69 | 59 | 10 | 85.5% |
| other (≤8 each) | — | — | ~84 | — |

### expressions/class further breakdown (1,725 failing)

| Feature | Total | Pass | Fail | Pass% |
|---|---|---|---|---|
| dstr (destructuring params) | 1,920 | 1,088 | 832 | 56.7% |
| elements (fields/methods) | 1,428 | 875 | 553 | 61.3% |
| (root-level class tests) | 261 | 180 | 81 | 69.0% |
| async-gen-method | 99 | 20 | 79 | 20.2% |
| async-gen-method-static | 99 | 20 | 79 | 20.2% |
| subclass-builtins | 36 | 11 | 25 | 30.6% |
| async-method / async-method-static | 64 | 24 | 40 | 37.5% |
| accessor-name-inst / accessor-name-static | 42 | 24 | 18 | 57.1% |
| decorator | 8 | 0 | 8 | 0.0% |
| gen-method / gen-method-static | 62 | 56 | 6 | 90.3% |

**Class elements** breakdown by feature pattern:

| Pattern | Total | Pass | Fail | Pass% |
|---|---|---|---|---|
| private-static | 442 | 225 | 217 | 51% |
| private (non-static) | 552 | 377 | 175 | 68% |
| other (public fields, etc.) | 388 | 248 | 140 | 64% |
| async | 73 | 7 | 66 | 10% |
| static (non-private) | 78 | 50 | 28 | 64% |

### expressions/dynamic-import further breakdown (785 failing)

| Feature | Total | Pass | Fail | Pass% |
|---|---|---|---|---|
| syntax | 503 | 154 | 349 | 30.6% |
| catch (rejection handling) | 176 | 0 | 176 | 0.0% |
| usage | 108 | 0 | 108 | 0.0% |
| namespace | 67 | 0 | 67 | 0.0% |
| assignment-expression | 28 | 1 | 27 | 3.6% |
| (root) | 31 | 1 | 30 | 3.2% |
| import-attributes | 23 | 0 | 23 | 0.0% |

## Drill-Down: language/statements (4,189 non-passing)

| Sub-category | Total | Pass | Fail | Pass% |
|---|---|---|---|---|
| class | 4,367 | 2,469 | 1,898 | 56.5% |
| for-await-of | 1,234 | 92 | 1,142 | 7.5% |
| async-generator | 301 | 34 | 267 | 11.3% |
| for-of | 751 | 527 | 224 | 70.2% |
| await-using | 94 | 0 | 94 | 0.0% |
| function | 451 | 357 | 94 | 79.2% |
| generators | 266 | 176 | 90 | 66.2% |
| using | 78 | 0 | 78 | 0.0% |
| with | 181 | 103 | 78 | 56.9% |
| async-function | 74 | 31 | 43 | 41.9% |
| for | 385 | 345 | 40 | 89.6% |
| try | 201 | 163 | 38 | 81.1% |
| variable | 178 | 153 | 25 | 86.0% |
| let | 145 | 128 | 17 | 88.3% |
| const | 136 | 121 | 15 | 89.0% |
| for-in | 115 | 100 | 15 | 87.0% |
| switch | 111 | 100 | 11 | 90.1% |
| other (≤5 each) | — | — | ~20 | — |

### statements/class further breakdown (1,898 failing)

| Feature | Total | Pass | Fail | Pass% |
|---|---|---|---|---|
| dstr (destructuring params) | 1,920 | 1,088 | 832 | 56.7% |
| elements (fields/methods) | 1,534 | 907 | 627 | 59.1% |
| subclass | 109 | 20 | 89 | 18.3% |
| async-gen-method / async-gen-method-static | 198 | 40 | 158 | 20.2% |
| (root-level class tests) | 254 | 199 | 55 | 78.3% |
| definition | 65 | 37 | 28 | 56.9% |
| subclass-builtins | 36 | 11 | 25 | 30.6% |
| async-method / async-method-static | 64 | 24 | 40 | 37.5% |
| decorator | 12 | 0 | 12 | 0.0% |
| accessor-name-inst / accessor-name-static | 42 | 24 | 18 | 57.1% |

### statements/for-await-of breakdown (1,142 failing)

| Pattern | Total | Pass | Fail | Pass% |
|---|---|---|---|---|
| async-generator iteration | 631 | 42 | 589 | 7% |
| destructuring patterns | 584 | 43 | 541 | 7% |
| other | 19 | 7 | 12 | 37% |

## Key Observations

1. **Class tests** dominate failures: ~3,600 non-passing across expressions + statements, primarily in **destructuring parameters** (~1,664), **class elements/fields** (~1,180), and **async generator methods** (~316).
2. **dynamic-import** is almost entirely non-passing (785/941) — `catch`, `usage`, `namespace` are 0% pass rate. Only `syntax` partially works.
3. **for-await-of** is nearly non-functional (7.5% pass rate, 1,142 failing) — both async-generator iteration and destructuring patterns fail.
4. **Async generators** are a cross-cutting weakness: failing in expressions (534), statements (267), and built-ins (46).
5. **Promise** (12.7% pass rate) and **async generators** (~4% pass rate) are the weakest built-in areas.
6. **Iterator** (0%), **Uint8Array** (0%), **AggregateError** (0%), **ThrowTypeError** (0%), **AsyncIteratorPrototype** (0%) are entirely non-passing (mostly ES2025 skips or unimplemented features).
7. **RegExp** is the largest built-in gap at 1,217 non-passing — likely due to match indices (`/d` flag), lookbehind, and Unicode edge cases.
8. **TypedArray + TypedArrayConstructors + DataView + ArrayBuffer** together account for ~1,956 non-passing — typed array support needs significant work.
9. **Math** (94.2%), **Number** (96.2%), **String** (82.3%), **Object** (84.5%) are in good shape.

## Skipped Feature Flags (ES2021+)

The following features are excluded from the ES2020 scope:

- `tail-call-optimization` (ES2015, not implemented)
- `WeakRef`, `FinalizationRegistry` (ES2021)
- `top-level-await`, `regexp-match-indices` (ES2022)
- `Atomics.waitAsync`, `resizable-arraybuffer`, `ArrayBuffer-transfer`, `regexp-v-flag`, `String.prototype.isWellFormed/toWellFormed` (ES2024)
- `import-attributes`, `regexp-modifiers`, `regexp-duplicate-named-groups`, `iterator-helpers`, `Float16Array`, `json-parse-with-source`, `json-modules`, `promise-try`, `RegExp.escape` (ES2025)
- `Temporal`, `ShadowRealm`, `decorators`, `explicit-resource-management` (Stage 3)
- `IsHTMLDDA`, `host-gc-required`, `cross-realm`, `caller` (Test harness / Annex B)
