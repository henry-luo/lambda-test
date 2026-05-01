# Test262 ES2020 Compliance Analysis

**Date**: 2026-04-27
**Baseline**: `test262_baseline.txt` (commit ec62ac2d9)

## Summary

| Metric | Count |
|---|---|
| Total discovered tests | 42,219 |
| Skipped (ES2021+ features) | 8,067 |
| In-scope (batched) | 34,167 |
| **Passing** | **28,691** |
| **Failing** | **5,461** |
| **Pass rate (in-scope)** | **84.0%** |

> Previous run (commit `fa4cf1889`, 2026-04-23): 25,272 passing / 8,822 failing — improvement of **+3,419 passing**, **−3,361 failing** since.

## Failure Breakdown (current run, 5,461 failing)

Top failure clusters by feature area, ranked by absolute count of failing tests:

| Count | Cluster | Likely root cause |
|------:|---------|-------------------|
| 664 | `built_ins/RegExp` | RE2 backend; ES regex features unsupported (lookbehind, named groups, `/u`/`/v` semantics, sticky `y`) |
| 436 | `built_ins/Object` | Property-descriptor enforcement, `defineProperty/defineProperties`, `__proto__` semantics |
| 378 | `built_ins/Array` | `prop-desc` enforcement, iterator-protocol details, holes/sparse handling |
| 361 | `language/statements/class` | Class semantics (private fields, static blocks, accessor edge-cases, super dispatch) |
| 339 | `built_ins/TypedArray` | Detached buffers, species, `@@toPrimitive`, byte-offset edge cases |
| 279 | `built_ins/TypedArrayConstructors` | Constructor coercion + species protocol |
| 220 | `language/expressions/class` | Class expression edge cases (mirrors statements/class) |
| 187 | `built_ins/DataView` | Detached buffer, alignment, BigInt views |
| 161 | `built_ins/Promise` | then/catch micro-task ordering and species |
| 158 | `built_ins/Atomics` | SharedArrayBuffer / wait/notify mostly unimplemented |
| 145 | `built_ins/String` | `Symbol.toPrimitive`, normalize, `replaceAll`, regex-coerce |
| 121 | `annexB/language/eval` | Indirect-eval AnnexB function-decl hoist (Phase 3 — deferred) |
| 112 | `language/expressions/compound-assignment` | Coercion ordering (BigInt + `Symbol.toPrimitive`) |
| 109 | `built_ins/Date` | `Symbol.toPrimitive`, NaN/MIN/MAX clamping, ISO parsing |
| 107 | `language/statements/for` | `for/for-in/for-of` per-iteration `let`/`const` binding semantics |
| 95 | `language/expressions/assignment` | Reference semantics in assignment target order |
| 81 | `language/statements/with` | `with` mostly unsupported |
| 76 | `language/expressions/object` | Computed keys + `__proto__` + spread ordering |
| 76 | `annexB/language/global` | Global function-decl hoisting writability |
| 71 | `built_ins/Set` | Iterator + species |
| 68 | `language/statements/function` | "restricted properties" (caller/arguments) on strict functions |
| 66 | `annexB/language/function` | Block-scoped function-decl B.3.3 |
| 59 | `built_ins/Function` | `length`, `name`, `caller/arguments` poison, bind |
| 48 | `built_ins/Reflect` | Trap forwarding details |
| 46 | `built_ins/Proxy` | Invariant checks |
| 45 | `built_ins/BigInt` | `Symbol.toPrimitive`, conversions |
| ~340 | misc smaller (`Map`, `JSON`, `super`, `yield`, `generators`, `dynamic-import`, `SharedArrayBuffer`, `ArrayBuffer`, `try`, `regexp-literal`, …) | Various |

### Major underlying engineering gaps

Grouped from the cluster list above:

1. **Property-descriptor / `Symbol.toPrimitive` plumbing** — visible across `Object`, `Array`, `String`, `Date`, `BigInt`, `compound-assignment`, addition coercion (~1,200+ failures). Honoring `OrdinaryToPrimitive` + `{writable, configurable, enumerable}` on built-in slots would clear a large fraction.
2. **RegExp ES-semantics shim over RE2** (~690 with `regexp-literal`) — named groups, lookbehind, `/u`/`/v`, `lastIndex`, sticky.
3. **TypedArray / DataView / ArrayBuffer detach + species** (~830) — implementing detach checks and `@@species` lookup uniformly would cover this band.
4. **Class semantics** (~610: statements + expressions) — private fields edge cases, static init blocks, super-call/property dispatch, accessor descriptors.
5. **AnnexB hoisting (B.3.3 family)** — ~265 across `annexB/*` and `language/statements/function` "restricted properties"; indirect-eval try (Phase 3) deferred — requires capture-analyzer rework.
6. **`for`/`for-in`/`for-of` per-iteration TDZ binding** (~107) — each iteration must allocate a fresh lexical environment for `let`/`const`.
7. **`with` statement** (~81) — currently essentially unimplemented.
8. **Atomics / SharedArrayBuffer** (~196) — entire feature missing.
9. **Promise / async micro-task ordering** (~161) — many would pass once the async harness is enabled.
10. **Reflect / Proxy invariants** (~94) — strict `[[Get]]/[[Set]]/[[OwnKeys]]` invariant checks.

### Highest-ROI clusters

- Fix `OrdinaryToPrimitive` (`Symbol.toPrimitive` → `valueOf` → `toString`) uniformly in arithmetic / coercion paths — eliminates several hundred failures across `Date`, `BigInt`, `String`, `Object`, addition, compound-assignment.
- Implement per-iteration `let`/`const` binding in `for/for-in/for-of` — clears ~100 in `language/statements/for` plus collateral in class static blocks.
- Implement TypedArray detach checks and `@@species` lookup — single, well-scoped change for ~800 tests.

> Run health: no crashes, no batch losses. Every failure exits via standard test262 assertion failure; the `js-mir: validate scanned …` line on each failure is informational JIT diagnostic, not an error.

## Skipped Feature Flags (ES2021+)

The following features are excluded from the ES2020 scope:

- `tail-call-optimization` (ES2015, not implemented)
- `WeakRef`, `FinalizationRegistry` (ES2021)
- `top-level-await`, `regexp-match-indices` (ES2022)
- `Atomics.waitAsync`, `resizable-arraybuffer`, `ArrayBuffer-transfer`, `regexp-v-flag`, `String.prototype.isWellFormed/toWellFormed` (ES2024)
- `import-attributes`, `regexp-modifiers`, `regexp-duplicate-named-groups`, `iterator-helpers`, `Float16Array`, `json-parse-with-source`, `json-modules`, `promise-try`, `RegExp.escape` (ES2025)
- `Temporal`, `ShadowRealm`, `decorators`, `explicit-resource-management` (Stage 3)
- `IsHTMLDDA`, `host-gc-required`, `cross-realm`, `caller` (Test harness / Annex B)
