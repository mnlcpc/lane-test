import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, wrap } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("wrap keeps values inside", () => {
  assert.equal(wrap(5, 0, 10), 5);
  assert.equal(wrap(0, 0, 10), 0);
});

test("wrap wraps values at or above max", () => {
  assert.equal(wrap(10, 0, 10), 0);
  assert.equal(wrap(12, 0, 10), 2);
  assert.equal(wrap(25, 0, 10), 5);
});

test("wrap wraps values below min", () => {
  assert.equal(wrap(-1, 0, 10), 9);
  assert.equal(wrap(-11, 0, 10), 9);
});

test("wrap works with a non-zero min", () => {
  assert.equal(wrap(7, 3, 6), 4);
  assert.equal(wrap(2, 3, 6), 5);
});
