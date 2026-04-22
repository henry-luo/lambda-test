# Test262 Working Guide

## Quick Reference

```bash
# Build
make build                # Debug build (lambda.exe + test executables)
make build-test           # Build test executables only

# Run test262 (batch mode — the standard way)
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --update-baseline

# Run baseline-only (faster, verifies no regressions)
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --baseline-only

# Run a single test manually
./lambda.exe js test/js262/test262/test/built-ins/Array/from/...test.js
```

## Test Infrastructure

- **Baseline file**: `test/js262/test262_baseline.txt` (~25,272 tests)
- **Test runner**: `test/test_js_test262_gtest.cpp`
- **Batch size**: 50 tests per `lambda.exe js-test-batch` subprocess
- **Parallel workers**: 12
- **Preamble**: harness files (sta.js, assert.js, nativeFunctionMatcher.js) compiled once via MIR JIT
- **Non-fully-passing list**: `temp/_t262_partial.txt` (crash, slow, batch-unstable from previous run)
- **Minimum baseline gate**: 21,824 (STABLE_BASELINE_MIN)

## Test Phases

| Phase | What it does |
|-------|-------------|
| **Phase 1** | Parse YAML metadata, partition into CLEAN (batchable) and PARTIAL (known problematic). |
| **Phase 2** | Execute CLEAN tests: 50/process, 12 parallel workers. Main execution phase. |
| **Phase 2a** | Execute PARTIAL tests individually (batch=1). Previously crashed/slow/timed-out tests. |
| **Phase 2b** | Retry batch-lost tests individually. Tests that got no result because another test crashed their batch process. |
| **Phase 3** | Evaluate results. Classify non-fully-passing. Compute regressions/improvements vs baseline. |
| **Phase 4** | Retry regressions individually. If a regression recovers → it's batch-unstable, marked non-fully-passing. |

## Test Result Categories

| Category | Meaning |
|----------|---------|
| **Fully passing** | Passed in original Phase 2 batch with elapsed < 3s. Qualifies for baseline. |
| **Non-fully-passing** | Cannot pass reliably in batch. Does NOT qualify for baseline. |
| **Regression** | Was in baseline, now fails. Must be 0 to update baseline. |
| **Improvement** | Was NOT in baseline, now fully passing. Added on baseline update. |
| **Batch-lost** | Test got no result because its batch process crashed (another test killed it). |
| **Crash-collateral** | Batch-lost from a batch with a known crash-point. Promoted to full pass. |

## Quality Rules

1. **Regressions must be 0** before updating baseline. Any regression = something broke.
2. **Non-fully-passing should be ≤ 2**. These are typically slow tests (≥3s). If you see more, investigate.
3. **Only fully-passing tests enter baseline**. Tests that pass only in individual retry (Phase 4) are NOT stable enough.
4. **Always use `--batch-only`**. This is the standard mode. Without it, tests run as individual GTest cases (slow, different semantics).
5. **Run 2-3 times** after any engine change to confirm stability. Batch ordering varies by timing, so different tests are "first in batch" each run.
6. **Use `--update-baseline`** only when: regressions=0, non-fully-passing≤2, you've run ≥2 verification runs.

## CLI Flags

| Flag | Effect |
|------|--------|
| `--batch-only` | Standard batch mode. Enables Phase 4 regression retry. |
| `--update-baseline` | Updates baseline if all gate conditions pass (regressions=0, batch-lost=0, crashes=0, count≥21824). |
| `--baseline-only` | Only run tests in the baseline file. Faster for regression checks. |

## Diagnosing Failures

### Reading the output
```
║  Fully passed: 25272 / 34094  (74.1%)             ║
║  Non-fully-passing:     0  (batch-unstable or slow)   ║
║  Baseline passing: 25269                         ║
║  Fully passing:    25272                         ║
║  Regressions:          0  (pass → fail)          ║
║  Improvements:         3  (fail → pass)          ║
```

### If you see regressions
1. Check the regression list in the output — it shows test names
2. Run the test manually: `./lambda.exe js test/js262/test262/test/<path>.js`
3. Check if it's a real failure or batch-interaction issue
4. If real failure: fix the engine bug. Do NOT remove from baseline.
5. If batch-only: the test is batch-unstable. Investigate state leaks.

### If non-fully-passing count is high (>2)
- Usually means slow tests fluctuating around the 3s threshold
- Or a new crash is killing batch processes, creating batch-lost collateral
- Check `temp/_t262_partial.txt` for the list and their tags (SLOW, CRASH, BATCH_KILL, etc.)

### Running a single test
```bash
# Normal run
./lambda.exe js test/js262/test262/test/built-ins/Array/from/some-test.js

# With debug logging (check log.txt after)
./lambda.exe js test/js262/test262/test/built-ins/Array/from/some-test.js
cat log.txt | tail -50
```

## Key Architecture

### Batch subprocess protocol (manifest)
The test runner communicates with `lambda.exe js-test-batch` via stdin using a manifest protocol:
```
harness:<length>\n<harness_blob>
source:<test_name>:<length>\n<test_blob>
source:<test_name>:<length>\n<test_blob>
...
```

### Preamble compilation
- Harness (sta.js + assert.js + nativeFunctionMatcher.js) compiled once via `transpile_js_to_mir_preamble()`
- Each test compiled via `transpile_js_to_mir_with_preamble()`
- After preamble compilation, `js_batch_reset_to(preamble_var_checkpoint)` resets cached globals/constructor prototypes

### State reset between tests
- `js_batch_reset_to(checkpoint)` — resets module vars, cached globals, constructor prototypes while preserving preamble vars
- Called after each test completes and after preamble compilation
- Without this reset after preamble, the first test in each batch inherits stale state

### Crash recovery
- Batch processes use signal handlers (SIGSEGV, SIGABRT) with siglongjmp
- On crash: heap destroyed and rebuilt, preamble recompiled from saved source
- Crashed test logged as BATCH_KILL, remaining tests in batch continue

## Key Files

| File | Purpose |
|------|---------|
| `test/js262/test262_baseline.txt` | Baseline: list of test names that must pass |
| `test/test_js_test262_gtest.cpp` | Test runner with batch mode, phases, retry logic |
| `lambda/main.cpp` | `js-test-batch` command handler |
| `lambda/js/js_runtime.cpp` | `js_batch_reset_to()`, `js_batch_reset()` |
| `temp/_t262_partial.txt` | Non-fully-passing list with tags |
| `temp/_t262_batch_kills.txt` | Phase 4 batch kill diagnostics |
| `temp/test262_metadata.tsv` | Cached YAML metadata for all test files |
