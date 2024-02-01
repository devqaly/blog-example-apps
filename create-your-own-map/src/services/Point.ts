export class Point {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public draw(ctx: CanvasRenderingContext2D, size = 16, color = 'black') {
    const radius = size / 2

    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2)
    ctx.fill()
  }
}