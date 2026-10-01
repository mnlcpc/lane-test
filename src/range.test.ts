import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, roundTo } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("roundTo rounds to the nearest multiple of step", () => {
  assert.equal(roundTo(7, 5), 5);
  assert.equal(roundTo(8, 5), 10);
  assert.equal(roundTo(10, 5), 10);
  assert.equal(roundTo(-8, 5), -10);
  assert.equal(roundTo(0.7, 0.5), 0.5);
});

test("roundTo throws a RangeError when step is not positive", () => {
  assert.throws(() => roundTo(7, 0), RangeError);
  assert.throws(() => roundTo(7, -5), RangeError);
  assert.throws(() => roundTo(7, NaN), RangeError);
});
