/** Keeps `value` within `min` and `max`. */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return value;
  return value;
}

/** Linearly interpolates between `a` (at `t = 0`) and `b` (at `t = 1`); `t` outside 0..1 extrapolates. */
export function lerp(a: number, b: number, t: number): number {
  return (1 - t) * a + t * b;
}
