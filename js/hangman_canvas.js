"use strict";
class Canvas {
  constructor(canvasID) {
    this._canvas = document.getElementById(canvasID);
    this._ctx = this.canvas.getContext("2d");

    this.canvas.width = 300;
    this.canvas.height = 250;

    this.ctx.strokeStyle = "rgb(0, 0, 0)";
    this.ctx.lineWidth = 2;
    this.drawGallows();
  }

  drawGallows() {
    this.ctx.beginPath();
    //base
    this.ctx.moveTo(30, 230);
    this.ctx.lineTo(130, 230);
    //pole
    this.ctx.moveTo(80, 230);
    this.ctx.lineTo(80, 30);
    //beam
    this.ctx.lineTo(180, 30);
    //support
    this.ctx.moveTo(80, 70);
    this.ctx.lineTo(140, 30);
    //rope
    this.ctx.moveTo(180, 30);
    this.ctx.lineTo(180, 50);
    this.ctx.stroke();
  }
  drawHead() {
    this.ctx.beginPath();
    this.ctx.arc(180, 65, 15, 0, Math.PI * 2);
    this.ctx.stroke();
  }
  drawBody() {
    this.ctx.beginPath();
    this.ctx.moveTo(180, 80);
    this.ctx.lineTo(180, 150);
    this.ctx.stroke();
  }
  drawLeftArm() {
    this.ctx.beginPath();
    this.ctx.moveTo(180, 85);
    this.ctx.lineTo(160, 110);
    this.ctx.stroke();
  }
  drawRightArm() {
    this.ctx.beginPath();
    this.ctx.moveTo(180, 85);
    this.ctx.lineTo(200, 110);
    this.ctx.stroke();
  }
  drawLeftLeg() {
    this.ctx.beginPath();
    this.ctx.moveTo(180, 150);
    this.ctx.lineTo(160, 180);
    this.ctx.stroke();
  }
  drawRightLeg() {
    this.ctx.beginPath();
    this.ctx.moveTo(180, 150);
    this.ctx.lineTo(200, 180);
    this.ctx.stroke();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  get canvas() {
    return this._canvas;
  }

  get ctx() {
    return this._ctx;
  }
}