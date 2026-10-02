import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, mean } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("mean averages the values", () => {
  assert.equal(mean([1, 2, 3, 4]), 2.5);
  assert.equal(mean([-2, 2]), 0);
  assert.equal(mean([7]), 7);
});

test("mean of an empty array is NaN", () => {
  assert.ok(Number.isNaN(mean([])));
});
