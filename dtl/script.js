const canvas = document.getElementById("glitter");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle{

constructor(){

this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;

this.size=Math.random()*3+1;

this.speed=Math.random()*0.8+0.3;

this.alpha=Math.random();

}

draw(){

ctx.beginPath();

ctx.fillStyle=`rgba(255,255,255,${this.alpha})`;

ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

ctx.fill();

}

update(){

this.y-=this.speed;

this.alpha+=Math.random()*0.02-0.01;

if(this.alpha>1)this.alpha=1;
if(this.alpha<0.2)this.alpha=0.2;

if(this.y<0){

this.y=canvas.height;
this.x=Math.random()*canvas.width;

}

this.draw();

}

}

for(let i=0;i<250;i++){

particles.push(new Particle());

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>p.update());

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});