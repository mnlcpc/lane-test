/** Keeps `value` within `min` and `max`. */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return value;
  return value;
}

/** Linearly interpolates from `a` to `b` by `t`, with `t` clamped to [0, 1]. */
export function lerpClamped(a: number, b: number, t: number): number {
  const u = Math.min(Math.max(t, 0), 1);
  return a + (b - a) * u;
}
