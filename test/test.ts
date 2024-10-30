import { svgChart, catenary } from "../mod.ts";

const pts = catenary(90)

const x = pts.map(x => x[0])
const y = pts.map(x => x[1])

console.log(pts)

const svg = svgChart(x, y, [200, 100], false, 0.1)

Deno.writeTextFile("test/test.svg", svg)