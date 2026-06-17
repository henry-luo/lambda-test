# JS262 Release Run 008 Report

## Run Identity

- Date captured: 2026-06-16
- Source run: fresh release `--update-baseline` js262 run completed before tuning edits.
- Capture-time Lambda HEAD: `13f4fb9cb8889794643a4c5ea8234f0ec6527af2`
- Capture-time lambda-test HEAD: `f65e3e35e7079ee0c4ca33befb2ba3c7977261c7`
- Runtime under test: release `lambda.exe`
- GTest harness: release `test/test_js_test262_gtest.exe`
- Scope: 42,889 discovered tests, 2,628 skipped, 40,261 run in the baseline batch.

## Compliance Summary

- Fully passed: 40,261 / 40,261 (100.0%)
- Non-fully-passing: 0
- Failed: 0
- Skipped: 2,628
- Improvements vs prior baseline: 0
- Regressions vs baseline: 0
- Failure manifest rows: 0 data rows
- `--update-baseline` rewrote `test/js262/test262_baseline.txt` with 40,261 fully passing tests.

## Runtime Summary

- Total wall-time: 120.5 s
- Prepare: 0.0 s
- Execute: 120.4 s
- Batched execute wall-time: 119.2 s
- Sync batched wall-time: 98.9 s
- Async batched wall-time: 20.3 s
- Non-batched execute wall-time: 1.2 s
- Batch size: sync 100 tests/process, async 100 tests/process
- Workers: 7 (`cpu - 1`)

Compared with run_007, the two sparse `Array.prototype.{every,some}` tests no
longer appear in the slow-test set. The remaining structured slow cluster is the
`Atomics.waitAsync` no-spurious-wakeup group at about 1.0 s/test, caused by
harness report polling rather than engine compute.

## Per-Test Timing

- Timing rows: 40,261 tests
- Sum of per-test elapsed time: 593.279 s
- Average per-test elapsed time: 14.736 ms
- Max per-test elapsed time: 3.438127 s
- Max test: `built_ins_decodeURI_S15_1_3_1_A2_5_T1_js`
- Slow tests >= 3 s: 2 data rows

## Memory Summary

- Memory rows: 40,261 tests
- Peak RSS: 1034.1 MB
- Peak RSS test: `built_ins_RegExp_property_escapes_generated_Script___Pau_Cin_Hau_js`
- Average RSS delta/test: +1956.2 KB
- Largest single-test growth: 148.2 MB
- Largest growth test: `language_literals_regexp_S7_8_5_A2_1_T2_js`
- Tests over 1 MB growth: 22,857
- Tests over 10 MB growth: 598

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 3.438127 | `built_ins_decodeURI_S15_1_3_1_A2_5_T1_js` |
| 3.402163 | `built_ins_decodeURIComponent_S15_1_3_2_A2_5_T1_js` |
| 1.004077 | `built_ins_Atomics_waitAsync_no_spurious_wakeup_on_exchange_js` |
| 1.003118 | `built_ins_Atomics_waitAsync_no_spurious_wakeup_on_and_js` |
| 1.002913 | `built_ins_Atomics_waitAsync_no_spurious_wakeup_no_operation_js` |
| 1.002452 | `built_ins_Atomics_waitAsync_bigint_no_spurious_wakeup_on_xor_js` |
| 1.002165 | `built_ins_Atomics_waitAsync_no_spurious_wakeup_on_xor_js` |
| 1.002035 | `built_ins_Atomics_waitAsync_bigint_no_spurious_wakeup_on_or_js` |
| 1.001997 | `built_ins_Atomics_waitAsync_bigint_no_spurious_wakeup_on_exchange_js` |
| 1.001961 | `built_ins_Atomics_waitAsync_no_spurious_wakeup_on_add_js` |
| 1.001933 | `built_ins_Atomics_waitAsync_bigint_no_spurious_wakeup_no_operation_js` |
| 1.001787 | `built_ins_Atomics_waitAsync_bigint_no_spurious_wakeup_on_store_js` |
| 1.001676 | `built_ins_Atomics_waitAsync_bigint_no_spurious_wakeup_on_and_js` |
| 1.001645 | `built_ins_Atomics_waitAsync_no_spurious_wakeup_on_or_js` |
| 1.001332 | `built_ins_Atomics_waitAsync_no_spurious_wakeup_on_store_js` |
| 1.001191 | `built_ins_Atomics_waitAsync_no_spurious_wakeup_on_compareExchange_js` |
| 1.000751 | `built_ins_Atomics_waitAsync_bigint_no_spurious_wakeup_on_compareExchange_js` |
| 1.000408 | `built_ins_Atomics_waitAsync_bigint_no_spurious_wakeup_on_add_js` |
| 1.000236 | `built_ins_Atomics_waitAsync_bigint_no_spurious_wakeup_on_sub_js` |
| 0.999999 | `built_ins_Atomics_waitAsync_no_spurious_wakeup_on_sub_js` |

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
| `commit.txt` | Lambda and lambda-test commits recorded at capture time |
| `git_status_short.txt` | working-tree status at capture time |
| `binary_sizes.txt` | binary sizes and mtimes observed after the run |
| `failure_manifest.tsv` | full failure manifest, 0 data rows |
| `failure_by_feature.tsv` | failure summary grouped by feature |
| `failure_by_path.tsv` | failure summary grouped by path |
