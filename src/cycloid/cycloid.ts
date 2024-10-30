import { uniform } from "../util/uniform.ts";

/**
 * A curve traced by a point on a circle as it rolls along a straight line without slipping.
 * @param numPoints Number of points to generate.
 * @param radius Radius of the circle.
 * @returns Array of (x, y) coordinates.
 */

export default function cycloid(
  numPoints = 1000,
  radius = 1,
): [number, number][] {
  const res: [number, number][] = uniform(numPoints, 0, 1).map((t) => [t, t]);
  let i = 0;
  while (i < numPoints) {
    const t = res[i][0];
    res[i][0] = radius * (t - Math.sin(t));
    res[i][1] = radius * (1 - Math.cos(t));
    i += 1;
  }
  return res;
}
