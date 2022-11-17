import {canvas , ctx} from "../app/main.js";

export const ball = {
   x: null,
   y: null,
   width: 5,
   height: 5,
   speed: 4,
   dx: null,
   dy: null,

   update: function(){
      ctx.fillRect(this.x, this.y, this.width, this.height); 
                                                            
      ctx.fill();

      if (this.x < 0 || this.x > canvas.width) this.dx *= -1; 
      if (this.y < 0 || this.y > canvas.height) this.dy *= -1; 

      this.x += this.dx;
      this.y += this.dy;
   }

}
export const paddle = {
   x: null,
   y: null,
   width: 100,
   height: 15,
   speed: 0,
   
   update: function() {
      ctx.fillRect(this.x, this.y, this.width, this.height); 
      ctx.fill();

      this.x += this.speed
   } 
}
export const block = {
   width: null, 
   height: 20,
   data: [],

   update: function(){
      this.data.forEach(brick => {
         ctx.strokeRect(brick.x, brick.y, brick.width, brick.height); //strokeRect -> 線画の四角形、塗りつぶしなし
         ctx.stroke;
      })
   }

}
export const level = [
   [0,0,0,0,0,0],
   [0,0,0,0,0,0],

   [1,1,1,1,1,1],
   [1,1,1,1,1,1],
   [1,1,1,1,1,1],
   [1,1,1,1,1,1],
]


