/** Keeps `value` within `min` and `max`. */
export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return value;
  return value;
}

/** Wraps `value` into the half-open range `[min, max)`. */
export function wrap(value: number, min: number, max: number): number {
  const span = max - min;
  return ((((value - min) % span) + span) % span) + min;
}
