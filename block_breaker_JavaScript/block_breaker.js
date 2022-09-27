//canvasの領域設定
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
/* ->グラフィックを描画するためのメソッドやプロパティを持つオブジェクトを返す
     引数に2dを渡すと2Dグラフィックを描画するためのメソッドやオブジェクトを返す*/
 
canvas.width = 400;
canvas.height = 400;

canvas.setAttribute('style', 'display:block;margin:auto;background-color: #ddd');

const ball = {}
const paddle = {
   x: null,
   y: null,
   width: 100,
   height: 15,
   speed: 0,
   
   //パドルの描画
   update: function() {
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.fill();
   } 
}
const block = {}
const level = []

const init = () => {
   paddle.x = canvas.width / 2;
   paddle.y = canvas.height - paddle.height;
}
const collide = () => {}
const loop = () => {

   paddle.update();

   window.requestAnimationFrame(loop);
}


document.body.appendChild(canvas);