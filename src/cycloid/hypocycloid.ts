import { uniform } from "../util/uniform.ts";

/**
 * A curve traced by a point on a circle as it rolls along a straight line without slipping.
 * @param numPoints Number of points to generate.
 * @param radius Radius of the smaller circle.
 * @param cusps Ratio between the fixed circle and the smaller circle's radii.
* @returns Array of (x, y) coordinates.
 */

export default function hypocycloid(
  numPoints = 100,
  radius = 1,
  cusps = 4,
): [number, number][] {
  const res: [number, number][] = uniform(numPoints, 0, 1)
    .map((t) => [t, t]);
  let i = 0;
  const bigR = radius * cusps;
  const diff = bigR - radius;
  const d = diff / radius;
  while (i < numPoints) {
    const t = res[i][0];
    res[i][0] = diff * Math.cos(t) + radius * Math.cos(d * t)
    res[i][1] = diff * Math.sin(t) - radius * Math.sin(d * t)
    i += 1;
  }
  return res;
}
