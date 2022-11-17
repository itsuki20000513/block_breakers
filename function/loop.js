import {canvas , ctx} from "../app/main.js";
import {paddle ,ball ,block} from "../src/src.js";


const collide = (obj1, obj2) => {
   return obj1.x < obj2.x + obj2.width &&
          obj2.x < obj1.x + obj1.width &&
          obj1.y < obj2.y + obj2.height &&
          obj2.y < obj1.y + obj1.height;
}

export const loop = () => {
   ctx.clearRect(0,0,canvas.width,canvas.height);

   paddle.update();
   ball.update();
   block.update();

   if (collide(ball,paddle)){
      ball.dy *= -1;
      ball.y = paddle.y - ball.height;
   }

   block.data.forEach((brick,index) => {
      if(collide(ball,brick)){
         ball.dy *= -1;
         block.data.splice(index, 1);
      }
   })

   window.requestAnimationFrame(loop);
}

document.addEventListener('keydown', e => {  //addEventListener -> マウスやキーボード等のインターフェースを使用したイベント実行の処理
   if(e.key === "ArrowLeft") paddle.speed = -6;
   if(e.key === "ArrowRight") paddle.speed = 6;
});
document.addEventListener('keyup', () => {
   paddle.speed = 0;
});

//git test