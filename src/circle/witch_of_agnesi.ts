import { uniform } from "../util/uniform.ts";

/**
 * The Witch of Agnesi is a cubic plane curve defined from 
 * two diametrically opposite points of a circle.
 * @param num_points Number of points to generate.
 * @param radius Radius of the circle.
 * @returns Array of (x, y) coordinates.
 */

export default function witchOfAgnesi(
  num_points = 100,
  radius = 0.5,
): [number, number][] {
  if (radius > 1) radius = 0.5;
  const res: [number, number][] = uniform(num_points, -1, 1)
    .map((t) => [t, t]);
  let i = 0;
  while (i < num_points) {
    res[i][1] = (8 * (radius ** 3)) /
      ((res[i][0] ** 2) + (4 * radius * radius));
    i += 1;
  }
  return res;
}
