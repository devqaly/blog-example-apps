import { Point } from "./Point.ts";

export function getNearestPoint(location: Point, points: Point[], threshold = 30): Point | null {
  let minDistance = Number.MAX_SAFE_INTEGER
  let nearestPoint: Point | null = null

  for (const point of points) {
    const dist = distanceBetween(point, location)

    if (dist < minDistance && dist < threshold) {
      minDistance = dist;
      nearestPoint = point
    }
  }

  return nearestPoint
}

function distanceBetween(pointA: Point, pointB: Point) {
  const a = pointA.x - pointB.x
  const b = pointA.y - pointB.y

  return Math.sqrt(a * a + b * b)
}