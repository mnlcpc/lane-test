import { test } from "node:test";
import assert from "node:assert/strict";
import { clamp, lerp } from "./range.ts";

test("clamp keeps values inside", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("clamp raises values below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("lerp returns a at t = 0 and b at t = 1", () => {
  assert.equal(lerp(2, 10, 0), 2);
  assert.equal(lerp(2, 10, 1), 10);
});

test("lerp interpolates between a and b", () => {
  assert.equal(lerp(2, 10, 0.5), 6);
  assert.equal(lerp(0, 100, 0.25), 25);
  assert.equal(lerp(10, 0, 0.5), 5);
});

test("lerp extrapolates when t is outside 0..1", () => {
  assert.equal(lerp(0, 10, 2), 20);
  assert.equal(lerp(0, 10, -0.5), -5);
});
