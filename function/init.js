import {canvas} from "../app/main.js";
import {paddle, ball, block, level} from "../src/src.js";

export const init = () => {
   paddle.x = canvas.width / 2 - paddle.width / 2;
   paddle.y = canvas.height - paddle.height;

   ball.x = canvas.width / 2;
   ball.y = canvas.height / 2 + 150;
   ball.dx = ball.speed;
   ball.dy = ball.speed;

   block.width = canvas.width / level[0].length;

   for(let i = 0; i < level.length; i++){
      for(let j = 0; j < level[i].length; j++){
         if(level[i][j]){
            block.data.push({
               x: block.width * j,
               y: block.height * i,
               width: block.width,
               height: block.height
            })
         }
      }
   }
}

//git test