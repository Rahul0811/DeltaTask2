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
		c.fillStyle = "blue";
    	c.fill();
    	c.stroke();
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
	var yb = 50*i;
    bullArray.push(new bull());
}

//ROCKS
var colorArray = ['#ffaa33','#99ffaaa','#00ff00','#4411aa','#ff1100'];
function rock()
{
	this.xArray = [window.innerWidth-70,50];
	this.xr = this.xArray[Math.floor(Math.random() * this.xArray.length)] ;
	this.yr = ((window.innerHeight)/2+60) * Math.random();
	this.dyr = 0.1;
	this.ddyr = 1;
	this.dxr = 10;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)] ;
	this.draw = function()
	{
		c.beginPath();
	    c.arc(this.xr,this.yr,50,0,Math.PI*2,true);
	    c.fillStyle = "red";
	    c.fill();
	    console.log("Hello");
	}
	this.update = function()
	{
		this.xr = this.xr + this.dxr;
		this.yr = this.yr + this.dyr;
		this.dyr = this.dyr + this.ddyr;
		if ((this.yr > window.innerHeight-75)||(this.yr < 50)||(this.yr = window.innerHeight-75)||(this.yr = 50))
		{
			this.dyr = -this.dyr;
		}
		if ((this.xr > window.innerWidth-70)||(this.xr <50)||(this.xr = window.innerWidth-70)||(this.xr = 50))
		{
			this.dxr = -this.dxr;
		}
		this.draw();
	}
}

var rock = new rock();

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
	rock.update();
}
main();