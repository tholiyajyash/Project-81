canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color="yellow";

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.arc(250 , 143 , 430 , 0 ,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
mouse_x = e.clientX - canvas.offsetLeft;
mouse_y = e.clientY - canvas.offsetTop;

circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y){

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150 , 143 , 430, 200 ,)
ctx.stroke();





}