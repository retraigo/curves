import { svgChart, cubicBezier } from "../mod.ts";

const pts = cubicBezier(20, .17,.67,.83,.67)

const x = pts.map(x => x[0])
const y = pts.map(x => x[1])

console.log(pts)

const svg = svgChart(x, y, [200, 100], true, 0.1)

Deno.writeTextFile("test/bezier.svg", svg)