import { Point } from "./Point.ts";
import { Segment } from "./Segment.ts";

export class Graph {
  private points: Point[]
  private segments: Segment[]

  constructor(points: Point[] = [], segments: Segment[] = []) {
    this.points = points
    this.segments = segments
  }

  public draw(ctx: CanvasRenderingContext2D) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }

    for (const point of this.points) {
      point.draw(ctx)
    }
  }
}