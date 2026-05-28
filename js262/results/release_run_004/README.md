# JS262 Release Run 004 Report

## Run Identity

- Date captured: 2026-05-28
- Source run: latest release `--update-baseline` js262 run completed before this snapshot.
- Base commit: `594cf134e41b8dea005320883f6d8e1f658ebdc7`
- Runtime under test: release `lambda.exe`
- GTest harness: debug `test/test_js_test262_gtest.exe`
- Host capacity from baseline: 8 CPU cores, 24.0 GiB memory
- Scope: ES2021, skipping ES2022+ features

## Compliance Summary

- Fully passed: 38,939 / 38,939 (100.0%)
- Total discovered tests: 42,295
- Skipped: 3,356
- Batched: 38,941, including 2 skipped partial entries
- Failed: 0
- Regressions vs baseline: 0
- Failure manifest rows: 0 data rows

## Runtime Summary

- Total wall-time: 181.3 s
- Prepare: 0.1 s
- Execute: 180.1 s
- Batched execute wall-time: 179.9 s
- Non-batched execute wall-time: 0.0 s
- Batch size: sync 50 tests/process, async 50 tests/process
- Workers: 7 (`cpu - 1`)

Note: after this run, the js262 gtest was enhanced to emit separate baseline
header lines for sync batched and async batched wall-time. This snapshot keeps
the exact baseline produced by the run; the new split will appear after the
next baseline update run.

## Per-Test Timing

- Timing rows: 38,939 tests
- Sum of per-test elapsed time: 770.372 s
- Average per-test elapsed time: 19.784 ms
- Max per-test elapsed time: 2.964 s
- Max test: `language_identifiers_start_unicode_10_0_0_escaped_js`
- Slow tests >= 3 s: 0 data rows

## Memory Summary

- Memory rows: 38,939 tests
- Peak RSS: 978.4 MB
- Peak RSS test: `language_identifiers_val_debugger_js`
- Average RSS delta/test: +2721.0 KB
- Largest single-test growth: 209.3 MB
- Largest growth test: `language_identifiers_start_unicode_10_0_0_escaped_js`
- Tests over 1 MB growth: 20,670
- Tests over 10 MB growth: 1,216

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 2.964149 | `language_identifiers_start_unicode_10_0_0_escaped_js` |
| 2.618605 | `language_identifiers_start_unicode_10_0_0_js` |
| 2.534685 | `language_identifiers_start_unicode_9_0_0_js` |
| 2.474678 | `language_identifiers_start_unicode_8_0_0_js` |
| 2.267641 | `language_identifiers_start_unicode_9_0_0_escaped_js` |
| 1.945800 | `language_identifiers_start_unicode_5_2_0_js` |
| 1.927330 | `language_identifiers_start_unicode_8_0_0_escaped_js` |
| 1.880243 | `language_identifiers_start_unicode_5_2_0_escaped_js` |
| 1.659599 | `language_identifiers_start_unicode_13_0_0_js` |
| 1.605438 | `language_identifiers_start_unicode_17_0_0_escaped_js` |

## Captured Files

| File | Purpose |
| --- | --- |
| `README.md` | this report |
| `t262_timing_release.tsv` | raw release timing data |
| `t262_memory_release.tsv` | raw release RSS data |
| `top_slow_tests.tsv` | sorted timing data in seconds |
| `slow_tests_ge_3s.tsv` | slow-test subset at or above 3 s |
| `top_memory_delta_mb.tsv` | sorted RSS delta in MB |
| `top_peak_rss_mb.tsv` | sorted post-test peak RSS in MB |
| `test262_baseline_at_run.txt` | baseline snapshot at capture time |
| `t262_partial_at_run.txt` | non-fully-passing snapshot at capture time |
| `commit.txt` | base commit hash at capture time |
| `git_status_short.txt` | working-tree status at capture time |
| `binary_sizes.txt` | binary sizes and mtimes observed after the run |
| `failure_manifest.tsv` | failure manifest from the run, header only for this clean run |
| `failure_by_feature.tsv` | failure summary by feature, header only for this clean run |
| `failure_by_path.tsv` | failure summary by path, header only for this clean run |
