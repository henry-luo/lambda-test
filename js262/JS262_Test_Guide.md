# Test262 Working Guide

## Quick Reference

```bash
# Build
make build                # Debug build (lambda.exe only — does NOT rebuild test executables)
make build-test           # Build test executables (test_js_test262_gtest.exe, etc.)
make test262-full         # Builds tests, then restores release lambda.exe before running js262
make test262-update-baseline

# Run test262 (batch mode — the standard way)
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --update-baseline
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --write-failures=temp/js262_failures.tsv --feature-summary

# Run baseline-only (faster, verifies no regressions)
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --baseline-only

# Run the full ES2021 baseline with async tests enabled
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --run-async --async-list=test/js262/test262_baseline.txt
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --run-async --async-list=test/js262/test262_baseline.txt --update-baseline

# Isolate async tests while tuning batching or harness cleanup
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --run-async --batch-file=temp/js47_async.txt --async-chunk-size=1 --jobs=1

# Run intentionally exhaustive slow tests
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --batch-file=test/js262/t262_slow.txt --jobs=1

# Run the diagnose watch list with extra Lambda fast-path logging
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --diagnose --jobs=1 --js-timeout=30

# Run a single test manually
./lambda.exe js test/js262/test262/test/built-ins/Array/from/...test.js
```

## Test Infrastructure

- **Baseline file**: `test/js262/test262_baseline.txt` (38,939 tests as
  of release_run_004)
- **Test runner**: `test/test_js_test262_gtest.cpp`
- **Sync batch size**: 50 tests per `lambda.exe js-test-batch` subprocess
- **Async batch size**: 50 tests per `lambda.exe js-test-batch` subprocess
  by default; override with `--async-chunk-size=<n>` for isolation or
  acceptance testing.
- **Parallel workers**: CPU count - 1 by default; override with `--jobs=<n>`.
- **Default preamble**: `sta.js`, `assert.js`, and `nativeFunctionMatcher.js`
  compiled once via MIR JIT for ordinary JS-harness batches.
- **Special preamble map**: `test/js262/special_premble.txt` lists expensive
  helper families, such as `testTypedArray.js` and `testAtomics.js`, that should
  be compiled once only for matching tests.
- **Non-fully-passing list**: `test/js262/t262_partial.txt` (fresh crash, slow, batch-unstable results from the latest run)
- **Slow test list**: `test/js262/t262_slow.txt` (intentionally exhaustive tests that pass, run in their own batches, and use a 5s timing gate)
- **Minimum baseline gate**: 21,824 (STABLE_BASELINE_MIN)
- **Performance rule**: full-suite timing and baseline refreshes must use a
  release `lambda.exe`; debug/O0 runs can create hundreds of false slow tests.
  The `make test262-*` targets now rebuild release `lambda.exe` after
  `build-test` so the debug test executables do not overwrite the runtime used
  by `js-test-batch`.

## Test Phases

| Phase | What it does |
|-------|-------------|
| **Phase 1** | Parse YAML metadata and prepare every non-skipped test for batching. Tests listed in `t262_partial.txt` are included; tests listed in `t262_slow.txt` remain CLEAN but are marked for isolated slow batches. |
| **Phase 2** | Execute CLEAN tests: 50/process, CPU-1 parallel workers by default. Main execution phase. With `--run-async`, allowlisted async tests are grouped into `js-async` batches. Slow-listed tests run as singleton `js-slow` batches. |
| **Phase 2a** | **Removed.** Previously ran or skipped PARTIAL tests separately. Now `t262_partial.txt` is not a skip list; it is rewritten from fresh results at the end of each run. |
| **Phase 2b** | Retry batch-lost tests individually. Tests that got no result because another test crashed their batch process. (Asymmetric to Phase 2a — these are innocent bystanders, not stale partials.) |
| **Phase 3** | Evaluate results. Classify non-fully-passing. Compute regressions/improvements vs baseline. |
| **Phase 4** | Retry regressions individually. If a regression recovers → it's batch-unstable, marked non-fully-passing. |

### Rebuilding the partial list

Tests in `t262_partial.txt` are included on every js262 run. The runner truncates
and repopulates the file from the current run's results, deduped by test name.
If a previous partial test now passes cleanly in Phase 2, it disappears from
`t262_partial.txt` automatically.

Tests already listed in `t262_slow.txt` are never written to
`t262_partial.txt`; keep intentionally exhaustive slow-but-correct tests in the
slow list only.

### Slow Tests

Some test262 files are intentionally exhaustive and pass correctly, but take
longer than the normal 3s fully-passing timing gate even in release builds.
These belong in `test/js262/t262_slow.txt`, not in `test/js262/t262_partial.txt`.

The runner always includes these tests. It isolates each one in its own
`js-slow` batch and applies a 5s slow-test timing gate instead of the normal
3s gate:

```bash
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe \
  --batch-only \
  --batch-file=test/js262/t262_slow.txt \
  --jobs=1 \
  --write-failures=temp/js262_slow.tsv
```

Keep this list short. A slow test should move back to ordinary baseline flow
only after an engine change brings its release timing below the normal slow
threshold.

### Proper Tail Calls

Proper tail calls are an ES2015 specification feature, but LambdaJS does not
claim general ECMAScript PTC support for the Js48 ES2021 milestone. test262
tests tagged `tail-call-optimization` are skipped with the explicit reason
`intentional PTC exception`, rather than being folded into the generic
unsupported future-feature bucket.

### Host Scope Exceptions

Cross-realm and browser/Annex B host-quirk tests are outside the Js48 LambdaJS
ES2021 claim. Tests tagged `cross-realm`, `IsHTMLDDA`, or `caller` are skipped
with explicit reasons:

- `intentional cross-realm host exception`
- `intentional browser IsHTMLDDA exception`
- `intentional Annex B caller exception`

## Async Test Flow

test262 marks asynchronous tests with the metadata `flags: [async]`.  The
runner stores that bit in `test/js262/test262_metadata.tsv` and treats async
tests conservatively:

1. By default, async-flagged tests are skipped with the message `async flag`.
2. `--run-async` permits async execution, but only for tests listed in an
   async allowlist.
3. The async allowlist comes from `--async-list=<path>`.  In `--batch-file`
   mode, if `--async-list` is omitted, the batch file itself is also used as
   the async allowlist.
4. Enabled async tests are not run as singleton tests anymore.  They are
   grouped as JS-harness `js-async` batches and executed through
   `lambda.exe js-test-batch`.
5. Each async test gets `$DONE` support, microtask/timer draining, and
   per-test harness reset before the next test in the batch is evaluated.
6. After execution, async tests follow the same Phase 3/Phase 4 stability gates
   as sync tests.  Only fully passing, batch-safe, non-slow tests enter the
   baseline.

For normal full-suite release verification, use the current baseline as the
async allowlist:

```bash
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe \
  --batch-only \
  --run-async \
  --async-list=test/js262/test262_baseline.txt \
  --write-failures=temp/js262_failures.tsv \
  --feature-summary
```

For a baseline refresh:

```bash
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe \
  --batch-only \
  --run-async \
  --async-list=test/js262/test262_baseline.txt \
  --update-baseline \
  --write-failures=temp/js262_update_baseline.tsv
```

For async isolation or debugging, force one async test per batch process:

```bash
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe \
  --batch-only \
  --run-async \
  --batch-file=temp/js47_async.txt \
  --async-chunk-size=1 \
  --jobs=1 \
  --write-failures=temp/js47_async_failures.tsv
```

Use `--async-chunk-size=1` only for diagnosis.  The default async chunk size is
50, matching sync batches, and is the expected mode for full-suite performance
captures.

## Test Result Categories

| Category | Meaning |
|----------|---------|
| **Fully passing** | Passed in original Phase 2 batch under the timing gate. Qualifies for baseline. |
| **Non-fully-passing** | Cannot pass reliably in batch. Does NOT qualify for baseline. |
| **Regression** | Was in baseline, now fails. Must be 0 to update baseline. |
| **Improvement** | Was NOT in baseline, now fully passing. Added on baseline update. |
| **Batch-lost** | Test got no result because its batch process crashed (another test killed it). |
| **Crash-collateral** | Batch-lost from a batch with a known crash-point. Promoted to full pass. |

## Quality Rules

1. **Regressions must be 0** before updating baseline. Any regression = something broke.
2. **Non-fully-passing should be low**. Slow-but-correct exhaustive tests belong in `t262_slow.txt`; unexpected SLOW/CRASH/BATCH_KILL entries in `t262_partial.txt` need investigation.
3. **Only fully-passing tests enter baseline**. Tests that pass only in individual retry (Phase 4) are NOT stable enough.
4. **Always use `--batch-only`**. This is the standard mode. Without it, tests run as individual GTest cases (slow, different semantics).
5. **Run 2-3 times** after any engine change to confirm stability. Batch ordering varies by timing, so different tests are "first in batch" each run.
6. **Use `--update-baseline`** only when: regressions=0, non-fully-passing≤2, you've run ≥2 verification runs.

## Batch Preamble Design

The default JS-harness preamble must stay small.  A 2026-05-22 debug-run
diagnosis compared current HEAD against the saved `d6092bc8a` debug run in
`test/js262/results/debug_run` using simple, non-pathological tests.  Plain
`lambda.exe js-test-batch` startup was fast, and a d609-style preamble
(`sta.js`, `assert.js`, `nativeFunctionMatcher.js`) compiled in roughly
sub-second debug time.  The widened preamble that globally added
`testTypedArray.js`, `testAtomics.js`, `detachArrayBuffer.js`, and URI helper
files made even tiny one-test JS-harness batches spend multiple seconds before
the test body ran.  `testTypedArray.js` was the largest single contributor.

The runner now batches JS-harness tests by special preamble need:

```text
ordinary JS tests           -> default preamble only
TypedArray-family tests     -> default preamble + testTypedArray.js
Atomics-family tests        -> default preamble + testAtomics.js
URI encoding-family tests   -> default preamble + decimalToHexString.js
```

`test/js262/special_premble.txt` controls those groups.  Each non-comment row
has a selector followed by one or more helper files:

```text
selector<TAB>helper.js[,other-helper.js]
```

Selectors may be sanitized test names, `ref/test262/test/...` paths, relative
test262 paths, or prefix selectors ending in `*`.  Keep this file conservative:
add a helper only when compiling it per matching test is measurably worse than
compiling it once for that helper-specific batch.  Helpers not listed here still
work because they remain prepended to individual tests from metadata includes.

## CLI Flags

| Flag | Effect |
|------|--------|
| `--batch-only` | Standard batch mode. Enables Phase 4 regression retry. |
| `--update-baseline` | Updates baseline if all gate conditions pass (regressions=0, batch-lost=0, crashes=0, count≥21824). |
| `--baseline-only` | Only run tests in the baseline file. Faster for regression checks. |
| `--batch-file=<path>` | Run only tests listed in the given file in a single batch, then exit. Useful for isolating failures. |
| `--run-async` | Permit async-flagged tests that are also present in the async allowlist. Without an allowlist, async tests remain skipped. |
| `--async-list=<path>` | Async allowlist, one test name per line. For full baseline runs, use `test/js262/test262_baseline.txt`. In `--batch-file` mode, defaults to the batch file when omitted. |
| `--async-chunk-size=<n>` | Async tests per `lambda.exe js-test-batch` process. Clamped to `1..50`, default `50`. Use `1` for isolation; use the default for performance runs. |
| `--diagnose` | Run `test/js262/diagnose_list.txt` in batch mode and pass `--diagnose` to `lambda.exe js-test-batch`, enabling extra fast-path diagnostics in `log.txt`. |
| `--diagnose-list=<path>` | Override the diagnose list path. This also enables `--diagnose`. |
| `--write-failures=<path>` | Write a TSV manifest for failed tests. The row count matches the reported Failed count, excluding skipped and non-fully-passing tests. |
| `--feature-summary` | Write failure summaries grouped by feature and category/subcategory. If no manifest path is given, uses `temp/js262_failures.tsv`. |
| `--jobs=<n>` | Set batch worker count. Default is CPU count - 1. |
| `--js-timeout=<seconds>` | Set per-test Lambda timeout, clamped to `1..120`. |

## Failure Artifacts

Use failure artifacts when starting a compliance phase so the current failure set can be queried without scraping terminal output:

```bash
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe \
  --batch-only \
  --write-failures=temp/js262_failures.tsv \
  --feature-summary \
  --js-timeout=30
```

The manifest columns are:

```text
test_name	path	status	failure_kind	message	category	subcategory	features	includes	native_harness	elapsed_us	rss_delta_kb
```

The runner also writes `temp/js262_failures_by_feature.tsv` and `temp/js262_failures_by_path.tsv` when the manifest path is `temp/js262_failures.tsv`. For a custom manifest path, the summary files use the same base name, for example `temp/my_failures_by_feature.tsv`.

## Diagnosing Failures

### Diagnose watch list

Use `test/js262/diagnose_list.txt` for slow tests or tests that need targeted
fast-path confirmation.  Each non-comment row is TSV-shaped:

```text
test_name	last_timing	expected_fast_paths	notes
```

In diagnose mode, the runner uses the first field as the test name and treats
`expected_fast_paths` as assertions.  If any listed path is missing from the
child output as either `js-diagnose: fast-path-hit=<name>` or
`js-diagnose: fast-path-note=<name>`, the runner reports it; an otherwise
passing test is marked failed.
When a new slow test appears, add it here with the release-build timing and the
fast paths it should hit after tuning.  Use `none-yet` when the optimization has
not been designed.

Run it with:

```bash
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe \
  --diagnose \
  --jobs=1 \
  --js-timeout=30 \
  --write-failures=temp/js262_diagnose_failures.tsv
```

`--diagnose` implies batch mode, defaults to `test/js262/diagnose_list.txt`,
and passes `--diagnose` into `lambda.exe js-test-batch`.  Diagnostic messages
such as `js-diagnose: fast-path-hit=...` are written to the batch output and
`log.txt`; expected paths in the diagnose list are checked automatically.

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
- Check `test/js262/t262_partial.txt` for the list and their tags (SLOW, CRASH, BATCH_KILL, etc.)
- If the test is a known exhaustive pass, move it to `test/js262/t262_slow.txt`; the runner will isolate it and apply the 5s slow-test timing gate instead of leaving it as generic partial noise.

### Running a single test
```bash
# Normal run
./lambda.exe js test/js262/test262/test/built-ins/Array/from/some-test.js

# With debug logging (check log.txt after)
./lambda.exe js test/js262/test262/test/built-ins/Array/from/some-test.js
cat log.txt | tail -50
```

### Running a subset via --batch-file
```bash
# Create a file with test names (one per line)
echo 'built_ins_Number_prototype_valueOf_some_test_js' > temp/mytest.txt
ASAN_OPTIONS=detect_container_overflow=0 ./test/test_js_test262_gtest.exe --batch-only --batch-file=temp/mytest.txt
```

### Testing engine bugs directly via stdin pipe
```bash
# Pipe harness + test source directly to the batch handler
# Protocol: harness:<len>\n<blob>\nsource:<name>:<len>\n<blob>\n
printf 'harness:%d\n%ssource:%s:%d\n%s' \
  $(wc -c < harness_blob.js) "$(cat harness_blob.js)" \
  "test_name" $(wc -c < test.js) "$(cat test.js)" \
  | ./lambda.exe js-test-batch
```

### Checking per-test timing
```bash
# Timing data saved per optimization level (default is o0 for debug builds)
cat temp/_t262_timing_o0.tsv | sort -t$'\t' -k2 -rn | head -20  # slowest tests
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
| `test/js262/t262_partial.txt` | Non-fully-passing list with tags |
| `test/js262/t262_slow.txt` | Intentionally exhaustive passing tests run in singleton `js-slow` batches with a 5s gate |
| `temp/_t262_batch_kills.txt` | Phase 4 batch kill diagnostics |
| `temp/test262_metadata.tsv` | Cached YAML metadata for all test files |
| `temp/_t262_timing_o0.tsv` | Per-test timing data (debug build); `_o1.tsv`/`_o2.tsv` for release |
