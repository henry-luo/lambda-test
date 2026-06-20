# JS262 Release Run 009 Report

## Run Identity

- Date captured: 2026-06-18
- Source run: fresh `make test262-update-baseline` js262 run.
- Capture-time Lambda HEAD: `ae62f3e8df30403316f72d25c4c2af46022edd42`
- Capture-time lambda-test HEAD: `0785e3d571aa552775b73a4db5b04770352b0e24`
- Runtime under test: release `lambda.exe`
- GTest harness: debug `test/test_js_test262_gtest.exe`
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

- Total wall-time: 101.3 s
- Prepare: 0.0 s
- Execute: 101.0 s
- Batched execute wall-time: 100.4 s
- Sync batched wall-time: 84.6 s
- Async batched wall-time: 15.7 s
- Non-batched execute wall-time: 0.6 s
- Retry-lost wall-time: 0.0 s
- Retry-regressions wall-time: 0.0 s
- Batch size: sync 100 tests/process, async 100 tests/process
- Workers: 7 (`cpu - 1`)

## Per-Test Timing

- Timing rows: 40,261 tests
- Sum of per-test elapsed time: 456.872 s
- Average per-test elapsed time: 11.348 ms
- Max per-test elapsed time: 1.721586 s
- Max test: `built_ins_decodeURI_S15_1_3_1_A2_5_T1_js`
- Slow tests >= 3 s: 0 data rows

## Memory Summary

- Memory rows: 40,261 tests
- Peak RSS: 1032.4 MB
- Peak RSS test: `built_ins_RegExp_property_escapes_generated_Script___Braille_js`
- Average RSS delta/test: +2021.6 KB
- Largest single-test growth: 162.3 MB
- Largest growth test: `language_literals_regexp_S7_8_5_A2_1_T2_js`
- Tests over 1 MB growth: 24,298
- Tests over 10 MB growth: 570

## Top Slow Tests

| Seconds | Test |
| ---: | --- |
| 1.721586 | `built_ins_decodeURI_S15_1_3_1_A2_5_T1_js` |
| 1.665919 | `built_ins_decodeURIComponent_S15_1_3_2_A2_5_T1_js` |
| 0.373775 | `built_ins_Function_prototype_toString_built_in_function_object_js` |
| 0.343334 | `built_ins_TypedArray_prototype_some_invoked_as_func_js` |
| 0.322032 | `language_expressions_async_arrow_function_prototype_js` |
| 0.317285 | `built_ins_AsyncFunction_is_a_constructor_js` |
| 0.311417 | `built_ins_Function_prototype_arguments_prop_desc_js` |
| 0.309568 | `built_ins_GeneratorFunction_is_a_constructor_js` |
| 0.308333 | `built_ins_Function_prototype_caller_prop_desc_js` |
| 0.286809 | `built_ins_AsyncGeneratorFunction_is_a_constructor_js` |
| 0.284319 | `built_ins_TypedArray_prototype_reduce_resizable_buffer_js` |
| 0.279046 | `built_ins_TypedArray_prototype_set_typedarray_arg_set_values_diff_buffer_same_type_js` |
| 0.272398 | `built_ins_TypedArrayConstructors_prototype_byteOffset_inherited_js` |
| 0.269068 | `built_ins_TypedArray_prototype_find_predicate_may_detach_buffer_js` |
| 0.267957 | `annexB_built_ins_RegExp_RegExp_leading_escape_BMP_js` |
| 0.259674 | `language_literals_regexp_S7_8_5_A1_1_T2_js` |
| 0.246143 | `language_destructuring_binding_syntax_recursive_array_and_object_patterns_js` |
| 0.244322 | `built_ins_TypedArrayConstructors_ctors_bigint_buffer_arg_length_to_number_detachbuffer_js` |
| 0.243803 | `language_literals_regexp_S7_8_5_A2_1_T2_js` |
| 0.238854 | `annexB_built_ins_RegExp_RegExp_trailing_escape_BMP_js` |

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
