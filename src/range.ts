/** Keeps `value` within `min` and `max`. */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return value;
  return value;
}

/**
 * Linearly interpolates between `a` (at `t = 0`) and `b` (at `t = 1`).
 * Values of `t` outside 0..1 extrapolate.
 *
 * @throws {RangeError} If `t` is `NaN`.
 *
 * @example
 * lerp(0, 10, 0.25); // 2.5
 */
export function lerp(a: number, b: number, t: number): number {
  if (Number.isNaN(t)) throw new RangeError("lerp: t must not be NaN");
  return (1 - t) * a + t * b;
}
