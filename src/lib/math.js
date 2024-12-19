export class MathUtils {
  static clamp(value, min = 0, max = Infinity) {
    return Math.min(Math.max(min, value), max);
  }
}
