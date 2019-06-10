var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth-30;
canvas.height = window.innerHeight-20;

var c = canvas.getContext("2d");

//CANNON
var xc = window.innerWidth/2;
var yc = window.innerHeight-5;

function can()
{
	this.xc = xc;
	this.yc = yc;
	this.draw = function()
	{
		c.beginPath();
		c.fillRect(this.xc,this.yc-30,80,25);
	}
	this.update = function()
	{
		window.addEventListener("keydown",event=>
		{
			if(((event.key=="d")||(event.keyCode==39))&&(this.xc<innerWidth-110))
			{
				this.xc = this.xc + 0.1;
			}
			else if(((event.key=="a")||(event.keyCode==37))&&(this.xc>0))
			{
				this.xc = this.xc - 0.1;
			} 
		})
		this.draw();
	}
}
var can = new can();

//BULLET
var xb = window.innerWidth/2 + 40;
var yb = window.innerHeight;
function bull()
{
	this.xb = xb;
    this.yb = yb;
    this.draw = function()
    {
    	c.beginPath();
    	c.arc(this.xb,this.yb,5,0,Math.PI*2,true);
		c.fillStyle = "white";
		c.fill();
		c.stroke();
    }
    this.update = function()
    {
    	window.addEventListener("keydown",event=>
		{
			if(((event.key=="d")||(event.keyCode==39))&&(this.xb<window.innerWidth-140)&&(this.yb > (window.innerHeight-75)))
			{
				this.xb = this.xb + 0.1;
			}
			else if(((event.key=="a")||(event.keyCode==37))&&(this.xb>40)&&(this.yb > (window.innerHeight-75)))
			{
				this.xb = this.xb - 0.1;
			} 
		})
		this.yb = this.yb - 50;
    	if (this.yb < 0)
    	{
    		this.yb = window.innerHeight-60;
    		this.xb = can.xc + 40;
    	}
    	this.draw();
    }
}
var bullArray = [];
for(var i = 1; i < 21 ; i++)
{
	var yb = 25*i;
    bullArray.push(new bull());
}

//ROCKS
function rockl()
{
	this.xr = [50,window.innerWidth-80];
	this.xrl = this.xr[Math.floor(Math.random()*this.xr.length)];
	this.yrl = window.innerHeight/2*Math.random();
	this.dxrl = 10;
	this.dyrl = 1;
    this.ddyrl = 0.1;
    this.power = Math.random()*50;
	this.draw = function() 
	{
		c.beginPath();
		c.arc(this.xrl,this.yrl,50,0,Math.PI*2,true);
	}
	this.update = function()
	{
		this.xrl = this.xrl + this.dxrl;
		this.yrl = this.yrl + this.dyrl;
		this.dyrl = this.dyrl + this.ddyrl;
		if((this.yrl > (580)||(this.yrl < 0)))
			this.dyrl = -this.dyrl;	
		if ((this.xrl<50)||(this.xrl>1300)) 
		{
			this.dxrl = -this.dxrl;
		}
		this.draw();
	}
}

var rocks = [];
for(var j = 0; j < 50 ; j++)
{
	rocks.push(new rockl());
}

var k = 0;
function rock_creator()
{
	rocks[k].update();
	k++;
}
setInterval(rock_creator,5000);

function main()
{
	requestAnimationFrame(main);
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
    c.fillStyle = "blue";
    c.fill();
	can.update();
	c.fillStyle = "white";
    c.fill();
	for(var i = 0; i < 20; i++)
		{
			bullArray[i].update();
		}
}
main();