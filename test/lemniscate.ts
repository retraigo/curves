import { svgChart, geronoLemniscate } from "../mod.ts";

const pts = geronoLemniscate(30, 1)

const x = pts.map(x => x[0])
const y = pts.map(x => x[1])

const minX = x.reduce((acc, val) => acc > val ? acc : val, y[0])
const minY = y.reduce((acc, val) => acc > val ? acc : val, y[0])

const totalX = [x, x.slice().reverse(), x.map(n => n * -1).reverse(), x.map(n => n * -1)]

const totalY = [y, y.slice().reverse(), y.map(n => n * -1).reverse(), y.map(n => n * -1)]

const svg = svgChart(totalX.flat().map(x => x + minX), totalY.flat().map(x => x + minY), [100, 100], true)

Deno.writeTextFile("test/lemniscate.svg", svg)