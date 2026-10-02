import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, lerp } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("lerp returns the endpoints", () => {
  assert.equal(lerp(2, 10, 0), 2);
  assert.equal(lerp(2, 10, 1), 10);
});

test("lerp interpolates between values", () => {
  assert.equal(lerp(2, 10, 0.25), 4);
  assert.equal(lerp(10, -10, 0.75), -5);
  assert.equal(lerp(3, 3, 0.5), 3);
});

test("lerp extrapolates outside the unit interval", () => {
  assert.equal(lerp(2, 10, -0.5), -2);
  assert.equal(lerp(2, 10, 1.5), 14);
});
