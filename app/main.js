import {init} from "../function/init.js";
import {loop} from "../function/loop.js";
import {paddle} from "../src/src.js";


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

canvas.setAttribute('style', 'display:block;margin:auto;background-color: #ddd');

document.body.appendChild(canvas);

export {canvas , ctx};

init();
loop();

document.addEventListener('keydown', e => {  //addEventListener -> マウスやキーボード等のインターフェースを使用したイベント実行の処理
   if(e.key === "ArrowLeft") paddle.speed = -6;
   if(e.key === "ArrowRight") paddle.speed = 6;
});
document.addEventListener('keyup', () => {
   paddle.speed = 0;
});

//git test
