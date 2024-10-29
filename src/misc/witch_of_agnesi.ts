import { uniform } from "../util/uniform.ts";

/**
 * The Witch of Agnesi is a cubic plane curve defined from 
 * two diametrically opposite points of a circle.
 * @param numPoints Number of points to generate.
 * @param radius Radius of the circle.
 * @returns Array of (x, y) coordinates.
 */

export default function witchOfAgnesi(
  numPoints = 100,
  radius = 0.5,
): [number, number][] {
  if (radius > 1) radius = 0.5;
  const res: [number, number][] = uniform(numPoints, -10, 10)
    .map((t) => [t, t]);
  let i = 0;
  while (i < numPoints) {
    res[i][1] = (8 * (radius ** 3)) /
      ((res[i][0] ** 2) + (4 * radius * radius));
    i += 1;
  }
  return res;
}
