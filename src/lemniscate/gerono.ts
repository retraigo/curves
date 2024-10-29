import { uniform } from "../util/uniform.ts";

/**
 * Gerono's lemniscate is a simple lemniscate (infinity shape)
 * @param numPoints Number of points to generate.
 * @param a A constant for generating the curve.
 * @returns Array of (x, y) coordinates.
 */
export default function geronoLemniscate(
  numPoints = 100,
  a = 1
): [number, number][] {
  const res: [number, number][] = uniform(numPoints, -1, 1).map((t) => [t, t]);
  let i = 0;
  while (i < numPoints) {
    const x = res[i][0]
    res[i][1] = Math.sqrt((x ** 2) * ((a ** 2) - (x ** 2)));
    i += 1;
  }
  return res;
}
