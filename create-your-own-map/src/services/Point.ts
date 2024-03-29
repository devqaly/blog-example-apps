export class Point {
  public x: number
  public y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public draw(ctx: CanvasRenderingContext2D, {size = 16, color = 'black', outline = false} = {}) {
    const radius = size / 2

    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2)
    ctx.fill()

    if (outline) {
      ctx.beginPath()
      ctx.lineWidth = 2
      ctx.strokeStyle = "yellow"
      ctx.arc(this.x, this.y, radius * 0.6, 0, Math.PI * 2)
      ctx.stroke()
    }
  }
}