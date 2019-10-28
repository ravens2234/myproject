//some vector physics borrowed from Nature of Code by Daniel Schiffman http://natureofcode.com

let ball;
let multiplierarrayX= [];
let multiplierarrayY= [];
let Sliderindex=[];
let n=1630
let J=299
let cloud
let cloudarray = [];
let throwbool=false

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	Slider=createSlider(300,width-50,1100);
  Slider.position(10,10);

for (let i=1;i<n;i++){
	
	Sliderindex[i]=(i)+300 
}

		for(let c=0; c<4; c++ ){
	cloudarray [c] = new clouds();
}
	ball=new football(5,
										300,
									 650,
									 85,
										43);
	
	dude= new thrower(350,650,1)

}
function velindexX(J){
	let vx=map(J,0,1631,3,19.5,true)
	return vx
}
function velindexY(J){
	let vy=map(J,0,1631,-1,-7.25,true)
	return vy
}




	function draw() {
	background(125,255,240);
	fill(30,232,21)
	rect(0,height-height/2.5,width,height/2.5)
					for(let c=0; c<4; c++ ){
			cloudarray[c].show();
			cloudarray[c].move();	
			}
			stroke(0)
	fill(232,95,237)
			textSize(20)
		text('adjust throw distance reload to throw again',10,45,200,100);
		

					dude.draw()
		if (throwbool==false){
		
			}else{
					dude.throw()

					ball.throwVel(velindexX(Slider.value())    ,velindexY(Slider.value()));
			
				let gravity= createVector(0,1);
					ball.applyForce(gravity);
			
			let friction= createVector(-.1,0);
					ball.applyForce(friction);
					ball.update(Slider.value());
		}
					ball.show();
					catcher(Slider.value()+50,640,-1)
	 }



function mousePressed() {
	if ((mouseX<150)&&(mouseY<35)){
	}else{	
		changethrowbool()	
}	
}
function changethrowbool(){
	throwbool=!throwbool;
}
class thrower {
	constructor(X,Y){
		this.X=X;
		this.Y=Y;
		this.armpos1=50;
		this.armpos2=40;
		this.armpos3=60;
		this.armpos4=50;
		this.armpos5=5;
	}

	draw() {
		push();
		fill(0);
		ellipse(this.X,this.Y,50,50)
		stroke(0)
		strokeWeight(7);
		line(this.X,this.Y+30,this.X,this.Y+120);
		line(this.X,this.Y+this.armpos1,this.X-this.armpos2,this.Y+this.armpos3);
		line(this.X,this.Y+this.armpos4,this.X+this.armpos4,this.Y+this.armpos4);
		line(this.X-8*this.armpos5,this.Y+12*this.armpos5,this.X-10*this.armpos5,this.Y+5*this.armpos5);//forearm
		line(this.X,this.Y+120,this.X-30,this.Y+175);
		line(this.X,this.Y+120,this.X+30,this.Y+175);
		pop();
}
	throw(){
		this.armpos2=-35
		this.armpos3=85
		this.armpos4=0
		this.armpos5=0
	}
		
}
	 function catcher(X,Y,d){
	push()
		 	push()
	fill(0)
	ellipse(X,Y,50,50)
	strokeWeight(7)
	line(X,Y+33,X,Y+120)
	line(X,Y+50,X+d*45,Y+35)
	line(X,Y+53,X+d*45,Y+55)
	line(X,Y+120,X-20,Y+175)
	line(X,Y+120,X+20,Y+175)
	pop()
}
class football{
	constructor(m,x,y){
		this.mass=m;
		this.Position= createVector(x,y);
		this.Velocity = createVector(0, 0);
		this.aVelocity = createVector(0, 0);
    this.Acceleration = createVector(0, 0);
	}
	show(){
			strokeWeight(1)
	stroke(0)
	fill(179,98,16);
	ellipse(this.Position.x,this.Position.y,85,43);
	push()
	strokeWeight(4)
	stroke(255)
	line(this.Position.x,this.Position.y+10,this.Position.x,this.Position.y-10);
	line(this.Position.x+10,this.Position.y+10,this.Position.x+10,this.Position.y-10);
	line(this.Position.x-10,this.Position.y+10,this.Position.x-10,this.Position.y-10);
	line(this.Position.x-20,this.Position.y,this.Position.x+20,this.Position.y)
	pop()
		
	}
	  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.Acceleration.add(f);
  }

	throwVel(velx,vely){
		let v= createVector(velx,vely)
		this.Velocity.add(v);
	}
	update(catchpos){
	if(this.Position.x>catchpos){
			this.Velocity.mult(0);
			this.aVelocity.mult(0);
			this.Acceleration.mult(0);
	}else
	  this.Position.add(this.Velocity);
		this.Velocity.mult(0)
	
		this.aVelocity.add(this.Acceleration);
    this.Position.add(this.aVelocity);
    this.Acceleration.mult(0);
	}
}
	class clouds{
	constructor(){
		this.x=random(width);
		this.y=random(0,height/4);
		this.sz=random(50,150);
		this.velx=random(-2,2);	
	}
	show(){
		fill(250)
		noStroke();
		ellipse(this.x,this.y,this.sz,this.sz)
		ellipse(this.x+this.sz/2.5,this.y,this.sz,this.sz)
		ellipse(this.x-this.sz/2.5,this.y,this.sz,this.sz)
		ellipse(this.x+this.sz,this.y,this.sz,this.sz)
		ellipse(this.x-this.sz,this.y,this.sz,this.sz)
	}
	move(){
		this.x=this.x+this.velx
			if(this.x<0){
				this.velx=this.velx*-1
	}
		if (this.x>width){
			this.velx=this.velx*-1
		
}
}
}	

