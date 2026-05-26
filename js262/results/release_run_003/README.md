# JS262 Release Run 003 Report

## Run Identity

- Date captured: 2026-05-26
- Fresh artifact timestamp: 2026-05-26 14:55 local time
- Base commit: `b406da25d925d9c75ca95b2a2cbe2452cd989472`
- Working tree: dirty — local changes implementing §3.1 (transient call-arg
  stack), §3.3 (const-bound function direct dispatch), and the generator
  yield-spill fix. See `git_status_short.txt` for the file list.
- Runtime under test: rebuilt release `lambda.exe`
- Binary sizes observed after the run:
  - `lambda.exe`: 13M, modified 2026-05-26 14:42
  - `test/test_js_test262_gtest.exe`: 492K, modified 2026-05-26 14:50

## Capture Note

The fresh files emitted by the just-finished run were:

- `temp/_t262_timing_o0.tsv`
- `temp/_t262_memory_o0.tsv`

(The `_o0` suffix is a fixed naming convention in the harness, not an
indicator of the optimisation level — this run was on the release
`lambda.exe`.) No failure manifest was emitted; this is a clean
baseline-only run with 0 regressions and 0 non-fully-passing tests.

## Counts

- Timing rows: 34,163 tests
- Memory rows: 34,163 tests
- Current baseline snapshot: 34,165 non-comment entries
- Current non-fully-passing snapshot: 3 non-comment entries (historical;
  this run flagged 0 of them)
- Slow tests at `>= 3s`: 0

## Compliance Summary

- Fully passed: **34,165 / 34,165 (100.0%)**
- Non-fully-passing this run: 0
- Failed: 0
- Skipped: 8,054
- Regressions vs baseline: **0**
- Improvements vs baseline: 0

Wall-time for all 42,219 discovered tests (incl. skipped): 211.1 s
(`prep 0.0s + batch 211.0s + retry 0.0s + partial 0.0s + timing 0.0s +
memory 0.0s + eval 0.0s`).

## Per-Test Timing

- Raw timing file: `t262_timing_release.tsv`
- Sorted timing file: `top_slow_tests.tsv`
- Slow subset: `slow_tests_ge_3s.tsv`, empty for this run
- Sum of per-test elapsed times: **398.810 s** (run_002 was 529.417 s → −25%)
- Average per-test elapsed time: **11.674 ms** (run_002 was 15.498 ms → −25%)
- Max per-test elapsed time: **1.509 s** (run_002 was 2.971 s → −49%)
- Max test: `language_identifiers_start_unicode_8_0_0_escaped_js`

## Memory Summary

- Tests with memory data: 34,163 / 34,163
- Peak RSS: **1,000.9 MB** (run_002 was 975.7 MB)
- Peak RSS test: `language_identifiers_start_unicode_5_2_0_class_escaped_js`
- Minimum RSS: 43.0 MB (`language_statements_try_S12_14_A16_T5_js`)
- Average RSS delta/test: +2,646.7 KB
- Largest single-test growth: **183.5 MB** (run_002 was 186.2 MB)
- Largest growth test: `language_identifiers_start_unicode_10_0_0_js`
- Tests over 1 MB growth: 16,178
- Tests over 10 MB growth: 1,004

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 1.509631 | `language_identifiers_start_unicode_8_0_0_escaped_js` |
| 1.467928 | `language_identifiers_start_unicode_10_0_0_js` |
| 1.245281 | `language_identifiers_start_unicode_13_0_0_escaped_js` |
| 1.206040 | `language_identifiers_start_unicode_8_0_0_js` |
| 1.124924 | `language_identifiers_start_unicode_9_0_0_escaped_js` |
| 1.118558 | `language_identifiers_start_unicode_10_0_0_escaped_js` |
| 0.977094 | `language_identifiers_start_unicode_13_0_0_js` |
| 0.976029 | `language_identifiers_start_unicode_9_0_0_js` |
| 0.838123 | `language_identifiers_start_unicode_5_2_0_escaped_js` |
| 0.758275 | `language_identifiers_start_unicode_5_2_0_js` |

## Improvement vs `release_run_002`

run_002's data was captured with the same `_o0`-suffixed harness files, so
the metrics are directly comparable. All deltas come from the changes
described in `vibe/jube/Transpile_Js_Tune.md`:

| Metric | run_002 | run_003 | Δ |
| --- | ---: | ---: | ---: |
| Sum of per-test elapsed | 529.417 s | 398.810 s | **−24.7 %** |
| Average per-test | 15.498 ms | 11.674 ms | **−24.7 %** |
| Max per-test | 2.971 s | 1.509 s | **−49.2 %** |
| Slow tests ≥ 3 s | 0 | 0 | — |
| Peak RSS | 975.7 MB | 1,000.9 MB | +2.6 % |
| Largest single-test growth | 186.2 MB | 183.5 MB | −1.5 % |
| Regressions | (n/a) | 0 | — |

Top slow tests retain their identity (`language_identifiers_start_unicode_*`
family) but every one of them is roughly **2× faster**. Memory footprint is
essentially unchanged.

A separate clean A/B (just §3.3 toggled off vs on against this same binary)
showed that §3.3 alone is responsible for −34 % of the per-test elapsed sum
and −8.7 % of wall-time; the remaining win versus run_002 comes from §3.1
plus the generator-spill fix (see `vibe/jube/Transpile_Js_Tune.md` §6.1).

## Captured Files

| File | Purpose |
| --- | --- |
| `README.md` | this report |
| `t262_timing_release.tsv` | raw release timing data |
| `t262_memory_release.tsv` | raw release RSS data |
| `top_slow_tests.tsv` | sorted timing data in seconds |
| `slow_tests_ge_3s.tsv` | slow-test subset at or above 3 s (empty) |
| `top_memory_delta_mb.tsv` | sorted RSS delta in MB |
| `top_peak_rss_mb.tsv` | sorted post-test peak RSS in MB |
| `test262_baseline_at_run.txt` | baseline snapshot at capture time |
| `t262_partial_at_run.txt` | non-fully-passing snapshot at capture time |
| `commit.txt` | base commit hash at capture time |
| `git_status_short.txt` | working-tree status at capture time |
| `binary_sizes.txt` | binary sizes and mtimes observed after the run |
